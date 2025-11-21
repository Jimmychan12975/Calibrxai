import React from "react";
import { BaseComponentProps } from "@/types";

interface ButtonProps extends BaseComponentProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  href?: string;
}

export default function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  type = "button",
  onClick,
  href,
}: ButtonProps) {
  const baseClasses = "btn-industrial";
  
  const variantClasses = {
    primary: "btn-industrial-primary",
    secondary: "btn-industrial-secondary",
    outline: "btn-industrial-outline",
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-disabled={disabled}
      >
        {loading && <span className="mr-2">⏳</span>}
        {children}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && <span className="mr-2">⏳</span>}
      {children}
    </button>
  );
}
