import styled from 'styled-components';
import { theme } from '../../theme';

export const CardArticle = styled.article<{ $featured: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.3rem;
  border-radius: ${theme.radius.lg};
  background: ${theme.color.surface};
  border: 1px solid ${({ $featured }) => ($featured ? theme.color.accent : theme.color.border)};
  box-shadow: ${({ $featured }) => ($featured ? '0 0 0 1px rgba(47, 99, 240, 0.25)' : 'none')};
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.color.subtle};
  font-size: 0.8rem;
  letter-spacing: 0.1em;
`;

export const Badge = styled.span`
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  border: 1px solid ${theme.color.accent};
  background: rgba(47, 99, 240, 0.15);
  color: ${theme.color.accentSoft};
  font-size: 0.75rem;
  letter-spacing: 0;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.4rem;
`;

export const Summary = styled.p`
  margin: 0;
  color: ${theme.color.muted};
`;

export const Highlights = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.2rem;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.85rem;
  color: ${theme.color.muted};

  li {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  svg {
    color: ${theme.color.accentSoft};
  }
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    padding: 0.2rem 0.7rem;
    border: 1px solid ${theme.color.borderStrong};
    border-radius: 999px;
    font-size: 0.78rem;
    color: ${theme.color.muted};
  }
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-top: auto;
`;

export const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: ${theme.color.accentSoft};
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const Commands = styled.ul`
  display: grid;
  gap: 0.5rem;
  margin: 0;
  padding: 0.9rem;
  list-style: none;
  border: 1px solid ${theme.color.border};
  border-radius: ${theme.radius.md};
  background: ${theme.color.bg};
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.85rem;
  color: ${theme.color.accentSoft};
`;

export const VisualBox = styled.div`
  padding: 1rem;
  border: 1px solid ${theme.color.border};
  border-radius: ${theme.radius.md};
  background: ${theme.color.bg};
`;
