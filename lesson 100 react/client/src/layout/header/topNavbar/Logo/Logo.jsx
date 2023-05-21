import React from "react";
import Typography from "@mui/material/Typography";
import NavBarLink from "../../../../routes/NavBarLink";
import ROUTES from "../../../../routes/routesModel";

const Logo = () => {
  return (
   <NavBarLink to={ROUTES.ABOUT}>
     <Typography
      variant="h4"
      sx={{
        display: { xs: "none", md: "inline-flex" },
        marginRight: 2,
        fontFamily: "fantasy",
      }}>
      BCard
      </Typography>
   </NavBarLink>
  );
};

export default Logo;