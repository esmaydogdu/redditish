import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { PlusSquare } from "react-bootstrap-icons";

export const SubmitLink = () => {
  return (
    <div data-testid="submit-link-wrapper" className="submit-link-button pb-4">
      <Link data-testid="submit-link" to="/submit">
        <Button
          data-testid="submit-link-button"
          className="w-100 py-1 clearfix"
          variant="outline-primary"
          size="lg"
        >
          <PlusSquare data-testid="submit-link-button-icon" />
          <span>Submit Link</span>
        </Button>
      </Link>
    </div>
  );
};
