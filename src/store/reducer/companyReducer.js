import * as actionType from '../action/actionType';

const initialState = {
  companyData: [],
  singleData: false,
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
    case actionType.COMPANY_UPDATE:
      return {
        ...state,
        singleData: action.data,
      };
    case actionType.COMPANY_UPDATED:
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

export default companyReducer;
