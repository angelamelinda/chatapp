import React from "react";
import { render } from "@testing-library/react";
import ChatPanel from ".";

test(`should render ChatPanel with chat-bubble--right in the innerHTML`, () => {
  const { container } = render(
    <ChatPanel
      username="Angela"
      messages={[{ user: "Angela", key: "1", text: "Hello World" }]}
    />
  );
  expect(container.innerHTML).toContain(`chat-bubble--right`);
});

test(`should render ChatPanel with chat-bubble--left in the innerHTML`, () => {
  const { container } = render(
    <ChatPanel
      username="Melinda"
      messages={[{ user: "Angela", key: "1", text: "Hello World" }]}
    />
  );
  expect(container.innerHTML).toContain(`chat-bubble--left`);
});
