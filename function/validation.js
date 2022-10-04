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

/* ========= Start: Nationality validation ============== */
export const  validateNationalityOnCreate  = (data) => {
    const schema = Joi.object({
        countries: Joi.string().required().trim(true),
        telephone_code: Joi.string().required().trim(true)
    });

    const value = schema.validate(data , { abortEarly: false });
    return value
}
/* ========= End: Nationality validation ============== */

/* ========= Start: City validation ============== */
export const  validateCityOnCreate  = (data) => {
    const schema = Joi.object({
        city_name: Joi.string().required().trim(true),
        state: Joi.string().required().trim(true)
    });

    const value = schema.validate(data , { abortEarly: false });
    return value
}
/* ========= End: City validation ============== */
