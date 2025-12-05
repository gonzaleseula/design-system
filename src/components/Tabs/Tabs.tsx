import React, { useState, useRef } from "react";
import { Tab, TabVariant } from "../Tab/Tab";
import { BadgeVariant } from "../Badge/Badge";
import "./Tabs.css";

export interface TabItem {
  /**
   * Unique identifier for the tab
   */
  id: string;
  /**
   * Label text displayed in the tab
   */
  label: string;
  /**
   * Optional badge label
   */
  badgeLabel?: string;
  /**
   * Badge variant if badgeLabel is provided
   */
  badgeVariant?: BadgeVariant;
  /**
   * Whether the tab is disabled
   */
  isDisabled?: boolean;
}

interface TabsProps {
  /**
   * Array of tab items to render
   */
  tabs: TabItem[];
  /**
   * ID of the initially selected tab
   */
  defaultSelectedId?: string;
  /**
   * ID of the currently selected tab (controlled)
   */
  selectedId?: string;
  /**
   * Callback when tab selection changes
   */
  onTabChange?: (tabId: string) => void;
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
 * Tabs container component - manages multiple Tab components
 * Handles keyboard navigation and accessibility
 * Supports controlled and uncontrolled modes
 */
export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      tabs,
      defaultSelectedId,
      selectedId,
      onTabChange,
      variant = "pill",
      className = "",
    },
    ref
  ) => {
    const isControlled = selectedId !== undefined;
    const [internalSelectedId, setInternalSelectedId] = useState(
      defaultSelectedId || tabs[0]?.id || ""
    );

    const currentSelectedId = isControlled ? selectedId : internalSelectedId;
    const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

    const tabsClasses = [
      "tabs",
      `tabs--${variant}`,
      className
    ]
      .filter(Boolean)
      .join(" ");

    const handleTabSelect = (tabId: string) => {
      if (tabId !== currentSelectedId) {
        if (!isControlled) {
          setInternalSelectedId(tabId);
        }
        onTabChange?.(tabId);
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      const enabledTabIds = tabs.filter((tab) => !tab.isDisabled).map((tab) => tab.id);
      if (!enabledTabIds.length) return;

      const currentIndex = enabledTabIds.indexOf(currentSelectedId);
      let nextIndex = currentIndex;
      let handled = false;

      switch (event.key) {
        case "ArrowLeft":
        case "ArrowUp": {
          event.preventDefault();
          if (enabledTabIds.length > 1) {
            let i = currentIndex;
            do {
              i = (i - 1 + enabledTabIds.length) % enabledTabIds.length;
            } while (i !== currentIndex && enabledTabIds[i] === currentSelectedId);
            nextIndex = i;
          }
          handled = true;
          break;
        }
        case "ArrowRight":
        case "ArrowDown": {
          event.preventDefault();
          if (enabledTabIds.length > 1) {
            let i = currentIndex;
            do {
              i = (i + 1) % enabledTabIds.length;
            } while (i !== currentIndex && enabledTabIds[i] === currentSelectedId);
            nextIndex = i;
          }
          handled = true;
          break;
        }
        case "Home": {
          event.preventDefault();
          nextIndex = 0;
          handled = true;
          break;
        }
        case "End": {
          event.preventDefault();
          nextIndex = enabledTabIds.length - 1;
          handled = true;
          break;
        }
        default:
          return;
      }

      const nextTabId = enabledTabIds[nextIndex];
      if (handled) {
        onTabChange?.(nextTabId);
        if (nextTabId !== currentSelectedId) {
          if (!isControlled) {
            setInternalSelectedId(nextTabId);
          }
          setTimeout(() => {
            tabRefs.current[nextTabId]?.focus();
          }, 0);
        }
      }
    };


    return (
      <div
        ref={ref}
        className={tabsClasses}
        role="tablist"
        onKeyDown={handleKeyDown}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            ref={(el) => {
              tabRefs.current[tab.id] = el;
            }}
            id={tab.id}
            label={tab.label}
            isSelected={currentSelectedId === tab.id}
            isDisabled={tab.isDisabled}
            badgeLabel={tab.badgeLabel}
            badgeVariant={tab.badgeVariant}
            variant={variant}
            onClick={handleTabSelect}
          />
        ))}
      </div>
    );
  }
);

Tabs.displayName = "Tabs";
