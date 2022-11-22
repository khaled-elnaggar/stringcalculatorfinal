import { Calculator } from "../src/Calculator";

describe("String Calculator, Many Numbers", ()=>{
  test("String with more than 2 numbers retuns their sum", () => {
    //Arrange
    const numbersString: string = '1.11,2.2,3,4';
    //Act
    const actualSum: number = Calculator.add(numbersString);
    //Assert
    expect(actualSum).toEqual(10.3)
  })
})