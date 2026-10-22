import { site } from '../../data/site';
import { FooterBar } from './footer.styles';

export default function Footer() {
  return (
    <FooterBar>
      © {new Date().getFullYear()} {site.name}
    </FooterBar>
  );
}
