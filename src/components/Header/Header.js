import React, { Fragment } from 'react'
import Nav, { NavItem, NavLink } from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
    <Nav.Link href="#/posts">Browse</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="#">
      Asking For A Friend
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { alwaysOptions }
        { user && <Nav.Link href="#create-post">Post a question</Nav.Link> }
        { user && <span className="navbar-text mr-2">Welcome,
          <Dropdown
            alignRight
            title="Dropdown right"
            id="dropdown-menu-align-right"
            as={NavItem}>
            <Dropdown.Toggle as={NavLink}>{user.username}</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#change-password">Change Password</Dropdown.Item>
              <Dropdown.Item href="#sign-out">Sign Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </span> }
        { !user && unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
