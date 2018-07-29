// *** 1 *** //

const student = { name: 'Ivan', age: 21 };

const { name } = student;
console.log(name);

// const { age: a } = student;
// console.log(a);

// *** 2 *** //

// const student = { name: 'Kate', age: undefined };

// const { name, age = 16 } = student;

// console.log(name);
// console.log(age);

// *** 3 *** //

// const arr = [1, 2, 3];

// const [first] = arr;

// console.log(first);

// *** 4 - rest operator *** //

// const arr = [1, 2, 3];

// const [first, ...rest] = arr;

// console.log(first);
// console.log(rest);

// *** 5 - spread operator *** //

// const arr = [1, 3, 2];

// console.log(Math.max(arr));
// console.log(Math.max(...arr));

// *** 6 *** //

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const concatenated = [...arr1, ...arr2];

// console.log(concatenated);

// *** 7 *** //

// const obj = { a: 1, b: 2, c: 3 };
// const clone = { ...obj };

// console.log(clone);
// console.log(obj === clone);

// *** 7 *** //

// const obj = { a: 1, b: 2, c: 3 };
// const updatedCopy = { ...obj, b: 4 };

// console.log(updatedCopy);
