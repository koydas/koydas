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
  button:focus-visible {
    outline: 2px solid ${theme.color.accentSoft};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
`;
