import { SubmitFormContainer } from "../../containers";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

export const Submit = () => {
  return (
    <div data-testid="submit" className="page-wrapper mt-3">
      <Link
        data-testid="submit-link"
        to="/"
        className="d-flex align-items-center font-weight-bold"
      >
        <ArrowLeft className="mr-2" />
        Return to list
      </Link>
      <SubmitFormContainer />
    </div>
  );
};
