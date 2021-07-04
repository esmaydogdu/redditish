import { Container, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export const Navigation = () => {
  return (
    <Container
      data-testid="navigation-container"
      className="navigation-container py-3 px-0 d-flex align-items-center justify-content-between border-bottom"
    >
      <Col>
        <Link
          className="navigation-home-link"
          data-testid="navigation-home-link"
          to="/"
        >
          <Image data-testid="navigation-logo" alt="React Logo" src={logo} />
        </Link>
      </Col>
      <Col
        data-testid="navigation-right"
        className="navigation-text text-right"
      >
        <span>Reddit</span>
        <span>ISH</span>
        {/* <span> Challenge</span> */}
      </Col>
    </Container>
  );
};
