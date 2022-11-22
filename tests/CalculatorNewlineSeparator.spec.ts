import { Calculator } from "../src/Calculator";

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

})