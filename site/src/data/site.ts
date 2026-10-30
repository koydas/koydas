import type { NavItem } from '../types';

export const site = {
  name: 'Stéphane Hamel',
  initials: 'SH',
  githubUrl: 'https://github.com/koydas',
  linkedinUrl: 'https://www.linkedin.com/in/st%C3%A9phane-hamel/',
  contactUrl: 'mailto:koydas@hotmail.com',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Writing', href: '#writing' },
];

export const pillars = [
  { icon: 'shield', label: 'Deterministic safeguards' },
  { icon: 'chart', label: 'Executed evidence' },
  { icon: 'users', label: 'Human control' },
  { icon: 'file', label: 'Architecture in writing' },
] as const;

export const focusAreas = [
  'Agent harnesses',
  'Reliable orchestration',
  'Evaluation systems',
  'Developer platforms',
  'Safe autonomy',
];

export const stack = [
  'Node.js',
  '.NET',
  'Python',
  'Kubernetes',
  'ArgoCD',
  'GitHub Actions',
  'Claude API',
  'Ollama',
];

export const practices = [
  {
    title: 'Decisions in writing',
    body: '100+ ADRs across these repos, each with rejected alternatives and consequences.',
  },
  {
    title: 'Incidents, not hypotheticals',
    body: 'Guardrails and config trace back to a specific failure: a deleted test suite, a CUDA OOM, a Helm setting that never reached the pod.',
  },
  {
    title: 'Measure, then decide',
    body: 'Quantization chosen by benchmark and by executing the generated code, not by reputation.',
  },
  {
    title: 'Honest scope',
    body: "What's enforced in code and what's only asked of a model are documented separately.",
  },
];

export const writing = [
  {
    title: 'LLM agent guardrails',
    summary:
      'The incidents behind the hard guardrails — including an agent that replaced a 26-test suite with an 18-line stub.',
    href: 'https://github.com/koydas/autonomous-dev-loop/blob/main/docs/adr/0009-llm-agent-guardrails.md',
    meta: 'autonomous-dev-loop · ADR-0009',
  },
  {
    title: 'Static verification backstop',
    summary:
      'Moving guardrails out of prompts and into deterministic checks before a PR opens.',
    href: 'https://github.com/koydas/autonomous-dev-loop/blob/main/docs/adr/0019-static-verification-backstop.md',
    meta: 'autonomous-dev-loop · ADR-0019',
  },
  {
    title: 'Ollama Q4 quantization',
    summary:
      'Evaluating local models on a 6 GB GPU by running what they produce.',
    href: 'https://github.com/koydas/gitops-homelab/blob/main/docs/adr/0011-ollama-q4-quantization.md',
    meta: 'gitops-homelab · ADR-0011',
  },
];
