import { render } from '@testing-library/react';
import Icon from './icon';

describe('Icon', () => {
  it('is hidden from assistive tech', () => {
    const { container } = render(<Icon name="mail" />);

    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });

  it('applies the requested size', () => {
    const { container } = render(<Icon name="github" size={32} />);

    expect(container.querySelector('svg')).toHaveAttribute('width', '32');
  });
});
