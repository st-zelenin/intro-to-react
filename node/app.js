const express = require('express');
const bodyParser = require('body-parser');

const students = [
  { id: 1, name: 'Катя', age: 22, score: 52 },
  { id: 2, name: 'Вася', age: 21, score: 55 },
  { id: 3, name: 'Коля', age: 23, score: 45 },
  { id: 4, name: 'Петя', age: 20, score: 50 },
  { id: 5, name: 'Ира', age: 22, score: 58 },
  { id: 6, name: 'Оля', age: 21, score: 65 },
];

let idCount = 6;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/students/:id', (req, res) => {
  const { id } = req.params;
  const student = students.find(s => s.id == id);
  if (!student) {
    res.status(500).send('student not found');
  } else {
    res.json(student);
  }
});

app.post('/students', (req, res) => {
  const student = req.body;
  student.id = ++idCount;

  students.push(student);
  res.status(200).send();
});

app.post('/students/:id', (req, res) => {
  const updated = req.body;
  const { id } = req.params;

  const student = students.find(s => s.id == id);
  if (!student) {
    res.status(500).send('student not found');
  }

  student.name = updated.name || student.name;
  student.age = updated.age || student.age;
  student.score = updated.score || student.score;

  res.status(200).send();
});

app.delete('/students/:id', (req, res) => {
  const { id } = req.params;
  const index = students.findIndex(student => student.id == id);
  if (index !== -1) {
    students.splice(index, 1);
    res.status(200).send();
  } else {
    res.status(500).send('student not found')
  }
});

const port = 8080;
app.listen(port, () => console.log(`listening port ${port}`));
