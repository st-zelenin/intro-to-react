import React, { Fragment } from 'react';

const StudentsComponent = ({ onColumnSort, sorting, students, onStudentClick, onDelete }) => (
  <Fragment>
    <h1>Students</h1>
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th onClick={() => onColumnSort('name')} style={{ width: '25%' }}>
            name{sorting.column === 'name' ? ` - ${sorting.direction}` : ''}
          </th>
          <th onClick={() => onColumnSort('age')} style={{ width: '25%' }}>
            age{sorting.column === 'age' ? ` - ${sorting.direction}` : ''}
          </th>
          <th onClick={() => onColumnSort('score')} style={{ width: '25%' }}>
            score{sorting.column === 'score' ? ` - ${sorting.direction}` : ''}
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td onClick={() => onStudentClick(student.id)}>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.score}</td>
            <td>
              <button onClick={() => onDelete(student.id)}>x</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </Fragment>
);

export default StudentsComponent;
