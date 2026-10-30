import { render, screen } from '@testing-library/react';
import Cta from './cta';

describe('Cta', () => {
  it('invites contact by email and links to GitHub and LinkedIn', () => {
    render(<Cta />);

    expect(
      screen.getByRole('heading', { name: /interested in working together/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact me/i })).toHaveAttribute(
      'href',
      'mailto:koydas@hotmail.com'
    );
    expect(screen.getByRole('link', { name: /see github/i })).toHaveAttribute(
      'href',
      'https://github.com/koydas'
    );
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/st%C3%A9phane-hamel/'
    );
  });
});
