import * as Constants from '../constants';

export default function setNoResult(status) {
    return {
        type: Constants.SET_NO_RESULT,
        payload: status
    }
}
