import React from "react";
import { render } from "@testing-library/react";
import Modal from ".";

test("should render Modal Title as title", () => {
  const { container } = render(
    <Modal title="Modal Title">
      <div>Modal</div>
    </Modal>
  );

  expect(container.innerHTML).toContain("Modal Title");
});
