import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  type?: 'button' | 'submit';
};

const baseClasses =
  'inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold tracking-tight transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-blue-accent text-white shadow-soft hover:bg-teal-accent focus-visible:ring-blue-accent focus-visible:ring-offset-white',
  outline:
    'border border-white/60 bg-transparent text-white hover:border-teal-accent hover:text-teal-accent focus-visible:ring-white focus-visible:ring-offset-navy',
  ghost:
    'border border-gray-200 bg-white text-navy hover:border-blue-accent hover:text-blue-accent focus-visible:ring-blue-accent focus-visible:ring-offset-white',
};

export function Button({ href, children, variant = 'primary', className = '', type = 'button' }: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
