import { Router } from "express";
import { getTicketsTypes, getTickets, newTicket } from "@/controllers/tickets-controller";
import { authenticateToken, validateBody } from "@/middlewares";
import { tickettype } from "@/schemas";

const ticketsRouter = Router();

ticketsRouter.get("/types",authenticateToken, getTicketsTypes)
ticketsRouter.get("/",authenticateToken, getTickets)
ticketsRouter.post("/" ,authenticateToken, validateBody(tickettype), newTicket)



export { ticketsRouter} ;