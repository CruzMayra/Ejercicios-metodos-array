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
  it("returnsHOLA gatito if passed hola gatito", () => {
    expect(swapCase("hola gatito")).toEqual('HOLA gatito');
  });
});

describe("shiftLetters", () => {
  it("returns encoded string if passed a simple string", () => {
    expect(shiftLetters('hello')).toEqual('ifmmp');
  });
  it("returns encoded string if passed a simple string", () => {
    expect(shiftLetters('abc')).toEqual('bcd');
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

describe("filterData", () => {
  it("returns filtered array if passed array with numbers", () => {
    expect(filterData([
      {id : 1, name : "John", tags : "javascript"},
      {id : 2, name : "Alice", tags : "javascript"},
      {id : 3, name : "Roger", tags : "java"},
      {id : 4, name : "Adam", tags : "javascript"},
      {id : 5, name : "Alex", tags : "java"}
    ])).toEqual(['javascript', 'javascript', 'javascript']);
  });
});

describe("sumYearsDog", () => {
  it("returns sum year dog if passed array with data", () => {
    expect(sumYearsDog([
      {
        name: 'Butters',
        age: 3,
        type: 'dog'
      },
      {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
      },
      {
        name: 'Red',
        age: 1,
        type: 'cat'
      },
      {
        name: 'Joey',
        age: 3,
        type: 'dog'
      },
    ])).toEqual(84);
  });
});

describe("orderListFruits", () => {
  it("returns order list if passed array with data", () => {
    expect(orderListFruits(['Banana', 'Orange', 'Apple', 'Kiwi'])).toEqual(['Apple', 'Banana', 'Kiwi', 'Orange']);
  });
});
