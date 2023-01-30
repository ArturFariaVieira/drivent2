import Joi from "joi";

export const paymentWithTicketId = Joi.object({
    ticketId: Joi.string().min(1).required()
});
