import React, { Component } from 'react';

import StudentForm from '../student-form';

class NewStudentContainer extends Component {
  handleSave = (student) => {
    debugger;
  }

  render() {
    return (
      <StudentForm initialValues={{}} onSave={this.handleSave} />
    );
  }
}

export default NewStudentContainer;
