// const joi = require('@hapi/joi');
// exports.RegisterValidation = (data)  => {
// const schema = {
//  name:joi.string().min(6).required(),
//  email:joi.string().required().email(),
//  password:joi.string().min(8).required(),
  
// }
// return joi.validate(data,schema);
// }
// exports.LoginValidation = (data) => {
// const schema = {

//  email:joi.string().required().email(),
//  password:joi.string().min(8).required(),


// }
// return joi.validate(data,schema);
 
const Joi = require("joi");

const registerValidationSchema = Joi.object().keys({
  name: Joi.string()
    .min(2)
    .max(30)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(6)
    .required()
});

module.exports = registerValidationSchema;