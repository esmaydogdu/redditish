import React from "react";
import { render, screen } from "@testing-library/react";
import { SubmitLink } from "./SubmitLink";
import { MemoryRouter } from "react-router-dom";

describe("[SubmitLink.tsx]", () => {
  beforeEach(() => {
    render(<SubmitLink />, { wrapper: MemoryRouter });
  });

  it("should render submit link wrapper", () => {
    const submitLinkWrapper = screen.getByTestId("submit-link-wrapper");
    expect(submitLinkWrapper).toBeInTheDocument();
  });

  it("should render submit link", () => {
    const submitLinkElement = screen.getByTestId("submit-link");
    expect(submitLinkElement.getAttribute("href")).toBe("/submit");
  });

  it("should render submit link button", () => {
    const submitLinkButton = screen.getByTestId("submit-link-button");
    expect(submitLinkButton.textContent).toBe("Submit Link");
  });

  it("should render submit link button icon", () => {
    const submitLinkButtonIcon = screen.getByTestId("submit-link-button-icon");
    expect(submitLinkButtonIcon).toBeInTheDocument();
  });
});
