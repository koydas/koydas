import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: ${theme.color.text};
    background-color: ${theme.color.bg};
    line-height: 1.5;
    color-scheme: dark;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: calc(var(--sk-bar-h) + 8px);
  }

  body {
    margin: 0;
    min-height: 100vh;
    background:
      radial-gradient(900px 500px at 85% -5%, rgba(47, 99, 240, 0.18), transparent),
      ${theme.color.bg};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  a:focus-visible,
  button:focus-visible,
  summary:focus-visible {
    outline: ${theme.focus.width} solid ${theme.focus.color};
    outline-offset: ${theme.focus.offset};
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
`;
