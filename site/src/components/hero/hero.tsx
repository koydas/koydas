import Icon from '../icons/icon';
import LinkButton from '../link-button/link-button';
import PipelineDiagram from '../pipeline-diagram/pipeline-diagram';
import { pillars, site } from '../../data/site';
import { PageHead } from '../../site-kit/react/SiteShell';
import {
  Actions,
  Evidence,
  HeroSection,
  Panel,
  PanelTitle,
  Pillar,
  Pillars,
} from './hero.styles';

const evidenceChecks = [
  'Run the test suite',
  'Static verification',
  'Evidence-backed verdict',
  'Human merge gate',
];

export default function Hero() {
  return (
    <>
    <PageHead
      eyebrow="AI-native engineering · Platform engineering · DevEx"
      title="I build the foundations that make AI agents reliable."
      lede="Agent harnesses, safe execution, evaluations and developer platforms."
      titleId="hero-title"
    />
    <HeroSection id="home" aria-labelledby="hero-title">
      <div>
        <Actions>
          <LinkButton href="#work" trailingIcon="arrow-right">
            Explore my work
          </LinkButton>
          <LinkButton
            href={site.githubUrl}
            variant="secondary"
            leadingIcon="github"
            trailingIcon="arrow-up-right"
          >
            GitHub
          </LinkButton>
        </Actions>
        <Pillars>
          {pillars.map((pillar) => (
            <Pillar key={pillar.label}>
              <Icon name={pillar.icon} size={26} />
              {pillar.label}
            </Pillar>
          ))}
        </Pillars>
      </div>

      <Panel aria-hidden="true">
        <PanelTitle>Autonomous Dev Loop</PanelTitle>
        <PipelineDiagram showHints />
        <Evidence>
          {evidenceChecks.map((check) => (
            <li key={check}>
              <Icon name="check-circle" size={16} />
              {check}
            </li>
          ))}
        </Evidence>
      </Panel>
    </HeroSection>
    </>
  );
}
