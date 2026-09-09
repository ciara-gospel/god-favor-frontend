import type { ReactNode, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  to?: string;
  href?: string;
  className?: string;
  onClick?: MouseEventHandler;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  'aria-expanded'?: boolean;
  'aria-pressed'?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500',
  secondary:
    'bg-secondary-600 text-white hover:bg-secondary-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary-500',
  outline:
    'border-2 border-primary-600 text-primary-700 hover:bg-primary-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500',
  ghost:
    'text-primary-700 hover:bg-primary-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg font-medium',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className,
  to,
  href,
  onClick,
  disabled,
  type = 'button',
  ...rest
}: ButtonProps) {
  const baseClasses = clsx(
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors',
    variantClasses[variant],
    sizeClasses[size],
    {
      'opacity-50 pointer-events-none': disabled,
    },
    className,
  );

  const content = (
    <>
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} onClick={onClick} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={baseClasses} onClick={onClick} disabled={disabled} {...rest}>
      {content}
    </button>
  );
}
