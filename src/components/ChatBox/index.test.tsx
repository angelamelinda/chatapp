import React from "react";
import { render } from "@testing-library/react";
import ChatBox from ".";

test(`should render ChatBox and have value="Hello World"`, () => {
  const { container } = render(
    <ChatBox
      message="Hello World"
      handleChangeMessage={() => jest.fn()}
      handleSendMessage={() => jest.fn()}
    />
  );
  expect(container.innerHTML).toContain(`Hello World`);
});
