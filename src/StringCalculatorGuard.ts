import { ErrorMessages } from "./ErrorMessages";
import { InvalidInputError } from "./InvalidInputError";

export class StringCalculatorGuard {
  public static checkForNonNumber(num: number) {
    if (isNaN(num))
      throw new InvalidInputError(ErrorMessages.nonNumberErrorMessage);
  }

  public static checkForMissingNumberNewlineAndComma(numbersString: string) {
    if (numbersString.match("(,\n)|(\n,)"))
      throw new InvalidInputError(ErrorMessages.missingNumberNewlineComma);
  }

  public static checkForMissingNumberCommas(numbersString: string) {
    if (numbersString.match(',,'))
      throw new InvalidInputError(ErrorMessages.missingNumberCommas);
  }

}