import * as actionType from '../action/actionType';

const initialState = {
  studentData: [],
  singleData: false,
  collegeName: '',
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STUDENTS_DATA:
      return {
        ...state,
        studentData: [...state.studentData, action.data],
      };
    case actionType.STUDENT_DATA:
      return {
        ...state,
        studentData: [...state.studentData, action.data],
      };
    case actionType.DELET_USER:
      const newData = state.studentData.filter((data) => data.id !== action.id);
      return {
        ...state,
        studentData: [...newData],
      };
    case actionType.UPDATE_USER:
      return {
        ...state,
        singleData: action.updatedData,
      };
    case actionType.STUDENT_UPDATED:
      const index = state.studentData.findIndex((data) => data.id === action.updatedData.id);
      const arr = [...state.studentData];
      arr[index] = action.updatedData;
      return {
        ...state,
        studentData: [...arr],
        singleData: action.updatedData,
      };
    case actionType.DATA_RESET:
      return {
        ...state,
        studentData: [],
      };
    case actionType.SINGLE_DATA:
      return {
        ...state,
        singleData: action.data,
      };
    case actionType.SINGLE_STUDENT_UPDATED:
      return {
        ...state,
        singleData: action.data,
      };
    case actionType.COLLEGE_NAME:
      return {
        ...state,
        collegeName: action.collegeName,
      };
    default:
      return {
        ...state,
      };
  }
};

export default studentReducer;
