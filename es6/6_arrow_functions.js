
// *** 1 *** //

const log = message => console.log(message);
// const log = (message) => { console.log(message); };

const sum = (x, y) => x + y;
// const sum = (x, y) => { return x + y; };

log('hello');
log(sum(1, 2));

// *** 2 *** //

// const log = (message, date = new Date(), type = 'info') => {
//   console.log(`${date.toLocaleString()}  :  ${type.toUpperCase()}  -  ${message}`);
// };

// log('hello');

// *** 3 *** //

// const response = {
//   status: 'OK',
//   code: 200,
//   data: { name: 'Вася' }
// };

// const printResponseData = ({ data }) => {
//   console.log(JSON.stringify(data));
// };

// printResponseData(response);
