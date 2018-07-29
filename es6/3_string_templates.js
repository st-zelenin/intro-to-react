// *** 1 *** //

const student = { name: 'Kate' };

const studentInfo = `name = ${student.name}, age = ${student.age || 'UNKNOWN'}`;

console.log(studentInfo);

// *** 2 *** //

// function render(student) {
//   return `
//     <p>
//       Hello, ${student.name}!
//       Your age is <span>${student.age || 'UNKNOWN'}</span>
//     </p>
//   `;
// }

// const kate = { name: 'Kate' };
// const html = render(kate);
// console.log(html);

