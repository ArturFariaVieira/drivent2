import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
import httpStatus from "http-status";
import ticketsService from "@/services/tickets-service";


export async function getTicketsTypes (req: AuthenticatedRequest, res: Response){
    try{
        const ticketstypes = await ticketsService.getTypes();

        return res.status(httpStatus.OK).send(ticketstypes)
    }catch(err){
        return res.status(httpStatus.NOT_FOUND).send([])
    }
}

export async function getTickets(req: AuthenticatedRequest, res: Response){
    const {userId} = req
    try{
        const tickets = await ticketsService.getUserTickets(userId)
        return res.status(httpStatus.OK).send(tickets);
    }catch(err){
        return res.status(httpStatus.NOT_FOUND).send(err)
    }
}

export async function newTicket (req: AuthenticatedRequest, res: Response){
    const {userId} = req;
    const {ticketTypeId } = req.body;
    try{
        const newticket = await ticketsService.InsertTicket(userId, ticketTypeId);
    return res.status(httpStatus.CREATED).send(newticket)
    }catch(err){
        return res.status(httpStatus.NOT_FOUND).send(err)
    }
    
}