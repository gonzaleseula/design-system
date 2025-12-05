import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from "./Tab";

type TabMetaType = Meta<typeof Tab>;

const meta: TabMetaType = {
  title: "Components/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["pill", "underline"],
      control: "select",
    },
    badgeVariant: {
      options: ["neutral", "positive", "negative"],
      control: "select",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PillDefault: Story = {
  args: {
    id: "tab-1",
    label: "Tab",
    variant: "pill",
    isSelected: false,
  },
};

export const PillSelected: Story = {
  args: {
    id: "tab-1",
    label: "Tab",
    variant: "pill",
    isSelected: true,
  },
};

export const PillDisabled: Story = {
  args: {
    id: "tab-1",
    label: "Tab",
    variant: "pill",
    isDisabled: true,
  },
};

export const UnderlineDefault: Story = {
  args: {
    id: "tab-1",
    label: "Tab",
    variant: "underline",
    isSelected: false,
  },
};

export const UnderlineSelected: Story = {
  args: {
    id: "tab-1",
    label: "Tab",
    variant: "underline",
    isSelected: true,
  },
};

export const WithBadge: Story = {
  args: {
    id: "tab-1",
    label: "Notifications",
    variant: "pill",
    badgeLabel: "5",
    badgeVariant: "positive",
  },
};

export const WithBadgeNegative: Story = {
  args: {
    id: "tab-1",
    label: "Errors",
    variant: "pill",
    badgeLabel: "3",
    badgeVariant: "negative",
  },
};

export const AllStates: Story = {
  args: {
    id: "tab-1",
    label: "Tab",
    variant: "pill",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h4>Pill Variant</h4>
        <div style={{ display: "flex", gap: "8px" }}>
          <Tab id="1" label="Default" variant="pill" isSelected={false} />
          <Tab id="2" label="Selected" variant="pill" isSelected={true} />
          <Tab id="3" label="Disabled" variant="pill" isDisabled={true} />
          <Tab
            id="4"
            label="With Badge"
            variant="pill"
            badgeLabel="5"
            badgeVariant="positive"
          />
        </div>
      </div>
      <div>
        <h4>Underline Variant</h4>
        <div style={{ display: "flex", gap: "16px" }}>
          <Tab id="1" label="Default" variant="underline" isSelected={false} />
          <Tab id="2" label="Selected" variant="underline" isSelected={true} />
          <Tab id="3" label="Disabled" variant="underline" isDisabled={true} />
          <Tab
            id="4"
            label="With Badge"
            variant="underline"
            badgeLabel="New"
            badgeVariant="negative"
          />
        </div>
      </div>
    </div>
  ),
};
