import { InvalidInputError } from "./InvalidInputError";

export class StringCalculatorGuard{
  public static checkForNumbersCount(stringNumbers: string[]) {
    if (stringNumbers.length > 2)
      throw new InvalidInputError("Invalid input, can not add more than 2 numbers");
  }
}