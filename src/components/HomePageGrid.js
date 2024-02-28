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

export default function HomePageGrid() {
  return (
    <Box sx={{ flexGrow: 1, marginLeft: "100px", marginRight: "100px" }}>
      <Grid container spacing={2}>
        {/* SEARCH */}
        <Grid item xs={4}>
          <Item>Going to</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Dates</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Travellers</Item>
        </Grid>
        {/* FIND YOUR STAY BANNER */}
        <Grid item xs={12}>
          <Item>Find your stay</Item>
        </Grid>
        {/* ICONS */}
        <Grid item xs={1}>
          <Item>xs=1</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>xs=1</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>xs=1</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>xs=1</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>xs=1</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>xs=1</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>xs=1</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>xs=1</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>xs=1</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>xs=1</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>xs=1</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>xs=1</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
