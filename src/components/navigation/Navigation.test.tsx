import React from "react";
import { render, screen } from "@testing-library/react";
import { Navigation } from "./Navigation";
import { MemoryRouter } from "react-router-dom";
import logo from "../../assets/logo.svg";

describe("[Navigation.tsx]", () => {
  beforeEach(() => {
    render(<Navigation />, { wrapper: MemoryRouter });
  });

  it("should render navigation container", () => {
    const navigationContainerElement = screen.getByTestId(
      "navigation-container"
    );
    expect(navigationContainerElement).toBeInTheDocument();
  });

  it("should render navigation home link", () => {
    const navigationHomeLinkElement = screen.getByTestId(
      "navigation-home-link"
    );
    expect(navigationHomeLinkElement).toBeInTheDocument();
    expect(navigationHomeLinkElement.getAttribute("href")).toBe("/");
  });

  it("should render the logo", () => {
    const navigationImageElement = screen.getByTestId("navigation-logo");
    expect(navigationImageElement).toBeInTheDocument();
    expect(navigationImageElement.getAttribute("alt")).toBe("React Logo");
    expect(navigationImageElement.getAttribute("src")).toBe(logo);
  });

  it("should render right side of the navigation", () => {
    const navigationRightElement = screen.getByTestId("navigation-right");
    expect(navigationRightElement).toBeInTheDocument();
    expect(navigationRightElement.childElementCount).toBe(2);
  });
});
