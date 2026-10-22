import Icon from '../icons/icon';
import Section from '../section/section';
import { focusAreas, practices, stack } from '../../data/site';
import { FocusPanel, Layout, Practices, Stack, Thesis } from './about-section.styles';

export default function AboutSection() {
  return (
    <Section id="about" eyebrow="About" heading="Bounded autonomy">
      <Layout>
        <div>
          <Thesis>
            Let agents do the work, but <strong>enforce in code what a prompt can only ask</strong>,
            ground every verdict in executed evidence, and keep a human at the irreversible step.
            Every project here is that idea under a different constraint.
          </Thesis>
          <Practices>
            {practices.map((practice) => (
              <div key={practice.title}>
                <dt>{practice.title}</dt>
                <dd>{practice.body}</dd>
              </div>
            ))}
          </Practices>
          <Stack aria-label="Stack">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </Stack>
        </div>

        <FocusPanel aria-labelledby="focus-title">
          <h3 id="focus-title">What I focus on</h3>
          <ul>
            {focusAreas.map((area) => (
              <li key={area}>
                <Icon name="check-circle" size={16} />
                {area}
              </li>
            ))}
          </ul>
        </FocusPanel>
      </Layout>
    </Section>
  );
}
