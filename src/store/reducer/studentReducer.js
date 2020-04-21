import * as actionType from '../action/actionType';

const initialState = {
  studentData: [],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STUDENT_DATA:
      return {
        ...state,
        studentData: [...state.studentData, action.data],
      };
    default:
      return {
        ...state,
      };
  }
};

export default studentReducer;