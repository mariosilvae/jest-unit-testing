const { TestScheduler } = require("jest");
const text = "Hello World";
const fruits = ["apple", "banana", "watermelon"];

//String test
test("It should has the word World", () => {
  expect(text).toMatch(/World/);
});

//Array test
test("It contain banana?", () => {
  expect(fruits).toContain("banana");
});

//Number test
test("Greater than", () => {
  expect(10).toBeGreaterThan(9);
});

//Callback test
const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("Test a callback", () => {
  reverseString("hello", (str) => {
    expect(str).toBe("olleh");
  });
});
