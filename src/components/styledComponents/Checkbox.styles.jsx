import { Checkbox, styled } from "@mui/material";

export const CheckboxStyled = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.yellowButton.main,
  height: "10px"
}));
