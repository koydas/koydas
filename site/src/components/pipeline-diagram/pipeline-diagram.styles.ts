import styled from 'styled-components';
import { theme } from '../../theme';

export const Flow = styled.ol`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.35rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Step = styled.li`
  display: flex;
  flex: 1;
  align-items: flex-start;
  gap: 0.35rem;
  min-width: 0;
`;

export const StepBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 0.45rem;
  min-width: 0;
  text-align: center;
`;

export const StepIcon = styled.span<{ $tone: 'default' | 'accent' | 'success' | 'violet' }>`
  display: grid;
  place-items: center;
  width: 100%;
  max-width: 62px;
  aspect-ratio: 1;
  border-radius: 12px;
  background: ${theme.color.surfaceRaised};
  border: 1px solid
    ${({ $tone }) =>
      $tone === 'accent'
        ? theme.color.accent
        : $tone === 'success'
          ? '#1f7a5c'
          : $tone === 'violet'
            ? theme.color.violet
            : theme.color.borderStrong};
  color: ${({ $tone }) =>
    $tone === 'accent'
      ? theme.color.accentSoft
      : $tone === 'success'
        ? theme.color.success
        : $tone === 'violet'
          ? '#b9a1ff'
          : theme.color.muted};
`;

export const StepLabel = styled.span`
  font-size: 0.8rem;
  color: ${theme.color.text};
`;

export const StepHint = styled.span`
  font-size: 0.7rem;
  color: ${theme.color.subtle};
`;

export const Arrow = styled.span`
  display: grid;
  align-items: center;
  height: 62px;
  color: ${theme.color.subtle};
  flex: none;
`;
