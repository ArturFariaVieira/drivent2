import Joi from "joi";

export const tickettype = Joi.object({
  ticketTypeId: Joi.number().required().min(1),
});
