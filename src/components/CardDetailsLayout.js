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
import tickCircle from "@iconify-icons/mdi/tick-circle";
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
      cardNumber: "",
      expiryDate: "",
      securityCode: "",
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
                maxWidth: "700px",
              }}
            >
              <div>
                {" "}
                <h3>Temple Bar Hotel</h3>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Icon
                  icon={bedIcon}
                  style={{ fontSize: "1.1875rem", marginRight: "8px" }}
                />
                <h4 style={{ fontSize: "1.1875rem", margin: "0" }}>
                  Step 3: Reservation Card Details
                </h4>
              </div>
              <hr
                style={{
                  borderTop: "1px solid #CACCD2",
                  width: "100%",
                  margin: "10px 0",
                }}
              />
          
             
              <div style={{ display: "flex", alignItems: "center" }}>
                <Icon
                  icon={tickCircle}
                  style={{ fontSize: "20px", color: "green", marginRight: "0.5rem" }}
                />
                <div style={{fontSize: "12px"}}>
                  We never charge any card fees
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
                {/* Card Number */}
                <h5 className="field-label">
                  Card Number <span className="required-indicator">*</span>
                </h5>
                <TextField
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="0000 0000 0000 0000"
                  value={formik.values.cardNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.cardNumber &&
                    Boolean(formik.errors.cardNumber)
                  }
                  helperText={
                    formik.touched.cardNumber && formik.errors.cardNumber
                  }
                  Input={{
                    classes: {
                      input: "input-field",
                    },
                  }}
                />
                {/* Expiry date */}
                <div>
                  <h5 className="field-label">
                    Expiry Date <span className="required-indicator">*</span>
                  </h5>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      id="expiryMonth"
                      name="expiryMonth"
                      placeholder="MM"
                      size="small"
                      value={formik.values.expiryMonth}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.expiryMonth &&
                        Boolean(formik.errors.expiryMonth)
                      }
                      helperText={
                        formik.touched.expiryMonth && formik.errors.expiryMonth
                      }
                      Input={{
                        classes: {
                          input: "input-field-small",
                        },
                      }}
                      style={{ width: "50px" }}
                    />
                    <span style={{ margin: "0 0.5rem" }}>/</span>
                    <TextField
                      id="expiryYear"
                      name="expiryYear"
                      placeholder="YYYY"
                      size="small"
                      value={formik.values.expiryYear}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.expiryYear &&
                        Boolean(formik.errors.expiryYear)
                      }
                      helperText={
                        formik.touched.expiryYear && formik.errors.expiryYear
                      }
                      Input={{
                        classes: {
                          input: "input-field-small",
                        },
                      }}
                      style={{ width: "65px" }}
                    />
                  </div>
                </div>
                <div>
                  <h5 className="field-label">
                    Security code <span className="required-indicator">*</span>
                  </h5>
                  <TextField
                    id="securityCode"
                    name="securityCode"
                    placeholder="000"
                    size="small"
                    value={formik.values.securityCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.securityCode &&
                      Boolean(formik.errors.securityCode)
                    }
                    helperText={
                      formik.touched.securityCode && formik.errors.securityCode
                    }
                    Input={{
                      classes: {
                        input: "input-field-small",
                      },
                    }}
                    style={{ width: "50px" }}
                  />
                </div>
                <div style={{ marginTop: "1rem" }}>
                  <div
                    style={{
                      backgroundColor: "#E6F7EA",
                      color: "#217952",
                      border: "2px solid #217952",
                      padding: "0.5rem",
                      borderRadius: "4px",
                    }}
                  >
                    Your card won’t be charged - it’s only needed to guarantee
                    your booking
                  </div>
                </div>
                {/* Submit Button */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "1rem",
                  }}
                >
                   <Link to="/Confirmation" className="router-link">
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    style={{ marginLeft: "1rem" }}
                  >
                    Confirm
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
                  src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Temple Bar Hotel"
                  style={{
                    height: "187px",
                    border: "6px solid #FFFFFF",
                    borderRadius: "1px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <div>
                  <p className="info-title">Temple Bar Hotel</p>
                  <p className="info-body">123 Main Street, Dublin, Ireland</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      backgroundColor: "#217952",
                      padding: "0.5rem",
                      borderRadius: "5px",
                    }}
                  >
                    <h4 style={{ margin: "0", color: "#ffffff" }}>9.2</h4>
                  </div>
                  <h5 style={{ marginLeft: "0.5rem" }}>Excellent</h5>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={LogoImage}
                    alt="Logo"
                    style={{ height: "15px", marginRight: "0.5rem" }}
                  />
                  <p className="info-body">1,204 reviews</p>
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
                      Friday, March 29, 2024
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
                      Sunday, March 31, 2024
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
                      <p className="info-body">2 nights, 14 guests</p>
                      <ul className="info-body" style={{ paddingLeft: "13px" }}>
                        <li>Standard Double Room x3</li>
                        <li>Deluxe Suite x1</li>
                        <li>King Deluxe Suite x1</li>
                      </ul>
                      <br />
                      <p className="info-body">Extras:</p>
                      <ul className="info-body" style={{ paddingLeft: "13px" }}>
                        <li>Function Room</li>
                      </ul>
                    </div>
                    <br></br>
                    <div style={{ textAlign: "right" }}>
                      <p className="info-body">Total:</p>
                      <h4>€2,860.00</h4>
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
