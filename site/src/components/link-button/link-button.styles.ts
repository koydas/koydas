import styled from 'styled-components';
import { theme } from '../../theme';

export const StyledLink = styled.a<{ $variant: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.8rem 1.3rem;
  border-radius: ${theme.radius.sm};
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  color: white;
  cursor: pointer;
  border: 1px solid
    ${({ $variant }) => ($variant === 'primary' ? theme.color.accent : theme.color.borderStrong)};
  background: ${({ $variant }) => ($variant === 'primary' ? theme.color.accent : 'transparent')};
  transition: filter 0.15s, border-color 0.15s;

  &:hover {
    filter: brightness(1.12);
    border-color: ${theme.color.accentSoft};
  }

  &:focus-visible {
    outline: 2px solid ${theme.color.accentSoft};
    outline-offset: 2px;
  }
`;
