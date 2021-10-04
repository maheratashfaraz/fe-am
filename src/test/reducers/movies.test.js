import movies from '../../reducers/movies'
import * as Constants from '../../constants';

describe('movies reducer', () => {
    it('should return the initial state', () => {
        expect(movies(undefined, {})).toEqual(
            {
                list: []
            }
        )
    })
    it('should handle SET_MOVIES_LIST', () => {
        const list = []
        expect(
            movies(
                list,
                {
                    type: Constants.SET_MOVIES_LIST,
                    payload: [
                        {
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
                        }
                    ]
                }
            )
        ).toEqual(
            {
                list: [
                    {
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
                    }
                ]
            }
        )
    })
})