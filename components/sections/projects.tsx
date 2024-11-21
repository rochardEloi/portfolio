"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Gaya AI",
    description: "An innovative AI platform leveraging cutting-edge technology to provide intelligent solutions for businesses.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    link: "https://gaya.ai",
    github: "https://github.com/yourusername/gaya-ai",
    tags: ["AI", "Machine Learning", "React", "Node.js"]
  },
  {
    title: "Sigoraht",
    description: "A comprehensive digital platform revolutionizing the way people interact with healthcare services.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
    link: "https://sigoraht.com",
    github: "https://github.com/yourusername/sigoraht",
    tags: ["Healthcare", "React Native", "Next.js"]
  },
  {
    title: "ProAdvent Haiti",
    description: "A non-profit organization's website helping to connect and support communities in Haiti.",
    image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&h=400&fit=crop",
    link: "https://proadvent-haiti.org",
    github: "https://github.com/yourusername/proadvent-haiti",
    tags: ["Non-profit", "React", "Node.js"]
  },
  {
    title: "Doude Symphony",
    description: "An elegant music platform showcasing classical compositions and performances.",
    image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&h=400&fit=crop",
    link: "https://doude-symphony-bgrq.vercel.app",
    github: "https://github.com/yourusername/doude-symphony",
    tags: ["Music", "Next.js", "React"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <Card className="relative overflow-hidden h-full bg-card">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 group-hover:opacity-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <Globe size={20} />
                      Visit Site
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <Github size={20} />
                      View Code
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}