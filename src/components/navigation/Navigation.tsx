import { Container, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/hb-logo.svg";

export const Navigation = () => {
  return (
    <Container
      data-testid="navigation-container"
      className="navigation-container py-3 px-0 d-flex align-items-center justify-content-between border-bottom"
    >
      <Col>
        <Link data-testid="navigation-home-link" to="/">
          <Image data-testid="navigation-logo" src={logo} />
        </Link>
      </Col>
      <Col data-testid="navigation-right" className="navigation-text text-right">
        <span>Link</span>
        <span>VOTE</span>
        <span> Challenge</span>
      </Col>
    </Container>
  );
};
