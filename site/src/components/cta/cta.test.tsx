import { render, screen } from '@testing-library/react';
import Cta from './cta';

describe('Cta', () => {
  it('invites contact and links to GitHub', () => {
    render(<Cta />);

    expect(
      screen.getByRole('heading', { name: /interested in working together/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact me/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /see github/i })).toHaveAttribute(
      'href',
      'https://github.com/koydas'
    );
  });
});
