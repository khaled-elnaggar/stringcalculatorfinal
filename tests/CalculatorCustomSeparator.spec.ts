import { Calculator } from "../src/Calculator";
import { ErrorMessages } from "../src/ErrorMessages";
import { InvalidInputError } from "../src/InvalidInputError";

describe("String Calculator - Custom Separator", ()=>{
  test("string with custom separator returns sum successfully", ()=>{
    //Arrange
    const numbersString: string = '//|\n1|2\n3';
    //Act
    const actualSum: number = Calculator.add(numbersString);
    //Assert
    const expectedSum: number = 6;
    expect(actualSum).toEqual(expectedSum);
  })

  test("string with custom separator and comma returns error", ()=>{
    //Arrange
    const numbersString: string = '//|\n1|2,3';
    //Act
    //Assert
    expect(()=>{
      Calculator.add(numbersString);
    }).toThrow(new InvalidInputError(ErrorMessages.mixingCustomAndDefaultSeparatorsErrorMessage))
  })

  test("string with custom separator returns sum successfully", ()=>{
    //Arrange
    const numbersString: string = '//sep\n1sep2';
    //Act
    const actualSum: number = Calculator.add(numbersString);
    //Assert
    const expectedSum: number = 3;
    expect(actualSum).toEqual(expectedSum);
  })
})