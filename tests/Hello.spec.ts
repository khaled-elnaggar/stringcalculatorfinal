describe("String Calculator, First Step", () => {

  test("Empty string retuns 0", () => {
    //Arrange
    const numbersString: string = '';
    //Act
    const actualSum: number = ((str: string) => { return -1; })(numbersString);
    //Assert
    const expectedSum: number = 0;
    expect(actualSum).toEqual(expectedSum);
  })

})

