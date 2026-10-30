import type { Project } from '../types';

const GITHUB = 'https://github.com/koydas';

export const projects: Project[] = [
  {
    id: 'autonomous-dev-loop',
    title: 'Autonomous Dev Loop',
    summary:
      'Issue → AI PR → evidence-backed AI review → auto-fix → human merge, on GitHub Actions.',
    highlights: ['2,400+ tests', '59 ADRs', 'Eval gates'],
    tags: ['GitHub Actions', 'Guardrails', 'Multi-agent'],
    links: [
      { label: 'Live demo', href: 'https://koydas.github.io/autonomous-dev-loop/' },
      { label: 'GitHub', href: `${GITHUB}/autonomous-dev-loop` },
    ],
    visual: { type: 'pipeline' },
  },
  {
    id: 'ai-dev-tools',
    title: 'AI Dev Tools',
    summary:
      'Interactive agent workflows in Claude Code, grounded in real test results.',
    highlights: ['Typed builders', 'Adversarial challenger', 'Test-running reviewer'],
    tags: ['Claude Code', 'DevEx', 'Workflow'],
    links: [
      { label: 'Dashboard', href: 'https://koydas.github.io/ai-dev-tools/' },
      { label: 'GitHub', href: `${GITHUB}/ai-dev-tools` },
    ],
    visual: {
      type: 'commands',
      commands: ['/pr-review', '/pr-fixer', '/issue-code-generation'],
    },
  },
  {
    id: 'agent-patterns',
    title: 'Agent Patterns',
    summary: '17 multi-agent patterns indexed by the problem they solve.',
    highlights: ['Diagrams', 'Trade-offs', 'Failure modes', 'Runnable code'],
    tags: ['Patterns', 'Agents', 'Architecture'],
    links: [{ label: 'View project', href: `${GITHUB}/agent-patterns` }],
  },
];


export const foundations: Project[] = [
  {
    id: 'sync-engine',
    title: 'Sync Engine',
    summary: 'Eventual consistency under real-world failure: webhooks for speed, REST reconciliation for recovery.',
    highlights: ['90 tests', 'Property-based convergence', 'Versioned idempotent writes'],
    tags: ['Distributed Systems', 'Reconciliation', 'Python'],
    links: [{ label: 'GitHub', href: `${GITHUB}/sync-engine` }],
  },
  {
    id: 'fullstack-pilot',
    title: 'FullStack Pilot',
    summary: 'A polyglot reference platform where architecture decisions become executable CI guarantees.',
    highlights: ['Database upgrade safety', 'Runtime consistency', 'End-to-end integration'],
    tags: ['Platform Engineering', 'CI/CD', 'Polyglot'],
    links: [{ label: 'GitHub', href: `${GITHUB}/fullstack-pilot` }],
  },
];

export const infrastructure: Project = {
  id: 'gitops-homelab',
  title: 'GitOps Homelab',
  summary:
    'Chat, code, vision and speech models on one 6 GB GPU — bare-metal microk8s, ArgoCD, GPU time-slicing.',
  highlights: [],
  tags: ['Kubernetes', 'ArgoCD', 'Ollama'],
  links: [{ label: 'View project', href: `${GITHUB}/gitops-homelab` }],
};
