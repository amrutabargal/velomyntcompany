import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { getGooglePlaceReviews } from './server/googleReviewsService.mjs';
import { submitContactLead } from './server/contactLeadService.mjs';

const googleReviewsDevApi = {
  name: 'google-reviews-dev-api',
  configureServer(server) {
    server.middlewares.use('/api/google-reviews', async (req, res) => {
      try {
        const url = new URL(req.url || '', 'http://localhost');
        const limit = url.searchParams.get('limit') ?? 6;
        const data = await getGooglePlaceReviews({ limit });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.setHeader('Cache-Control', 'public, max-age=60');
        res.end(JSON.stringify(data));
      } catch (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(
          JSON.stringify({
            source: 'google-places',
            error: 'Failed to fetch Google reviews',
            details: error instanceof Error ? error.message : 'Unknown error',
            reviews: [],
          }),
        );
      }
    });
  },
};

const contactLeadDevApi = {
  name: 'contact-lead-dev-api',
  configureServer(server) {
    server.middlewares.use('/api/contact-lead', async (req, res) => {
      if (req.method !== 'POST') {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({ ok: false, error: 'Method not allowed' }));
        return;
      }

      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });

      req.on('end', async () => {
        try {
          const payload = body ? JSON.parse(body) : {};
          const result = await submitContactLead(payload, {
            userAgent: req.headers['user-agent'] || '',
            referer: req.headers.referer || '',
            ip: req.socket?.remoteAddress || '',
          });
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify(result));
        } catch (error) {
          const message = error instanceof Error ? error.message : 'Failed to submit form';
          const statusCode = /required|valid email/i.test(message) ? 400 : 500;
          res.statusCode = statusCode;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify({ ok: false, error: message }));
        }
      });
    });
  },
};

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    googleReviewsDevApi,
    contactLeadDevApi,
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('motion')) return 'vendor-motion';
            if (id.includes('lucide-react')) return 'vendor-icons';
            return 'vendor';
          }
        },
      },
    },
  },
});

