import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Tabs } from "./Tabs";

describe("Tabs", () => {
  const mockTabs = [
    { id: "tab-1", label: "Tab 1" },
    { id: "tab-2", label: "Tab 2" },
    { id: "tab-3", label: "Tab 3" },
  ];

  it("renders all tabs", () => {
    render(
      <Tabs tabs={mockTabs} />
    );
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();
  });

  it("selects first tab by default", () => {
    const { container } = render(
      <Tabs tabs={mockTabs} />
    );
    const tabs = container.querySelectorAll("[role='tab']");
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    expect(tabs[1]).toHaveAttribute("aria-selected", "false");
  });

  it("selects tab with defaultSelectedId", () => {
    const { container } = render(
      <Tabs tabs={mockTabs} defaultSelectedId="tab-2" />
    );
    const tabs = container.querySelectorAll("[role='tab']");
    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
  });

  it("calls onTabChange when tab is selected", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <Tabs tabs={mockTabs} onTabChange={handleChange} />
    );
    await user.click(screen.getByText("Tab 2"));
    expect(handleChange).toHaveBeenCalledWith("tab-2");
  });

  it("supports controlled mode with selectedId", () => {
    const { rerender } = render(
      <Tabs tabs={mockTabs} selectedId="tab-1" />
    );
    const tabs = screen.getAllByRole("tab");
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");

    rerender(
      <Tabs tabs={mockTabs} selectedId="tab-2" />
    );
    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
  });

  it("renders tabs with badges", () => {
    const tabsWithBadges = [
      { id: "tab-1", label: "Emails", badgeLabel: "5" },
      { id: "tab-2", label: "Files", badgeLabel: "2", badgeVariant: "positive" as const },
    ];
    render(
      <Tabs tabs={tabsWithBadges} />
    );
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("renders with pill variant by default", () => {
    const { container } = render(
      <Tabs tabs={mockTabs} />
    );
    expect(container.querySelector(".tabs--pill")).toBeInTheDocument();
  });

  it("renders with underline variant", () => {
    const { container } = render(
      <Tabs tabs={mockTabs} variant="underline" />
    );
    expect(container.querySelector(".tabs--underline")).toBeInTheDocument();
  });
});
