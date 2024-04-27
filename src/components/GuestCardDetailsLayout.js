// a replica from the CardDetailsLayout.js file, but with the form fields for the guest card details
// some other elements are removed such as the banner, footer and total booking cost, as that is for the lead booker.

import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Icon } from "@iconify/react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LogoImage from "./images/logo.svg";
import tickCircle from "@iconify-icons/mdi/tick-circle";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faTag } from "@fortawesome/free-solid-svg-icons";

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required("First Name is required")
    // Only allow letters in the first name
    .matches(/^[A-Za-z]+$/, "Please enter a valid First Name"),
  lastName: yup
    .string()
    .required("Last Name is required")
    // Only allow letters in the last name
    .matches(/^[A-Za-z]+$/, "Please enter a valid Last Name"),
  cardNumber: yup
    .string()
    .required("Card Number is required")
    // Only allow 16 digits in the card number
    .matches(/^\d{16}$/, "Please enter a valid Card Number"),
  expiryMonth: yup
    .string()
    .required("Expiry Month is Required")
    // Only allow 2 digits in the expiry month
    .matches(/^\d{2}$/, "Please enter a valid Expiry Month"),
  expiryYear: yup
    .string()
    .required("Expiry Year is Required")
    // Only allow 4 digits in the expiry year
    .matches(/^\d{4}$/, "Please enter a valid Expiry Year"),
  securityCode: yup
    .string()
    .required("Security Code is required")
    // Only allow 3 digits in the security code
    .matches(/^\d{3}$/, "Please enter a valid Security Code"),
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
      expiryMonth: "",
      expiryYear: "",
      securityCode: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // State to check if the form is valid
  // This is used to disable the submit button if the form is not valid
  const [isFormValid, setIsFormValid] = React.useState(true);

  React.useEffect(() => {
    const isFirstNameValid = formik.values.firstName.trim() !== "";
    const isLastNameValid = formik.values.lastName.trim() !== "";
    const isCardNumberValid = formik.values.cardNumber.trim() !== "";
    const isExpiryMonthlValid = formik.values.expiryMonth.trim() !== "";
    const isExpiryYearValid = formik.values.expiryYear.trim() !== "";
    const isSecurityCodeValid = formik.values.securityCode.trim() !== "";
    setIsFormValid(
      isFirstNameValid &&
        isLastNameValid &&
        isCardNumberValid &&
        isExpiryMonthlValid &&
        isExpiryYearValid &&
        isSecurityCodeValid &&
        !formik.touched.firstName &&
        !formik.touched.lastName &&
        !formik.touched.cardNumber &&
        !formik.touched.expiryMonth &&
        !formik.touched.expiryYear &&
        !formik.touched.securityCode
    );
  }, [formik.values, formik.touched]);

  React.useEffect(() => {
    setIsFormValid(formik.isValid);
  }, [formik.isValid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formik.isValid) {
      formik.submitForm();
    }
  };

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
                maxWidth: "610px",
                minWidth: "610px",
              }}
            >
              <h4 style={{ marginBottom: "0px" }}>
                Your Unique Booking Code: MQ1234
              </h4>
              <p style={{ marginTop: "0px", marginBottom: "4px" }}>
                Want to discuss your booking before you pay? Call us on
                {" 555-123-4567 "}
              </p>
            </Item>

            <Item
              sx={{
                display: "flex",
                flexGrow: 2,
                p: 1,
                bgcolor: "#ffffff",
                border: "2px solid",
                borderRadius: 1,
                maxWidth: "610px",
                minWidth: "610px",
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#F6F6F6",
                  color: "#191E3A",
                  margin: "0 5px",
                  padding: 10,
                  borderRadius: 5,
                  textAlign: "right",
                  fontSize: "12px",
                }}
              >
                <FontAwesomeIcon
                  icon={faCalendar}
                  style={{
                    width: "30%",
                    marginRight: "10px",
                    fontSize: "38px",
                    color: "#1169E0",
                  }}
                />
                <div style={{ flex: "70%" }}>
                  Flexible check-in & check-out dates for each room
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#F6F6F6",
                  color: "#191E3A",
                  margin: "0 5px",
                  padding: 10,
                  borderRadius: 5,
                  textAlign: "right",
                  fontSize: "12px",
                }}
              >
                <FontAwesomeIcon
                  icon={faTag}
                  style={{
                    width: "30%",
                    marginRight: "10px",
                    fontSize: "38px",
                    color: "#1169E0",
                  }}
                />
                <div style={{ flex: "70%" }}>
                  Share the cost, each room covers their own share
                </div>
              </div>
            </Item>
            <Item
              sx={{
                flexGrow: 2,
                p: 1,
                bgcolor: "#FFFFFF",
                border: "2px solid #CACCD2",
                borderRadius: 1,
                maxWidth: "610px",
                minWidth: "610px",
              }}
            >
              <div>
                {" "}
                <h3>Temple Bar Hotel</h3>
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
                  style={{
                    fontSize: "20px",
                    color: "green",
                    marginRight: "0.5rem",
                  }}
                />
                <div style={{ fontSize: "12px" }}>
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
                      Input={{
                        classes: {
                          input: "input-field-small",
                        },
                      }}
                      style={{ width: "65px" }}
                    />
                  </div>
                  {formik.touched.expiryMonth && formik.errors.expiryMonth && (
                    <div
                      style={{
                        color: "#D42F2F",
                        marginLeft: "1rem",
                        marginTop: "0.5rem",
                        fontSize: "12px",
                        fontWeight: "normal",
                      }}
                    >
                      {formik.errors.expiryMonth}
                    </div>
                  )}
                  {formik.touched.expiryYear && formik.errors.expiryYear && (
                    <div
                      style={{
                        color: "#D42F2F",
                        marginLeft: "1rem",
                        marginTop: "0.5rem",
                        fontSize: "12px",
                        fontWeight: "normal",
                      }}
                    >
                      {formik.errors.expiryYear}
                    </div>
                  )}
                </div>
                {/* // security code */}
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
                    FormHelperTextProps={{ style: { width: "250px" } }}
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
                      textAlign: "center",
                    }}
                  >
                    You will only be charged for your share of the booking.
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
                  {!formik.isValid ||
                  Object.keys(formik.touched).length === 0 ||
                  Object.keys(formik.errors).length > 0 ? (
                    <Button
                      color="primary"
                      variant="contained"
                      type="submit"
                      disabled
                    >
                      Confirm
                    </Button>
                  ) : (
                    <Link to="/GuestConfirmation" className="router-link">
                      <Button color="primary" variant="contained" type="submit">
                        Confirm
                      </Button>
                    </Link>
                  )}
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
                    alt="Hotels.com Logo"
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
                      Friday, May 10, 2024
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
                      Sunday, May 12, 2024
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
                    <h5>Your Share</h5>
                    <div className="body-text">
                      <p className="info-body">2 nights, 2 guests</p>
                      <ul className="info-body" style={{ paddingLeft: "13px" }}>
                        <li>Standard Double Room (€110)</li>
                      </ul>
                      <br />
                      <p className="info-body">Extras:</p>
                      <ul className="info-body" style={{ paddingLeft: "13px" }}>
                        <li>Function Room (€31.72)</li>
                      </ul>
                    </div>
                    <br></br>
                    <div style={{ textAlign: "right" }}>
                      <p className="info-body">Total:</p>
                      <h4>€131.72</h4>
                    </div>
                  </Item>
                  <br />
                </Item>
              </Item>
            </Item>
          </Box>
        </div>
      </div>
    </>
  );
}
