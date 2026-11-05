import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Header', () => {
  it('lists the page navigation', () => {
    render(<Header />);

    ['Home', 'Work', 'Impact', 'About', 'Writing'].forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument();
    });
  });

  it('links Contact to email and the LinkedIn profile', () => {
    render(<Header />);

    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute(
      'href',
      'mailto:koydas@hotmail.com'
    );
    expect(screen.getByRole('link', { name: /linkedin profile/i })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/st%C3%A9phane-hamel/'
    );
  });

  it('needs no script to navigate: no menu button, the row scrolls sideways', () => {
    render(<Header />);

    expect(screen.queryByRole('button')).toBeNull();
  });
});
