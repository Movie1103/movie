const multiply = (...nums) => nums.reduce((acc, el) => acc * el, 1);
console.log(multiply(3, 2, 4, 3));
