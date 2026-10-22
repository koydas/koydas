import Icon from '../icons/icon';
import Section from '../section/section';
import { infrastructure } from '../../data/projects';
import { InfraBody, InfraIcon, InfraLink, InfraTags, InfraWrapper } from './infra-card.styles';

export default function InfraCard() {
  const [link] = infrastructure.links;

  return (
    <Section id="infrastructure" eyebrow="Infrastructure & runtime">
      <InfraWrapper>
        <InfraIcon aria-hidden="true">
          <Icon name="cube" size={30} />
        </InfraIcon>
        <InfraBody>
          <h3>{infrastructure.title}</h3>
          <p>{infrastructure.summary}</p>
          <InfraTags aria-label="Technologies">
            {infrastructure.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </InfraTags>
        </InfraBody>
        <InfraLink href={link.href} target="_blank" rel="noopener noreferrer">
          {link.label}
          <Icon name="arrow-up-right" size={14} />
        </InfraLink>
      </InfraWrapper>
    </Section>
  );
}
