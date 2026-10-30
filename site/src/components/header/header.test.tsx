import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './header';

// happy-dom evaluates media queries, so the viewport decides what is visible.
function setViewport(width: number) {
  (window as unknown as { happyDOM: { setViewport(v: { width: number; height: number }): void } }).happyDOM.setViewport({
    width,
    height: 800,
  });
}

describe('Header', () => {
  afterEach(() => {
    setViewport(1024);
  });

  it('shows the owner name and the primary navigation on desktop', () => {
    setViewport(1200);
    render(<Header />);

    expect(screen.getByText(/stéphane hamel/i)).toBeInTheDocument();
    ['Home', 'Work', 'About', 'Writing'].forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument();
    });
  });

  it('links Contact to email and shows the GitHub and LinkedIn profiles', () => {
    setViewport(1200);
    render(<Header />);

    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute(
      'href',
      'mailto:koydas@hotmail.com'
    );
    expect(screen.getByRole('link', { name: /github profile/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin profile/i })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/st%C3%A9phane-hamel/'
    );
  });

  it('toggles the mobile menu', async () => {
    setViewport(500);
    const user = userEvent.setup();
    render(<Header />);

    const toggle = screen.getByRole('button', { name: /open menu/i });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('link', { name: 'Work' })).not.toBeInTheDocument();

    await user.click(toggle);
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
    expect(screen.getByRole('link', { name: 'Work' })).toBeInTheDocument();
  });

  it('closes the mobile menu after following a link', async () => {
    setViewport(500);
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole('button', { name: /open menu/i }));
    await user.click(screen.getByRole('link', { name: 'Work' }));

    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument();
  });
});
