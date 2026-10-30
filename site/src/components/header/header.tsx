import { useState } from 'react';
import Icon from '../icons/icon';
import LinkButton from '../link-button/link-button';
import { navItems, site } from '../../data/site';
import {
  Actions,
  Brand,
  DesktopOnly,
  HeaderBar,
  HeaderInner,
  IconLink,
  MenuButton,
  Monogram,
  Nav,
  NavLink,
} from './header.styles';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <HeaderBar>
      <HeaderInner>
        <Brand href="#home">
          <Monogram aria-hidden="true">{site.initials}</Monogram>
          {site.name}
        </Brand>

        <Nav $open={menuOpen} aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </NavLink>
          ))}
        </Nav>

        <Actions>
          <IconLink
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <Icon name="github" />
          </IconLink>
          <IconLink
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <Icon name="linkedin" />
          </IconLink>
          <DesktopOnly>
            <LinkButton href={site.contactUrl} leadingIcon="mail">
              Contact
            </LinkButton>
          </DesktopOnly>
          <MenuButton
            type="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          </MenuButton>
        </Actions>
      </HeaderInner>
    </HeaderBar>
  );
}
