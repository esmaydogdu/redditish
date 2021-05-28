import { Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { ArrowUp, ArrowDown, DashCircleFill } from "react-bootstrap-icons";
import { usePosts } from "../../contexts";
import { Post as PostType } from "../../types";
import { useToasts } from "react-toast-notifications";

export const Post = ({ timestamp, votes, name, url }: PostType) => {
  const { handleClickDeletePost, handleClickUpvote, handleClickDownvote } =
    usePosts();
  const { addToast } = useToasts();

  const handleClickDelete = () => {
    handleClickDeletePost(timestamp);
    setModalShown(false);
    addToast(`${name} REMOVED`, {
      appearance: "success",
      autoDismiss: true,
    });
  };

  const [isModalShown, setModalShown] = useState(false);

  const handleCloseModal = () => setModalShown(false);

  return (
    <>
      <Card
        data-testid="post-container"
        className="mt-2 border post-container d-flex flex-row p-3"
      >
        <div
          data-testid="post-votes-container"
          className="py-1 px-2 votes-container d-flex flex-column align-items-center justify-content-center border rounded"
        >
          <p className="m-0 h3 font-weight-bolder">{votes}</p>
          <p className="m-0">POINTS</p>
        </div>
        <Card.Body className="py-0">
          <Card.Title data-testid="post-name" className="mb-1">
            {name}
          </Card.Title>
          <Card.Text data-testid="post-url">({url})</Card.Text>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <button
              data-testid="post-upvote-button"
              onClick={() => handleClickUpvote(timestamp)}
              className="vote-button text-secondary border-0 bg-transparent"
            >
              <ArrowUp />
              <span>Up Vote</span>
            </button>
            <button
              data-testid="post-downvote-button"
              onClick={() => handleClickDownvote(timestamp)}
              className="vote-button text-secondary border-0 bg-transparent  "
            >
              <ArrowDown />
              <span>Down Vote</span>
            </button>
          </div>
        </Card.Body>
        <DashCircleFill
          data-testid="post-delete-button"
          onClick={() => setModalShown(true)}
          className="remove-icon text-danger"
        />
      </Card>
      <Modal
        data-testid="post-modal"
        show={isModalShown}
        onHide={handleCloseModal}
      >
        <Modal.Header closeButton>
          <Modal.Title data-testid="post-modal-title">Remove Link</Modal.Title>
        </Modal.Header>

        <Modal.Body data-testid="post-modal-body">
          <p>Do you want to remove:</p>
          <h3>{name}</h3>
        </Modal.Body>

        <Modal.Footer>
          <Button
            data-testid="post-modal-button-close"
            onClick={handleCloseModal}
            variant="secondary"
          >
            No
          </Button>
          <Button
            data-testid="post-modal-button-delete"
            onClick={handleClickDelete}
            variant="primary"
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
