// import { isPassingScore } from "./2.grade";

describe.skip("부정 matcher", () => {
  // toBeTruthy, toBeFalsy
  describe.skip("isPassingScore 함수 테스트", () => {
    test("55점 이상은 Pass (true)", () => {
      expect(isPassingScore(55)).toBeTruthy();
      expect(isPassingScore(70)).toBeTruthy();
      expect(isPassingScore(100)).toBeTruthy();
    });

    test("55점 미만은 Fail (false)", () => {
      expect(isPassingScore(54)).toBeFalsy();
      expect(isPassingScore(0)).toBeFalsy();
      expect(isPassingScore(32)).toBeFalsy();
    });
  });

  // toBe, toEqual
  test.skip("toBe vs toEqual", () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };

    expect(obj1).toEqual(obj2); // 통과
    expect(obj1).toBe(obj2); // 실패 (참조가 다름)
  });

  test("test not to be", () => {
    const value = 1;
    expect(value).not.toBe(0); // 아닐 때 통과
  });
});
