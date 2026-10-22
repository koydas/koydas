import Icon from '../icons/icon';
import LinkButton from '../link-button/link-button';
import PipelineDiagram from '../pipeline-diagram/pipeline-diagram';
import { pillars, site } from '../../data/site';
import {
  Accent,
  Actions,
  Eyebrow,
  Evidence,
  HeroSection,
  Lede,
  Panel,
  PanelTitle,
  Pillar,
  Pillars,
  Title,
} from './hero.styles';

const evidenceChecks = [
  'Run the test suite',
  'Static verification',
  'Evidence-backed verdict',
  'Human merge gate',
];

export default function Hero() {
  return (
    <HeroSection id="home" aria-labelledby="hero-title">
      <div>
        <Eyebrow>Platform Engineering · Agentic Systems</Eyebrow>
        <Title id="hero-title">
          I build the foundations that make AI agents <Accent>reliable.</Accent>
        </Title>
        <Lede>
          Agent harnesses, safe execution, evaluations, and developer platforms. I design systems
          that make automation trustworthy, observable, and useful in real software teams.
        </Lede>
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
  );
}
