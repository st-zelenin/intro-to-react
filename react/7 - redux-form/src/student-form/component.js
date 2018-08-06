import React from 'react';
import { Field, reduxForm } from 'redux-form';

import validate from './validate';

const StudentForm = ({ handleSubmit, onSave, valid }) => {
  return (
    <form onSubmit={handleSubmit(onSave)}>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <Field name="age" component="input" type="number" />
      </div>
      <div>
        <label htmlFor="score">Score</label>
        <Field name="score" component="input" type="number" />
      </div>
      <button type="submit" disabled={!valid}>Submit</button>
    </form>
  );
}

const withForm = reduxForm({
  form: 'studentForm',
  validate,
});

export default withForm(StudentForm);
