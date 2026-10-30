import Section from '../section/section';
import { foundations } from '../../data/projects';
import { Description, Grid, FoundationCard, FoundationLink, Introduction, Tags } from './engineering-foundations.styles';

export default function EngineeringFoundations() {
  return (
    <Section id="foundations" eyebrow="Engineering foundations" heading="Reliability beyond AI">
      <Introduction>
        The same principles behind dependable AI systems apply to distributed state,
        data consistency, and delivery pipelines.
      </Introduction>
      <Grid>
        {foundations.map((project) => (
          <FoundationCard key={project.id} aria-label={project.title}>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <Description>{project.highlights.join(' · ')}</Description>
            <Tags aria-label="Topics">
              {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </Tags>
            <FoundationLink href={project.links[0].href} target="_blank" rel="noopener noreferrer">
              Explore on GitHub <span aria-hidden="true">↗</span>
            </FoundationLink>
          </FoundationCard>
        ))}
      </Grid>
    </Section>
  );
}
