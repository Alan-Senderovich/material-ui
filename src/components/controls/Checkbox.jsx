import React from "react";
import { FormControl, FormControlLabel } from "@mui/material";
import { CheckboxStyled } from "../styledComponents/Checkbox.styles";

const Checkbox = (props) => {
  const { name, value, onChange } = props;

  const convertToDefEventParam = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <FormControl>
      <FormControlLabel
        control={
          <CheckboxStyled
            name={name}
            checked={value}
            onChange={(e) => onChange(convertToDefEventParam(name, e.target.checked))}
          />
        }
      />
    </FormControl>
  );
};

export default Checkbox;
