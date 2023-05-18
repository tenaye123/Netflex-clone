import React from "react";
import MyNav from "../Nav/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

function SharedLayout() {
  return (
    <div>
      <MyNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default SharedLayout;
