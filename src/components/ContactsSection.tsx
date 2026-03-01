"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const contacts = [
  { type: "Telegram", value: "@dembelk", href: "https://t.me/dembelk", icon: "✈️" },
  { type: "Email", value: "Dembelk@gmail.com", href: "mailto:Dembelk@gmail.com", icon: "📧" },
  { type: "GitHub", value: "Dembelk", href: "https://github.com/Dembelk", icon: "💻" },
];

export function ContactsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="py-16"
    >
      <h2 className="text-2xl font-bold text-center mb-10 text-foreground">Контакты</h2>
      <Card className="max-w-md mx-auto bg-card/50 backdrop-blur-sm border-border/50">
        <CardContent className="pt-6 space-y-4">
          {contacts.map((contact, i) => (
            <motion.div
              key={contact.type}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{contact.icon}</span>
                <div>
                  <Badge variant="outline" className="mb-1">{contact.type}</Badge>
                  <p className="text-sm text-muted-foreground">{contact.value}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <a href={contact.href} target="_blank" rel="noopener noreferrer">
                  →
                </a>
              </Button>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.section>
  );
}
