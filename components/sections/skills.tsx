"use client";

import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const skills = [
  { name: "React", level: 95, description: "Advanced state management, custom hooks, and performance optimization" },
  { name: "React Native", level: 90, description: "Cross-platform mobile development with native module integration" },
  { name: "Node.js", level: 85, description: "RESTful APIs, microservices, and real-time applications" },
  { name: "Next.js", level: 90, description: "Server-side rendering, static site generation, and API routes" },
  { name: "TypeScript", level: 85, description: "Type-safe development with advanced features" },
  { name: "Arduino", level: 75, description: "IoT prototyping and embedded systems programming" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid gap-6 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="cursor-pointer h-[72px] flex items-center"
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-24 font-medium">{skill.name}</div>
                    <div className="flex-1 h-4 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-primary"
                      />
                    </div>
                    <div className="w-12 text-right text-muted-foreground">
                      {skill.level}%
                    </div>
                  </div>
                </motion.div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}