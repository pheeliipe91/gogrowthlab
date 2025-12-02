import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSubscriberSchema, insertMentorshipApplicationSchema } from "@shared/schema";
import { z } from "zod";

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
