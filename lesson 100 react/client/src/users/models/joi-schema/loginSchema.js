import Joi from "joi";

const loginSchema = {
  email: Joi.string()
    .ruleset.pattern(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .rule({ message: 'user "mail" must be a valid mail' })
    .required(),

  password: Joi.string()
    .ruleset.regex(
      /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
    )
    .rule({
      message:
        'user "password" must be at least seven characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
    })
    .required(),
};

export default loginSchema;