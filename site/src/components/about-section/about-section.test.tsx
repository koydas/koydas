import { render, screen } from '@testing-library/react';
import AboutSection from './about-section';
import { focusAreas, practices } from '../../data/site';

describe('AboutSection', () => {
  it('states the thesis', () => {
    render(<AboutSection />);

    expect(screen.getByRole('heading', { name: /bounded autonomy/i })).toBeInTheDocument();
  });

  it('lists every working practice and focus area', () => {
    render(<AboutSection />);

    practices.forEach((practice) => {
      expect(screen.getByText(practice.title)).toBeInTheDocument();
    });
    focusAreas.forEach((area) => {
      expect(screen.getByText(area)).toBeInTheDocument();
    });
  });
});
