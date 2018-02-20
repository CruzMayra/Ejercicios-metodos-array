describe("capitalize", () => {
  it("returns WHOOP if passed whoop", () => {
    expect(capitalize("whoop")).toEqual('WHOOP');
  });
  it("returns H0L4/°| if passed h0l4/°|", () => {
    expect(capitalize("h0l4/°|")).toEqual('H0L4/°|');
  });
  it("returns empty string if passed empty string", () => {
    expect(capitalize('')).toEqual('');
  });
});

describe("swapCase", () => {
  it("returns HEY gurl, LETS javascript TOGETHER sometime if passed hey gurl, lets javascript together sometime", () => {
    expect(swapCase("hey gurl, lets javascript together sometime")).toEqual('HEY gurl, LETS javascript TOGETHER sometime');
  });
  it("returns hola gatito if passed hola GATITO", () => {
    expect(swapCase("hola gatito")).toEqual('HOLA gatito');
  });
});

describe("evenNumbers", () => {
  it("returns array with even numbers if passed array with numbers", () => {
    expect(evenNumbers([1,2,3,4,5,6,7,8,9,10])).toEqual([2, 4, 6, 8, 10]);
  });
  it("returns empty array if passed array with only odd numbers", () => {
    expect(evenNumbers([3,7,9,13,11])).toEqual([]);
  });
});

describe("oddNumbers", () => {
  it("returns array with odd numbers if passed array with numbers", () => {
    expect(oddNumbers([1,2,3,4,5,6,7,8,9,10])).toEqual([1, 3, 5, 7, 9]);
  });
  it("returns empty array if passed array with only even numbers", () => {
    expect(oddNumbers([2,8,10,30,22,4])).toEqual([]);
  });
});

describe("reducer", () => {
  it("returns the sum of even and odd numbers if passed array with numbers", () => {
    expect(reducer([1,2,3,4,5,6,7,8,9])).toEqual([20, 25]);
  });
});
