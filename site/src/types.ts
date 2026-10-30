export type IconName =
  | 'github'
  | 'linkedin'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'mail'
  | 'shield'
  | 'chart'
  | 'users'
  | 'file'
  | 'bot'
  | 'check-circle'
  | 'gear'
  | 'git-branch'
  | 'menu'
  | 'close'
  | 'cube';

export interface ProjectLink {
  label: string;
  href: string;
}

export type ProjectVisual =
  | { type: 'pipeline' }
  | { type: 'commands'; commands: string[] };

export interface Project {
  id: string;
  title: string;
  summary: string;
  highlights: string[];
  tags: string[];
  links: ProjectLink[];
  visual?: ProjectVisual;
}

export interface NavItem {
  label: string;
  href: string;
}
