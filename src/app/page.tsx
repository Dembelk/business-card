"use client";

import { motion } from "framer-motion";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactsSection } from "@/components/ContactsSection";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <Badge variant="secondary" className="mb-6">
            Fullstack-разработчик & AI-инженер
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Привет, я Dembelk
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Разрабатываю современные веб-приложения и создаю AI-решения для бизнеса. Специализируюсь на Node.js, Python и автоматизации процессов. Помогаю компаниям внедрять технологии будущего уже сегодня.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-4">
            Создаю интеллектуальных ботов и автоматизирую рутинные задачи. Настраиваю CI/CD, Docker и инфраструктуру любой сложности.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-4">
            Более 8 лет опыта в разработке. Работал с десятками проектов — от стартапов до enterprise-решений.
          </p>
        </motion.div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Services Section */}
      <ServicesSection />

      <Separator className="max-w-4xl mx-auto my-8" />

      {/* Contacts Section */}
      <ContactsSection />

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Алексей Демьяненко. Все права защищены.</p>
      </footer>
    </div>
  );
}
