import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import StudentForm from '../student-form';
import { fetchStudent } from './actions';

class EditStudentContainer extends Component {
  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id);
  };

  handleSave = (student) => {
    debugger;
  }

  render() {
    if (this.props.loading) {
      return <div>Loading...</div>
    }

    if (this.props.error) {
      return <div>{JSON.stringify(this.props.error)}</div>
    }

    return (
      <StudentForm initialValues={this.props.student} onSave={this.handleSave} />
    );
  }
}

const mapStateToProps = state => ({
  student: state.edit.student,
  loading: state.edit.loading,
  error: state.edit.error,
});

const withStore = connect(mapStateToProps, {
  fetchStudent,
});

export default compose(withStore, withRouter)(EditStudentContainer);
