import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Icon } from "@iconify/react";
import bedIcon from "@iconify-icons/mdi/bed";
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

  //state variable called isOpen and a function to update it called setIsOpen
  //the initial value of isOpen is false
  //useState hook returns an array with two items: isOpen and setIsOpen
  //const = constant, it cannot be changed
  const [isOpen, setIsOpen] = React.useState(false);
  const [expandSpecialRequests, setExpandSpecialRequests] =
    React.useState(false);
  const [expandAccessibilityRequests, setExpandAccessibilityRequests] =
    React.useState(false);
  const [expandArrival, setExpandArrival] = React.useState(false);

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
                  Step 2: Room Details
                </h4>
              </div>
              <hr
                style={{
                  borderTop: "1px solid #CACCD2",
                  width: "100%",
                  margin: "10px 0",
                }}
              />
              <form onSubmit={formik.handleSubmit}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {/* TextField with Icon */}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {/* Icon */}
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        border: "1px solid #1169E0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "8px",
                        color: "#191E3A",
                        fontSize: "1rem",
                      }}
                    >
                      1
                    </div>
                    {/* TextField */}
                    <TextField
                      id="firstName"
                      name="firstName"
                      placeholder="Guest Name"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.firstName &&
                        Boolean(formik.errors.firstName)
                      }
                      helperText={
                        formik.touched.firstName && formik.errors.firstName
                      }
                      InputProps={{
                        classes: {
                          input: "input-field",
                        },
                      }}
                    />
                  </div>
                  {/* Dropdown Menu */}
                  <div
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      fontSize: "11px",
                      fontWeight: "normal",
                      color: "#1169E0",
                      marginLeft: "2.5rem",
                      marginBottom: "1px", 
                    }}
                    //When the user clicks on the div, the setIsOpen function is called with the opposite value
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Booking Preferences
                  </div>
                  {/* If isOpen is true, the dropdown menu will be displayed with the below styling */}
                  {/* && is the logical and operator */}
                  {isOpen && (
                    <ul
                      style={{
                        listStyleType: "none",
                        marginTop: "0",
                        paddingLeft: 0,
                      }}
                    >
                      <li
                        style={{ marginTop: "4px", cursor: "pointer" }}
                        onClick={() =>
                          setExpandSpecialRequests(!expandSpecialRequests)
                        }
                      >
                        <span
                          style={{
                            textDecoration: "none",
                            cursor: "pointer",
                            fontSize: "11px",
                            fontWeight: "normal",
                            color: "#1169E0",
                            marginLeft: "3.5rem",
                          }}
                        >
                          Any special requests?
                        </span>
                        {expandSpecialRequests && (
                          <p style={{ margin: "4px 0 0 16px" }}>
                            special requests
                          </p>
                        )}
                      </li>
                      <li
                        style={{ marginTop: "4px", cursor: "pointer" }}
                        onClick={() =>
                          setExpandAccessibilityRequests(
                            !expandAccessibilityRequests
                          )
                        }
                      >
                        <span
                          style={{
                            textDecoration: "none",
                            cursor: "pointer",
                            fontSize: "11px",
                            fontWeight: "normal",
                            color: "#1169E0",
                            marginLeft: "3.5rem",
                          }}
                        >
                          Any accessibility requests?
                        </span>
                        {expandAccessibilityRequests && (
                          <p style={{ margin: "4px 0 0 16px" }}>
                            accessibility requests
                          </p>
                        )}
                      </li>
                      <li
                        style={{ marginTop: "4px", cursor: "pointer" }}
                        onClick={() => setExpandArrival(!expandArrival)}
                      >
                        <span
                          style={{
                            textDecoration: "none",
                            cursor: "pointer",
                            fontSize: "11px",
                            fontWeight: "normal",
                            color: "#1169E0",
                            marginLeft: "3.5rem",
                          }}
                        >
                          Will this guest be arriving on the same day?
                        </span>
                        {expandArrival && (
                          <p style={{ margin: "4px 0 0 16px" }}>
                            arrival on same day
                          </p>
                        )}
                      </li>
                    </ul>
                  )}
                </div>
                {/* Submit Button */}
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
