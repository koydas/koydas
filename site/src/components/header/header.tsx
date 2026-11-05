import Icon from '../icons/icon';
import LinkButton from '../link-button/link-button';
import { navItems, site } from '../../data/site';
import { Actions, DesktopOnly, HeaderBar, HeaderInner, IconLink, Nav, NavLink } from './header.styles';

// The brand, the site switcher, the GitHub link and the link back to the portfolio live in the shared top bar
// (site-kit). This row is the page's own navigation: it scrolls sideways on a phone, without script.
export default function Header() {
  return (
    <HeaderBar>
      <HeaderInner>
        <Nav aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </Nav>

        <Actions>
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
        </Actions>
      </HeaderInner>
    </HeaderBar>
  );
}
