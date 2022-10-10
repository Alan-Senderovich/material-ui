import React from "react";
import { Box, Grid } from "@mui/material";
import PersonForm from "../components/PersonForm";

const FormContainer = () => {
  return (
    <Grid
      columns={16}
      container
      backgroundColor="white"
      sx={{
        zIndex: 100,
        borderRadius: ".8rem .8rem .8rem .8rem",
        marginTop: "-.8rem",
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
    >
      <Grid
        xs={16}
        md={9}
        sx={{
          paddingTop: { xs: "4%", sm: "3%", md: "5%" },
          paddingX: { xs: "7%" },
          paddingBottom: { xs: "8%", md: 0 },
        }}
      >
        {/* PersonForm */}
        <PersonForm />
        {/* PersonForm */}
      </Grid>
      <Grid xs={16} md={7} sx={{}}>
        <Box
          component="img"
          sx={{
            width: "100%",
            height: { xs: "140px", sm: "200px", md: "100%" },
            objectFit: "cover",
          }}
          alt="Contactanos image"
          src="/image.png"
          borderRadius=".8rem"
          height="100%"
        />
      </Grid>
    </Grid>
  );
};

export default FormContainer;
