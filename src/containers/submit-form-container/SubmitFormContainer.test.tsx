import React, { FC } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { SubmitFormContainer } from "./SubmitFormContainer";
import { ProviderWrapper } from "../../wrapper";

describe("[SubmitFormContainer.tsx]", () => {
  beforeEach(() => {
    render(<SubmitFormContainer />, {
      wrapper: ProviderWrapper as FC,
    });
  });

  it("should render form container", () => {
    const formContainerElement = screen.getByTestId("form-container");
    expect(formContainerElement).toBeInTheDocument();
  });

  it("should fill form incorrectly", () => {
    const nameElement = screen.getByTestId("form-control-name");
    const urlElement = screen.getByTestId("form-control-url");
    const formSubmit = screen.getByTestId("form-submit-button");
    expect(nameElement).toBeInTheDocument();
    expect(urlElement).toBeInTheDocument();

    fireEvent.change(nameElement, { target: { value: "g" } });
    fireEvent.change(urlElement, { target: { value: "github" } });
    fireEvent.click(formSubmit);

    const nameInvalid = screen.getByTestId("name-invalid");
    const urlInvalid = screen.getByTestId("url-invalid");

    expect(nameInvalid).toBeInTheDocument();
    expect(urlInvalid).toBeInTheDocument();
  });

  it("should fill form correctly", () => {
    const nameElement = screen.getByTestId("form-control-name");
    const urlElement = screen.getByTestId("form-control-url");
    const formSubmit = screen.getByTestId("form-submit-button");
    expect(nameElement).toBeInTheDocument();
    expect(urlElement).toBeInTheDocument();

    fireEvent.change(nameElement, { target: { value: "github" } });
    fireEvent.change(urlElement, { target: { value: "https://github.com" } });
    fireEvent.click(formSubmit);
  });
});
