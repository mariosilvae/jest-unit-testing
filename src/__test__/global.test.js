const { TestScheduler } = require("jest");
const text = "Hello World";

test("It should has the word World", () => {
  expect(text).toMatch(/World/);
});
