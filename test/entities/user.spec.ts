import { User } from "../../src/entities/user";

describe("User tests", () => {
  it("should create a user successfully", () => {
    const name = "test";
    const cpf = "test";
    const email = "test";
    const password = "test";
    const wallet = 0;
    const user = User.create(name, cpf, email, password, wallet);

    expect(user.isRight()).toBeTruthy();
  });
});
