import { render, screen } from '@testing-library/react';
import Movie from '../components/movie';

test('should render Movie component', () => {
    const movie = {
        poster_path: 'fakePath',
        title: 'fakeTitle',
        release_date: 'fakeYear'
    }
    render(<Movie movie={movie} />);
    const moviePoster = screen.getByTestId("movie-poster")
    const movieTitle = screen.getByTestId("movie-title")
    const movieYear = screen.findByTestId("movie-year")

    expect(moviePoster).toBeInTheDocument();
    expect(movieTitle).toBeInTheDocument();
    expect(movieYear).toBeInTheDocument();

});
