import React from "react";
import { render, screen } from "@testing-library/react";
import { SubmitLink } from "./SubmitLink";
import { MemoryRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(<SubmitLink />, { wrapper: MemoryRouter });
 
  const submitLinkWrapper = screen.getByTestId("submit-link-wrapper");
  expect(submitLinkWrapper).toBeInTheDocument();

  const submitLinkElement = screen.getByTestId("submit-link");
  expect(submitLinkElement.getAttribute("href")).toBe("/submit") 

  const submitLinkButton = screen.getByTestId("submit-link-button");
  expect(submitLinkButton.textContent).toBe("Submit Link")

  const submitLinkButtonIcon = screen.getByTestId("submit-link-button-icon");
  expect(submitLinkButtonIcon).toBeInTheDocument();
});
