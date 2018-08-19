import { STUDENT_FETCH_ERROR, STUDENT_FETCH_START, STUDENT_FETCH_SUCCESS } from './constants';

const initialState = {
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_FETCH_START:
      return { ...state, loading: true };
    case STUDENT_FETCH_ERROR:
      return { ...state, loading: false, error: action.error };
    case STUDENT_FETCH_SUCCESS:
      return { ...state, loading: false, student: action.student, };
    default:
      return state
  }
};

export default reducer
