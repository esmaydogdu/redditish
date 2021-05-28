import { SubmitFormContainer } from "../../containers";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

export const Submit = () => {
  return (
    <div className="page-wrapper mt-3">
      <Link to="/" className="d-flex align-items-center font-weight-bold">
        <ArrowLeft className="mr-2" />
        Return to list
      </Link>
      <SubmitFormContainer />
    </div>
  );
};
