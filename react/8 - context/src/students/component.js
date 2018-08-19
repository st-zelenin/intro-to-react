import React, { Fragment } from 'react';

import { withRole, ROLES } from '../role';

const StudentsComponent = ({ onColumnSort, sorting, students, onStudentClick, onDelete, role }) => (
  <Fragment>
    <h1>Students</h1>
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th onClick={() => onColumnSort('name')} style={{ width: '25%', textAlign: 'left' }}>
            name{sorting.column === 'name' ? ` - ${sorting.direction}` : ''}
          </th>
          <th onClick={() => onColumnSort('age')} style={{ width: '25%', textAlign: 'left' }}>
            age{sorting.column === 'age' ? ` - ${sorting.direction}` : ''}
          </th>
          <th onClick={() => onColumnSort('score')} style={{ width: '25%', textAlign: 'left' }}>
            score{sorting.column === 'score' ? ` - ${sorting.direction}` : ''}
          </th>
          {role === ROLES.CURATOR && (<th></th>)}
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td onClick={() => onStudentClick(student.id)}>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.score}</td>
            {role === ROLES.CURATOR && (<td>
              <button onClick={() => onDelete(student.id)}>x</button>
            </td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </Fragment>
);

export default withRole(StudentsComponent);
