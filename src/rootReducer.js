import { combineReducers } from 'redux';
import movies from './reducers/movies'
import noResult from './reducers/noResult'

export default combineReducers({
    movies,
    noResult
})
