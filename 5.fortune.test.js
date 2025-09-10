const FORTUNES = [
  "오늘은 새로운 시작을 하기에 좋은 날입니다.",
  "소중한 사람과의 대화가 큰 힘이 될 것입니다.",
  "작은 일에도 기쁨을 느낄 수 있는 날입니다.",
];

function getFortuneString(date) {
  const year = date.getFullYear();
  return FORTUNES[year % 3];
}

describe.skip("mock fortune", () => {
  const mockGetFullYear = jest.fn(() => 2025);

  test("mock 운세", () => {
    const mockDate = { getFullYear: mockGetFullYear };

    const result = getFortuneString(mockDate);
    expect(result).toBe("오늘은 새로운 시작을 하기에 좋은 날입니다.");

    expect(mockGetFullYear).toHaveBeenCalledTimes(1);
  });
});

describe.skip("spy fortune", () => {
  test("spy 운세", () => {
    jest.spyOn(Date.prototype, "getFullYear");
    const result = getFortuneString(new Date()); // getFullYear -> 2025
    expect(result).toBe("오늘은 새로운 시작을 하기에 좋은 날입니다.");

    expect(Date.prototype.getFullYear).toHaveBeenCalledTimes(1);
    jest.restoreAllMocks()
  });
});
