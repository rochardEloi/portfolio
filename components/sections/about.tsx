"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Server } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Code2 className="h-8 w-8" />,
              title: "Frontend Development",
              description: "Expert in React and React Native, creating responsive and intuitive user interfaces."
            },
            {
              icon: <Server className="h-8 w-8" />,
              title: "Backend Development",
              description: "Proficient in Node.js and Next.js, building scalable server-side solutions."
            },
            {
              icon: <Cpu className="h-8 w-8" />,
              title: "IoT Development",
              description: "Experience with Arduino, bridging the gap between software and hardware."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 text-primary">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-lg text-center max-w-3xl mx-auto text-muted-foreground"
        >
          With 8 years of experience in the software development industry, I specialize in creating robust and scalable applications. My passion lies in solving complex problems and delivering exceptional user experiences.
        </motion.p>
      </div>
    </section>
  );
}