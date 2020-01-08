import React from "react";
import { render } from "@testing-library/react";
import GuestForm from ".";

test(`should render GuestForm and have value="Angela"`, () => {
  const { container } = render(
    <GuestForm
      username={"Angela"}
      handleLogin={() => jest.fn()}
      change={() => jest.fn()}
    />
  );
  expect(container.innerHTML).toContain(`value="Angela"`);
});
