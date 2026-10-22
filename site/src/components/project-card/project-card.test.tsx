import { render, screen } from '@testing-library/react';
import ProjectCard from './project-card';
import type { Project } from '../../types';

const project: Project = {
  id: 'demo',
  title: 'Demo Project',
  summary: 'A demo summary.',
  highlights: ['Fast', 'Safe'],
  tags: ['Node.js'],
  links: [{ label: 'View project', href: 'https://github.com/koydas/demo' }],
};

describe('ProjectCard', () => {
  it('renders title, summary, highlights and zero-padded index', () => {
    render(<ProjectCard project={project} index={1} />);

    expect(screen.getByRole('heading', { name: /demo project/i })).toBeInTheDocument();
    expect(screen.getByText(/a demo summary/i)).toBeInTheDocument();
    expect(screen.getByText('Fast')).toBeInTheDocument();
    expect(screen.getByText('01')).toBeInTheDocument();
  });

  it('shows the featured badge only when featured', () => {
    const { rerender } = render(<ProjectCard project={project} index={1} />);
    expect(screen.queryByText('Featured')).not.toBeInTheDocument();

    rerender(<ProjectCard project={project} index={1} featured />);
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('opens project links in a new tab safely', () => {
    render(<ProjectCard project={project} index={1} />);

    const link = screen.getByRole('link', { name: /view project/i });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders a command list visual', () => {
    render(
      <ProjectCard
        project={{ ...project, visual: { type: 'commands', commands: ['/pr-review'] } }}
        index={2}
      />
    );

    expect(screen.getByText('/pr-review')).toBeInTheDocument();
  });

  it('renders the pipeline visual', () => {
    render(<ProjectCard project={{ ...project, visual: { type: 'pipeline' } }} index={1} />);

    expect(screen.getByLabelText(/issue to human merge pipeline/i)).toBeInTheDocument();
  });

  it('omits the highlights list when there are none', () => {
    render(<ProjectCard project={{ ...project, highlights: [] }} index={3} />);

    expect(screen.queryByText('Fast')).not.toBeInTheDocument();
  });
});
