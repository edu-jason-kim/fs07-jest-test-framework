function getItem(database, itemId) {
  const item = database.findItemById(itemId);
  return item;
}

describe.skip("mock 함수 사용 (mockReturnValue)", () => {
  const mockFindById = jest.fn();
  const mockDatabase = {
    findItemById: mockFindById,
  };

  test("존재하는 상품조회", () => {
    // mock 함수의 반환값 설정
    mockFindById.mockReturnValue({ id: 1, name: "양파", price: 800 });
    const item = getItem(mockDatabase, 1);

    expect(item).toEqual({ id: 1, name: "양파", price: 800 });
  });

  test("존재하지 않는 상품조회", () => {
    // mock 함수의 반환값 설정
    mockFindById.mockReturnValue(null);
    const item = getItem(mockDatabase, 11);

    expect(item).toBeNull();
  });
});

describe.skip("mock 함수 사용 (콜백 함수)", () => {
  const mockFindById = jest.fn((id) => {
    if (id === 1) return { id: 1, name: "양파", price: 800 };
    return null;
  });

  const mockDatabase = {
    findItemById: mockFindById,
  };

  test("존재하는 상품조회", () => {
    const item = getItem(mockDatabase, 1);
    expect(item).toEqual({ id: 1, name: "양파", price: 800 });
  });

  test("존재하지 않는 상품조회", () => {
    const item = getItem(mockDatabase, 11);
    expect(item).toBeNull();
  });
});

describe.skip("mock 함수 사용 (mockImplementation)", () => {
  // 빈 mock 함수로 시작
  const mockFindById = jest.fn();
  const mockDatabase = {
    findItemById: mockFindById,
  };

  test("존재하는 상품조회", () => {
    // mock 함수의 구현부 수정
    mockFindById.mockImplementation((id) => {
      if (id === 1) return { id: 1, name: "양파", price: 800 };
      return null;
    });
    const item = getItem(mockDatabase, 1);

    expect(item).toEqual({ id: 1, name: "양파", price: 800 });
  });

  test("존재하지 않는 상품조회", () => {
    // mock 함수의 구현부 수정
    mockFindById.mockImplementation((id) => {
      if (id === 1) return { id: 1, name: "양파", price: 800 };
      return null;
    });
    const item = getItem(mockDatabase, 11);

    expect(item).toBeNull();
  });
});
