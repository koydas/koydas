import { render, screen } from '@testing-library/react';
import InfraCard from './infra-card';

describe('InfraCard', () => {
  it('presents the homelab with its technologies', () => {
    render(<InfraCard />);

    expect(screen.getByRole('heading', { name: /gitops homelab/i })).toBeInTheDocument();
    expect(screen.getByText('ArgoCD')).toBeInTheDocument();
  });

  it('links to the project repository', () => {
    render(<InfraCard />);

    expect(screen.getByRole('link', { name: /view project/i })).toHaveAttribute(
      'href',
      'https://github.com/koydas/gitops-homelab'
    );
  });
});
