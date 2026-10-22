import Section from '../section/section';
import { writing } from '../../data/site';
import { Entry, List } from './writing-section.styles';

export default function WritingSection() {
  return (
    <Section id="writing" eyebrow="Writing" heading="Decisions in writing">
      <List>
        {writing.map((entry) => (
          <Entry key={entry.href}>
            <a href={entry.href} target="_blank" rel="noopener noreferrer">
              <h3>{entry.title}</h3>
              <p>{entry.summary}</p>
              <small>{entry.meta}</small>
            </a>
          </Entry>
        ))}
      </List>
    </Section>
  );
}
