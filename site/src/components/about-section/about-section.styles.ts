import styled from 'styled-components';
import { desktop, theme } from '../../theme';

export const Layout = styled.div`
  display: grid;
  gap: 1.5rem;

  ${desktop} {
    grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  }
`;

export const Thesis = styled.p`
  margin: 0 0 1.5rem;
  max-width: 40rem;
  font-size: 1.1rem;
  color: ${theme.color.muted};

  strong {
    color: ${theme.color.text};
  }
`;

export const Practices = styled.dl`
  display: grid;
  gap: 1rem;
  margin: 0 0 1.5rem;

  dt {
    font-weight: 600;
  }

  dd {
    margin: 0.2rem 0 0;
    color: ${theme.color.muted};
    font-size: 0.95rem;
  }
`;

export const Stack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    padding: 0.25rem 0.75rem;
    border: 1px solid ${theme.color.borderStrong};
    border-radius: 999px;
    font-size: 0.8rem;
    color: ${theme.color.muted};
  }
`;

export const FocusPanel = styled.aside`
  align-self: start;
  padding: 1.3rem;
  border: 1px solid ${theme.color.border};
  border-radius: ${theme.radius.lg};
  background: ${theme.color.surface};

  h3 {
    margin: 0 0 1rem;
    font-size: 1.05rem;
  }

  ul {
    display: grid;
    gap: 0.7rem;
    margin: 0;
    padding: 0;
    list-style: none;
    color: ${theme.color.muted};
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  svg {
    color: ${theme.color.accentSoft};
  }
`;
