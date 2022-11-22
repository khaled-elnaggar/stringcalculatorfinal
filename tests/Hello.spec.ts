import { Hello } from "../src/Hello"

describe("Test environment suite", () => {

  test("Test running code", () => {

    const hello: Hello = new Hello();

    const greetedName: string = hello.greet("Khaled");

    expect(greetedName).toEqual(`Hello, Khaled`);
  })

})