export class ErrorMessages {
  public static readonly nonNumberErrorMessage: string = "Number expected but found non-number";
  public static readonly missingNumberNewlineComma: string = "Invalid input, missing number between \\n and ,";
  public static readonly missingNumberCommas: string = "Invalid input, missing number between , and ,";
  public static readonly mixingCustomAndDefaultSeparatorsErrorMessage: string = "Invalid input, mixing custom separator and ,";
  public static getNegativeNumbers(negatives:number[]){
    return `Negative not allowed: ${negatives}`;
  }
}