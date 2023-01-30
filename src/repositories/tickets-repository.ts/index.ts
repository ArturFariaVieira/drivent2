import { prisma } from "@/config";
import { TicketType, Ticket } from "@prisma/client";

async function findMany(){
    return await prisma.ticketType.findMany();

}
async function findEnrollment(userId :number){
    return await prisma.enrollment.findFirst({
        where: {
            userId: userId
        }
    })
}

async function findFirst(id: number){
    return await prisma.ticket.findFirst({
        where: {
            enrollmentId: id
        },
        include: {
            TicketType: true
        }
    })
}
async function CreateTicket(userId: number, ticketTypeId: number, enrollmentId: number){
    
    const created =  await prisma.ticket.create({
        data: {
            ticketTypeId: ticketTypeId,
            enrollmentId: enrollmentId,
            status: "RESERVED",            

        }   
    })

    const ticket = await prisma.ticket.findFirst({
        where: {
            id: created.id
        },
        include: {
            TicketType: true
        }
    })
    console.log(ticket)
    return ticket;

}
export type newTickettype = Omit<Ticket, "id">;

const ticketsRepository = {
    findMany,
    findEnrollment,
    findFirst,
    CreateTicket
}
export type TicketsTypes = Omit<TicketType, "Ticket">
export default ticketsRepository