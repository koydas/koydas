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

  it('keeps systems engineering projects distinct from featured AI work', () => {
    const { container } = render(<App />);

    const foundation = container.querySelector('#foundations');
    expect(foundation).not.toBeNull();
    expect(foundation).toHaveTextContent('Sync Engine');
    expect(foundation).toHaveTextContent('FullStack Pilot');
    expect(foundation?.querySelectorAll('a[href^="https://github.com/koydas/"]')).toHaveLength(2);
    expect(container.querySelector('#work')).not.toHaveTextContent('Sync Engine');
  });

  it('renders the main landmark with the hero headline', () => {
    render(<App />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/reliable/i);
  });

  it('keeps the Home anchor on the page header and the hero, so #home reveals the headline', () => {
    const { container } = render(<App />);

    const home = container.querySelector('#home');
    expect(container.querySelectorAll('#home')).toHaveLength(1);
    expect(home?.querySelector('h1')).toHaveTextContent(/reliable/i);
    expect(home).toContainElement(screen.getByRole('link', { name: /explore my work/i }));
  });
});
