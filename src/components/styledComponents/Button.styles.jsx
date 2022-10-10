import { Button as MuiButton, styled } from "@mui/material";

export const ButtonStyled = styled(MuiButton)(({ theme }) => ({
  backgroundColor: theme.palette.yellowButton.main,
  color: "#000",
  fontSize: "1.2rem",
  width: "100%",

  "&:hover": {
    backgroundColor: "#757500",
  },
  "&:active": {
    backgroundColor: "#fff",
  },
  
  //RESPONSIVENESS----------------------------------------------------------------
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.2rem",
    height: "4rem",
    fontWeight: 700,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
    height: "4.7rem",
    fontWeight: 700,
    letterSpacing: ".003rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.7rem",
    height: "4.9rem",
    fontWeight: 600,
    marginBottom: "3rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.7rem",
    height: "5.5rem",
    fontWeight: 600,
  },
  // -------------------
}));
