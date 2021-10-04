import { render, screen } from '@testing-library/react';
import SearchBox from '../components/SearchBox';


test('should render SearchBox component', () => {
    render(<SearchBox />);
    const inputBox = screen.getByTestId("input-box")
    const searchButton = screen.getByTestId("search-button")

    expect(inputBox).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();

});
