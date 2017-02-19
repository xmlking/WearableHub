// const validator = require("email-validator");

export class User {
  email: string;
  password: string;
  isValidEmail() {
    return true;
    //return validator.validate(this.email);
  }
}
