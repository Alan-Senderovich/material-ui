import React from "react";
import { ButtonStyled } from "../styledComponents/Button.styles";

const Button = (props) => {
  const { text, onClick, ...other } = props;

  return (
    <ButtonStyled onClick={onClick} {...other}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
