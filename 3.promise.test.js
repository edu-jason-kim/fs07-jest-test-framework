async function getAvatars() {
  try {
    throw new Error();
    const response = await fetch("https://learn.codeit.kr/api/avatars");
    const { results } = await response.json();
    return results;
  } catch (error) {
    throw error;
  }
}

describe("getAvatars 함수 테스트", () => {
  test.skip("네트워크에서 아바타 데이터를 불러온다. (then, catch)", (done) => {
    getAvatars()
      .then((data) => {
        // 데이터가 있어야 함
        expect(data).toBeDefined();
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  test.skip("네트워크에서 아바타 데이터를 불러온다. (async/await)", async () => {
    const data = await getAvatars();
    expect(data).toBeDefined();
  });

  test("에러케이스", async () => {
    // expect가 총 1회 호출돼야 함
    expect.assertions(1);

    try {
      const data = await getAvatars();
      console.log(data);
    } catch (error) {
      // 에러 인스턴스가 넘어와야 한다
      expect(error).toBeInstanceOf(Error);
    }
  });

  // test(name, fn, timeout)
  // timeout에 시간을 할당 가능 (기본 5초)
  test("타임아웃 테스트", async () => {
    // 10초가 걸리는 integration test
    await new Promise((resolve) => setTimeout(resolve, 10000));

    expect(0).toBe(0);
  }, 20000);
});
