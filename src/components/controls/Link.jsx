import React from "react";
import { Link as MuiLink } from "@mui/material";
import { theme } from "../../theme";

const Link = () => {
  return (
    <MuiLink
      href="#"
      underline="always"
      sx={{
        color: theme.palette.yellowTermsConditions.main,
        textDecorationColor: theme.palette.yellowTermsConditions.main,
        fontSize: { xs: ".8rem", sm: ".9rem" },
        "&:hover": {
          color: "#757500",
        },
      }}
    >
      términos y condiciones
    </MuiLink>
  );
};

export default Link;
