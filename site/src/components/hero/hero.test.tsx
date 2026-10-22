import { render, screen } from '@testing-library/react';
import Hero from './hero';

describe('Hero', () => {
  it('states the positioning headline', () => {
    render(<Hero />);

    expect(
      screen.getByRole('heading', { level: 1, name: /make ai agents reliable/i })
    ).toBeInTheDocument();
  });

  it('links to the work section and to GitHub', () => {
    render(<Hero />);

    expect(screen.getByRole('link', { name: /explore my work/i })).toHaveAttribute('href', '#work');
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
      'href',
      'https://github.com/koydas'
    );
  });

  it('lists the four pillars', () => {
    render(<Hero />);

    expect(screen.getByText(/deterministic safeguards/i)).toBeInTheDocument();
    expect(screen.getByText(/architecture in writing/i)).toBeInTheDocument();
  });
});
