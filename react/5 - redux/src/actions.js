import { DELETE_STUDENT, GET_STUDENTS } from './constants';

export const getStudents = () => ({ type: GET_STUDENTS });

export const deleteStudent = (id) => ({ type: DELETE_STUDENT, id });
