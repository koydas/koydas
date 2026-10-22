import styled from 'styled-components';
import { desktop } from '../../theme';

export const Grid = styled.div`
  display: grid;
  gap: 1rem;

  ${desktop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
