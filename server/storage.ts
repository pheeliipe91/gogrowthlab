import { type User, type InsertUser, type Subscriber, type InsertSubscriber, type MentorshipApplication, type InsertMentorshipApplication } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  getAllSubscribers(): Promise<Subscriber[]>;
  
  createMentorshipApplication(application: InsertMentorshipApplication): Promise<MentorshipApplication>;
  getAllMentorshipApplications(): Promise<MentorshipApplication[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private subscribers: Map<string, Subscriber>;
  private mentorshipApplications: Map<string, MentorshipApplication>;

  constructor() {
    this.users = new Map();
    this.subscribers = new Map();
    this.mentorshipApplications = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    return Array.from(this.subscribers.values()).find(
      (subscriber) => subscriber.email === email,
    );
  }

  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const id = randomUUID();
    const subscriber: Subscriber = {
      ...insertSubscriber,
      id,
      language: insertSubscriber.language || "pt",
      createdAt: new Date(),
    };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }

  async getAllSubscribers(): Promise<Subscriber[]> {
    return Array.from(this.subscribers.values());
  }

  async createMentorshipApplication(insertApplication: InsertMentorshipApplication): Promise<MentorshipApplication> {
    const id = randomUUID();
    const application: MentorshipApplication = {
      ...insertApplication,
      id,
      createdAt: new Date(),
    };
    this.mentorshipApplications.set(id, application);
    return application;
  }

  async getAllMentorshipApplications(): Promise<MentorshipApplication[]> {
    return Array.from(this.mentorshipApplications.values());
  }
}

export const storage = new MemStorage();
