import React, { FC } from "react";
import { render, screen } from "@testing-library/react";
import { NotFound } from "./NotFound";
import { ProviderWrapper } from "../../wrapper";

describe("[NotFound.tsx]", () => {
  beforeEach(() => {
    render(<NotFound />, {
      wrapper: ProviderWrapper as FC,
    });
  });

  it("should render not found page", () => {
    const notFoundElement = screen.getByTestId("notfound");
    expect(notFoundElement.textContent).toBe("404 Not Found");
  });
});
