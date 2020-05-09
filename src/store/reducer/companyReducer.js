import * as actionType from '../action/actionType';

const initialState = {
  companyData: [],
  vacancys: [],
  notifications: [],
  singleData: false,
  successful: false,
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
        singleData: action.updatedData,
      };
    case actionType.COMPANY_UPDATED:
      const index = state.companyData.findIndex((data) => data.id === action.updatedData.id);
      const arr = [...state.companyData];
      arr[index] = action.updatedData;
      return {
        ...state,
        singleData: action.updatedData,
        companyData: [...arr],
      };
    case actionType.VACANCY_POST:
      let newArr = [action.data, ...state.vacancys];
      return {
        ...state,
        vacancys: [...newArr],
        successful: 'successful vacancy post',
      };
    case actionType.VACANCYS:
      return {
        ...state,
        vacancys: [...state.vacancys, action.vacancys].reverse(),
      };
    case actionType.NOTIFICATION:
      return {
        ...state,
      };
    case actionType.GET_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.notification]
      };
    case actionType.UPDATE_VISITED:
      const notifIndex = state.notifications.findIndex(item => item.notId === action.visitedId)
      const newArray = [...state.notifications]
      newArray[notifIndex].data.visited = true;
      return {
        ...state,
        notifications: [...newArray]
      };
    default:
      return {
        ...state,
      };
  }
};

export default companyReducer;