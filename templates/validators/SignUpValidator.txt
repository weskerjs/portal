import { schema, CustomMessages, rules } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class SignUpValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string([rules.maxLength(45)]),
    email: schema.string([
      rules.email(),
      rules.normalizeEmail({ allLowercase: true }),
    ]),
    password: schema.string([rules.minLength(8)]),
  });

  public messages: CustomMessages = {};
}
