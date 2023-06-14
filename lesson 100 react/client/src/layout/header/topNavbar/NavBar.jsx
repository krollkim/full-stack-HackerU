import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import LeftNavBar from "./left-navigation/LeftNavBar";
import RightNavBar from "./right-navigation/RightNavBar";
import SearchBar from "./right-navigation/SearchBar";
import {MenuProvider} from "./menu/MenuProvider";

export const NavBar = () => {
  return (
  <MenuProvider>
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "space-between", background: "#7662c5" }}>
        <LeftNavBar />

        <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
          <SearchBar />
        </Box>

        <RightNavBar />
      </Toolbar>
    </AppBar>
  </MenuProvider>
  );
};

export default NavBar