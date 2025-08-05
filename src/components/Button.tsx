/*
  Minimal tailwind‑styled <Button> component
  -------------------------------------------------------------
  • Drop it in:   /components/ui/Button.tsx
  • API mirrors shadcn/ui’s basic props so you can swap later.
  • Variants:    primary (default), outline, ghost, destructive.
  • Disabled + loading states included.
*/

'use client';

import { clsx } from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'destructive';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  loading?: boolean;
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600',
  outline:
    'border border-gray-300 hover:bg-gray-100 focus-visible:ring-gray-400',
  ghost: 'hover:bg-gray-100 focus-visible:ring-gray-400',
  destructive:
    'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600',
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = 'primary', loading, children, ...props }, ref) => (
    <button
      ref={ref}
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {loading && (
        <svg
          className='h-4 w-4 animate-spin text-current'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        >
          <circle cx='12' cy='12' r='10' opacity='0.25' />
          <path d='M22 12a10 10 0 0 1-10 10' />
        </svg>
      )}
      {children}
    </button>
  )
);
Button.displayName = 'Button';
