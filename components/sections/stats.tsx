"use client";

import { motion } from "framer-motion";
import { Award, Code2, Laptop, Users } from "lucide-react";

const stats = [
  {
    icon: <Award className="w-6 h-6" />,
    value: "7+",
    label: "Years Experience",
    description: "Professional development"
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    value: "5+",
    label: "Technologies",
    description: "Modern tech stack"
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    value: "8+",
    label: "Projects Completed",
    description: "Successful deliveries"
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: "10+",
    label: "Happy Clients",
    description: "Worldwide collaboration"
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-card rounded-lg lg:p-6 p-4 flex flex-col items-center text-center space-y-2 h-44 lg:h-auto">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="font-medium">{stat.label}</div>
                 <div className="text-sm text-muted-foreground hidden lg:flex">
                  {stat.description}
                </div> 
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}