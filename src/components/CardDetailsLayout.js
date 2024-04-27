// import react
import * as React from "react";
import PropTypes from "prop-types";
// import Box from mui
import Box from "@mui/material/Box";
// import Icon from iconify
import { Icon } from "@iconify/react";
// import bedIcon from mdi
import bedIcon from "@iconify-icons/mdi/bed";
// import useFormik from formik
import { useFormik } from "formik";
// import yup from yup
import * as yup from "yup";
// import TextField from mui
import TextField from "@mui/material/TextField";
// import Button from mui
import Button from "@mui/material/Button";
// import RiuPlaza from image
import RiuPlaza from "./images/riu-plaza-dublin.jpeg";
// import LogoImage from image
import LogoImage from "./images/logo.svg";
// import tickCircle from iconify
import tickCircle from "@iconify-icons/mdi/tick-circle";
import { Link } from "react-router-dom";
// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faTag,
  faBellConcierge,
} from "@fortawesome/free-solid-svg-icons";

// Create a validation schema for the credit card form
// All fields are required
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

// Create a custom component for the form fields
function Item(props) {
  const { sx, ...other } = props;
  return (
    // Add the Box component
    <Box
      // sx is a prop that allows you to style components using the theme
      sx={{
        // p is padding
        p: 1,
        // m is margin
        m: 1,
        // if dark mode, bgcolor is #101010, else grey.100
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme) =>
          // if dark mode, color is grey.300, else grey.800
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        // if dark mode, borderColor is grey.800, else grey.300
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        position: "relative",
        // ...sx is a spread operator that allows you to pass all the properties of the sx object as props
        ...sx,
      }}
      {...other}
    />
  );
}

// Add prop types for the Item component
Item.propTypes = {
  // sx prop can be an array of functions, objects, or booleans, a function, or an object
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

// Create the FlexGrow component
export default function FlexGrow() {
  // Create a formik object to handle form state
  const formik = useFormik({
    // set initial values for the form fields
    initialValues: {
      firstName: "",
      lastName: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      securityCode: "",
    },
    // set the validation schema
    validationSchema: validationSchema,
    // onSubmit function to handle form submission
    onSubmit: (values) => {
      // alert the form values
      // convert the values object to a JSON string
      // null means no replacer function, which is used to filter the properties of the object
      // 2 is the number of spaces to indent the nested objects
      alert(JSON.stringify(values, null, 2));
    },
  });

  // State to track form validity
  const [isFormValid, setIsFormValid] = React.useState(true);

  // useEffect hook to check if all required fields are filled
  React.useEffect(
    () => {
      // Check if all required fields are filled
      // trim() removes whitespace from both ends of a string
      // !== "" checks if the string is not empty
      const isFirstNameValid = formik.values.firstName.trim() !== "";
      const isLastNameValid = formik.values.lastName.trim() !== "";
      const isCardNumberValid = formik.values.cardNumber.trim() !== "";
      const isExpiryMonthlValid = formik.values.expiryMonth.trim() !== "";
      const isExpiryYearValid = formik.values.expiryYear.trim() !== "";
      const isSecurityCodeValid = formik.values.securityCode.trim() !== "";
      // Set the form validity state
      // form is valid if all fields are filled
      // && is the logical AND operator
      // ! is the logical NOT operator
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
    },
    // [formik.values, formik.touched] is the dependency array which means React will re-run the effect if any of the values in the dependency array change.
    [formik.values, formik.touched]
  );

  // Update the form validity state whenever the form changes
  // useEffect hook to check if the form is valid
  React.useEffect(() => {
    // Set the form validity state
    setIsFormValid(formik.isValid);
    // [formik.isValid] is the dependency array which means React will re-run the effect if the value of formik.isValid changes
  }, [formik.isValid]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    // prevent the default form submission behavior
    e.preventDefault();
    // Check if the form is valid
    if (formik.isValid) {
      // Proceed with form submission
      formik.submitForm();
    }
  };

  // Return the JSX for the FlexGrow component
  // JSX = JavaScript XML
  return (
    // <> is a fragment shorthand
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
            {/* // Add the Item component */}
            <Item
              sx={{
                flexGrow: 2, // flex-grow: 2 means the item will take up twice as much space as the other items
                p: 1, // padding: 1
                bgcolor: "#FFFFFF", // background color is white
                border: "2px solid #CACCD2", // border is 2px solid #CACCD2
                borderRadius: 1, // border-radius: 1
                maxWidth: "610px",
                minWidth: "610px",
              }}
            >
              <h4 style={{ marginBottom: "0px" }}>
                Your Unique Booking Code: MQ1234
              </h4>
              <p style={{ marginTop: "0px", marginBottom: "4px" }}>
                Want to discuss your booking before you confirm? Call us on
                {" 555-123-4567 "}
              </p>
            </Item>

            {/* Banner to highlight what the group booking has to offer - flex dates, share the cost, flex room choice */}
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
                {/* // Add the FontAwesomeIcon component */}
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
                  Share the cost; each room covers their own share
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
                  icon={faBellConcierge}
                  style={{
                    width: "30%",
                    marginRight: "10px",
                    fontSize: "38px",
                    color: "#1169E0",
                  }}
                />
                <div style={{ flex: "70%" }}>
                  Secure your share to reserve the rooms for 31 days
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
              {/* // Add the formik handleSubmit function to the form */}
              <form onSubmit={handleSubmit}>
                {/* First Name */}
                <h5 className="field-label">
                  First Name <span className="required-indicator">*</span>
                </h5>
                <TextField
                  // Add the formik properties to the TextField component
                  // id is the unique identifier for the input field
                  id="firstName"
                  // 'name' is the name of the input field
                  name="firstName"
                  // value is the value of the input field
                  value={formik.values.firstName}
                  // onChange is the event handler for the change event which means the function will be called when the value of the input field changes
                  onChange={formik.handleChange}
                  // onBlur is the event handler for the blur event which means the function will be called when the input field loses focus
                  onBlur={formik.handleBlur}
                  // error is a boolean value that indicates whether the input field has an error
                  error={
                    // if the input field is touched and has an error, return true, else return false
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  // helperText is the text that is displayed below the input field to provide additional information about the input field
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                  // Input is a prop that allows you to customise the input field
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
                {/* Security code */}
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
                    FormHelperTextProps={{ style: { width: "150px" } }}
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
                    Your card won’t be charged the full price - only your share
                    of the booking.
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
                  {/* // If the button is disabled, render a disabled button without the Link */}
                  {/* // If the button is enabled, render the Link wrapping the button */}
                  {/* // check if the form is valid */}
                  {!formik.isValid ||
                  // Check if the form is touched and has errors
                  Object.keys(formik.touched).length === 0 ||
                  // Check if the form has errors
                  Object.keys(formik.errors).length > 0 ? (
                    <Button
                      color="primary"
                      variant="contained"
                      type="submit"
                      disabled
                      style={{ width: "auto" }}
                    >
                      Confirm & Send Emails
                    </Button>
                  ) : (
                    <Link to="/Confirmation" className="router-link">
                      <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        style={{ width: "auto" }}
                      >
                        Confirm & Send Emails
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
                    alt="Hotel.com Logo"
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
                    {/* display their share of the cost */}
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
                    {/* display their entire booking */}
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
