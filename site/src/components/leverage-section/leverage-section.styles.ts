import styled from 'styled-components';
import { desktop, theme } from '../../theme';

export const Principles = styled.ul`
  display: grid;
  gap: 1.75rem 2.5rem;
  margin: 1.5rem 0 0;
  padding: 0;
  list-style: none;

  ${desktop} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const Principle = styled.li`
  min-width: 0;
  padding-top: 1rem;
  border-top: 1px solid ${theme.color.borderStrong};

  h3 {
    margin: 0 0 0.4rem;
    font-size: 1.1rem;
  }

  > p {
    margin: 0 0 0.8rem;
    color: ${theme.color.text};
    line-height: 1.55;
  }
`;

export const Evidence = styled.ul`
  display: grid;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
  color: ${theme.color.muted};
  font-size: 0.9rem;
  line-height: 1.55;

  strong {
    color: ${theme.color.accentSoft};
    font-weight: 600;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover,
    &:focus-visible {
      text-decoration: underline;
    }
  }
`;

export const Closing = styled.p`
  margin: 2rem 0 0;
  padding-left: 1rem;
  border-left: 2px solid ${theme.color.accent};
  max-width: 46rem;
  color: ${theme.color.muted};
  font-size: 1.05rem;
  text-wrap: balance;
`;
