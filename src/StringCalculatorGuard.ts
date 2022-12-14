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

  public static checkForMixingCustomAndDefaultSeparators(separator: string, numbersString: string) {
    if (separator != ',' && numbersString.includes(','))
      throw new InvalidInputError(ErrorMessages.mixingCustomAndDefaultSeparatorsErrorMessage);
  }

  
  public static checkForNegativeNumbers(numbers: number[]) {
    const negativeNumbers: number[] = numbers.filter(n => n < 0);
    if (negativeNumbers.length > 1)
      throw new InvalidInputError(ErrorMessages.getNegativeNumbers(negativeNumbers));
  }

}