import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import "./Nav.css";

function Navigate() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <Nav
      className={`nav1 d-flex navbar navbar-expand-sm ${show && "nav__black"}`}
    >
      <div className="container">
        <Nav.Item>
          <Nav.Link href="/home">
            <img
              className="nav__logo"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c6f684-d447-4457-84fa-12033cfd581e/d9z3o32-2c299a83-49a9-44c2-bc23-b0b5070a546b.png/v1/fill/w_1024,h_512,strp/netflix_logo_background__2_by_sixmonthslate_d9z3o32-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xMmM2ZjY4NC1kNDQ3LTQ0NTctODRmYS0xMjAzM2NmZDU4MWVcL2Q5ejNvMzItMmMyOTlhODMtNDlhOS00NGMyLWJjMjMtYjBiNTA3MGE1NDZiLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WKy-rj_8y7ziLuhhtAES7jddy-eUpz6PQQ331bp7rRI"
              alt="Netflix Logo"
            />
          </Nav.Link>
        </Nav.Item>
        <div className="container-fluid">
          <div className=" main-container justify-content-between">
            <ul className="navbar-nav">
              <Nav.Item>
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#TvShows">TvShows</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Movies">Movies</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#New & Popular">New & Popular</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="#My List">My List</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="#Brouse by Languages">
                  Brouse by Languages
                </Nav.Link>
              </Nav.Item>
            </ul>
          </div>
        </div>
        <Nav.Item>
          <div>
            <div className="d-flex header__search " role="search">
              <input
                className="header__searchInput"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <SearchIcon className="header__searchIcon" />
            </div>
            <div>
              <NotificationsNoneIcon className="header__notIcon js-scroll-trigger" />
            </div>

            <div className="avatar">
              <img
                className="nav__avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="Avatar logo"
              />
            </div>
          </div>
        </Nav.Item>
      </div>
    </Nav>
  );
}

export default Navigate;

// import React from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import "./Nav.css";

// function Navigate() {
//   return (
//     <>
//       <Navbar className="navbar-expand-lg">
//         <Container className="d-flex nav">
//           <Navbar.Brand href="#home">
//             <img
//               className="nav__logo"
//               src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c6f684-d447-4457-84fa-12033cfd581e/d9z3o32-2c299a83-49a9-44c2-bc23-b0b5070a546b.png/v1/fill/w_1024,h_512,strp/netflix_logo_background__2_by_sixmonthslate_d9z3o32-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xMmM2ZjY4NC1kNDQ3LTQ0NTctODRmYS0xMjAzM2NmZDU4MWVcL2Q5ejNvMzItMmMyOTlhODMtNDlhOS00NGMyLWJjMjMtYjBiNTA3MGE1NDZiLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WKy-rj_8y7ziLuhhtAES7jddy-eUpz6PQQ331bp7rRI"
//               alt="Netflix Logo"
//             />
//           </Navbar.Brand>
//           <div className="navbar-collapse collapse d-flex justify-content-spacebetwen">
//             <div className="main">
//             <ul className="rowNav list-unstyled navbar-nav nav-justified w-100 nav-fill">
//               <Nav.Link className="me-auto">
//                 <Nav.Link href="#home">Home</Nav.Link>
//                 <Nav.Link href="#TvShows">TvShows</Nav.Link>
//                 <Nav.Link href="#Movies">Movies</Nav.Link>
//               </Nav.Link>
//               <Nav.Link href="#New & Popular">New & Popular</Nav.Link>

//               <Nav.Link href="#My List">My List</Nav.Link>

//               <Nav.Link href="#Brouse by Languages">
//                 Brouse by Languages
//               </Nav.Link>
//               <div>

//               <div className="d-flex header__search " role="search">
//                 <input
//                   className="header__searchInput"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                 />
//                 <SearchIcon
//                   className="header__searchIcon"
//                 />
//               </div>
//               <NotificationsNoneIcon className="header__notIcon js-scroll-trigger" />

// </div>
// <div>
//             <img
//               className="nav__avatar"
//               src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
//               alt="Avatar logo"
//             />
//           </div>

//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Navigate;
