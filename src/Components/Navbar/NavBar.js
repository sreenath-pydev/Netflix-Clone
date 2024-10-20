import React from 'react';
import './NavBar.css'; // Custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'; // Import Bootstrap components

const NavbarComponent = () => {
  return (
    <Navbar  expand="lg" className="navbar-dark">
      <div className="container-fluid">
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            style={{ width: '100px' }}
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex justify-content-between w-100">
            {/* Left Section: Links */}
            <Nav className="left-section">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/tv-shows">TV Shows</Nav.Link>
              <Nav.Link href="/movies">Movies</Nav.Link>
              <Nav.Link href="/latest">Latest</Nav.Link>
              <Nav.Link href="/my-list">My List</Nav.Link>
            </Nav>

            {/* Right Section: Search, Children, Bell Icon, Profile Dropdown */}
            <Nav className="right-section d-flex align-items-center">
              <Nav.Link>
                <i className="fas fa-search" style={{ color: '#fff', fontSize: '20px' }}></i>
              </Nav.Link>
              <Nav.Link>
                <p style={{ display: 'inline', marginRight: '10px', color: '#fff' }}>Children</p>
              </Nav.Link>
              <Nav.Link>
                <i className="fas fa-bell" style={{ color: '#ffffff' }}></i>
              </Nav.Link>
              <NavDropdown
                title={
                  <img
                    src="https://imgs.search.brave.com/UkL7JSRPBSUNFLKtaI7LWv_8a5PXcElCqp3PRNYEhOw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbmV0/ZmxpeC1wcm9maWxl/LXBpY3R1cmVzLTEw/MDAteC0xMDAwLTg4/d2tkbWpyb3Jja2Vr/aGEuanBn"
                    alt="Profile"
                    style={{ width: '30px', borderRadius: '10%' }}
                  />
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
