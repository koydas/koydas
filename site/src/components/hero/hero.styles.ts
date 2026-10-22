import styled from 'styled-components';
import { desktop, theme } from '../../theme';

export const HeroSection = styled.section`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  padding: 2.5rem 1.5rem 1.5rem;
  display: grid;
  gap: 2rem;
  scroll-margin-top: 72px;

  ${desktop} {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
    align-items: center;
    padding-top: 4rem;
  }
`;

export const Eyebrow = styled.p`
  margin: 0 0 1rem;
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${theme.color.subtle};
`;

export const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: clamp(2.3rem, 6vw, 3.4rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
`;

export const Accent = styled.span`
  color: ${theme.color.accentSoft};
`;

export const Lede = styled.p`
  margin: 0 0 1.6rem;
  max-width: 34rem;
  font-size: 1.1rem;
  color: ${theme.color.muted};
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.8rem;
`;

export const Pillars = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.8rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Pillar = styled.li`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.8rem;
  border: 1px solid ${theme.color.border};
  border-radius: ${theme.radius.md};
  background: ${theme.color.surface};
  color: ${theme.color.muted};
  font-size: 0.85rem;
  line-height: 1.25;

  svg {
    flex: none;
    color: ${theme.color.accentSoft};
  }
`;

export const Panel = styled.div`
  display: none;
  padding: 1.4rem;
  border: 1px solid ${theme.color.borderStrong};
  border-radius: ${theme.radius.lg};
  background: linear-gradient(160deg, #0d1530, ${theme.color.surface});
  box-shadow: 0 30px 80px rgba(47, 99, 240, 0.12);

  ${desktop} {
    display: grid;
    gap: 1.4rem;
  }
`;

export const PanelTitle = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: ${theme.color.muted};
`;

export const Evidence = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.7rem 1rem;
  margin: 0;
  padding: 1rem;
  list-style: none;
  border: 1px solid ${theme.color.border};
  border-radius: ${theme.radius.md};
  background: ${theme.color.bg};
  font-size: 0.85rem;
  color: ${theme.color.muted};

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    flex: none;
    color: ${theme.color.success};
  }
`;
