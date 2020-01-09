import React from "react";
import { render } from "@testing-library/react";
import Toast from ".";

test("should render Toast with message Error", () => {
  const { container } = render(<Toast message={"Error"}></Toast>);

  expect(container.innerHTML).toContain("Error");
});
