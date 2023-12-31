/*
validacion de la request
contra un schema de joi
 */
export async function validateRequest(req,next, schema) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value} = schema.validate(req.body, options);
    if (error) {

    // next( error);
     next( error.details.message);
     console.log(error);
    } else {
        req.body = value;
        next();
    }
}
