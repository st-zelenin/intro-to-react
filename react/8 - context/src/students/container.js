import orderBy from 'lodash/orderBy';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { deleteStudent, fetchStudents } from './actions';
import StudentsComponent from './component';

class StudentsContainer extends Component {

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

  handleStudentClick = (id) => {
    this.props.history.push(`/${id}`);
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
    const { students = [] } = this.props;

    const sortedStudents = !sorting.column
      ? [...students]
      : orderBy(students, [sorting.column], [sorting.direction]);

    return (
      <StudentsComponent
        onColumnSort={this.handleColumnSort}
        sorting={sorting}
        students={sortedStudents}
        onStudentClick={this.handleStudentClick}
        onDelete={this.handleDelete}
      />
    );
  };
};

const mapStateToProps = state => ({
  students: state.list.students,
});

const withStore = connect(mapStateToProps, {
  fetchStudents,
  deleteStudent,
});

export default compose(withStore, withRouter)(StudentsContainer);
