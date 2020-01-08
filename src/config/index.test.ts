import React from "react";
import { config } from ".";

test("should return config as expected", () => {
  const expectedResult = config;
  expect(config).toEqual(expectedResult);
});
