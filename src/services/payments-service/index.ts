import paymentsRepository from "@/repositories/payments-repository";
import { notFoundError, requestError, unauthorizedError} from "@/errors";

import { RequestError } from "@/protocols";
import ticketsRepository from "@/repositories/tickets-repository.ts";


export async function findPayment(ticketId: number, userId: number){
    const payment =  await paymentsRepository.findPayment(ticketId);
    if(!payment) {return notFoundError()};
    const ticket = await paymentsRepository.findTicket(payment.ticketId);    
    const enrollment = await ticketsRepository.findEnrollment(userId);
    if(ticket.enrollmentId!== enrollment.id) throw requestError(401, "This ticket does not belong to you");
    return payment;
}

const paymentsService = {
    findPayment
}

export default paymentsService;