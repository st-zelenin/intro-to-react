import { STUDENT_FETCH_ERROR, STUDENT_FETCH_START, STUDENT_FETCH_SUCCESS } from './constants';

export const fetchStudent = (id) => async (dispatch) => {
  dispatch({ type: STUDENT_FETCH_START })

  try {
    const res = await fetch(`http://localhost:8080/students/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    const student = await res.json();

    dispatch({ type: STUDENT_FETCH_SUCCESS, student });
  } catch (error) {
    dispatch({ type: STUDENT_FETCH_ERROR, error });
  }
}
