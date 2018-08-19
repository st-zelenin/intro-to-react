import {
  DELETE_STUDENT_ERROR,
  DELETE_STUDENT_START,
  DELETE_STUDENT_SUCCESS,
  STUDENTS_FETCH_ERROR,
  STUDENTS_FETCH_START,
  STUDENTS_FETCH_SUCCESS,
} from './constants';

export const fetchStudents = () => async (dispatch) => {
  dispatch({ type: STUDENTS_FETCH_START })

  try {
    const res = await fetch('http://localhost:8080/students', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    const students = await res.json();

    dispatch({ type: STUDENTS_FETCH_SUCCESS, students });
  } catch (error) {
    dispatch({ type: STUDENTS_FETCH_ERROR, error });
  }
}

export const deleteStudent = (id) => async (dispatch) => {
  dispatch({ type: DELETE_STUDENT_START })

  try {
    await fetch(`http://localhost:8080/students/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'DELETE'
    });

    dispatch({ type: DELETE_STUDENT_SUCCESS });
  } catch (error) {
    dispatch({ type: DELETE_STUDENT_ERROR, error });
  }
}
