import setMoviesList from '../../actions/setMoviesList'
import * as Constants from '../../constants';

describe('actions', () => {
    it('should create an action to set movies list', () => {
        const movies = [{
            "poster_path": "/sOxr33wnRuKazR9ClHek73T8qnK.jpg",
            "release_date": "2013-12-25",
            "title": "The Wolf of Wall Street"
        },
        {
            "poster_path": null,
            "release_date": "2019-10-21",
            "title": "The PM, the Playboy and the Wolf of Wall Street",
        },
        {
            "poster_path": null,
            "release_date": "1929-02-09",
            "title": "The Wolf of Wall Street",
        }]
        const expectedAction = {
            type: Constants.SET_MOVIES_LIST,
            payload: movies
        }
        expect(setMoviesList(movies)).toEqual(expectedAction)
    })
})