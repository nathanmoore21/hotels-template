import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CheckoutGrid() {
  return (
    <Box sx={{ flexGrow: 1, marginLeft: "100px", marginRight: "100px" }}>
      <Grid container spacing={2}>
        {/* PERSONAL DETAILS */}
        <Grid item xs={8}>
          <Item>Personal Detials</Item>
        </Grid>
        {/* OVERVIEW */}
        <Grid item xs={4}>
          <Item>Overview</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
