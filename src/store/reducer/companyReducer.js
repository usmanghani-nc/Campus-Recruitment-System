import * as actionType from '../action/actionType';

const initialState = {
  companyData: null,
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.COMPANY_DATA:
      console.log("COMPANY_DATA dispatch");
      return {
        ...state,
        companyData: action.company,
      };
    default:
      return {
        ...state,
      };
  }
};

export default companyReducer;