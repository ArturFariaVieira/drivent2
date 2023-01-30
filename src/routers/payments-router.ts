import { authenticateToken, validateParams, validateQuery } from "@/middlewares";
import { Router } from "express";
import { getUserPayment } from "@/controllers";
import { paymentWithTicketId } from "@/schemas";

const paymentsRouter = Router();

paymentsRouter.get("/", authenticateToken, validateQuery(paymentWithTicketId), getUserPayment);

export {paymentsRouter};