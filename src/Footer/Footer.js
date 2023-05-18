import React  from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Footerr from "./Footerr";
// import { Link } from "react-router-dom";
import { Link } from "@mui/material";

function Footer() {
  // const { basename = "" } = React.useContext(MyContext);

  return (
    <div className="container">
      <div className="footer-flex flex justify-content-center color-white ">
        <Link className="social-link" to="https://www.facebook.com/netflixus">
          <FacebookIcon className="facebookLogo text-white" />
        </Link>
        <Link className="social-link" to="https://www.instagram.com/Netflix">
          <InstagramIcon className="facebookLogo text-white" />
        </Link>
        <Link className="social-link" to="https://www.twitter.com/netflix">
          <TwitterIcon className="facebookLogo text-white" />
        </Link>
        <Link
          className="social-link"
          to="https://www.youtube.com/user/NeewOnNetflix"
        >
          <YouTubeIcon className="facebookLogo text-white" />
        </Link>
      </div>
      <div className="footer-wrapper row">
        <div className="linkwrapper col-sm-12 col-md">
          <Footerr
            linkName={[
              "Audio Descripion",
              " Investor Relations",
              " Privacy",
              " Contact us",
            ]}
          />
          <div className="linkwrapper col-sm-12 col-md"></div>
          <Footerr
            linkName={[
              " Help center",
              " Jobs",
              "Legal Notices",
              "Do Not Sell or Share My Personal Information",
            ]}
          />
          <div className="linkwrapper col-sm-12 col-md"></div>
          <Footerr
            linkName={["Gifts Cards", " Netflx Shop", " Cookie Preferences"]}
          />
          <div className="linkwrapper col-sm-12 col-md"></div>
          <Footerr
            linkName={["Media Center", "Terms of Use", "Corporate Information"]}
          />
        </div>
      </div>
      <div className="container justify-content-center button-container">
        <button type="button" className="btn">
          Service Code
        </button>
      </div>
    </div>
  );
}

export default Footer;

// import React from 'react'
// import "./Footer.css"
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import Footerr from './Footerr';
// import { Link } from 'react-router-dom';

// function Footer() {
//   return (
//     <div>
//       <div className="footer-flex d-flex justify-content-center color-white ">
//         <Link
//           className="social-link"
//           href="https://www.facebook.com/netflixus"
//         />
//         <FacebookIcon className="facebookLogo text-white" />
//         <Link
//           className="social-link"
//           href="https://www.instagram.com/Netflix"
//         />
//         <InstagramIcon className="facebookLogo text-white" />
//         <Link className="social-link" href="https://www.teitter.com/netflix" />
//         <TwitterIcon className="facebookLogo text-white" />
//         <Link
//           className="social-link"
//           href="https://www.youtube.com/user/NeewOnNetflix"
//         />
//         <YouTubeIcon className="facebookLogo text-white" />
//       </div>
//       <div className="footer-wrapper row">
//         <div className="linkwrapper col-sm-12 col-md">
//           <Footerr
//             linkName={[
//               "Audio Descripion",
//               " Investor Relations",
//               " Privacy",
//               " Contact us",
//             ]}
//           />
//           <div className="linkwrapper col-sm-12 col-md"></div>
//           <Footerr
//             linkName={[
//               " Help center",
//               " Jobs",
//               "Legal Notices",
//               "Do Not Sell or Share My Personal Information",
//             ]}
//           />
//           <div className="linkwrapper col-sm-12 col-md"></div>
//           <Footerr
//             linkName={["Gifts Cards", " Netflx Shop", " Cookie Preferences"]}
//           />
//           <div className="linkwrapper col-sm-12 col-md"></div>
//           <Footerr
//             linkName={["Media Center", "Terms of Use", "Corporate Information"]}
//           />
//         </div>
//       </div>
//       <div className="container justify-content-center button-container">
//         <button type="button" className="btn">
//           Service Code
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Footer
