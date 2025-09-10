import hello from "./1.hello";

describe.skip("hello 함수 테스트", () => {
  test("Hello Jest를 반환해야 한다.", () => {
    const value = hello();

    // expect "value" to equal "Hello Jest"
    expect(value).toEqual("Hello Jest");
  });

  test("파라미터를 넘겨도 반환 값이 같아야 한다.", () => {
    const value = hello(20);
    expect(value).toEqual("Hello Jest");
  });

  // ...
});
