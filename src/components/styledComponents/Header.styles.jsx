import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AppBarStyled = styled(AppBar)({
  position: "static",
  background: "#000",
  color: "#fff",
  borderRadius: ".8rem .8rem 0 0",
});

const ToolbarStyled = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  zIndex: 1,
  borderRadius: ".8rem .8rem .8rem .8rem",
});

const TypographyStyled = styled(Typography)({
  color: "#fff",
  textTransform: "uppercase",
  fontWeight: "700",
});

const CloseIconStyled = styled(CloseIcon)(({ theme }) => ({
  "&:hover": {
    cursor: "pointer",
    color: theme.palette.yellowButton.main,
  },

  //RESPONSIVENESS----------------------------------------------------------------
  [theme.breakpoints.up("xs")]: {
    paddingRight: ".5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.7rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
    paddingRight: ".9rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.5rem",
    paddingRight: "1.8rem",
  },
  // -------------------
}));

const HeaderStyled = {
  AppBarStyled,
  ToolbarStyled,
  TypographyStyled,
  CloseIconStyled,
};

export default HeaderStyled;
