import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../assets/images/logo2.png";
import menuData from "./menuData";

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef([]);

  const handleMouseEnter = (index) => setOpenDropdown(index);
  const handleMouseLeave = () => setOpenDropdown(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRefs.current.every((ref) => ref && !ref.contains(event.target))
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Navbar expand="lg" className="navbar-custom px-4 shadow-sm py-0" sticky="top">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="/" className="me-auto d-flex align-items-center">
          <img src={Logo} alt="Logo" className="logo img-fluid" />
        </Navbar.Brand>

        {/* Toggle for Offcanvas */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" />

        {/* Offcanvas Menu */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className="bg-black text-white"
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto align-items-center">
              {menuData.map((menu, index) => (
                <div key={index} ref={(el) => (dropdownRefs.current[index] = el)}>
                  {/* If menu has items → dropdown, else → direct link */}
                  {menu.items ? (
                    <NavDropdown
                      title={menu.title}
                      id={`dropdown-${index}`}
                      className="nav-link-custom"
                      show={openDropdown === index}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {menu.items.map((item, i) => {
                        if (item === "divider") {
                          return <NavDropdown.Divider key={i} />;
                        }

                        if (item.submenu) {
                          return (
                            <div className="dropdown-submenu" key={i}>
                              <NavDropdown.Item
                                as={item.link?.startsWith("http") ? "a" : Link}
                                to={!item.link?.startsWith("http") ? item.link : undefined}
                                href={item.link?.startsWith("http") ? item.link : undefined}
                                className="dropdown-submenu-title"
                                target={item.link?.startsWith("http") ? "_blank" : undefined}
                              >
                                {item.name}
                              </NavDropdown.Item>
                              <div className="dropdown-menu submenu-right">
                                {item.submenu.map((subItem, j) =>
                                  subItem.link.startsWith("http") ? (
                                    <NavDropdown.Item
                                      key={j}
                                      href={subItem.link}
                                      target="_blank"
                                    >
                                      {subItem.name}
                                    </NavDropdown.Item>
                                  ) : (
                                    <NavDropdown.Item key={j} as={Link} to={subItem.link}>
                                      {subItem.name}
                                    </NavDropdown.Item>
                                  )
                                )}
                              </div>
                            </div>
                          );
                        }

                        return item.link.startsWith("http") ? (
                          <NavDropdown.Item key={i} href={item.link} target="_blank">
                            {item.name}
                          </NavDropdown.Item>
                        ) : (
                          <NavDropdown.Item key={i} as={Link} to={item.link}>
                            {item.name}
                          </NavDropdown.Item>
                        );
                      })}
                    </NavDropdown>
                  ) : (
                    // Direct nav link (no dropdown)
                    <Nav.Link
                      as={menu.link?.startsWith("http") ? "a" : Link}
                      to={!menu.link?.startsWith("http") ? menu.link : undefined}
                      href={menu.link?.startsWith("http") ? menu.link : undefined}
                      target={menu.link?.startsWith("http") ? "_blank" : undefined}
                      className="nav-link-custom"
                    >
                      {menu.title}
                    </Nav.Link>
                  )}
                </div>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
