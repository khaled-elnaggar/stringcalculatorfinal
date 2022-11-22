import { InvalidInputError } from "./InvalidInputError";
import { StringCalculatorGuard } from "./StringCalculatorGuard";

export class Calculator {

  public static add(numbersString: string): number {
    StringCalculatorGuard.checkForMissingNumberNewlineAndComma(numbersString);
    StringCalculatorGuard.checkForMissingNumberCommas(numbersString);
    let separator: string = ',';

    const customDelimiterPattern: RegExp = new RegExp("//.+\n");
    const match = numbersString.match(customDelimiterPattern);

    if(match){
      separator = numbersString.substring(2, match[0].length);
      numbersString = numbersString.substring(match[0].length);
    }

    const separatorRegexPattern: RegExp = new RegExp(`[${separator}\n]`)
    const stringNumbers: string[] = numbersString.split(separatorRegexPattern);

    let sum: number = stringNumbers
    .map(s => {
      const num: number = Number(s);
      StringCalculatorGuard.checkForNonNumber(num);
      return num;
    })
    .reduce((a, b) => a + b, 0);

    sum = Calculator.roundToOneDecimalPoint(sum);
    return sum;
  }

  private static roundToOneDecimalPoint(sum: number) {
    sum = Math.round(sum * 10) / 10;
    return sum;
  }
}
