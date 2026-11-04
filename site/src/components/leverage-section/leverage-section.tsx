import Section from '../section/section';
import { leverage, leverageClosing } from '../../data/site';
import { Closing, Evidence, Principle, Principles } from './leverage-section.styles';

export default function LeverageSection() {
  return (
    <Section id="impact" eyebrow="Impact" heading="How I multiply engineering impact">
      <Principles>
        {leverage.map((principle) => (
          <Principle key={principle.title}>
            <h3>{principle.title}</h3>
            <p>{principle.body}</p>
            <Evidence aria-label={`Evidence: ${principle.title}`}>
              {principle.evidence.map((item) => (
                <li key={item.source}>
                  <strong>{item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer">{item.source}<span aria-hidden="true"> ↗</span></a> : item.source}</strong>
                  {' '}{item.text}
                </li>
              ))}
            </Evidence>
          </Principle>
        ))}
      </Principles>
      <Closing>{leverageClosing}</Closing>
    </Section>
  );
}
