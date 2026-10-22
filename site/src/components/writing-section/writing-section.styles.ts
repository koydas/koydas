import styled from 'styled-components';
import { desktop, theme } from '../../theme';

export const List = styled.ul`
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;

  ${desktop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const Entry = styled.li`
  a {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 100%;
    box-sizing: border-box;
    padding: 1.2rem;
    border: 1px solid ${theme.color.border};
    border-radius: ${theme.radius.lg};
    background: ${theme.color.surface};
    color: inherit;
    text-decoration: none;

    &:hover,
    &:focus-visible {
      border-color: ${theme.color.accent};
    }
  }

  h3 {
    margin: 0;
    font-size: 1.1rem;
  }

  p {
    margin: 0;
    color: ${theme.color.muted};
    font-size: 0.95rem;
  }

  small {
    margin-top: auto;
    color: ${theme.color.subtle};
  }
`;
