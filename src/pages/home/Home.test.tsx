import React, { FC } from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import { ProviderWrapper } from "../../wrapper";

describe("[Home.tsx]", () => {
  beforeEach(() => {
    render(<Home />, {
      wrapper: ProviderWrapper as FC,
    });
  });

  it("should render home page", () => {
    const homePage = screen.getByTestId("home");
    expect(homePage).toBeInTheDocument();
  });
});
