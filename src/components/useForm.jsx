import React, { useState } from "react";
import { FormControl } from "@mui/material";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const defaultValues = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    ruc: "",
    isValidatedTerms: false,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (
      values.nombre.length === 0 ||
      values.apellido.length === 0 ||
      values.email.length === 0 ||
      values.telefono.length === 0 ||
      values.ruc.length === 0
    ) {
      return alert("Debe completar todos los campos");
    }
    if (!values.isValidatedTerms) {
      return alert("Debe aceptar los -Términos y condiciones-");
    }

    alert(`Form Values: ${JSON.stringify(values)}`);
    setValues(defaultValues);
  };

  return {
    values,
    setValues,
    handleInputChange,
    handleInputSubmit,
  };
};

export const Form = (props) => {
  return (
    <FormControl
      fullWidth
      sx={{
        gap: { sm: ".2rem", md: ".1rem", lg: "1.2rem" },
      }}
    >
      {props.children}
    </FormControl>
  );
};

export default useForm;
