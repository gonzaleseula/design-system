import React from "react";
import "./Badge.css";

export type BadgeVariant = "neutral" | "positive" | "negative";

interface BadgeProps {
  /**
   * The text content of the badge
   */
  children: React.ReactNode;
  /**
   * The visual style variant of the badge
   */
  variant?: BadgeVariant;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Badge component for displaying additional information
 * Can be used standalone or integrated with Tabs
 */
export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, variant = "neutral", className = "" }, ref) => {
    const classes = `badge badge--${variant} ${className}`.trim();

    return (
      <div ref={ref} className={classes}>
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";
