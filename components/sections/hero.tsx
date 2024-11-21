"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-2"
            >
              Rochard Eliamar Eloi
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-primary/80"
            >
              Mid-senior Full Stack Developer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl md:max-w-xl"
            >
              Crafting exceptional digital experiences with React, React Native, Node.js, and Next.js
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
            >
              <Link
                href="https://github.com/rochardEloi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/eloi-rochard-89a403186/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#0077B5] text-white rounded-full hover:scale-110 hover:shadow-lg hover:shadow-[#0077B5]/20 transition-all"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="mailto:eloirochard1234@gmail.com"
                className="p-3 bg-accent text-accent-foreground rounded-full hover:scale-110 hover:shadow-lg hover:shadow-accent/20 transition-all"
              >
                <Mail size={24} />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                href="#projects"
                className="px-8 py-3 bg-primary/10 border border-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                View Projects
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-48 h-48 md:w-56 md:h-56 shrink-0 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_15px] shadow-primary/50"
          >
            {/* Replace with your photo URL */}
            {/* <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground"> */}
              <Image src={"https://proadvent-haiti.org/images/rochard2.jpg"} alt={"Eloi Rochard Eliamar"} width={100} height={100} className="w-auto h-auto"/>
            {/* </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}