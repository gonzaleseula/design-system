import React, { useState } from "react";
import { Tabs, Tab, Badge } from "./src/components";
import "./App.css";

/**
 * Example usage of the Tabs component showing all features
 */
export function App() {
  const [selectedTab, setSelectedTab] = useState("tab-1");

  // Example 1: Basic tabs with pills
  const basicTabs = [
    { id: "tab-1", label: "Emails" },
    { id: "tab-2", label: "Files" },
    { id: "tab-3", label: "Edits" },
  ];

  // Example 2: Tabs with badges
  const tabsWithBadges = [
    { id: "inbox", label: "Inbox", badgeLabel: "5", badgeVariant: "positive" as const },
    { id: "archive", label: "Archive" },
    { id: "trash", label: "Trash", badgeLabel: "Error", badgeVariant: "negative" as const },
  ];

  // Example 3: Tabs with disabled state
  const tabsWithDisabled = [
    { id: "home", label: "Home" },
    { id: "about", label: "About", isDisabled: true },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="app">
      <h1>Tabs Component Examples</h1>

      {/* Example 1: Basic Pill Variant */}
      <section>
        <h2>Pill Variant</h2>
        <p>The default tab style with rounded backgrounds</p>
        <Tabs tabs={basicTabs} variant="pill" />
      </section>

      {/* Example 2: Underline Variant */}
      <section>
        <h2>Underline Variant</h2>
        <p>Alternative tab style with underline indicators</p>
        <Tabs tabs={basicTabs} variant="underline" />
      </section>

      {/* Example 3: With Badges */}
      <section>
        <h2>Tabs with Badges</h2>
        <p>Badges with different variants to show additional info</p>
        <div>
          <h3>Pill with Badges</h3>
          <Tabs tabs={tabsWithBadges} variant="pill" />
        </div>
        <div>
          <h3>Underline with Badges</h3>
          <Tabs tabs={tabsWithBadges} variant="underline" />
        </div>
      </section>

      {/* Example 4: Controlled Component */}
      <section>
        <h2>Controlled Tabs</h2>
        <p>Controlled mode with state management</p>
        <Tabs
          tabs={basicTabs}
          selectedId={selectedTab}
          onTabChange={setSelectedTab}
          variant="pill"
        />
        <p>Currently selected: <strong>{selectedTab}</strong></p>
      </section>

      {/* Example 5: Disabled Tabs */}
      <section>
        <h2>Disabled Tabs</h2>
        <p>Some tabs can be disabled to prevent interaction</p>
        <Tabs tabs={tabsWithDisabled} variant="pill" />
      </section>

      {/* Example 6: Many Tabs (Responsive) */}
      <section>
        <h2>Responsive Tabs</h2>
        <p>Tabs can scroll horizontally on small screens</p>
        <Tabs
          tabs={Array.from({ length: 10 }, (_, i) => ({
            id: `tab-${i}`,
            label: `Tab ${i + 1}`,
          }))}
          variant="pill"
        />
      </section>

      {/* Example 7: Standalone Badge */}
      <section>
        <h2>Standalone Badges</h2>
        <p>Badges can also be used independently</p>
        <div className="badge-examples">
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="positive">Positive</Badge>
          <Badge variant="negative">Negative</Badge>
        </div>
      </section>

      {/* Example 8: Standalone Tab */}
      <section>
        <h2>Standalone Tab</h2>
        <p>Individual tabs can be used outside of a Tabs container</p>
        <div className="tab-examples">
          <Tab id="t1" label="Default" variant="pill" />
          <Tab id="t2" label="Selected" variant="pill" isSelected={true} />
          <Tab id="t3" label="Disabled" variant="pill" isDisabled={true} />
          <Tab id="t4" label="With Badge" variant="pill" badgeLabel="5" badgeVariant="positive" />
        </div>
      </section>

      {/* Keyboard Navigation Demo */}
      <section>
        <h2>Keyboard Navigation</h2>
        <p>Try using keyboard shortcuts to navigate tabs:</p>
        <ul>
          <li><kbd>→</kbd> or <kbd>↓</kbd> - Next tab</li>
          <li><kbd>←</kbd> or <kbd>↑</kbd> - Previous tab</li>
          <li><kbd>Home</kbd> - First tab</li>
          <li><kbd>End</kbd> - Last tab</li>
        </ul>
        <Tabs tabs={basicTabs} variant="pill" />
      </section>
    </div>
  );
}

export default App;
