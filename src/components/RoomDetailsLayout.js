import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Icon } from "@iconify/react";
import bedIcon from "@iconify-icons/mdi/bed";
import wifiIcon from "@iconify-icons/mdi/wifi";
import gymIcon from "@iconify-icons/mdi/dumbbell";
import noSmokingIcon from "@iconify-icons/mdi/smoking-off";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import RiuPlaza from "./images/riu-plaza-dublin.jpeg";
import LogoImage from "./images/logo.svg";
import { Link } from "react-router-dom";

const validationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
});

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        position: "relative",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function FlexGrow() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Item
              sx={{
                flexGrow: 2,
                p: 1,
                bgcolor: "#FFFFFF",
                border: "2px solid #CACCD2",
                borderRadius: 1,
              }}
            >
              <div>
                {" "}
                <h3>Hotel Riu Plaza The Gresham Dublin</h3>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Icon
                  icon={bedIcon}
                  style={{ fontSize: "1.1875rem", marginRight: "8px" }}
                />
                <h4 style={{ fontSize: "1.1875rem", margin: "0" }}>
                  Step 1: Your Details
                </h4>
              </div>
              <hr
                style={{
                  borderTop: "1px solid #CACCD2",
                  width: "100%",
                  margin: "10px 0",
                }}
              />
              <div>
                <h5>Property Highlights</h5>
                <div className="CO1-icon-text">
                  <Icon
                    icon={wifiIcon}
                    style={{ fontSize: "0.875rem", marginRight: "4px" }}
                  />
                  Free WiFi
                  <Icon
                    icon={gymIcon}
                    style={{
                      fontSize: "0.875rem",
                      marginLeft: "25px",
                      marginRight: "4px",
                    }}
                  />
                  Gym
                  <Icon
                    icon={noSmokingIcon}
                    style={{
                      fontSize: "0.875rem",
                      marginLeft: "25px",
                      marginRight: "4px",
                    }}
                  />
                  Non-Smoking
                </div>
              </div>
              <form onSubmit={formik.handleSubmit}>
                {/* First Name */}
                <h5 className="field-label">
                  First Name <span className="required-indicator">*</span>
                </h5>
                <TextField
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                  Input={{
                    classes: {
                      input: "input-field",
                    },
                  }}
                />
                {/* Last Name */}
                <h5 className="field-label">
                  Last Name <span className="required-indicator">*</span>
                </h5>
                <TextField
                  id="lastName"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  Input={{
                    classes: {
                      input: "input-field",
                    },
                  }}
                />
                {/* Email */}
                <h5 className="field-label">
                  Email Address <span className="required-indicator">*</span>
                </h5>
                <TextField
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  Input={{
                    classes: {
                      input: "input-field",
                    },
                  }}
                />
                {/* Phone Number */}
                <h5 className="field-label">
                  Phone Number <span className="required-indicator">*</span>
                </h5>
                <TextField
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.phoneNumber &&
                    Boolean(formik.errors.phoneNumber)
                  }
                  helperText={
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                  }
                  Input={{
                    classes: {
                      input: "input-field",
                    },
                  }}
                />
                {/* Submit Button */}
                <div style={{ marginTop: "1rem" }}>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    Check this box if you would not like to receive Hotels.com
                    special deals email newsletter that contains great hotel
                    promotions.
                  </label>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "1rem",
                  }}
                >
                  <Link to="/CardDetails" className="router-link">
                    <Button
                      color="primary"
                      variant="contained"
                      type="submit"
                      style={{ marginLeft: "1rem" }}
                    >
                      Next
                    </Button>
                  </Link>
                </div>
              </form>
            </Item>
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 1,
              borderRadius: 1,
              margin: "auto",
              paddingTop: "0px",
            }}
          >
            <Item
              sx={{
                flexGrow: 3,
                p: 1,
                bgcolor: "#FFFFFF",
                border: "2px solid #CACCD2",
                borderRadius: 1,
              }}
            >
              <Item
                sx={{
                  bgcolor: "#F3F3F5",
                  p: 1,
                  border: "2px solid #CACCD2",
                  borderRadius: 1,
                }}
              >
                <img
                  src={RiuPlaza}
                  alt="RiuPlaza"
                  style={{
                    height: "187px",
                    border: "6px solid #FFFFFF",
                    borderRadius: "1px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <div>
                  <p className="info-title">
                    Hotel Riu Plaza The Gresham Dublin
                  </p>
                  <p className="info-body">
                    23 Upper O Connell Street, Dublin 2, Ireland
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      backgroundColor: "#217952",
                      padding: "0.5rem",
                      borderRadius: "5px",
                    }}
                  >
                    <h4 style={{ margin: "0", color: "#ffffff" }}>8.8</h4>
                  </div>
                  <h5 style={{ marginLeft: "0.5rem" }}>Very good</h5>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={LogoImage}
                    alt="Logo"
                    style={{ height: "15px", marginRight: "0.5rem" }}
                  />
                  <p className="info-body">1,207 reviews</p>
                </div>
                <Item
                  sx={{
                    flexGrow: 2,
                    bgcolor: "#FFFFFF",
                    border: "2px solid #217952",
                    borderRadius: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    padding: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <p className="info-body">Check-in</p>
                    <p className="info-body" style={{ fontWeight: 600 }}>
                      Wednesday, April 17, 2024
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <p className="info-body"></p>
                    <p className="info-body">(3:00pm)</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <p className="info-body">Check-out</p>
                    <p className="info-body" style={{ fontWeight: 600 }}>
                      Friday, April 19, 2024
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <p className="info-body"></p>
                    <p className="info-body">(noon)</p>
                  </div>
                  <Item
                    sx={{
                      bgcolor: "#FFFFFF",
                      width: "80%",
                      margin: "auto",

                      border: "2px solid #217952",
                      borderRadius: 1,
                      padding: "1rem",
                    }}
                  >
                    <h5>Your Stay Breakdown</h5>
                    <div className="body-text">
                      <p className="info-body">2 nights, 33 guests</p>
                      <ul className="info-body" style={{ paddingLeft: "13px" }}>
                        <li>Twin Room x3</li>
                        <li>Double Room x6</li>
                        <li>Single Room x1</li>
                        <li>Function Room</li>
                      </ul>
                    </div>
                    <br></br>
                    <div style={{ textAlign: "right" }}>
                      <p className="info-body">Total:</p>
                      <h4>€2,205.00</h4>
                    </div>
                  </Item>
                </Item>
              </Item>
            </Item>
          </Box>
        </div>
      </div>
    </>
  );
}
