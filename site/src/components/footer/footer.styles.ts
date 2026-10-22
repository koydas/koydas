import styled from 'styled-components';
import { theme } from '../../theme';

export const FooterBar = styled.footer`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  padding: 1.5rem;
  border-top: 1px solid ${theme.color.border};
  color: ${theme.color.subtle};
  font-size: 0.85rem;
`;
