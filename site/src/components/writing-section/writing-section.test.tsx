import { render, screen } from '@testing-library/react';
import WritingSection from './writing-section';
import { writing } from '../../data/site';

describe('WritingSection', () => {
  it('links every entry to its source document in a new tab', () => {
    render(<WritingSection />);

    writing.forEach((entry) => {
      const link = screen.getByRole('link', { name: new RegExp(entry.title, 'i') });
      expect(link).toHaveAttribute('href', entry.href);
      expect(link).toHaveAttribute('target', '_blank');
    });
  });
});
