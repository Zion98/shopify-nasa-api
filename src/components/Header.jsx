import React, { useState } from "react";
import {
  Nav,
  Navbar,
  Form,
  Container,
  Button,
  FormControl,
} from "react-bootstrap";
const Header = ({ setDate }) => {
  const [state, setState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate(state);
  };
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Mars Shoots</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          />

          <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl
              type="date"
              name="date"
              placeholder="Search"
              className="me-2"
              value={state}
              aria-label="Search"
              onChange={(e) => setState(e.target.value)}
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
