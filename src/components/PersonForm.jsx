import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Controls from "../components/controls/Controls";
import { useForm, Form } from "./useForm";

const PersonForm = () => {
  const initialValues = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    ruc: "",
    isValidatedTerms: false,
  };

  const { values, handleInputChange, handleInputSubmit } =
    useForm(initialValues);

  return (
    <Grid>
      <Form component="form" autoComplete="off">
        <Controls.Input
          label="Nombre"
          name="nombre"
          value={values.nombre}
          onChange={handleInputChange}
        />
        <Controls.Input
          label="Apellido"
          name="apellido"
          value={values.apellido}
          onChange={handleInputChange}
        />
        <Controls.Input
          label="Email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />
        <Controls.Input
          label="Teléfono (+519...)"
          name="telefono"
          type="number"
          value={values.telefono}
          onChange={handleInputChange}
        />
        <Controls.Input
          label="RUC"
          name="ruc"
          value={values.ruc}
          onChange={handleInputChange}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              marginTop: { xs: "1.3rem", md: "1.7rem" },
              marginBottom: { xs: "3rem", sm: "3.7rem", md: "4rem" },
            }}
          >
            {/* Checkbox */}
            <Controls.Checkbox
              name="isValidatedTerms"
              value={values.isValidatedTerms}
              onChange={handleInputChange}
            />
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: { xs: ".8rem", sm: ".9rem" },
                marginRight: { xs: ".2rem", sm: ".3rem" },
              }}
              color="black"
            >
              Aceptar
            </Typography>
            {/* Link */}
            <Controls.Link />
          </Box>
          {/* Button */}
          <Controls.Button
            type="submit"
            text="contáctanos"
            onClick={handleInputSubmit}
          />
        </Box>
      </Form>
    </Grid>
  );
};

export default PersonForm;
