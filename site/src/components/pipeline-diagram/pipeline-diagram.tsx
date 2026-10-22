import { Fragment } from 'react';
import Icon from '../icons/icon';
import type { IconName } from '../../types';
import { Arrow, Flow, Step, StepBody, StepHint, StepIcon, StepLabel } from './pipeline-diagram.styles';

interface PipelineStep {
  label: string;
  hint: string;
  icon: IconName;
  tone: 'default' | 'accent' | 'success' | 'violet';
}

const steps: PipelineStep[] = [
  { label: 'Issue', hint: 'from backlog', icon: 'file', tone: 'default' },
  { label: 'AI PR', hint: 'plan · build · test', icon: 'bot', tone: 'accent' },
  { label: 'Review', hint: 'executed checks', icon: 'check-circle', tone: 'success' },
  { label: 'Auto-fix', hint: 'if needed', icon: 'gear', tone: 'default' },
  { label: 'Human merge', hint: 'the only gate', icon: 'git-branch', tone: 'violet' },
];

interface PipelineDiagramProps {
  showHints?: boolean;
}

export default function PipelineDiagram({ showHints = false }: PipelineDiagramProps) {
  return (
    <Flow aria-label="Issue to human merge pipeline">
      {steps.map((step, index) => (
        <Fragment key={step.label}>
          <Step>
            <StepBody>
              <StepIcon $tone={step.tone}>
                <Icon name={step.icon} size={24} />
              </StepIcon>
              <StepLabel>{step.label}</StepLabel>
              {showHints && <StepHint>{step.hint}</StepHint>}
            </StepBody>
            {index < steps.length - 1 && (
              <Arrow aria-hidden="true">
                <Icon name="arrow-right" size={14} />
              </Arrow>
            )}
          </Step>
        </Fragment>
      ))}
    </Flow>
  );
}
