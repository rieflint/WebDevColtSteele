var obj = {
  name: "Chuck",
  age: 45,
  isCool: false,
  friends: ["bob", "tina"],
  add: function (x, y) {
    return x + y;
  },
};

console.log(obj.add(10, 5));

function speak() {
  return "WOOF";
}

console.log(speak());
