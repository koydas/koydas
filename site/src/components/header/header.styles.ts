import styled from 'styled-components';
import { desktop, theme } from '../../theme';

export const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(5, 7, 15, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${theme.color.border};
`;

export const HeaderInner = styled.div`
  position: relative;
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  padding: 0.8rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${theme.color.text};
  font-weight: 600;
  text-decoration: none;
`;

export const Monogram = styled.span`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #11246b;
  border: 1px solid ${theme.color.accent};
  color: white;
  font-weight: 700;
`;

export const Nav = styled.nav<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 0.5rem 1.5rem 1rem;
  background: ${theme.color.bg};
  border-bottom: 1px solid ${theme.color.border};

  ${desktop} {
    display: flex;
    flex-direction: row;
    position: static;
    padding: 0;
    gap: 2.2rem;
    background: transparent;
    border: none;
  }
`;

export const NavLink = styled.a`
  padding: 0.7rem 0;
  color: ${theme.color.muted};
  text-decoration: none;
  font-size: 0.95rem;

  &:hover,
  &:focus-visible {
    color: ${theme.color.text};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const IconLink = styled.a`
  display: none;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: ${theme.radius.sm};
  border: 1px solid ${theme.color.borderStrong};
  color: ${theme.color.text};

  ${desktop} {
    display: grid;
  }
`;

export const DesktopOnly = styled.div`
  display: none;

  ${desktop} {
    display: block;
  }
`;

export const MenuButton = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  color: ${theme.color.text};
  cursor: pointer;

  ${desktop} {
    display: none;
  }
`;
