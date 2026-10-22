import { render, screen } from '@testing-library/react';
import App from './App';
import { navItems } from './data/site';

describe('App', () => {
  it('renders a section for every navigation target', () => {
    const { container } = render(<App />);

    navItems.forEach((item) => {
      expect(container.querySelector(item.href)).not.toBeNull();
    });
  });

  it('renders the main landmark with the hero headline', () => {
    render(<App />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/reliable/i);
  });
});
