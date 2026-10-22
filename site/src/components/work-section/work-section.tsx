import ProjectCard from '../project-card/project-card';
import Section from '../section/section';
import { projects } from '../../data/projects';
import { Grid } from './work-section.styles';

export default function WorkSection() {
  return (
    <Section id="work" eyebrow="Selected work">
      <Grid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index + 1}
            featured={index === 0}
          />
        ))}
      </Grid>
    </Section>
  );
}
