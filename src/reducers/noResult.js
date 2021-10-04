import * as Constants from '../constants'

const initialState = {
    status: false
}

export default (state = initialState, action = {}) => {

    switch (action.type) {
        case Constants.SET_NO_RESULT: {
            return {
                ...state,
                status: action.payload
            }
        }
    }
    return state;
}