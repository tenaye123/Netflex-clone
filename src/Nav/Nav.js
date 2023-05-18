import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faBell } from "@fortawesome/free-solid-svg-icons";

// import SearchIcon from "@mui/icons-material/Search";

import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <>
      <div className={`nav ${show && "nav__black"}`}>
        <Link to="/">
          <img
            className="nav__logo"
            src="https://th.bing.com/th/id/R.715e69176d3cec74504b3ae00f2676c6?rik=vGDJl%2bfFL64qmw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fNetflix-Logo-HD.png&ehk=aWIF5J5TR6tD4IrfNFhXE0dNVq%2f6n%2f6OViRGEsRS%2bNg%3d&risl=&pid=ImgRaw&r=0"
            alt="Netflix Logo"
          />
        </Link>
        <div className="nav__list-container">
          <ul className="nav__list">
            <li className="nav__item">Home</li>
            <li className="nav__item">
              <Link className="tv" to="/tvshows">
                TV Shows
              </Link>
            </li>
            <Link
              to="https://www.netflix.com/browse/genre/34399"
              className="nav__item"
            >
              Movies
            </Link>
            <Link
              to="https://www.netflix.com/browse/genre/34399"
              className="nav__item"
            >
              New & Popular
            </Link>
            <Link
              to="https://www.netflix.com/browse/genre/34399"
              className="nav__item"
            >
              My List
            </Link>
            <Link
              to="https://www.netflix.com/browse/genre/34399"
              className="nav__item"
            >
              Browse by Languages
            </Link>
          </ul>
        </div>

        <div className="nav__search-container" ref={searchRef}>
          <FontAwesomeIcon
            className="search"
            icon={faSearch}
            onClick={handleSearchClick}
          />
          {searchVisible && <input type="text" placeholder="search" />}
          <ul className="nav__list">
            <Link
              to="https://www.netflix.com/browse/genre/34399"
              className="nav__item"
            >
              Kids
            </Link>
            <Link
              to="https://www.netflix.com/browse/genre/34399"
              className="nav__item"
            >
              DVD
            </Link>
          </ul>
          <FontAwesomeIcon className="nav__bell" icon={faBell} />
          <img
            className="nav__avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt="Avatar Logo"
          />
        </div>
      </div>
    </>
  );
}

export default Nav;

// // import React, { useEffect, useState, useRef } from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faSearch } from "@fortawesome/free-solid-svg-icons";

// // import { Link } from "react-router-dom";

// // function Nav() {
// //   const [show, handleShow] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (window.scrollY > 100) {
// //         handleShow(true);
// //       } else {
// //         handleShow(false);
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);

// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []);

// //   return (
// //     <>
// //       <nav className={`nav ${show && "nav__black"}`}>
// //         <Link to="/">
// //           <img
// //             className="nav__logo"
// //             src="https://th.bing.com/th/id/R.715e69176d3cec74504b3ae00f2676c6?rik=vGDJl%2bfFL64qmw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fNetflix-Logo-HD.png&ehk=aWIF5J5TR6tD4IrfNFhXE0dNVq%2f6n%2f6OViRGEsRS%2bNg%3d&risl=&pid=ImgRaw&r=0"
// //             alt="Netflix Logo"
// //           />
// //         </Link>
// //         <ul className="nav__list">
// //           <li className="nav__item">
// //             <Link to="/">Home</Link>
// //           </li>
// //           <li className="nav__item">
// //             <Link to="/tvshows">TV Shows</Link>
// //           </li>
// //           <li className="nav__item">
// //             <Link to="/movies">Movies</Link>
// //           </li>
// //           <li className="nav__item">
// //             <Link to="/new">New & Popular</Link>
// //           </li>
// //           <li className="nav__item">
// //             <Link to="/mylist">My List</Link>
// //           </li>
// //           <li className="nav__item">
// //             <div className="nav__search-container">
// //               <FontAwesomeIcon icon={faSearch} />
// //               <input type="text" placeholder="search" />
// //             </div>
// //           </li>
// //           <li className="nav__item2">
// //             <Link to="/kids">Kids</Link>
// //           </li>
// //           <li className="nav__item3">
// //             <Link to="/dvd">DVD</Link>
// //           </li>
// //           <li className="nav__item4">
// //             <Link to="/profile">
// //               <img
// //                 className="nav__avatar"
// //                 src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
// //                 alt="Avatar Logo"
// //               />
// //             </Link>
// //           </li>
// //         </ul>
// //       </nav>
// //     </>
// //   );
// // }

// // export default Nav;
