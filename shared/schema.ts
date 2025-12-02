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
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertSubscriberSchema = createInsertSchema(subscribers).pick({
  email: true,
  language: true,
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
