import { prisma } from "@/config";

async function findPayment(ticketId: number){
    return await prisma.payment.findFirst({
        where: {
            ticketId: ticketId
        }
    })
}
async function findTicket(ticketId: number){
    return await prisma.ticket.findFirst({
        where: {
            id: ticketId
        }
    })
}

const paymentsRepository = {
    findPayment,
    findTicket

}

export default paymentsRepository;