import React from "react";
import { render, screen } from "@testing-library/react";
import { Navigation } from "./Navigation";
import { MemoryRouter } from "react-router-dom";
import logo from "../../assets/hb-logo.svg";

test("renders learn react link", () => {
  render(<Navigation />, { wrapper: MemoryRouter });
  const navigationContainerElement = screen.getByTestId("navigation-container");
  expect(navigationContainerElement).toBeInTheDocument();

  const navigationHomeLinkElement = screen.getByTestId("navigation-home-link");
  expect(navigationHomeLinkElement).toBeInTheDocument();
  expect(navigationHomeLinkElement.getAttribute("href")).toBe("/");

  const navigationImageElement = screen.getByTestId("navigation-logo");
  expect(navigationImageElement).toBeInTheDocument();
  expect(navigationImageElement.getAttribute("alt")).toBe("Hepsiburada Logo");
  expect(navigationImageElement.getAttribute("src")).toBe(logo);

  const navigationRightElement = screen.getByTestId("navigation-right");
  expect(navigationRightElement).toBeInTheDocument();
  expect(navigationRightElement.childElementCount).toBe(3);
});
