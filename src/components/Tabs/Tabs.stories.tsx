import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";
import type { TabItem } from "./Tabs";

type TabsMetaType = Meta<typeof Tabs>;

const meta: TabsMetaType = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["pill", "underline"],
      control: "select",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultTabs: TabItem[] = [
  { id: "emails", label: "Emails" },
  { id: "files", label: "Files" },
  { id: "edits", label: "Edits" },
  { id: "dashboard", label: "Dashboard" },
  { id: "messages", label: "Messages" },
];

export const PillVariant: Story = {
  args: {
    tabs: defaultTabs,
    variant: "pill",
  },
};

export const UnderlineVariant: Story = {
  args: {
    tabs: defaultTabs,
    variant: "underline",
  },
};

export const WithBadges: Story = {
  args: {
    tabs: [
      { id: "emails", label: "Emails", badgeLabel: "5" },
      { id: "files", label: "Files", badgeLabel: "2", badgeVariant: "positive" },
      { id: "edits", label: "Edits", badgeLabel: "3", badgeVariant: "negative" },
      { id: "dashboard", label: "Dashboard" },
      { id: "messages", label: "Messages", badgeLabel: "New" },
    ],
    variant: "pill",
  },
};

export const WithDisabledTabs: Story = {
  args: {
    tabs: [
      { id: "emails", label: "Emails" },
      { id: "files", label: "Files", isDisabled: true },
      { id: "edits", label: "Edits" },
      { id: "dashboard", label: "Dashboard", isDisabled: true },
      { id: "messages", label: "Messages" },
    ],
    variant: "pill",
  },
};

export const Controlled: Story = {
  args: {
    tabs: defaultTabs,
    variant: "pill",
  },
  render: (args) => {
    const [selectedId, setSelectedId] = useState("files");

    return (
      <div>
        <Tabs
          {...args}
          selectedId={selectedId}
          onTabChange={setSelectedId}
        />
        <p style={{ marginTop: "16px", color: "#666" }}>
          Selected: <strong>{selectedId}</strong>
        </p>
      </div>
    );
  },
};

export const UnderlineWithBadges: Story = {
  args: {
    tabs: [
      { id: "emails", label: "Emails", badgeLabel: "5" },
      { id: "files", label: "Files", badgeLabel: "2", badgeVariant: "positive" },
      { id: "edits", label: "Edits", badgeLabel: "Warning", badgeVariant: "negative" },
      { id: "dashboard", label: "Dashboard" },
      { id: "messages", label: "Messages", badgeLabel: "10" },
    ],
    variant: "underline",
  },
};

export const AccessibilityDemo: Story = {
  render: () => {
    const [selectedId, setSelectedId] = useState("tab-1");

    return (
      <div>
        <h3>Try keyboard navigation:</h3>
        <ul style={{ fontSize: "14px", color: "#666", marginBottom: "16px" }}>
          <li>Use Arrow Left/Right to navigate</li>
          <li>Use Home/End to jump to first/last</li>
          <li>Tab to focus, Enter to select</li>
        </ul>
        <Tabs
          tabs={[
            { id: "tab-1", label: "First" },
            { id: "tab-2", label: "Second" },
            { id: "tab-3", label: "Third" },
            { id: "tab-4", label: "Fourth (Disabled)", isDisabled: true },
            { id: "tab-5", label: "Fifth" },
          ]}
          selectedId={selectedId}
          onTabChange={setSelectedId}
          variant="pill"
        />
        <p style={{ marginTop: "16px", color: "#666" }}>
          Selected: <strong>{selectedId}</strong>
        </p>
      </div>
    );
  },
};

export const ResponsiveExample: Story = {
  render: () => {
    const manyTabs = Array.from({ length: 12 }, (_, i) => ({
      id: `tab-${i + 1}`,
      label: `Tab ${i + 1}`,
    }));

    return (
      <div>
        <h3>Responsive Tabs (scroll on mobile)</h3>
        <Tabs tabs={manyTabs} variant="pill" />
      </div>
    );
  },
};
