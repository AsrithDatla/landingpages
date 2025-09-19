"use client";

import { ReactNode } from "react";
interface CTAButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  className?: string;
}
export function CTAButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "lg",
  className = ""
}: CTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg";
  const variantClasses = {
    primary: "bg-success text-success-foreground hover:bg-success/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90"
  };
  const sizeClasses = {
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  if (href) {
    return <a href={href} className={classes} data-unique-id="89d6bc5a-bd63-42de-a38e-9e5e2816ec3d" data-file-name="components/cta-button.tsx" data-dynamic-text="true">
        {children}
      </a>;
  }
  return <button onClick={onClick} className={classes} data-unique-id="9e53f386-4f38-4116-9281-25de90a72efb" data-file-name="components/cta-button.tsx" data-dynamic-text="true">
      {children}
    </button>;
}