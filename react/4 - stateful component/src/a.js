import orderBy from 'lodash/orderBy';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

class AComponent extends Component {

  state = {
    students: [
      { id: 1, name: 'Катя', age: 22, score: 52 },
      { id: 2, name: 'Вася', age: 21, score: 55 },
      { id: 3, name: 'Коля', age: 23, score: 45 },
      { id: 4, name: 'Петя', age: 20, score: 50 },
      { id: 5, name: 'Ира', age: 22, score: 58 },
      { id: 6, name: 'Оля', age: 21, score: 65 },
    ],
    sorting: {},
  };

  handleDelete = id => {
    this.setState(({ students }) => {
      const index = students.findIndex(student => student.id == id);
      students.splice(index, 1);
      return { students };
    });
  };

  handleColumnSort = column => {
    this.setState(({ sorting }) => {

      if (!sorting.column) {
        return { sorting: { column, direction: 'asc' } };
      }

      if (sorting.column !== column) {
        return { sorting: { column, direction: 'asc' } };
      }

      if (sorting.direction === 'desc') {
        return { sorting: {} };
      }

      return { sorting: { column, direction: 'desc' } };
    });
  }

  render() {
    const { students, sorting } = this.state;
    const sortedStudents = !sorting.column
      ? [...students]
      : orderBy(students, [sorting.column], [sorting.direction]);

    return (
      <Fragment>
        <h1>Students</h1>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th onClick={() => this.handleColumnSort('name')} style={{ width: '25%' }}>
                name{sorting.column === 'name' ? ` - ${sorting.direction}` : ''}
              </th>
              <th onClick={() => this.handleColumnSort('age')} style={{ width: '25%' }}>
                age{sorting.column === 'age' ? ` - ${sorting.direction}` : ''}
              </th>
              <th onClick={() => this.handleColumnSort('score')} style={{ width: '25%' }}>
                score{sorting.column === 'score' ? ` - ${sorting.direction}` : ''}
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sortedStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.score}</td>
                <td>
                  <button onClick={() => this.handleDelete(student.id)}>x</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  };
}

export default withRouter(AComponent);
