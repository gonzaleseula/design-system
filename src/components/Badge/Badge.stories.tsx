import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

type BadgeMetaType = Meta<typeof Badge>;

const meta: BadgeMetaType = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["neutral", "positive", "negative"],
      control: "select",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: {
    children: "Badge",
    variant: "neutral",
  },
};

export const Positive: Story = {
  args: {
    children: "Badge",
    variant: "positive",
  },
};

export const Negative: Story = {
  args: {
    children: "Badge",
    variant: "negative",
  },
};

export const WithNumber: Story = {
  args: {
    children: "5",
    variant: "positive",
  },
};

export const AllVariants: Story = {
  args: {
    children: "Badge",
    variant: "neutral",
  },
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="positive">Positive</Badge>
      <Badge variant="negative">Negative</Badge>
    </div>
  ),
};
