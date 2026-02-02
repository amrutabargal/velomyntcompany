import { Card, CardContent } from "./ui/card.jsx";
import { motion } from "motion/react";
import ReactLogo from "../../image/react.svg";
import AngularLogo from "../../image/angular.svg";
import VueLogo from "../../image/vue.svg";
import NextLogo from "../../image/nextjs.svg";
import TSLogo from "../../image/typescript.svg";
import TailwindLogo from "../../image/tailwind.svg";
import NodeLogo from "../../image/nodejs.svg";
import PythonLogo from "../../image/python.svg";
import JavaLogo from "../../image/java.svg";
import PHPLogo from "../../image/php.svg";
import CSharpLogo from "../../image/csharp.svg";
import GoLogo from "../../image/go.svg";
import MySQLLogo from "../../image/mysql.svg";
import PostgresLogo from "../../image/postgresql.svg";
import MongoLogo from "../../image/mongodb.svg";
import RedisLogo from "../../image/redis.svg";
import FirebaseLogo from "../../image/firebase.svg";
import OracleLogo from "../../image/oracle.svg";
import ReactNativeLogo from "../../image/react-native.svg";
import FlutterLogo from "../../image/flutter.svg";
import SwiftLogo from "../../image/swift.svg";
import KotlinLogo from "../../image/kotlin.svg";
import IonicLogo from "../../image/ionic.svg";
import XamarinLogo from "../../image/xamarin.svg";
import AWSLogo from "../../image/aws.svg";
import AzureLogo from "../../image/azure.svg";
import GoogleCloudLogo from "../../image/google-cloud.svg";
import DockerLogo from "../../image/docker.svg";
import KubernetesLogo from "../../image/kubernetes.svg";
import JenkinsLogo from "../../image/jenkins.svg";
import GitLogo from "../../image/git.svg";
import GraphQLLogo from "../../image/graphql.svg";
import OpenAPILogo from "../../image/openapi.svg";
import SocketIOLogo from "../../image/socketio.svg";
import WebpackLogo from "../../image/webpack.svg";
import FigmaLogo from "../../image/figma.svg";

function hexToRgba(hex, alpha = 1) {
  if (!hex) return `rgba(255,255,255,${alpha})`;
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const bigint = parseInt(full, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function TechnologiesPage() {
  const categories = [
    {
      name: "Frontend",
      technologies: [
        {
          name: "React",
          color: "#61dafb",
          icon: <img src={ReactLogo} alt="React" className="w-8 h-8" />,
          description: "Modern UI library for building interactive interfaces",
        },
        {
          name: "Angular",
          color: "#DD0031",
          icon: (
            <img src={AngularLogo} alt="Angular" className="w-8 h-8" />
          ),
          description: "Enterprise-grade web application framework",
        },
        {
          name: "Vue.js",
          color: "#41B883",
          icon: <img src={VueLogo} alt="Vue.js" className="w-8 h-8" />,
          description: "Progressive JavaScript framework",
        },
        { name: "Next.js", color: "#000000", icon: (<img src={NextLogo} alt="Next.js" className="w-8 h-8"/>), description: "React framework for production" },
        { name: "TypeScript", color: "#3178c6", icon: (<img src={TSLogo} alt="TypeScript" className="w-8 h-8"/>), description: "Typed superset of JavaScript" },
        { name: "Tailwind CSS", color: "#38B2AC", icon: (<img src={TailwindLogo} alt="Tailwind CSS" className="w-8 h-8"/>), description: "Utility-first CSS framework" },
      ],
    },
    {
      name: "Backend",
      technologies: [
        { name: "Node.js", color: "#83CD29", icon: (<img src={NodeLogo} alt="Node.js" className="w-8 h-8"/>), description: "JavaScript runtime for server-side development" },
        { name: "Python", color: "#306998", icon: (<img src={PythonLogo} alt="Python" className="w-8 h-8"/>), description: "Versatile programming language" },
        { name: "Java", color: "#f89820", icon: (<img src={JavaLogo} alt="Java" className="w-8 h-8"/>), description: "Enterprise-level programming language" },
        { name: "C#/.NET", color: "#0078D7", icon: (<img src={CSharpLogo} alt="C#/.NET" className="w-8 h-8"/>), description: "Microsoft's powerful framework" },
        { name: "PHP", color: "#777BB4", icon: (<img src={PHPLogo} alt="PHP" className="w-8 h-8"/>), description: "Server-side scripting language" },
        { name: "Go", color: "#00ADD8", icon: (<img src={GoLogo} alt="Go" className="w-8 h-8"/>), description: "Fast and efficient language by Google" },
      ],
    },
    {
      name: "Mobile",
      technologies: [
        { name: "React Native", color: "#61dafb", icon: (<img src={ReactNativeLogo} alt="React Native" className="w-8 h-8"/>), description: "Cross-platform mobile framework" },
        { name: "Flutter", color: "#02569B", icon: (<img src={FlutterLogo} alt="Flutter" className="w-8 h-8"/>), description: "Google's UI toolkit for mobile" },
        { name: "Swift", color: "#F05138", icon: (<img src={SwiftLogo} alt="Swift" className="w-8 h-8"/>), description: "Native iOS development" },
        { name: "Kotlin", color: "#7F52FF", icon: (<img src={KotlinLogo} alt="Kotlin" className="w-8 h-8"/>), description: "Modern Android development" },
        { name: "Ionic", color: "#378EF0", icon: (<img src={IonicLogo} alt="Ionic" className="w-8 h-8"/>), description: "Hybrid mobile app framework" },
        { name: "Xamarin", color: "#3498DB", icon: (<img src={XamarinLogo} alt="Xamarin" className="w-8 h-8"/>), description: "Cross-platform .NET framework" },
      ],
    },
    {
      name: "Database",
      technologies: [
        { name: "MySQL", color: "#00758F", icon: (<img src={MySQLLogo} alt="MySQL" className="w-8 h-8"/>), description: "Popular relational database" },
        { name: "PostgreSQL", color: "#336791", icon: (<img src={PostgresLogo} alt="PostgreSQL" className="w-8 h-8"/>), description: "Advanced open-source database" },
        { name: "MongoDB", color: "#47A248", icon: (<img src={MongoLogo} alt="MongoDB" className="w-8 h-8"/>), description: "Document-based NoSQL database" },
        { name: "Redis", color: "#D82C20", icon: (<img src={RedisLogo} alt="Redis" className="w-8 h-8"/>), description: "In-memory data structure store" },
        { name: "Firebase", color: "#FFCA28", icon: (<img src={FirebaseLogo} alt="Firebase" className="w-8 h-8"/>), description: "Google's mobile platform" },
        { name: "Oracle", color: "#F80000", icon: (<img src={OracleLogo} alt="Oracle" className="w-8 h-8"/>), description: "Enterprise database solution" },
      ],
    },
    {
      name: "Cloud & DevOps",
      technologies: [
        {
          name: "AWS",
          color: "#FF9900",
          icon: <img src={AWSLogo} alt="AWS" className="w-8 h-8" />,
          description: "Amazon Web Services cloud platform",
        },
        {
          name: "Azure",
          color: "#0078D4",
          icon: <img src={AzureLogo} alt="Azure" className="w-8 h-8" />,
          description: "Microsoft's cloud computing service",
        },
        {
          name: "Google Cloud",
          color: "#4285F4",
          icon: <img src={GoogleCloudLogo} alt="Google Cloud" className="w-8 h-8" />,
          description: "Google's cloud platform",
        },
        {
          name: "Docker",
          color: "#2496ED",
          icon: <img src={DockerLogo} alt="Docker" className="w-8 h-8" />,
          description: "Containerization platform",
        },
        {
          name: "Kubernetes",
          color: "#326CE5",
          icon: <img src={KubernetesLogo} alt="Kubernetes" className="w-8 h-8" />,
          description: "Container orchestration system",
        },
        {
          name: "Jenkins",
          color: "#D33833",
          icon: <img src={JenkinsLogo} alt="Jenkins" className="w-8 h-8" />,
          description: "Automation server for CI/CD",
        },
      ],
    },
    {
      name: "Tools & Others",
      technologies: [
        {
          name: "Git",
          color: "#F05032",
          icon: <img src={GitLogo} alt="Git" className="w-8 h-8" />,
          description: "Version control system",
        },
        {
          name: "GraphQL",
          color: "#E10098",
          icon: <img src={GraphQLLogo} alt="GraphQL" className="w-8 h-8" />,
          description: "Query language for APIs",
        },
        {
          name: "REST API",
          color: "#6BA539",
          icon: <img src={OpenAPILogo} alt="REST API" className="w-8 h-8" />,
          description: "Web service architecture",
        },
        {
          name: "Socket.io",
          color: "#010101",
          icon: <img src={SocketIOLogo} alt="Socket.io" className="w-8 h-8" />,
          description: "Real-time communication",
        },
        {
          name: "Webpack",
          color: "#8DD6F9",
          icon: <img src={WebpackLogo} alt="Webpack" className="w-8 h-8" />,
          description: "Module bundler",
        },
        {
          name: "Figma",
          color: "#F24E1E",
          icon: <img src={FigmaLogo} alt="Figma" className="w-8 h-8" />,
          description: "Design and prototyping tool",
        },
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 px-2 sm:px-0">Technologies We Master</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white px-4 sm:px-0">
              We leverage cutting-edge technologies and proven frameworks to build robust, scalable solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {categories.map((category, catIndex) => (
              <div key={catIndex}>
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{category.name}</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 mx-auto rounded-full"></div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <Card
                      key={techIndex}
                      className="border-2 border-slate-800 hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/20 bg-slate-950 transition-all duration-300 group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                              <div
                                className="flex-shrink-0 rounded-lg flex items-center justify-center"
                                style={{
                                  width: 48,
                                  height: 48,
                                  background: "transparent",
                                }}
                              >
                                <div className="transform transition-transform group-hover:scale-125">
                                  {tech.icon}
                                </div>
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                                <p className="text-indigo-100 text-sm">{tech.description}</p>
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
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2 sm:px-0">Why We Choose These Technologies</h2>
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
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-indigo-100">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-indigo-700 to-indigo-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">Let's Build Something Amazing</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Our expertise in these technologies means we can bring your vision to life
          </p>
        </div>
      </section>
    </div>
  );
}

