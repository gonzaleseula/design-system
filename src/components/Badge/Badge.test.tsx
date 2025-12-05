import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders badge with default neutral variant", () => {
    render(<Badge>New</Badge>);
    const badge = screen.getByText("New");
    expect(badge).toHaveClass("badge--neutral");
  });

  it("renders badge with positive variant", () => {
    render(<Badge variant="positive">5</Badge>);
    const badge = screen.getByText("5");
    expect(badge).toHaveClass("badge--positive");
  });

  it("renders badge with negative variant", () => {
    render(<Badge variant="negative">Error</Badge>);
    const badge = screen.getByText("Error");
    expect(badge).toHaveClass("badge--negative");
  });

  it("accepts custom className", () => {
    render(
      <Badge className="custom-class">Badge</Badge>
    );
    const badge = screen.getByText("Badge");
    expect(badge).toHaveClass("custom-class");
  });
});
