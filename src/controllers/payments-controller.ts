import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
import httpStatus from "http-status";
import paymentsService from "@/services/payments-service";

export async function getUserPayment(req: AuthenticatedRequest, res: Response){
    
    const {userId} = req;
    const {ticketId} = req.query;
    try{
    const payment = await paymentsService.findPayment(Number(ticketId), userId);
    
    return res.status(httpStatus.OK).send(payment);
    }
    catch(error){
        res.status(httpStatus.UNAUTHORIZED).send(error)
    }



}