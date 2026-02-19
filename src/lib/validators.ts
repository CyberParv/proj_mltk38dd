import { z } from "zod";

export const reservationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  date: z.string().min(1),
  time: z.string().min(1),
  partySize: z.number().int().min(1).max(8),
  specialRequests: z.string().max(500).optional().or(z.literal(""))
});

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(7).max(20).optional().or(z.literal("")),
  subject: z.string().min(2).max(100),
  message: z.string().min(5).max(2000)
});
