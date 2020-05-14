import * as actionType from '../action/actionType';
const initailState = {
    colleges: []
}

const colleges = (state = initailState, action) => {
    switch (action.type) {
        case actionType.COLLEGES_DATA:
            return {
                ...state,
                colleges: [...state.colleges, action.data]
            }
        default:
            return {
                ...state
            }
    }
}

export default colleges