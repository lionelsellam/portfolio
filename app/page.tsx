"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const skills = {
    Languages: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    Frameworks: [
      "React",
      "Next.js",
      "Angular",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Bootstrap",
      "Framer Motion",
    ],

    Data: [
      "MongoDB",
      "MySQL",
      "Google Analytics",
      "Google Tag Manager",
      "SEO",
    ],

    Tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "FileZilla",
      "JIRA",
      "Asana",
      "Trello",
      "Monday",
    ],

    AI: ["Cursor", "Claude", "ChatGPT", "GitHub Copilot"],

    OS: ["Windows"],
  };

  const allSkills = Object.entries(skills).flatMap(([category, items]) =>
    items.map((skill) => ({ name: skill, category })),
  );

  const filteredSkills =
    activeFilter === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeFilter);

  const projects = [
    {
      title: "WordPress Websites",
      description:
        "Creation and customization of WordPress websites with custom themes and full e-commerce integrations.",
      image: "/wpImageProject.png",
      tags: ["WordPress", "WooCommerce", "JavaScript", "E-commerce"],
      link: "https://mydigitalgardener.com",
    },
    {
      title: "Code Projects",
      description: "Full-stack application development",
      image: "/codeProjects.png",
      tags: ["React", "Node.js", "Express", "MongoDB", "REST API"],
      link: "https://github.com/lionelsellam?tab=repositories",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("Message envoyé avec succès !");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFormStatus(""), 3000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-gray-900">
              Lionel Sellam
            </a>
            <div className="flex gap-6 mt-3">
              <a
                href="#about"
                className="text-xl text-gray-600 hover:text-gray-900 transition"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-xl text-gray-600 hover:text-gray-900 transition"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-xl text-gray-600 hover:text-gray-900 transition"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-xl text-gray-600 hover:text-gray-900 transition"
              >
                Contact
              </a>
              {/* Download CV Button */}
              <a
                href="/Cv-Lionel-Sellam-FS-Developer-2026.pdf"
                download
                className="ml-2 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition shadow-sm"
              >
                📄 CV
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-slate-900"></div>
        </div>

        <motion.div
          className="relative z-10 text-center text-white px-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Lionel Sellam</h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Certified fom ITC Tech Challenge
          </p>

          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded">
              Full-Stack
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded">
              Frontend
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded">
              Backend
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            About
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-4 text-gray-600 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <p>
                🌐 Website Project Manager &amp; Digital Builder | WordPress
                &amp; CMS 🧩 Full-Stack Trained | 🚀 Growth-Driven Websites
              </p>

              <p>
                I help companies turn their digital needs into clear, efficient,
                and high-performing web solutions, bridging the gap between
                technology, content, and growth.
              </p>

              <p>
                💻 With hands-on experience across WordPress, WooCommerce,
                Shopify, and custom development, I manage website projects
                end-to-end — from structure and UX to implementation,
                optimization, and continuous improvement.
              </p>

              <p>
                🤖 I use AI-powered development tools (Cursor) to accelerate
                delivery, improve code quality, and optimize technical
                decision-making across web projects.
              </p>

              <p>
                🌱 As Co-Founder of My Digital Gardener, I’ve worked on complete
                digital ecosystems, combining:
              </p>

              <p>
                🧱 Website project management &amp; CMS ownership
                <br />
                ⚡ Performance, SEO basics, and usability optimization
                <br />
                🤝 Coordination between designers, developers, marketers, and
                content teams
              </p>

              <p>
                🎯 I’m comfortable working closely with stakeholders and
                creative partners to ensure websites support marketing goals,
                organic growth, and long-term scalability.
              </p>

              <p>
                🔍 I’m currently open to opportunities as a Website Manager /
                Web Project Manager, remote / hybrid or contract, where I can
                bring structure, ownership, and measurable impact.
              </p>
            </motion.div>

            <motion.div
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <img
                src="/lionelProfil.jpg"
                alt="Lionel Sellam"
                className="w-full h-full object-cover"
              />{" "}
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <svg
                  className="w-24 h-24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-blue-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Skills
          </motion.h2>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => setActiveFilter("All")}
              className={`px-4 py-2 rounded text-sm font-medium transition ${
                activeFilter === "All"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              All
            </button>
            {Object.keys(skills).map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded text-sm font-medium transition ${
                  activeFilter === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-600 transition group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="font-semibold text-gray-900 mb-1">
                  {skill.name}
                </div>
                <div className="text-xs text-gray-500">{skill.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <p className="text-gray-600 mb-12">
              Selected work ({projects.length})
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
              >
                {/* Project image */}
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-200 text-gray-700 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 hover:shadow-lg transition"
                  >
                    See the project →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Contact
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            Get in touch
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6">Send a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded font-medium hover:bg-blue-700 transition"
                >
                  Send a message
                </button>
                {formStatus && (
                  <p className="text-green-600 text-sm">{formStatus}</p>
                )}
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-6">Get in touch</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email</div>
                  <a
                    href="mailto:lionelsellam@gmail.com"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    lionelsellam@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Location</div>
                  <div className="text-gray-900">Tel Aviv</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-2">Links</div>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/lionelsellam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/lionel-sellam-233642179/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-blue-400">
          © 2026 Lionel Sellam - Built with Next.js + Tailwind
        </div>
      </footer>
    </main>
  );
}
