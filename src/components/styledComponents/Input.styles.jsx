import { styled, TextField } from "@mui/material";

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  "& label+.css-1ptx2yq-MuiInputBase-root-MuiInput-root": {
    marginTop: "20px",
  },
  "& .css-56kflr .MuiTextField-root": {},
  "& label.Mui-focused": {
    color: `${theme.palette.grayLabel.main}`,
  },
  "& .MuiInput-underline:after": {
    borderBottom: `1px solid ${theme.palette.yellowUnderline.main}`,
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: `${theme.palette.yellowUnderline.main}`,
  },
  "& .MuiInput-underline": {
    borderBottom: `1px solid "${theme.palette.yellowUnderline.main}"`,
    paddingTop: ".7rem",
  },
  "& .MuiTextField-root": {
    width: "100%",
  },
  label: {
    marginLeft: "1rem",
    paddingBottom: "1rem",
    fontWeight: "400",
    color: `${theme.palette.grayLabel.main}`,

    //RESPONSIVENESS----------------------------------------------------------------
    [theme.breakpoints.up("xs")]: {
      fontSize: ".9rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
    },
    // -------------------
  },
}));
