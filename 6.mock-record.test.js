const mockFn = jest.fn((char, num) => {
  return `${char}-${num}`;
});

test("mock 함수 호출 기록 확인", () => {
  mockFn("a", 1);
  mockFn("b", 2);
  mockFn("c", 3);

  // mock 객체 직접 확인
  console.log(mockFn.mock);

  // mock matcher 확인
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledTimes(3);
  expect(mockFn).toHaveBeenCalledWith("a", 1);
  expect(mockFn).toHaveBeenLastCalledWith("c", 3);

  // 특정 인자 호출 확인
  expect(mockFn.mock.calls[1][1]).toBe(2);

  // mock 내부 기록을 삭제
  mockFn.mockClear();
  console.log(mockFn.mock);
});
