describe("pingPong", function() {
  it("returns 'ping' if Usernumber is divisible by 3", function() {
    expect(pingPong(3)).to.equal("ping");
    expect(pingPong(6)).to.equal("ping");
  });
  it("return 'pong' if number is divisible by 5", function() {
    expect(pingPong(5)).to.equal("pong");
    expect(pingPong(10)).to.equal("pong");
  });
  it("return pingpong for multiples of 15", function() {
    expect(pingPong(15).to.equal("pingpong");
    expect(pingPong(30).to.equal("pingpong");
  });
  it("is false if user enters a number less than one", function() {
    expect(number(0)).to.equal(false);
  });
});
