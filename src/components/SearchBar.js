import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import queryString from 'query-string';

const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const SearchForm = styled("form")({
  width: "100%",
});

const SearchButton = styled(Link)({
  display: "inline-block",
  padding: "10px 20px",
  borderRadius: "7px",
  backgroundColor: "#1169E0",
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "16px",
});

const CustomSelect = styled(Select)({});

const CustomTextField = styled(TextField)({});

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [dateValues, setDateValues] = useState([]);
  const [expandTravelersMenu, setExpandTravelersMenu] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Location:", location);
    console.log("Check-in Date:", checkInDate);
    console.log("Adults:", adults);
    console.log("Children:", children);
    console.log("Date Values:", dateValues);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SearchForm noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={3}>
            <h4>Going to</h4>
            <FormControl fullWidth style={{ width: "100%" }}>
              <CustomSelect
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{
                  backgroundColor: "#ffffff",
                  width: "99%",
                  height: "2.875rem",
                }}
              >
                <MenuItem value="Antrim">Antrim</MenuItem>
                <MenuItem value="Armagh">Armagh</MenuItem>
                <MenuItem value="Carlow">Carlow</MenuItem>
                <MenuItem value="Cavan">Cavan</MenuItem>
                <MenuItem value="Clare">Clare</MenuItem>
                <MenuItem value="Cork">Cork</MenuItem>
                <MenuItem value="Derry">Derry</MenuItem>
                <MenuItem value="Donegal">Donegal</MenuItem>
                <MenuItem value="Down">Down</MenuItem>
                <MenuItem value="Dublin">Dublin</MenuItem>
                <MenuItem value="Fermanagh">Fermanagh</MenuItem>
                <MenuItem value="Galway">Galway</MenuItem>
                <MenuItem value="Kerry">Kerry</MenuItem>
                <MenuItem value="Kildare">Kildare</MenuItem>
                <MenuItem value="Kilkenny">Kilkenny</MenuItem>
                <MenuItem value="Laois">Laois</MenuItem>
                <MenuItem value="Leitrim">Leitrim</MenuItem>
                <MenuItem value="Limerick">Limerick</MenuItem>
                <MenuItem value="Longford">Longford</MenuItem>
                <MenuItem value="Louth">Louth</MenuItem>
                <MenuItem value="Mayo">Mayo</MenuItem>
                <MenuItem value="Meath">Meath</MenuItem>
                <MenuItem value="Monaghan">Monaghan</MenuItem>
                <MenuItem value="Offaly">Offaly</MenuItem>
                <MenuItem value="Roscommon">Roscommon</MenuItem>
                <MenuItem value="Sligo">Sligo</MenuItem>
                <MenuItem value="Tipperary">Tipperary</MenuItem>
                <MenuItem value="Tyrone">Tyrone</MenuItem>
                <MenuItem value="Waterford">Waterford</MenuItem>
                <MenuItem value="Westmeath">Westmeath</MenuItem>
                <MenuItem value="Wexford">Wexford</MenuItem>
                <MenuItem value="Wicklow">Wicklow</MenuItem>
              </CustomSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <h4>Dates</h4>
            <div
              style={{
                width: "99%",
                height: "2.875rem",
                backgroundColor: "#ffffff",
                borderRadius: "4px",
                border: "1px solid #ced4da",
              }}
            >
              <DatePicker
                value={dateValues}
                onChange={(value) => setDateValues(value.slice(0, 2))}
                multiple
                format="DD MMM"
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "0",
                  border: "none",
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={3}>
            <h4>Travellers</h4>
            <FormControl fullWidth style={{ width: "100%" }}>
              <CustomSelect
                id="travelers"
                value={
                  expandTravelersMenu
                    ? ""
                    : `${adults} Adults, ${children} Children`
                }
                onChange={() => setExpandTravelersMenu(!expandTravelersMenu)}
                style={{
                  backgroundColor: "#ffffff",
                  width: "99%",
                  height: "2.875rem",
                }}
              >
                <MenuItem disabled={!expandTravelersMenu}>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item>
                      <CustomTextField
                        id="adults"
                        label="Adults"
                        type="number"
                        InputProps={{ inputProps: { min: 0 } }}
                        value={adults}
                        onChange={(e) => setAdults(parseInt(e.target.value))}
                      />
                    </Grid>
                    <Grid item>
                      <CustomTextField
                        id="children"
                        label="Children"
                        type="number"
                        InputProps={{ inputProps: { min: 0 } }}
                        value={children}
                        onChange={(e) => setChildren(parseInt(e.target.value))}
                      />
                    </Grid>
                  </Grid>
                </MenuItem>
              </CustomSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={1}>
            <h4>&nbsp;</h4>

            <SearchButton
              to={`/results?location=${location}&checkInDate=${checkInDate}&adults=${adults}&children=${children}`}
              className="router-link"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                borderRadius: "7px",
                backgroundColor: "#1169E0",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              Search
            </SearchButton>
          </Grid>
        </Grid>
      </SearchForm>
    </div>
  );
};

export default SearchBar;
