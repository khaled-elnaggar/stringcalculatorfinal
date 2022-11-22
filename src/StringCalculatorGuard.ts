import { ErrorMessages } from "./ErrorMessages";
import { InvalidInputError } from "./InvalidInputError";

export class StringCalculatorGuard{
  public static checkForNonNumber(num: number) {
    if (isNaN(num))
      throw new InvalidInputError(ErrorMessages.nonNumberErrorMessage);
  }
}