import React from "react";
import { render } from "@testing-library/react";
import ChatRoom from ".";

test("should render ChatRoom with class container", () => {
  const { container } = render(<ChatRoom />);

  expect(container.innerHTML).toContain(`class="container"`);
});
