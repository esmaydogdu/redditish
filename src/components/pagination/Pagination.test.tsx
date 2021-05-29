import React, { FC } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Pagination } from "./Pagination";
import { ProviderWrapper } from "../../wrapper";

describe("[Pagination.tsx]", () => {
  beforeEach(() => {
    render(<Pagination />, { wrapper: ProviderWrapper as FC });
  });

  it("should render pagination element", () => {
    const paginationWrapper = screen.getByTestId("pagination-wrapper");
    const paginationItems = screen.getAllByTestId("pagination-item");
    expect(paginationWrapper).toBeInTheDocument();

    const nextButton = screen.getByTestId("pagination-next");

    expect(nextButton).toBeInTheDocument();

    fireEvent.click(nextButton);
    const previousButton = screen.getByTestId("pagination-previous");
    expect(previousButton).toBeInTheDocument();
    expect(nextButton).not.toBeInTheDocument();

    fireEvent.click(previousButton);
    expect(previousButton).not.toBeInTheDocument();

    fireEvent.click(paginationItems[1]);
    expect(nextButton).not.toBeInTheDocument();

    fireEvent.click(paginationItems[0]);
    expect(previousButton).not.toBeInTheDocument();
  });
});
