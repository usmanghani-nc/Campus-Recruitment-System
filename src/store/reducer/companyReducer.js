import * as actionType from '../action/actionType';

const initialState = {
  companyData: [],
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.COMPANY_DATA:
      return {
        ...state,
        companyData: [...state.companyData, action.data],
      };
    case actionType.DELET_COMAPNY:
      const newData = state.companyData.filter((data) => data.id !== action.id);
      return {
        ...state,
        companyData: [...newData],
      };
    default:
      return {
        ...state,
      };
  }
};

export default companyReducer;
