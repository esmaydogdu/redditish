import React, { FC } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Post } from "./Post";
import { ProviderWrapper } from "../../wrapper";

describe("[Post.tsx]", () => {
  beforeEach(() => {
    const props = {
      timestamp: 1,
      votes: 2,
      name: "reddit",
      url: "https://reddit.com",
    };
    render(<Post {...props} />, { wrapper: ProviderWrapper as FC });
  });
  it("should render post card container", () => {
    const postContainerElement = screen.getByTestId("post-container");
    expect(postContainerElement).toBeInTheDocument();
  });
  it("should render post votes container", () => {
    const postVotesContainerElement = screen.getByTestId(
      "post-votes-container"
    );
    expect(postVotesContainerElement).toBeInTheDocument();
    expect(postVotesContainerElement.textContent).toBe("2POINTS");
  });
  it("should render post name", () => {
    const postNameElement = screen.getByTestId("post-name");
    expect(postNameElement).toBeInTheDocument();
    expect(postNameElement.textContent).toBe("reddit");
  });
  it("should render post url", () => {
    const postUrlElement = screen.getByTestId("post-url");
    expect(postUrlElement).toBeInTheDocument();
    expect(postUrlElement.textContent).toBe("(https://reddit.com)");
  });
  it("should check if the upvote button works", async () => {
    const postUpvoteButton = screen.getByTestId("post-upvote-button");
    expect(postUpvoteButton).toBeInTheDocument();
    expect(postUpvoteButton.textContent).toBe("Up Vote");

    fireEvent.click(postUpvoteButton);
  });
  it("should check if the downvote button works", async () => {
    const postDownvoteButton = screen.getByTestId("post-downvote-button");
    expect(postDownvoteButton).toBeInTheDocument();
    expect(postDownvoteButton.textContent).toBe("Down Vote");

    fireEvent.click(postDownvoteButton);
  });
  it("should check if the delete button works", async () => {
    const postDeleteButton = screen.getByTestId("post-delete-button");
    expect(postDeleteButton).toBeInTheDocument();

    fireEvent.click(postDeleteButton);
    const postModalElement = screen.getByTestId("post-modal");
    expect(postModalElement).toBeInTheDocument();

    const postModalTitleElement = screen.getByTestId("post-modal-title");
    expect(postModalTitleElement.textContent).toBe("Remove Link");

    const postModalBodyElement = screen.getByTestId("post-modal-body");
    expect(postModalBodyElement.textContent).toBe(
      "Do you want to remove:reddit"
    );

    const postModalButtonClose = screen.getByTestId("post-modal-button-close");
    fireEvent.click(postModalButtonClose);

    const postModalButtonDelete = screen.getByTestId(
      "post-modal-button-delete"
    );
    fireEvent.click(postModalButtonDelete);
  });
});
