import Icon from '../icons/icon';
import PipelineDiagram from '../pipeline-diagram/pipeline-diagram';
import type { Project, ProjectVisual } from '../../types';
import {
  Badge,
  CardArticle,
  CardLink,
  CardTitle,
  CardTop,
  Commands,
  Highlights,
  Links,
  Summary,
  Tags,
  VisualBox,
} from './project-card.styles';

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

function Visual({ visual }: { visual: ProjectVisual }) {
  if (visual.type === 'pipeline') {
    return (
      <VisualBox>
        <PipelineDiagram />
      </VisualBox>
    );
  }

  return (
    <Commands aria-label="Commands">
      {visual.commands.map((command) => (
        <li key={command}>{command}</li>
      ))}
    </Commands>
  );
}

export default function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  return (
    <CardArticle $featured={featured} aria-label={project.title}>
      <CardTop>
        <span>{String(index).padStart(2, '0')}</span>
        {featured && <Badge>Featured</Badge>}
      </CardTop>

      {project.visual && <Visual visual={project.visual} />}

      <CardTitle>{project.title}</CardTitle>
      <Summary>{project.summary}</Summary>

      {project.highlights.length > 0 && (
        <Highlights>
          {project.highlights.map((highlight) => (
            <li key={highlight}>
              <Icon name="check-circle" size={15} />
              {highlight}
            </li>
          ))}
        </Highlights>
      )}

      <Tags aria-label="Topics">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </Tags>

      <Links>
        {project.links.map((link) => (
          <CardLink key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
            <Icon name="arrow-up-right" size={14} />
          </CardLink>
        ))}
      </Links>
    </CardArticle>
  );
}
