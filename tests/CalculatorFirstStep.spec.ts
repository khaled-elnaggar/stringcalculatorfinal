import { Calculator } from "../src/Calculator";
import { ErrorMessages } from "../src/ErrorMessages";
import { InvalidInputError } from "../src/InvalidInputError";

describe("String Calculator, First Step", () => {

  test("Empty string retuns 0", () => {
    //Arrange
    const numbersString: string = '';
    //Act
    const actualSum: number = Calculator.add(numbersString);
    //Assert
    const expectedSum: number = 0;
    expect(actualSum).toEqual(expectedSum);
  })

  test("String with one number retuns itself", () => {
    //Arrange
    const numbersString: string = '1';
    //Act
    const actualSum: number = Calculator.add(numbersString);
    //Assert
    const expectedSum: number = 1;
    expect(actualSum).toEqual(expectedSum);
  })

  test("String with two numbers retuns their sum", () => {
    //Arrange
    const numbersString: string = '1,2';
    //Act
    const actualSum: number = Calculator.add(numbersString);
    //Assert
    const expectedSum: number = 3;
    expect(actualSum).toEqual(expectedSum);
  })

  test("String decimal numbers retuns their sum with 1 decimal place", () => {
    //Arrange
    const numbersString: string = '1.11,2.2';
    //Act
    const actualSum: number = Calculator.add(numbersString);
    //Assert
    const expectedSum: number = 3.3;
    expect(actualSum).toEqual(expectedSum);
  })

  test("String with non-number retuns error", () => {
    //Arrange
    const numbersString: string = '1,x';
    //Act
    //Assert
    expect(()=>{
      Calculator.add(numbersString);
    }).toThrow(new InvalidInputError(ErrorMessages.nonNumberErrorMessage))
  })



})

