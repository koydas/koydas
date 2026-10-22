import styled from 'styled-components';
import { desktop, theme } from '../../theme';

export const CtaWrapper = styled.section`
  max-width: ${theme.maxWidth};
  margin: 1rem auto 3rem;
  padding: 0 1.5rem;
`;

export const CtaBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.6rem;
  border: 1px solid ${theme.color.accent};
  border-radius: ${theme.radius.lg};
  background: linear-gradient(135deg, #0f1f55, #0a1230);

  ${desktop} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    margin: 0 0 0.3rem;
    font-size: 1.4rem;
  }

  p {
    margin: 0;
    color: ${theme.color.muted};
  }
`;

export const CtaActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;
