import {
  DELETE_STUDENT_ERROR,
  DELETE_STUDENT_START,
  DELETE_STUDENT_SUCCESS,
  STUDENTS_FETCH_ERROR,
  STUDENTS_FETCH_START,
  STUDENTS_FETCH_SUCCESS,
} from './constants';

const initialState = {
  students: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENTS_FETCH_START:
      return { ...state, loading: true };
    case STUDENTS_FETCH_ERROR:
      return { ...state, loading: false, error: action.error };
    case STUDENTS_FETCH_SUCCESS:
      return { ...state, loading: false, students: action.students, };
    case DELETE_STUDENT_START:
      return { ...state, loading: true };
    case DELETE_STUDENT_ERROR:
      return { ...state, loading: false, error: action.error };
    case DELETE_STUDENT_SUCCESS:
      return { ...state, loading: false };
    default:
      return state
  }
};

export default reducer
