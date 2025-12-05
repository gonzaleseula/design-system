import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Tab } from "./Tab";

describe("Tab", () => {
  it("renders tab with label", () => {
    render(
      <Tab id="tab-1" label="Tab 1" />
    );
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
  });

  it("renders with pill variant by default", () => {
    const { container } = render(
      <Tab id="tab-1" label="Tab 1" />
    );
    const tab = container.querySelector(".tab--pill");
    expect(tab).toBeInTheDocument();
  });

  it("renders with underline variant", () => {
    const { container } = render(
      <Tab id="tab-1" label="Tab 1" variant="underline" />
    );
    const tab = container.querySelector(".tab--underline");
    expect(tab).toBeInTheDocument();
  });

  it("applies selected state", () => {
    const { container } = render(
      <Tab id="tab-1" label="Tab 1" isSelected={true} />
    );
    const tab = container.querySelector(".tab--selected");
    expect(tab).toBeInTheDocument();
  });

  it("applies disabled state", () => {
    render(
      <Tab id="tab-1" label="Tab 1" isDisabled={true} />
    );
    const tab = screen.getByRole("tab");
    expect(tab).toBeDisabled();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Tab id="tab-1" label="Tab 1" onClick={handleClick} />
    );
    await user.click(screen.getByRole("tab"));
    expect(handleClick).toHaveBeenCalledWith("tab-1");
  });

  it("does not call onClick when disabled", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Tab
        id="tab-1"
        label="Tab 1"
        isDisabled={true}
        onClick={handleClick}
      />
    );
    await user.click(screen.getByRole("tab"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders badge when badgeLabel is provided", () => {
    render(
      <Tab id="tab-1" label="Tab 1" badgeLabel="5" />
    );
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("renders badge with correct variant", () => {
    const { container } = render(
      <Tab
        id="tab-1"
        label="Tab 1"
        badgeLabel="New"
        badgeVariant="positive"
      />
    );
    const badge = container.querySelector(".badge--positive");
    expect(badge).toBeInTheDocument();
  });

  it("sets correct aria attributes", () => {
    const { rerender } = render(
      <Tab id="tab-1" label="Tab 1" isSelected={false} />
    );
    let tab = screen.getByRole("tab");
    expect(tab).toHaveAttribute("aria-selected", "false");

    rerender(
      <Tab id="tab-1" label="Tab 1" isSelected={true} />
    );
    tab = screen.getByRole("tab");
    expect(tab).toHaveAttribute("aria-selected", "true");
  });
});
