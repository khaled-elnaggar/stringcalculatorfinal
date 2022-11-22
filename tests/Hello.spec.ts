import { Calculator } from "../src/Calculator";

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

})

