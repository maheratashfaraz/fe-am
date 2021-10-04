import * as Constants from '../constants'

const initialState = {
    list: []
}

export default (state = initialState, action = {}) => {

    switch (action.type) {
        case Constants.SET_MOVIES_LIST: {
            return {
                ...state,
                list: action.payload
            }
        }
    }
    return state;
}