import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export function Header() {
  const [logo, setLogo] = useState("");
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function getDataOfHeader() {
      const response = await fetch("/1/public");
      const data = await response.json();
      console.log({ data });
      setLogo(data.image);
      setMenu(data.menu);
    }

    getDataOfHeader();
  });

  return (
    <>
      <Navbar bg="white">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="auto"
              height="40"
              className="d-inline-block align-top"
              alt="Logo somos más"
            />
          </Navbar.Brand>
          <Container>
            <Nav>
              {
                menu.map((menuItem) => {
                  return (
                    <Nav.Item>
                      <Nav.Link href={`/${menuItem.menuLink}`}>{menuItem.menuName}</Nav.Link>
                    </Nav.Item>
                  )
                })
              }
            </Nav>
          </Container>
        </Container>
      </Navbar>
    </>
  );
}


