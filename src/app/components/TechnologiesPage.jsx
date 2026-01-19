import { Card, CardContent } from "./ui/card.jsx";

export function TechnologiesPage() {
  const categories = [
    {
      name: "Frontend",
      technologies: [
        { name: "React", icon: "⚛️", description: "Modern UI library for building interactive interfaces" },
        { name: "Angular", icon: "🅰️", description: "Enterprise-grade web application framework" },
        { name: "Vue.js", icon: "💚", description: "Progressive JavaScript framework" },
        { name: "Next.js", icon: "▲", description: "React framework for production" },
        { name: "TypeScript", icon: "📘", description: "Typed superset of JavaScript" },
        { name: "Tailwind CSS", icon: "🎨", description: "Utility-first CSS framework" },
      ],
    },
    {
      name: "Backend",
      technologies: [
        { name: "Node.js", icon: "🟢", description: "JavaScript runtime for server-side development" },
        { name: "Python", icon: "🐍", description: "Versatile programming language" },
        { name: "Java", icon: "☕", description: "Enterprise-level programming language" },
        { name: "C#/.NET", icon: "🔷", description: "Microsoft's powerful framework" },
        { name: "PHP", icon: "🐘", description: "Server-side scripting language" },
        { name: "Go", icon: "🔵", description: "Fast and efficient language by Google" },
      ],
    },
    {
      name: "Mobile",
      technologies: [
        { name: "React Native", icon: "📱", description: "Cross-platform mobile framework" },
        { name: "Flutter", icon: "🦋", description: "Google's UI toolkit for mobile" },
        { name: "Swift", icon: "🍎", description: "Native iOS development" },
        { name: "Kotlin", icon: "🤖", description: "Modern Android development" },
        { name: "Ionic", icon: "⚡", description: "Hybrid mobile app framework" },
        { name: "Xamarin", icon: "🔧", description: "Cross-platform .NET framework" },
      ],
    },
    {
      name: "Database",
      technologies: [
        { name: "MySQL", icon: "🐬", description: "Popular relational database" },
        { name: "PostgreSQL", icon: "🐘", description: "Advanced open-source database" },
        { name: "MongoDB", icon: "🍃", description: "Document-based NoSQL database" },
        { name: "Redis", icon: "🔴", description: "In-memory data structure store" },
        { name: "Firebase", icon: "🔥", description: "Google's mobile platform" },
        { name: "Oracle", icon: "⭕", description: "Enterprise database solution" },
      ],
    },
    {
      name: "Cloud & DevOps",
      technologies: [
        { name: "AWS", icon: "☁️", description: "Amazon Web Services cloud platform" },
        { name: "Azure", icon: "🌐", description: "Microsoft's cloud computing service" },
        { name: "Google Cloud", icon: "☁️", description: "Google's cloud platform" },
        { name: "Docker", icon: "🐳", description: "Containerization platform" },
        { name: "Kubernetes", icon: "⚓", description: "Container orchestration system" },
        { name: "Jenkins", icon: "🔧", description: "Automation server for CI/CD" },
      ],
    },
    {
      name: "Tools & Others",
      technologies: [
        { name: "Git", icon: "📂", description: "Version control system" },
        { name: "GraphQL", icon: "💜", description: "Query language for APIs" },
        { name: "REST API", icon: "🔗", description: "Web service architecture" },
        { name: "Socket.io", icon: "🔌", description: "Real-time communication" },
        { name: "Webpack", icon: "📦", description: "Module bundler" },
        { name: "Figma", icon: "🎨", description: "Design and prototyping tool" },
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-950 via-black to-emerald-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Technologies We Master</h1>
            <p className="text-xl text-gray-600">
              We leverage cutting-edge technologies and proven frameworks to build robust, scalable solutions
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {categories.map((category, catIndex) => (
              <div key={catIndex}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{category.name}</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-lime-300 mx-auto rounded-full"></div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <Card
                      key={techIndex}
                      className="border-2 border-slate-800 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/20 bg-slate-950 transition-all duration-300 group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl flex-shrink-0 group-hover:scale-125 transition-transform">
                            {tech.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                            <p className="text-gray-600 text-sm">{tech.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Why We Choose These Technologies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our technology choices are driven by performance, scalability, and long-term maintainability
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Performance Focused",
                description: "We select technologies that deliver optimal performance and fast load times for your applications.",
                icon: "⚡",
              },
              {
                title: "Scalability",
                description: "Our tech stack ensures your solution can grow seamlessly with your business needs.",
                icon: "📈",
              },
              {
                title: "Future-Proof",
                description: "We use modern, well-maintained technologies with strong community support.",
                icon: "🚀",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:shadow-lg transition-all">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-700 to-emerald-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Let's Build Something Amazing</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Our expertise in these technologies means we can bring your vision to life
          </p>
        </div>
      </section>
    </div>
  );
}

