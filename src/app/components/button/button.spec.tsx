import { render, screen } from "@testing-library/react";

import { Button } from "./button";

describe("button", () => {
  it("should display button as expected", () => {
    render(<Button label="Click me" />);

    const heading = screen.getByRole("button", {
      name: /Click me/,
    });

    expect(heading).toBeInTheDocument();
  });
});
