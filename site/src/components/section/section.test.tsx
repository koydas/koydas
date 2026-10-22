import { render, screen } from '@testing-library/react';
import Section from './section';

describe('Section', () => {
  it('is labelled by its heading when one is given', () => {
    render(
      <Section id="about" eyebrow="About" heading="How I work">
        <p>Body</p>
      </Section>
    );

    expect(screen.getByRole('region', { name: /how i work/i })).toBeInTheDocument();
  });

  it('falls back to the eyebrow as its label', () => {
    render(
      <Section id="work" eyebrow="Selected work">
        <p>Body</p>
      </Section>
    );

    expect(screen.getByRole('region', { name: /selected work/i })).toBeInTheDocument();
  });
});
