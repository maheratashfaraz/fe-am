import { render, screen } from '@testing-library/react';
import MovieDetailsModal from '../components/MovieDetailsModal';

test('should render MovieDetailsModal component', () => {
    const movie = {
        poster_path: 'fakePath',
        title: 'fakeTitle',
        release_date: 'fakeYear'
    }
    render(<MovieDetailsModal movie={movie} openModal={true} />);
    const movieTitle = screen.getByTestId("movie-title")
    const movieYear = screen.findByTestId("movie-year")
    const closeButton = screen.findByTestId("close-button")

    expect(movieTitle).toBeInTheDocument();
    expect(movieYear).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();

});
