import { notFoundError } from "@/errors";
import ticketsRepository from "@/repositories/tickets-repository.ts";
import httpStatus, { BAD_REQUEST } from "http-status";

async function getTypes(){
   return await ticketsRepository.findMany();
}

async function getUserTickets(userId: number){
   const enrollment =  await ticketsRepository.findEnrollment(userId)
   if(!enrollment) throw notFoundError();
   const ticket = await ticketsRepository.findFirst(enrollment.id);
   if(!ticket) throw notFoundError();
   return ticket;

   
}

async function InsertTicket(userId: number, ticketTypeId: number){
    const enrollment =  await ticketsRepository.findEnrollment(userId)
    if(!enrollment) throw notFoundError();
    const ticket = await ticketsRepository.CreateTicket(userId, ticketTypeId, enrollment.id);
    return ticket;
}


const ticketsService = {
    getTypes,
    getUserTickets,
    InsertTicket
}

export default ticketsService;