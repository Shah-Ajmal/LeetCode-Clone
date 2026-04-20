import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Trophy,
  Users,
  Zap,
  Target,
  BookOpen,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Multi-Language Support",
      description:
        "Solve problems in JavaScript, Python, and Java with real-time code execution powered by Judge0.",
      color:
        "bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Track Your Progress",
      description:
        "Monitor solved problems, view your submission history, and watch your skills grow over time.",
      color:
        "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Playlist System",
      description:
        "Organize problems into custom playlists to focus on specific topics or difficulty levels.",
      color:
        "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Feedback",
      description:
        "Get instant results on your submissions with detailed test case breakdowns and error messages.",
      color: "bg-rose-100 dark:bg-rose-900 text-rose-600 dark:text-rose-400",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Difficulty Levels",
      description:
        "Problems categorized as Easy, Medium, and Hard to match your current skill level and goals.",
      color:
        "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Editorials & Hints",
      description:
        "Stuck on a problem? Use hints or read the editorial to understand the optimal approach.",
      color: "bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-400",
    },
  ];

  const techStack = [
    { name: "Next.js 15", category: "Frontend" },
    { name: "React 19", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Shadcn/ui", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Prisma ORM", category: "Database" },
    { name: "Clerk Auth", category: "Auth" },
    { name: "Judge0", category: "Execution" },
    { name: "Docker", category: "DevOps" },
    { name: "Monaco Editor", category: "Editor" },
    { name: "React Hook Form", category: "Frontend" },
  ];

  const categoryColors = {
    Frontend:
      "bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    Backend:
      "bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
    Database:
      "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800",
    Auth: "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
    Execution:
      "bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800",
    DevOps:
      "bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800",
    Editor:
      "bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",
  };

  return (
    <div className="min-h-screen mt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-6 bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800"
          >
            About This Project
          </Badge>

          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            Built to Help You{" "}
            <span className="px-4 py-2 bg-amber-500 dark:bg-amber-400 text-white dark:text-gray-900 rounded-2xl inline-block transform -rotate-1">
              Level Up
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A full-stack LeetCode-style platform built with modern technologies
            to help developers practice coding, prepare for interviews, and grow
            their problem-solving skills.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            What this platform offers
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Everything you need to practice and improve
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-neutral-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Built with modern, production-grade technologies
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className={`px-4 py-2 text-sm font-medium ${categoryColors[tech.category]}`}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About the Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
            The person behind this project
          </p>

          <Card className="border border-gray-200 dark:border-gray-700">
            <CardContent className="p-8">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-amber-500 dark:bg-amber-400 flex items-center justify-center mx-auto mb-4 text-white dark:text-gray-900 text-2xl font-bold">
                SA
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                Shah Mohammad Ajmal
              </h3>
              <p className="text-amber-600 dark:text-amber-400 font-medium mb-4">
                Full-Stack Developer
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                Passionate about building full-stack applications using the MERN
                stack and Next.js. Currently expanding skills in DevOps and
                cloud technologies. This project was built to deepen knowledge
                of real-world application architecture.
              </p>

              {/* Links */}
              <div className="flex justify-center gap-4">
                <Link
                  href="https://github.com/Shah-Ajmal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="gap-2">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-amber-500 to-amber-300 dark:from-amber-600 dark:to-indigo-600 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to start coding?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Jump into the problem set and start solving today
          </p>
          <Link href="/problems">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg font-semibold"
            >
              Browse Problems
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
