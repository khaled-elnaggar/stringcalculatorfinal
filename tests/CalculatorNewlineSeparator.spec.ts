import { Calculator } from "../src/Calculator";
import { ErrorMessages } from "../src/ErrorMessages";
import { InvalidInputError } from "../src/InvalidInputError";

describe("String Calculator, New line as separator", ()=>{

  test("String with new line separator retuns the sum", () => {
    //Arrange
    const numbersString: string = '1\n2,3';
    //Act
    const actualSum: number = Calculator.add(numbersString);
    //Assert
    const expectedSum: number = 6;
    expect(actualSum).toEqual(expectedSum);
  })
  
  test("String with missing number between comma and newline retuns error", () => {
    //Arrange
    const numbersString: string = '1,\n3';
    //Act
    //Assert
    expect(()=>{
      Calculator.add(numbersString);
    }).toThrow(new InvalidInputError(ErrorMessages.missingNumberNewlineComma))
  })

  test("String with missing number between comma and newline retuns error", () => {
    //Arrange
    const numbersString: string = '1\n,3';
    //Act
    //Assert
    expect(()=>{
      Calculator.add(numbersString);
    }).toThrow(new InvalidInputError(ErrorMessages.missingNumberNewlineComma))
  })

  
  test("String with missing number between comma and newline retuns error", () => {
    //Arrange
    const numbersString: string = '1,,3';
    //Act
    //Assert
    expect(()=>{
      Calculator.add(numbersString);
    }).toThrow(new InvalidInputError(ErrorMessages.missingNumberCommas))
  })

})