import { render, screen } from '@testing-library/react';
import PipelineDiagram from './pipeline-diagram';

describe('PipelineDiagram', () => {
  it('lists the five pipeline steps in order', () => {
    render(<PipelineDiagram />);

    const items = screen.getAllByRole('listitem').map((item) => item.textContent);
    expect(items).toEqual(['Issue', 'AI PR', 'Review', 'Auto-fix', 'Human merge']);
  });

  it('shows step hints only when requested', () => {
    const { rerender } = render(<PipelineDiagram />);
    expect(screen.queryByText(/plan · build · test/i)).not.toBeInTheDocument();

    rerender(<PipelineDiagram showHints />);
    expect(screen.getByText(/plan · build · test/i)).toBeInTheDocument();
  });
});
