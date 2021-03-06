import orderBy from 'lodash/orderBy';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { deleteStudent, fetchStudents } from './actions';

class AComponent extends Component {

  state = {
    sorting: {},
  };

  componentDidMount() {
    this.props.fetchStudents();
  };

  handleDelete = async (id) => {
    await this.props.deleteStudent(id);
    this.props.fetchStudents();
  }

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
  };

  render() {
    const { sorting } = this.state;
    const { students = [], deleteStudent, error, loading } = this.props;

    const sortedStudents = !sorting.column
      ? [...students]
      : orderBy(students, [sorting.column], [sorting.direction]);

    if (loading) {
      return <div>Loading..</div>
    }

    if (error) {
      return <div>{JSON.stringify(error)}</div>
    }

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
};

const mapStateToProps = state => ({
  students: state.students,
  loading: state.loading,
  error: state.error,
});

const withStore = connect(mapStateToProps, {
  fetchStudents,
  deleteStudent,
});

export default compose(withStore, withRouter)(AComponent);
