import Joi from "joi";


/* ========= Start: User validation ============== */
export const  validateUsersOnCreate  = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required().email(),
        telephone: Joi.string().required().min(10)
    });

    const value = schema.validate(data , { abortEarly: false });
    return value
}
/* ========= End: User validation ============== */

