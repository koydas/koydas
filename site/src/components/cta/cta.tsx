import LinkButton from '../link-button/link-button';
import { site } from '../../data/site';
import { CtaActions, CtaBox, CtaWrapper } from './cta.styles';

export default function Cta() {
  return (
    <CtaWrapper id="contact" aria-labelledby="cta-title">
      <CtaBox>
        <div>
          <h2 id="cta-title">Interested in working together?</h2>
          <p>Open to opportunities in Agentic Platform Engineering and related roles.</p>
        </div>
        <CtaActions>
          <LinkButton href={site.contactUrl} leadingIcon="mail" trailingIcon="arrow-right">
            Contact me
          </LinkButton>
          <LinkButton
            href={site.githubUrl}
            variant="secondary"
            leadingIcon="github"
            trailingIcon="arrow-up-right"
          >
            See GitHub
          </LinkButton>
        </CtaActions>
      </CtaBox>
    </CtaWrapper>
  );
}
