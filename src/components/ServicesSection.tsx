"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  { icon: "🤖", title: "AI-агенты", desc: "Создание и внедрение интеллектуальных ботов на базе LLM и RAG-систем" },
  { icon: "⚡", title: "Автоматизация", desc: "n8n, Python скрипты, интеграции и оптимизация бизнес-процессов" },
  { icon: "🌐", title: "Fullstack", desc: "Современные приложения на Next.js, React, Node.js и Python" },
  { icon: "🖥️", title: "DevOps", desc: "Docker, Kubernetes, CI/CD, инфраструктура и деплой" },
];

export function ServicesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="py-16"
    >
      <h2 className="text-2xl font-bold text-center mb-10 text-foreground">Услуги</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
          >
            <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors">
              <CardHeader className="pb-2">
                <div className="text-3xl mb-2">{service.icon}</div>
                <h3 className="font-semibold text-lg">{service.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
