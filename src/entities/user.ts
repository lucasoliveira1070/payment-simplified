import { Either, right } from "../../src/utils/either";
import { InvalidUser } from "./errors/invalid-user";

export class User {
  constructor(
    readonly name: string,
    readonly cpf: string,
    readonly email: string,
    readonly password: string,
    readonly wallet: number
  ) {}

  static create(
    name: string,
    cpf: string,
    email: string,
    password: string,
    wallet: number
  ): Either<InvalidUser, User> {
    //TODO:LOGICA DA CRIACAO DE USUARIO
    return right(new User(name, cpf, email, password, wallet));
  }
}
