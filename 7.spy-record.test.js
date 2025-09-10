class Fortune {
  getMessage(year) {
    return `${year}년의 운세입니다.`;
  }
}

test("spy 함수 호출 기록 확인", () => {
  const fortune = new Fortune();
  const spy = jest.spyOn(fortune, "getMessage");

  fortune.getMessage(2024);
  fortune.getMessage(2025);
  fortune.getMessage(2026);

  // spy.mock 객체 직접 확인
  console.log(spy.mock);

  // matcher를 통한 검증
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledTimes(3);
  expect(spy).toHaveBeenCalledWith(2024);
  expect(spy).toHaveBeenLastCalledWith(2026);

  // 특정 호출 확인
  expect(spy.mock.calls[0][0]).toBe(2024);
  expect(spy.mock.calls[1][0]).toBe(2025);

  spy.mockRestore();
});
