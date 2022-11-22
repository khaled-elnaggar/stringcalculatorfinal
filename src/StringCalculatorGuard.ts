import { ErrorMessages } from "./ErrorMessages";
import { InvalidInputError } from "./InvalidInputError";

export class StringCalculatorGuard{
  public static checkForNumbersCount(stringNumbers: string[]) {
    if (stringNumbers.length > 2)
      throw new InvalidInputError(ErrorMessages.moreThanTwoNumbersErrorMessage);
  }

  public static checkForNonNumber(num: number) {
    if (isNaN(num))
      throw new InvalidInputError(ErrorMessages.nonNumberErrorMessage);
  }
}