import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Portfolio } from "../../pages/Portfolio";
import { Services } from "../../pages/ServicesPage";
import { Workshops } from "../../pages/Workshops";
import { ChalkPaint } from "../../pages/ChalkPaint";
import { About } from "../../pages/About";
import "../../../src/App.css";

export default function NavBar() {
  return (
    <Container>
      <Router>
        <Navbar.Toggle collapseOnSelect bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="links m-auto">
              <Nav.Link eventKey="1" as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="services">
                Services
              </Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="workshops">
                Worshops
              </Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="chalk-paint">
                Chalk Paint
              </Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Toggle>

        <Switch>
          <Route
            path="/home"
            render={(props) => (
              <Home
                {...props}
                timestamp={new Date().toString()}
                key={props.location.key}
              />
            )}
          />
          <Route
            path="/portfolio"
            render={(props) => (
              <Portfolio
                {...props}
                timestamp={new Date().toString()}
                key={props.location.key}
              />
            )}
          />
          <Route
            path="/services"
            render={(props) => (
              <Services
                {...props}
                timestamp={new Date().toString()}
                key={props.location.key}
              />
            )}
          />
          <Route
            path="/workshops"
            render={(props) => (
              <Workshops
                {...props}
                timestamp={new Date().toString()}
                key={props.location.key}
              />
            )}
          />
          <Route
            path="/chalk-paint"
            render={(props) => (
              <ChalkPaint
                {...props}
                timestamp={new Date().toString()}
                key={props.location.key}
              />
            )}
          />
          <Route
            path="/about"
            render={(props) => (
              <About
                {...props}
                timestamp={new Date().toString()}
                key={props.location.key}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                {...props}
                timestamp={new Date().toString()}
                key={props.location.key}
              />
            )}
          />
          <Route
            exact
            path="*"
            render={(props) => (
              <Home
                {...props}
                timestamp={new Date().toString()}
                key={props.location.key}
              />
            )}
          />
        </Switch>
      </Router>
    </Container>
  );
}
