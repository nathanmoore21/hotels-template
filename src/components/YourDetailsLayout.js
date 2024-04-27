import * as React from "react"; // * as React is used to import the entire React library
import PropTypes from "prop-types"; // Import the PropTypes library
import Box from "@mui/material/Box"; // Import the Box component
import TextField from "@mui/material/TextField"; // Import the TextField component
import Button from "@mui/material/Button"; // Import the Button component
import { Icon } from "@iconify/react"; // Import the Icon component
import bedIcon from "@iconify-icons/mdi/bed"; // Import the bed icon
import { Link } from "react-router-dom"; // Import the Link component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faWifi,
  faBusSimple,
  faTag,
  faCalendar,
  faBellConcierge,
} from "@fortawesome/free-solid-svg-icons"; // Import the required icons
import LogoImage from "./images/logo.svg"; // Import the logo image
import { useFormik } from "formik"; // Import the useFormik and Form components
import * as yup from "yup"; // Import the yup library

// Create the validation schema
const validationSchema = yup.object({
  // all fields are required
  firstName: yup
    .string()
    .required("First Name is required")
    // only letters are allowed
    .matches(/^[A-Za-z]+$/, "Please enter a valid First Name"),
  lastName: yup
    .string()
    .required("Last Name is required")
    // only letters are allowed
    .matches(/^[A-Za-z]+$/, "Please enter a valid Last Name"),
  email: yup
    .string()
    .required("Email is required")
    // email validation
    .email("Please enter a valid email address"),
  phoneNumber: yup
    .string()
    .required("Phone Number is Required")
    // phone number validation
    .matches(/^\d{10}$/, "Please enter a valid Phone Number"),
});

// Create the Item component
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

// Add the propTypes to the Item component
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

// Create the UserDetails component
export default function UserDetails() {
  // Create the formik object to handle form state
  const formik = useFormik({
    // Set the initial values of the form fields
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    // Set the validation schema
    validationSchema: validationSchema,
    // Set the onSubmit function to handle form submission
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
      const isEmailValid = formik.values.email.trim() !== "";
      const isPhoneNumberValid = formik.values.phoneNumber.trim() !== "";

      // Set the form validity state
      // form is valid if all fields are filled
      // && is the logical AND operator
      // ! is the logical NOT operator
      setIsFormValid(
        isFirstNameValid &&
          isLastNameValid &&
          isEmailValid &&
          isPhoneNumberValid &&
          !formik.touched.firstName &&
          !formik.touched.lastName &&
          !formik.touched.email &&
          !formik.touched.phoneNumber
      );
    },
    // [formik.values] is the dependency array which means React will re-run the effect if any of the values in the dependency array change.
    [formik.values, formik.touched]
  );

  // Update the form validity state whenever the form changes
  React.useEffect(() => {
    setIsFormValid(formik.isValid);
  }, [formik.isValid]);

  // Function to handle form submission
  // e is the event object
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Proceed to the next page if form is valid
    if (formik.isValid) {
      // Show confirmation dialog before navigating
      // if (window.confirm("Are you sure you want to continue?")) {
      // Navigate to the next page
      // Example: history.push('/NextPage');
      // }
      formik.submitForm();
    }
  };

  return (
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
              Want to discuss your booking before you confirm? Call us on{" "}
              555-123-4567
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
              <h3>Temple Bar Hotel</h3>
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
                <FontAwesomeIcon
                  icon={faWifi}
                  style={{ marginRight: "0.5rem" }}
                />
                Complimentary Wi-Fi
                <FontAwesomeIcon
                  icon={faBusSimple}
                  style={{ marginRight: "0.5rem", marginLeft: "0.8rem" }}
                />
                Airport Shuttle Included
                <FontAwesomeIcon
                  icon={faBellConcierge}
                  style={{ marginRight: "0.5rem", marginLeft: "0.8rem" }}
                />
                Room Service
              </div>
            </div>
            {/* // Add the formik form */}
            <form onSubmit={handleSubmit}>
              <h5 className="field-label">
                First Name <span className="required-indicator">*</span>
              </h5>
              <TextField
                // id is a unique identifier for the input field
                id="firstName"
                name="firstName"
                // value is the value of the input field
                value={formik.values.firstName}
                // onChange is the event handler for the input field
                onChange={formik.handleChange}
                // onBlur is the event handler for when the input field loses focus
                onBlur={formik.handleBlur}
                // error is a boolean value that determines if the input field has an error
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                // helperText is the text that appears below the input field
                helperText={formik.touched.firstName && formik.errors.firstName}
                // Input is used to add custom styles to the input field
                Input={{
                  classes: {
                    input: "input-field",
                  },
                }}
              />

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

              <h5 className="field-label">
                Email Address <span className="required-indicator">*</span>
              </h5>
              <TextField
                id="email"
                name="email"
                type="email"
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

              <div style={{ marginTop: "1rem" }}>
                {/* // Add checkbox */}
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
                {/* // Add the Next button */}
                {/* // if the form is valid, the button is enabled */}
                {/* // if the form is invalid, the button is disabled */}
                {/* // If the button is disabled, render a disabled button without the Link */}
                {/* // If the button is enabled, render the Link wrapping the button */}
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
                    Next
                  </Button>
                ) : (
                  // If the form is valid, render the Link wrapping the button
                  <Link to="/RoomDetails" className="router-link">
                    <Button
                      color="primary"
                      variant="contained"
                      type="submit"
                      style={{ width: "auto" }}
                    >
                      Next
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
  );
}
