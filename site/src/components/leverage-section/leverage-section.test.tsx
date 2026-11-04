import { render, screen } from '@testing-library/react';
import LeverageSection from './leverage-section';
import { leverage, leverageClosing } from '../../data/site';

describe('LeverageSection', () => {
  it('renders the four principles under a labelled section', () => {
    render(<LeverageSection />);

    expect(screen.getByRole('region', { name: /multiply engineering impact/i })).toBeInTheDocument();
    expect(leverage).toHaveLength(4);
    leverage.forEach((principle) => {
      expect(screen.getByRole('heading', { level: 3, name: principle.title })).toBeInTheDocument();
    });
    expect(screen.getByText(leverageClosing)).toBeInTheDocument();
  });

  it('backs every principle with evidence and opens public sources safely', () => {
    const { container } = render(<LeverageSection />);

    leverage.forEach((principle) => expect(principle.evidence.length).toBeGreaterThan(0));
    container.querySelectorAll('a').forEach((link) => {
      expect(link.getAttribute('href')).toMatch(/^https:\/\/github\.com\/koydas\//);
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
