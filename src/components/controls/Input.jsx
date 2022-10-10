import React from "react";
import { TextFieldStyled } from "../styledComponents/Input.styles";

const Input = (props) => {
  const { name, type = "text", label, value, onChange } = props;
  return (
    <TextFieldStyled
      variant="standard"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      sx={{
        height: { xs: "4.5rem", sm: "5rem" },
      }}
    />
  );
};

export default Input;
