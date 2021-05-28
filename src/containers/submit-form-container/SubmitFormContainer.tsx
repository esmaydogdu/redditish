import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { usePosts } from "../../contexts";
import { useToasts } from "react-toast-notifications";

export const SubmitFormContainer = () => {
  // We want to take url and name from form and place them into PostsContext
  // post example: { timestamp: 1, name: "reddit", url: "https://reddit.com", vote: 0 }
  const { posts, setPosts } = usePosts();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  // setValidated function checks validity of inputs if true.
  const [validated, setValidated] = useState(false);
  const { addToast } = useToasts();

  const addPost = (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    setValidated(false);
    setPosts([...posts, { timestamp: Date.now(), name, url, votes: 0 }]);
    setName("");
    setUrl("");
    addToast(`${name} ADDED`, {
      appearance: 'success',
      autoDismiss: true,
    })
  };

  const updateName = (e: any) => {
    setName(e.target.value);
  };
  const updateUrl = (e: any) => {
    setUrl(e.target.value);
  };

  return (
    <>
      <Form
        data-testid="form-container"
        className="clearfix"
        noValidate
        validated={validated}
        onSubmit={addPost}
      >
        <h2 className="my-4">Add a new link</h2>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Link Name</Form.Label>
          <Form.Control
            data-testid="form-control-name"
            value={name}
            onChange={updateName}
            type="text"
            placeholder="Link Name"
            minLength={2}
            maxLength={100}
            required
          />
          <Form.Control.Feedback data-testid="name-invalid" type="invalid">
            Please enter a link name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Link URL</Form.Label>
          <Form.Control
            data-testid="form-control-url"
            value={url}
            onChange={updateUrl}
            type="url"
            placeholder="Link URL"
            required
          />
          <Form.Control.Feedback data-testid="url-invalid" type="invalid">
            Please enter a url.
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          data-testid="form-submit-button"
          variant="primary"
          type="submit"
          size="lg"
          className="float-right"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};
