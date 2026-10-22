import { render, screen } from '@testing-library/react';
import LinkButton from './link-button';

describe('LinkButton', () => {
  it('opens external links in a new tab safely', () => {
    render(<LinkButton href="https://github.com/koydas">GitHub</LinkButton>);

    const link = screen.getByRole('link', { name: /github/i });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('keeps in-page anchors in the same tab', () => {
    render(<LinkButton href="#work">Explore</LinkButton>);

    expect(screen.getByRole('link', { name: /explore/i })).not.toHaveAttribute('target');
  });
});
