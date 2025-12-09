import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Newsletter subscriptions
export const subscribers = pgTable("subscribers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  language: text("language").notNull().default("pt"),
  linkedin: text("linkedin"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertSubscriberSchema = createInsertSchema(subscribers).pick({
  email: true,
  language: true,
  linkedin: true,
});

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscribers.$inferSelect;

// Startup type for frontend
export interface Startup {
  id: string;
  name: string;
  url: string;
  description: {
    pt: string;
    en: string;
    zh: string;
  };
  status: "active" | "experiment" | "blog";
}

// Company type for frontend
export interface Company {
  id: string;
  name: string;
  role: {
    pt: string;
    en: string;
    zh: string;
  };
  period?: string;
}

// Framework type for Gumroad downloads
export interface Framework {
  id: string;
  title: {
    pt: string;
    en: string;
    zh: string;
  };
  description: {
    pt: string;
    en: string;
    zh: string;
  };
  gumroadUrl: string;
  category: string;
}

// Study topic type
export interface StudyTopic {
  id: string;
  title: {
    pt: string;
    en: string;
    zh: string;
  };
  description: {
    pt: string;
    en: string;
    zh: string;
  };
  status: "current" | "completed" | "planned";
  icon: string;
}

// Mentorship applications
export const mentorshipApplications = pgTable("mentorship_applications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  linkedin: text("linkedin").notNull(),
  currentRole: text("current_role").notNull(),
  experience: text("experience").notNull(),
  challenge: text("challenge").notNull(),
  expectations: text("expectations").notNull(),
  referral: text("referral").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertMentorshipApplicationSchema = createInsertSchema(mentorshipApplications).pick({
  name: true,
  email: true,
  linkedin: true,
  currentRole: true,
  experience: true,
  challenge: true,
  expectations: true,
  referral: true,
}).extend({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  email: z.string().email("Email inválido"),
  linkedin: z.string().url("URL do LinkedIn inválida").refine(
    (url) => url.includes("linkedin.com"),
    "Deve ser uma URL do LinkedIn"
  ),
  currentRole: z.string().min(2, "Cargo deve ter pelo menos 2 caracteres").max(100),
  experience: z.string().min(1, "Informe sua experiência").max(50),
  challenge: z.string().min(10, "Descreva seu desafio com mais detalhes").max(1000),
  expectations: z.string().min(10, "Descreva suas expectativas com mais detalhes").max(1000),
  referral: z.string().min(2, "Informe como nos conheceu").max(200),
});

export type InsertMentorshipApplication = z.infer<typeof insertMentorshipApplicationSchema>;
export type MentorshipApplication = typeof mentorshipApplications.$inferSelect;
