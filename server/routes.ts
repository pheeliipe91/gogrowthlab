import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSubscriberSchema, insertMentorshipApplicationSchema } from "@shared/schema";
import { z } from "zod";
import {
  sendNewsletterWelcomeEmail,
  sendMentorshipConfirmationEmail,
  sendMentorshipNotificationEmail,
  sendSubscriberNotificationEmail
} from "./resend";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/subscribe", async (req, res) => {
    try {
      const validatedData = insertSubscriberSchema.parse(req.body);

      const existingSubscriber = await storage.getSubscriberByEmail(validatedData.email);
      if (existingSubscriber) {
        return res.status(200).json({
          message: "Already subscribed",
          subscriber: existingSubscriber
        });
      }

      const subscriber = await storage.createSubscriber(validatedData);

      // Send welcome email (non-blocking)
      sendNewsletterWelcomeEmail(subscriber.email, subscriber.language || "pt")
        .catch(err => console.error("Failed to send welcome email:", err));

      // Send notification email to admin (non-blocking) - NEW
      sendSubscriberNotificationEmail(subscriber.email, subscriber.linkedin)
        .catch(err => console.error("Failed to send subscriber notification:", err));

      res.status(201).json({
        message: "Successfully subscribed",
        subscriber
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: "Invalid data",
          details: error.errors
        });
      }
      console.error("Subscription error:", error);
      res.status(500).json({ error: "Failed to subscribe" });
    }
  });

  app.get("/api/subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getAllSubscribers();
      res.json(subscribers);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
      res.status(500).json({ error: "Failed to fetch subscribers" });
    }
  });

  app.post("/api/mentorship-applications", async (req, res) => {
    try {
      const validatedData = insertMentorshipApplicationSchema.parse(req.body);
      const application = await storage.createMentorshipApplication(validatedData);

      // Send confirmation email to applicant (non-blocking)
      sendMentorshipConfirmationEmail(validatedData.email, validatedData.name)
        .catch(err => console.error("Failed to send confirmation email:", err));

      // Send notification email to Phelipe (non-blocking)
      sendMentorshipNotificationEmail(validatedData)
        .catch(err => console.error("Failed to send notification email:", err));

      res.status(201).json({
        message: "Application submitted successfully",
        application
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: "Invalid data",
          details: error.errors
        });
      }
      console.error("Mentorship application error:", error);
      res.status(500).json({ error: "Failed to submit application" });
    }
  });

  app.get("/api/mentorship-applications", async (req, res) => {
    try {
      const applications = await storage.getAllMentorshipApplications();
      res.json(applications);
    } catch (error) {
      console.error("Error fetching applications:", error);
      res.status(500).json({ error: "Failed to fetch applications" });
    }
  });

  return httpServer;
}
