import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ActionButton } from "@/components/ActionButton";

describe("ActionButton", () => {
  it("renders the button with provided label", () => {
    const label = "Click Me";

    render(<ActionButton label={label} />);

    const button = screen.getByRole("button", { name: label });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(label);
  });
});
