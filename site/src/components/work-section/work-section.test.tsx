import { render, screen } from '@testing-library/react';
import WorkSection from './work-section';
import { projects } from '../../data/projects';

describe('WorkSection', () => {
  it('renders one card per project', () => {
    render(<WorkSection />);

    projects.forEach((project) => {
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
    });
  });

  it('features only the first project', () => {
    render(<WorkSection />);

    expect(screen.getAllByText('Featured')).toHaveLength(1);
  });
});
