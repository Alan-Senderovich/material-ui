import React from "react";
import HeaderStyled from "./../components/styledComponents/Header.styles";

const Header = () => {
  return (
    <HeaderStyled.AppBarStyled>
      <HeaderStyled.ToolbarStyled
        sx={{
          paddingLeft: {
            xs: "6%",
          },
          paddingTop: { xs: ".5rem", sm: ".6rem", md: "1.2rem", lg: "1.5rem" },
          paddingBottom: {
            xs: ".9rem",
            sm: "1.2rem",
            md: "1.5rem",
            lg: "1.8rem",
          },
        }}
      >
        <HeaderStyled.TypographyStyled
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.7rem", md: "1.9rem", lg: "2rem" },
          }}
        >
          contáctanos
        </HeaderStyled.TypographyStyled>
        {/* CloseIcon */}
        <HeaderStyled.CloseIconStyled />
        {/* CloseIcon */}
      </HeaderStyled.ToolbarStyled>
    </HeaderStyled.AppBarStyled>
  );
};

export default Header;
