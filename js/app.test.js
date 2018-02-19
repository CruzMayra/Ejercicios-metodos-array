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
