import type { ReactNode } from 'react';
import { Eyebrow, SectionHeading, SectionWrapper } from './section.styles';

interface SectionProps {
  id: string;
  eyebrow: string;
  heading?: string;
  children: ReactNode;
}

export default function Section({ id, eyebrow, heading, children }: SectionProps) {
  const headingId = `${id}-title`;

  return (
    <SectionWrapper id={id} aria-labelledby={headingId}>
      <Eyebrow id={heading ? undefined : headingId}>{eyebrow}</Eyebrow>
      {heading && <SectionHeading id={headingId}>{heading}</SectionHeading>}
      {children}
    </SectionWrapper>
  );
}
