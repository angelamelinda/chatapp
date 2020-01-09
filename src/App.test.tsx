import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test("should render App with class App", () => {
  const { container } = render(<App />);

  expect(container.innerHTML).toContain(`class="App"`);
});
