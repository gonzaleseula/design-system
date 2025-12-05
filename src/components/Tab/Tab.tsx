import React from "react";
import { Badge, BadgeVariant } from "../Badge/Badge";
import "./Tab.css";

export type TabVariant = "pill" | "underline";

interface TabProps {
  /**
   * Unique identifier for the tab
   */
  id: string;
  /**
   * The label text displayed in the tab
   */
  label: string;
  /**
   * Whether the tab is currently selected
   */
  isSelected?: boolean;
  /**
   * Whether the tab is disabled
   */
  isDisabled?: boolean;
  /**
   * Callback when tab is clicked
   */
  onClick?: (id: string) => void;
  /**
   * Badge text to display (optional)
   */
  badgeLabel?: string;
  /**
   * Badge variant if badgeLabel is provided
   */
  badgeVariant?: BadgeVariant;
  /**
   * Tab appearance variant
   */
  variant?: TabVariant;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Tab component - individual tab within a Tabs container
 * Supports two variants: pill and underline
 * Can display optional badge with different variants
 */
export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  (
    {
      id,
      label,
      isSelected = false,
      isDisabled = false,
      onClick,
      badgeLabel,
      badgeVariant = "neutral",
      variant = "pill",
      className = "",
    },
    ref
  ) => {
    const handleClick = () => {
      if (!isDisabled && onClick) {
        onClick(id);
      }
    };

    const tabClasses = [
      "tab",
      `tab--${variant}`,
      isSelected && "tab--selected",
      isDisabled && "tab--disabled",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        className={tabClasses}
        role="tab"
        aria-selected={isSelected}
        aria-disabled={isDisabled}
        onClick={handleClick}
        disabled={isDisabled}
      >
        <span className="tab__label">{label}</span>
        {badgeLabel && (
          <Badge variant={badgeVariant} className="tab__badge">
            {badgeLabel}
          </Badge>
        )}
      </button>
    );
  }
);

Tab.displayName = "Tab";
