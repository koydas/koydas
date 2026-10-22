import styled from 'styled-components';
import { desktop, theme } from '../../theme';

export const InfraWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.3rem;
  border: 1px solid ${theme.color.border};
  border-radius: ${theme.radius.lg};
  background: ${theme.color.surface};

  ${desktop} {
    flex-direction: row;
    align-items: center;
    gap: 1.4rem;
  }
`;

export const InfraIcon = styled.span`
  display: grid;
  flex: none;
  place-items: center;
  width: 58px;
  height: 58px;
  border-radius: ${theme.radius.md};
  background: #0d2b27;
  border: 1px solid #1f6b5d;
  color: ${theme.color.success};
`;

export const InfraBody = styled.div`
  flex: 1;

  h3 {
    margin: 0 0 0.3rem;
    font-size: 1.25rem;
  }

  p {
    margin: 0 0 0.8rem;
    color: ${theme.color.muted};
  }
`;

export const InfraTags = styled.ul`
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

export const InfraLink = styled.a`
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
