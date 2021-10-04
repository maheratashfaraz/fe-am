import axios from 'axios';
import { getMovies } from '../../services/getMovies'

jest.mock('axios');
it("calls the endpoint and returns lisf of movies", async () => {
    const res = {
        data: {
            results: [
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
    }

    axios.mockImplementationOnce(() =>
        Promise.resolve({
            data: {
                results: [
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
        })
    )
    let data = await getMovies('wolf of wallstreet')
    expect(data).toEqual(res)
});

