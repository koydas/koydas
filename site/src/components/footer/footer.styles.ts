import styled from 'styled-components';
import { theme } from '../../theme';

export const FooterBar = styled.footer`
  margin-top: ${theme.space[7]};
`;

export const Copyright = styled.p`
  margin: 0;
  padding: 0 ${theme.space[4]} ${theme.space[5]};
  background: ${theme.color.bg};
  color: ${theme.color.muted};
  font-size: ${theme.text.sm};
  text-align: center;
`;
