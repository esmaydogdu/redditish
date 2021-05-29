import React, { FC } from "react";
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import { PostsContainer } from "./PostsContainer";
import { ProviderWrapper } from "../../wrapper";
import { MemoryRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { PostsProvider } from "../../contexts";

const CustomWrapper = ({ children }: { children: FC }) => {
  const initialPosts = [
    { timestamp: 1, name: "reddit", url: "https://reddit.com", vote: 2 },
    { timestamp: 2, name: "google", url: "https://google.com", vote: 1 },
    { timestamp: 3, name: "twitter", url: "https://twitter.com", vote: 2 },
    { timestamp: 4, name: "facebook", url: "https://facebook.com", vote: -5 },
  ];
  localStorage.setItem("posts", JSON.stringify(initialPosts));
  return (
    <MemoryRouter
      initialEntries={["/", { search: "?page=2" }]}
      initialIndex={1}
    >
      <PostsProvider>
        <ToastProvider>{children}</ToastProvider>
      </PostsProvider>
    </MemoryRouter>
  );
};

describe("[PostsContainer.tsx]", () => {
  beforeEach(() => {
    render(<PostsContainer />, {
      wrapper: ProviderWrapper as FC,
    });
  });

  it("should render post container", () => {
    const dropdownElement = screen.getByTestId("dropdown-wrapper");
    expect(dropdownElement).toBeInTheDocument();

    const formPosts = screen.getAllByTestId("post-container");
    expect(formPosts).toHaveLength(3);

    const postDeleteButtons = screen.getAllByTestId("post-delete-button");
    

  });
});

test("EDGE CASE ALERT: Delete last element of a page should redirect previous page", async () => {
  render(<PostsContainer />, {
    wrapper: CustomWrapper as FC,
  });
  const formPosts = screen.getAllByTestId("post-container");
  expect(formPosts).toHaveLength(1);

  const postDeleteButtons = screen.getAllByTestId("post-delete-button");
  fireEvent.click(postDeleteButtons[0]);

  const postModalButtonDelete = screen.getByTestId("post-modal-button-delete");
  fireEvent.click(postModalButtonDelete);

});
