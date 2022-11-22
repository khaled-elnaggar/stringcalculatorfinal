import { Calculator } from "../src/Calculator";
import { ErrorMessages } from "../src/ErrorMessages";
import { InvalidInputError } from "../src/InvalidInputError";

describe("String Calculator - Negative Numbers", () => {
  test("String with negative numbers returns error with negative numbers", () => {

    //Arrange
    const numbersString: string = '1,-4,-5';
    //Act
    //Assert
    expect(() => {
      Calculator.add(numbersString);
    }).toThrow(new InvalidInputError(ErrorMessages.getNegativeNumbers([-4,-5])))
  })
  
})