import React from "react";
import { render } from "@testing-library/react";
import Loading from ".";

test("should Loading have data-testid loading and contains #a7a7a7", () => {
  const { getByTestId } = render(<Loading color={"#a7a7a7"} />);

  expect(getByTestId("loading")).toBeInTheDocument();
});

test(`should Loading have #a7a7a7`, () => {
  const { container } = render(
    <Loading width={20} height={20} color={"#a7a7a7"} />
  );
  expect(container.innerHTML).toContain(`width=\"20\" height=\"20\"`);
});
