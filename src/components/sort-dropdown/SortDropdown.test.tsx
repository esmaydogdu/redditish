import React, { FC } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { SortDropdown } from "./SortDropdown";
import { ProviderWrapper } from "../../wrapper";

describe("[SortDropdown.tsx]", () => {
  beforeEach(() => {
    render(<SortDropdown />, { wrapper: ProviderWrapper as FC });
  });

  it("should render dropdown element", () => {
    const dropdownWrapper = screen.getByTestId("dropdown-wrapper");
    expect(dropdownWrapper).toBeInTheDocument();
  });

  it("should set dropdown toggle as selected item", async () => {
    const dropdownToggle = screen.getByTestId("dropdown-selected");
    expect(dropdownToggle.textContent).toBe("Order By");

    fireEvent.click(dropdownToggle);
    // Since state gets updated with click, we are waiting to see dropdown-item-desc item.
    await waitFor(() => screen.getByTestId("dropdown-item-desc"));

    const dropdownItemDesc = screen.getByTestId("dropdown-item-desc");
    const dropdownItemAsc = screen.getByTestId("dropdown-item-asc");
    const dropdownItemOrderBy = screen.getByTestId("dropdown-item-orderby");

    fireEvent.click(dropdownItemDesc);
    expect(dropdownToggle.textContent).toBe(dropdownItemDesc.textContent);

    fireEvent.click(dropdownToggle);

    await waitFor(() => screen.getByTestId("dropdown-item-desc"));

    fireEvent.click(dropdownItemAsc);
    expect(dropdownToggle.textContent).toBe(dropdownItemAsc.textContent);

    fireEvent.click(dropdownToggle);

    await waitFor(() => screen.getByTestId("dropdown-item-desc"));

    fireEvent.click(dropdownItemOrderBy);
    expect(dropdownToggle.textContent).toBe(dropdownItemOrderBy.textContent);
  });
});
