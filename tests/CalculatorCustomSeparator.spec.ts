import { Calculator } from "../src/Calculator";

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

  
})