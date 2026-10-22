import type { ReactNode } from 'react';
import Icon from '../icons/icon';
import type { IconName } from '../../types';
import { StyledLink } from './link-button.styles';

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  leadingIcon?: IconName;
  trailingIcon?: IconName;
}

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

export default function LinkButton({
  href,
  children,
  variant = 'primary',
  leadingIcon,
  trailingIcon,
}: LinkButtonProps) {
  const external = isExternal(href);

  return (
    <StyledLink
      href={href}
      $variant={variant}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {leadingIcon && <Icon name={leadingIcon} />}
      {children}
      {trailingIcon && <Icon name={trailingIcon} size={16} />}
    </StyledLink>
  );
}
