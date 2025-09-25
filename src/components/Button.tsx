"use client";

import { clsx } from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";

export type ButtonVariant = "primary" | "outline" | "ghost" | "destructive";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  loading?: boolean;
};

const base = "";

const variants: Record<ButtonVariant, string> = {
  primary: "",
  outline: "",
  ghost: "",
  destructive: "",
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = "primary", loading, children, ...props }, ref) => (
    <button
      ref={ref}
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {loading && <div>loading...</div>}
      {children}
    </button>
  )
);
Button.displayName = "Button";
