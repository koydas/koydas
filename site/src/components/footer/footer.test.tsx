import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Footer', () => {
  it('shows the current year and owner name', () => {
    render(<Footer />);

    expect(
      screen.getByText(new RegExp(`${new Date().getFullYear()} Stéphane Hamel`))
    ).toBeInTheDocument();
  });
});
