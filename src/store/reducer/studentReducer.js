import * as actionType from '../action/actionType';

const initialState = {
  studentData: [],
  singleData: false,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
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
        singleData: action.data,
      };
    default:
      return {
        ...state,
      };
  }
};

export default studentReducer;
