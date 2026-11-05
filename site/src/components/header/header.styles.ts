import styled from 'styled-components';
import { desktop, theme } from '../../theme';

export const HeaderBar = styled.header`
  border-bottom: 1px solid ${theme.color.border};
`;

export const HeaderInner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  padding: ${theme.space[2]} ${theme.space[4]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.space[4]};

  ${desktop} {
    padding: ${theme.space[2]} ${theme.space[5]};
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex: 1;
  gap: ${theme.space[5]};
  min-width: 0;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: ${theme.color.muted};
  text-decoration: none;
  font-size: ${theme.text.md};

  &:hover,
  &:focus-visible {
    color: ${theme.color.text};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.space[2]};
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
