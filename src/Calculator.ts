import { StringCalculatorGuard } from "./StringCalculatorGuard";

export class Calculator {

  public static add(numbersString: string): number {

    const stringNumbers: string[] = numbersString.split(/[,\n]/);

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
