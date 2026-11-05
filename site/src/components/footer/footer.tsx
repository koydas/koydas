import { site } from '../../data/site';
import { SiteFooter } from '../../site-kit/react/SiteShell';
import { Copyright, FooterBar } from './footer.styles';

export default function Footer() {
  return (
    <FooterBar>
      <SiteFooter current="portfolio" />
      <Copyright>
        © {new Date().getFullYear()} {site.name}
      </Copyright>
    </FooterBar>
  );
}
