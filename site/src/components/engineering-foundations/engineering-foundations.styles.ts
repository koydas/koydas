import styled from 'styled-components';
import { desktop, theme } from '../../theme';

export const Introduction = styled.p`
  max-width: 68ch;
  margin: 0 0 1.5rem;
  color: ${theme.color.muted};
  line-height: 1.65;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1rem;

  ${desktop} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const FoundationCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-width: 0;
  padding: 1.4rem;
  border: 1px solid ${theme.color.border};
  border-radius: ${theme.radius.lg};
  background: ${theme.color.surface};

  h3 { margin: 0; font-size: 1.25rem; }
  p { margin: 0; line-height: 1.6; }
`;

export const Description = styled.p`
  color: ${theme.color.muted};
  font-size: 0.88rem;
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: auto 0 0;

  li {
    border: 1px solid ${theme.color.borderStrong};
    border-radius: 999px;
    padding: 0.2rem 0.7rem;
    color: ${theme.color.muted};
    font-size: 0.78rem;
  }
`;

export const FoundationLink = styled.a`
  align-self: flex-start;
  color: ${theme.color.accentSoft};
  font-size: 0.9rem;
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;
