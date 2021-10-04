import * as Constants from '../constants';

export default function setMoviesList(movies) {
    return {
        type: Constants.SET_MOVIES_LIST,
        payload: movies
    }
}
