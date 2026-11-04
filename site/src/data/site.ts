import type { NavItem, Principle } from '../types';

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
  { label: 'Impact', href: '#impact' },
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

const GITHUB = 'https://github.com/koydas';

export const leverageClosing =
  'The goal is to make the engineering organization stronger without making it dependent on me.';

export const leverage: Principle[] = [
  {
    title: 'Design for leverage',
    body: 'Build the foundation that removes a recurring problem for every team, not the feature that solves it once.',
    evidence: [
      {
        source: 'Maestro',
        text: 'A reusable engine with extension contracts. Around ten developers across several teams built templates on it without modifying the engine.',
      },
    ],
  },
  {
    title: 'Enable, don’t bottleneck',
    body: 'Contracts, guardrails and tooling that let other engineers ship without waiting on me.',
    evidence: [
      {
        source: 'Ravyx',
        text: 'AI-assisted workflows for implementation, pull request review and QA automation, standardised so they run the same way for everyone.',
      },
      {
        source: 'ai-dev-tools',
        text: 'Shipped as a Claude Code plugin: a repository adopts it with two settings keys.',
        href: `${GITHUB}/ai-dev-tools/blob/main/docs/adr/ADR-018-consumer-repo-adoption.md`,
      },
    ],
  },
  {
    title: 'Make quality systemic',
    body: 'Reliability moves from individual vigilance to automated checks, measured evidence and repeatable workflows.',
    evidence: [
      {
        source: 'autonomous-dev-loop',
        text: 'A failing test run forces the review verdict to REQUEST_CHANGES in code; each LLM stage is gated by offline evals.',
        href: `${GITHUB}/autonomous-dev-loop/blob/main/docs/adr/0024-tool-evidence-for-pr-review.md`,
      },
      {
        source: 'sync-engine',
        text: 'Every integration failure mode maps to an ADR and a test; convergence is checked by property-based tests under random faults.',
        href: `${GITHUB}/sync-engine`,
      },
    ],
  },
  {
    title: 'Lead through architecture',
    body: 'Explicit trade-offs and a coherent direction that teams can align to without needing my approval.',
    evidence: [
      {
        source: 'agent-patterns',
        text: 'Patterns named after problems met in running pipelines, each with trade-offs, failure modes and when not to use it.',
        href: `${GITHUB}/agent-patterns`,
      },
      {
        source: 'repo-orchestrator',
        text: 'Detects drift between repositories’ claims about each other. Scan and PR-impact analysis are implemented; remediation planning is design only.',
        href: `${GITHUB}/repo-orchestrator`,
      },
    ],
  },
];
