import styled from 'styled-components';
import { desktop, theme } from '../../theme';

export const SectionWrapper = styled.section`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  scroll-margin-top: 72px;

  ${desktop} {
    padding: 3rem 1.5rem;
  }
`;

export const Eyebrow = styled.p`
  margin: 0 0 1.2rem;
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${theme.color.subtle};
`;

export const SectionHeading = styled.h2`
  margin: 0 0 0.4rem;
  font-size: 1.7rem;
  letter-spacing: -0.01em;
`;
