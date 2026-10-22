Stéphane Hamel

Platform Engineering · Agentic Systems · AI-Native Software Delivery

I build the foundations that make AI agents reliable.

I design agent harnesses, safety boundaries, evaluation pipelines, and developer platforms that make AI-assisted software delivery verifiable, recoverable, and useful to engineering teams.

My approach: bounded autonomy. Let agents do the work, enforce critical constraints in code, ground decisions in executed evidence, and keep humans in control of irreversible actions.

Focus: Agent harnesses · Safe execution · Evaluations · Developer experience · Distributed systems

Explore my projects · Engineering principles · Current focus

⸻

Selected work

01 — Autonomous Dev Loop

An agentic SDLC with deterministic guardrails.

GitHub issue → AI-generated pull request → evidence-backed review → bounded auto-fix → human merge.

* Safety: Protected paths, patch constraints, limited retries, and isolated execution without repository secrets.
* Evidence: Reviews use executed checks; failed, missing, or stale evidence cannot produce an approval.
* Reliability: Structured traces, checkpoints, recovery paths, and offline evaluations of agent decisions.

Proof: Source · Evaluation dashboard · Guardrail incident and design decision

02 — AI Dev Tools

An interactive agent harness for everyday development.

Specialized agents turn issues into proposed patches, with typed handoffs, resumable checkpoints, optional adversarial review, and validation against the repository’s own tests, lint, and type checks.

* Bug fixes must include evidence that reproduces the original failure.
* Review findings are grounded in checks actually executed, not agent confidence.
* Changes stop as uncommitted patches for human review.

Proof: Source and workflow · Tool-grounded review decision

03 — Agent Patterns

Reusable architecture patterns extracted from working agent systems.

A catalog of multi-agent patterns with executable examples, failure modes, trade-offs, and guidance on when not to use them. Patterns are traced back to their use in Autonomous Dev Loop and AI Dev Tools, rather than presented as an untested framework.

Proof: Pattern catalog · Browse the patterns

⸻

Infrastructure & runtime

GitOps Homelab

A self-hosted AI stack operating under real hardware constraints.

Bare-metal microk8s + ArgoCD running local chat, code, vision, speech-to-text, and text-to-speech components on a 6 GB GTX 1060. Infrastructure changes flow through Git; architecture decisions and actual incidents are documented alongside the system.

Proof: Architecture and source · Incident runbook · Model quantization decision

Related foundations: Homelab Gateway — content-based AI service routing and observability · Sync Engine — idempotent webhook processing, reconciliation, and failure-driven testing.

⸻

How I engineer

* Code-enforced boundaries over prompt-only rules. Critical safety properties should not depend on whether a model follows instructions.
* Executed evidence over plausible output. Tests, evaluations, and traces are more useful than an agent saying “done.”
* Failures as design inputs. Incidents inform safeguards, recovery paths, and architectural decisions.
* Systems over isolated features. I optimize for reusable foundations, developer experience, and long-term operability.
* Decisions in writing. Trade-offs, rejected alternatives, and consequences should remain visible in the repositories.

Current focus

Agentic Platform / Agentic Foundations: reliable agent execution, orchestration, evaluation, observability, safety boundaries, and the internal platforms that help engineering teams adopt them.

Technologies: TypeScript/JavaScript · Python · .NET · GitHub Actions · Docker · Kubernetes · ArgoCD · Ollama

⸻

View all repositories →