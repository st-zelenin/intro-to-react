import { DELETE_STUDENT, GET_STUDENTS } from './constants';

const initialState = {
  students: [
    { id: 1, name: 'Катя', age: 22, score: 52 },
    { id: 2, name: 'Вася', age: 21, score: 55 },
    { id: 3, name: 'Коля', age: 23, score: 45 },
    { id: 4, name: 'Петя', age: 20, score: 50 },
    { id: 5, name: 'Ира', age: 22, score: 58 },
    { id: 6, name: 'Оля', age: 21, score: 65 },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return { ...state };
    case DELETE_STUDENT:
      const { students } = state;
      const index = students.findIndex(student => student.id == action.id);
      students.splice(index, 1);
      return { ...state, students: [...students] };
    default:
      return state
  }
};

export default reducer
