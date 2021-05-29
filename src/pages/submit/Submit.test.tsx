import React, { FC } from "react";
import { render, screen } from "@testing-library/react";
import { Submit } from "./Submit";
import { ProviderWrapper } from "../../wrapper";

describe("[Submit.tsx]", () => {
  beforeEach(() => {
    render(<Submit />, {
      wrapper: ProviderWrapper as FC,
    });
  });

  it("should render submit page", () => {
    const submitPage = screen.getByTestId("submit");
    expect(submitPage).toBeInTheDocument();
  });
  it("should render submit link", () => {
    const submitPageLink = screen.getByTestId("submit-link");
    expect(submitPageLink.getAttribute("href")).toBe("/");
  });
});
