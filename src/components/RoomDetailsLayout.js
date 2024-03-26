import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Icon } from "@iconify/react";
import bedIcon from "@iconify-icons/mdi/bed";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faExpand,
  faUsers,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
import LogoImage from "./images/logo.svg";

const validationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
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
      firstName: localStorage.getItem("firstName") || "",
      firstEmail: localStorage.getItem("firstEmail") || "",
      secondFirstName: localStorage.getItem("secondFirstName") || "",
      secondEmail: localStorage.getItem("secondEmail") || "",
      thirdFirstName: localStorage.getItem("thirdFirstName") || "",
      thirdEmail: localStorage.getItem("thirdEmail") || "",
      forthFirstName: localStorage.getItem("forthFirstName") || "",
      forthEmail: localStorage.getItem("forthEmail") || "",
      fifthFirstName: localStorage.getItem("fifthFirstName") || "",
      fifthEmail: localStorage.getItem("fifthEmail") || "",
      sixthFirstName: localStorage.getItem("sixthFirstName") || "",
      sixthEmail: localStorage.getItem("sixthEmail") || "",
      seventhFirstName: localStorage.getItem("seventhFirstName") || "",
      seventhEmail: localStorage.getItem("seventhEmail") || "",
      eighthFirstName: localStorage.getItem("eighthFirstName") || "",
      eighthEmail: localStorage.getItem("eighthEmail") || "",
      ninthFirstName: localStorage.getItem("ninthFirstName") || "",
      ninthEmail: localStorage.getItem("ninthEmail") || "",
      tenthFirstName: localStorage.getItem("tenthFirstName") || "",
      tenthEmail: localStorage.getItem("tenthEmail") || "",
      eleventhFirstName: localStorage.getItem("eleventhFirstName") || "",
      eleventhEmail: localStorage.getItem("eleventhEmail") || "",
      twelfthFirstName: localStorage.getItem("twelfthFirstName") || "",
      twelfthEmail: localStorage.getItem("twelfthEmail") || "",
      thirteenthFirstName: localStorage.getItem("thirteenthFirstName") || "",
      thirteenthEmail: localStorage.getItem("thirteenthEmail") || "",
      fourteenthFirstName: localStorage.getItem("fourteenthFirstName") || "",
      fourteenthEmail: localStorage.getItem("fourteenthEmail") || "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    localStorage.setItem("firstName", formik.values.firstName);
    localStorage.setItem("firstEmail", formik.values.firstEmail);
  }, [formik.values.firstName, formik.values.firstEmail]);

  useEffect(() => {
    localStorage.setItem("secondFirstName", formik.values.secondFirstName);
    localStorage.setItem("secondEmail", formik.values.secondEmail);
  }, [formik.values.secondFirstName, formik.values.secondEmail]);

  useEffect(() => {
    localStorage.setItem("thirdFirstName", formik.values.thirdFirstName);
    localStorage.setItem("thirdEmail", formik.values.thirdEmail);
  }, [formik.values.thirdFirstName, formik.values.thirdEmail]);

  useEffect(() => {
    localStorage.setItem("forthFirstName", formik.values.forthFirstName);
    localStorage.setItem("forthEmail", formik.values.forthEmail);
  }, [formik.values.forthFirstName, formik.values.forthEmail]);

  useEffect(() => {
    localStorage.setItem("fifthFirstName", formik.values.fifthFirstName);
    localStorage.setItem("fifthEmail", formik.values.fifthEmail);
  }, [formik.values.fifthFirstName, formik.values.fifthEmail]);

  useEffect(() => {
    localStorage.setItem("sixthFirstName", formik.values.sixthFirstName);
    localStorage.setItem("sixthEmail", formik.values.sixthEmail);
  }, [formik.values.sixthFirstName, formik.values.sixthEmail]);

  useEffect(() => {
    localStorage.setItem("seventhFirstName", formik.values.seventhFirstName);
    localStorage.setItem("seventhEmail", formik.values.seventhEmail);
  }, [formik.values.seventhFirstName, formik.values.seventhEmail]);

  useEffect(() => {
    localStorage.setItem("eighthFirstName", formik.values.eighthFirstName);
    localStorage.setItem("eighthEmail", formik.values.eighthEmail);
  }, [formik.values.eighthFirstName, formik.values.eighthEmail]);

  useEffect(() => {
    localStorage.setItem("ninthFirstName", formik.values.ninthFirstName);
    localStorage.setItem("ninthEmail", formik.values.ninthEmail);
  }, [formik.values.ninthFirstName, formik.values.ninthEmail]);

  useEffect(() => {
    localStorage.setItem("tenthFirstName", formik.values.tenthFirstName);
    localStorage.setItem("tenthEmail", formik.values.tenthEmail);
  }, [formik.values.tenthFirstName, formik.values.tenthEmail]);

  useEffect(() => {
    localStorage.setItem("eleventhFirstName", formik.values.eleventhFirstName);
    localStorage.setItem("eleventhEmail", formik.values.eleventhEmail);
  }, [formik.values.eleventhFirstName, formik.values.eleventhEmail]);

  useEffect(() => {
    localStorage.setItem("twelfthFirstName", formik.values.twelfthFirstName);
    localStorage.setItem("twelfthEmail", formik.values.twelfthEmail);
  }, [formik.values.twelfthFirstName, formik.values.twelfthEmail]);

  useEffect(() => {
    localStorage.setItem(
      "thirteenthFirstName",
      formik.values.thirteenthFirstName
    );
    localStorage.setItem("thirteenthEmail", formik.values.thirteenthEmail);
  }, [formik.values.thirteenthFirstName, formik.values.thirteenthEmail]);

  useEffect(() => {
    localStorage.setItem(
      "fourteenthFirstName",
      formik.values.fourteenthFirstName
    );
    localStorage.setItem("fourteenthEmail", formik.values.fourteenthEmail);
  }, [formik.values.fourteenthFirstName, formik.values.fourteenthEmail]);

  //STANDARD ROOM ONE
  const [SR1isOpen, setSR1IsOpen] = useState(false);
  const [SR1showExtraFields, setSR1ShowExtraFields] = useState(false);
  const [SR1expandSpecialRequests, setSR1ExpandSpecialRequests] =
    useState(false);
  const [SR1expandAccessibilityRequests, setSR1ExpandAccessibilityRequests] =
    useState(false);
  const [SR1expandArrival, setSR1ExpandArrival] = useState(false);
  const [SR1specialRequestMessage, setSR1SpecialRequestMessage] = useState("");
  const [
    SR1selectedAccessibilityRequests,
    setSR1SelectedAccessibilityRequests,
  ] = useState([]);
  const [SR1checkInDate, setSR1CheckInDate] = useState(() => {
    const storedDate = localStorage.getItem("SR1checkInDate");
    return storedDate ? new Date(JSON.parse(storedDate)) : null;
  });
  const [SR1checkOutDate, setSR1CheckOutDate] = useState(() => {
    const storedDate = localStorage.getItem("SR1checkOutDate");
    return storedDate ? new Date(JSON.parse(storedDate)) : null;
  });

  useEffect(() => {
    localStorage.setItem("SR1checkInDate", JSON.stringify(SR1checkInDate));
  }, [SR1checkInDate]);

  useEffect(() => {
    localStorage.setItem("SR1checkOutDate", JSON.stringify(SR1checkOutDate));
  }, [SR1checkOutDate]);

  useEffect(() => {
    const storedMessage = localStorage.getItem("SR1specialRequestMessage");
    if (storedMessage) {
      setSR1SpecialRequestMessage(storedMessage);
    }
  }, []);

  const handleSR1SpecialRequestChange = (e) => {
    const message = e.target.value;
    setSR1SpecialRequestMessage(message);
    localStorage.setItem("SR1specialRequestMessage", message);
  };
  const SR1accessibilityOptions = [
    "Wheelchair accessible (may have limitations)",
    "Wheelchair accessible parking",
    "Wheelchair-accessible concierge desk",
    "Wheelchair-accessible lounge",
    "Wheelchair-accessible meeting spaces/business center",
    "Wheelchair-accessible on-site restaurant",
    "Wheelchair-accessible registration desk",
  ];

  const handleSR1CheckboxChange = (value) => {
    const isSelected = SR1selectedAccessibilityRequests.includes(value);
    let updatedSelection = [];
    if (isSelected) {
      updatedSelection = SR1selectedAccessibilityRequests.filter(
        (item) => item !== value
      );
    } else {
      updatedSelection = [...SR1selectedAccessibilityRequests, value];
    }
    setSR1SelectedAccessibilityRequests(updatedSelection);
    localStorage.setItem(
      "SR1selectedAccessibilityRequests",
      JSON.stringify(updatedSelection)
    );
  };

  useEffect(() => {
    const storedSelection = localStorage.getItem(
      "SR1selectedAccessibilityRequests"
    );
    if (storedSelection) {
      setSR1SelectedAccessibilityRequests(JSON.parse(storedSelection));
    }
  }, []);

  //STANDARD ROOM TWO
  const [SR2isOpen, setSR2IsOpen] = useState(false);
  const [SR2showExtraFields, setSR2ShowExtraFields] = useState(false);
  const [SR2expandSpecialRequests, setSR2ExpandSpecialRequests] =
    useState(false);
  const [SR2expandAccessibilityRequests, setSR2ExpandAccessibilityRequests] =
    useState(false);
  const [SR2expandArrival, setSR2ExpandArrival] = useState(false);
  const [SR2specialRequestMessage, setSR2SpecialRequestMessage] = useState("");
  const [
    SR2selectedAccessibilityRequests,
    setSR2SelectedAccessibilityRequests,
  ] = useState([]);
  const [SR2checkInDate, setSR2CheckInDate] = useState(() => {
    const storedDate = localStorage.getItem("SR2checkInDate");
    return storedDate ? new Date(JSON.parse(storedDate)) : null;
  });
  const [SR2checkOutDate, setSR2CheckOutDate] = useState(() => {
    const storedDate = localStorage.getItem("SR2checkOutDate");
    return storedDate ? new Date(JSON.parse(storedDate)) : null;
  });

  useEffect(() => {
    localStorage.setItem("SR2checkInDate", JSON.stringify(SR2checkInDate));
  }, [SR2checkInDate]);

  useEffect(() => {
    localStorage.setItem("SR2checkOutDate", JSON.stringify(SR2checkOutDate));
  }, [SR2checkOutDate]);

  useEffect(() => {
    const storedMessage = localStorage.getItem("SR2specialRequestMessage");
    if (storedMessage) {
      setSR2SpecialRequestMessage(storedMessage);
    }
  }, []);

  const handleSR2SpecialRequestChange = (e) => {
    const message = e.target.value;
    setSR2SpecialRequestMessage(message);
    localStorage.setItem("SR2specialRequestMessage", message);
  };
  const SR2accessibilityOptions = [
    "Wheelchair accessible (may have limitations)",
    "Wheelchair accessible parking",
    "Wheelchair-accessible concierge desk",
    "Wheelchair-accessible lounge",
    "Wheelchair-accessible meeting spaces/business center",
    "Wheelchair-accessible on-site restaurant",
    "Wheelchair-accessible registration desk",
  ];

  const handleSR2CheckboxChange = (value) => {
    const isSelected = SR2selectedAccessibilityRequests.includes(value);
    let updatedSelection = [];
    if (isSelected) {
      updatedSelection = SR2selectedAccessibilityRequests.filter(
        (item) => item !== value
      );
    } else {
      updatedSelection = [...SR2selectedAccessibilityRequests, value];
    }
    setSR2SelectedAccessibilityRequests(updatedSelection);
    localStorage.setItem(
      "SR2selectedAccessibilityRequests",
      JSON.stringify(updatedSelection)
    );
  };

  useEffect(() => {
    const storedSelection = localStorage.getItem(
      "SR2selectedAccessibilityRequests"
    );
    if (storedSelection) {
      setSR2SelectedAccessibilityRequests(JSON.parse(storedSelection));
    }
  }, []);

  //STANDARD ROOM THREE
  const [SR3isOpen, setSR3IsOpen] = useState(false);
  const [SR3showExtraFields, setSR3ShowExtraFields] = useState(false);
  const [SR3expandSpecialRequests, setSR3ExpandSpecialRequests] =
    useState(false);
  const [SR3expandAccessibilityRequests, setSR3ExpandAccessibilityRequests] =
    useState(false);
  const [SR3expandArrival, setSR3ExpandArrival] = useState(false);
  const [SR3specialRequestMessage, setSR3SpecialRequestMessage] = useState("");
  const [
    SR3selectedAccessibilityRequests,
    setSR3SelectedAccessibilityRequests,
  ] = useState([]);
  const [SR3checkInDate, setSR3CheckInDate] = useState(() => {
    const storedDate = localStorage.getItem("SR3checkInDate");
    return storedDate ? new Date(JSON.parse(storedDate)) : null;
  });
  const [SR3checkOutDate, setSR3CheckOutDate] = useState(() => {
    const storedDate = localStorage.getItem("SR3checkOutDate");
    return storedDate ? new Date(JSON.parse(storedDate)) : null;
  });

  useEffect(() => {
    localStorage.setItem("SR3checkInDate", JSON.stringify(SR3checkInDate));
  }, [SR3checkInDate]);

  useEffect(() => {
    localStorage.setItem("SR3checkOutDate", JSON.stringify(SR3checkOutDate));
  }, [SR3checkOutDate]);

  useEffect(() => {
    const storedMessage = localStorage.getItem("SR3specialRequestMessage");
    if (storedMessage) {
      setSR3SpecialRequestMessage(storedMessage);
    }
  }, []);

  const handleSR3SpecialRequestChange = (e) => {
    const message = e.target.value;
    setSR3SpecialRequestMessage(message);
    localStorage.setItem("SR3specialRequestMessage", message);
  };
  const SR3accessibilityOptions = [
    "Wheelchair accessible (may have limitations)",
    "Wheelchair accessible parking",
    "Wheelchair-accessible concierge desk",
    "Wheelchair-accessible lounge",
    "Wheelchair-accessible meeting spaces/business center",
    "Wheelchair-accessible on-site restaurant",
    "Wheelchair-accessible registration desk",
  ];

  const handleSR3CheckboxChange = (value) => {
    const isSelected = SR3selectedAccessibilityRequests.includes(value);
    let updatedSelection = [];
    if (isSelected) {
      updatedSelection = SR3selectedAccessibilityRequests.filter(
        (item) => item !== value
      );
    } else {
      updatedSelection = [...SR3selectedAccessibilityRequests, value];
    }
    setSR3SelectedAccessibilityRequests(updatedSelection);
    localStorage.setItem(
      "SR3selectedAccessibilityRequests",
      JSON.stringify(updatedSelection)
    );
  };

  useEffect(() => {
    const storedSelection = localStorage.getItem(
      "SR3selectedAccessibilityRequests"
    );
    if (storedSelection) {
      setSR3SelectedAccessibilityRequests(JSON.parse(storedSelection));
    }
  }, []);

  //DELUXE SUITE ONE
  const [DS1isOpen, setDS1IsOpen] = useState(false);
  const [DS1showExtraFields, setDS1ShowExtraFields] = useState(false);
  const [DS1expandSpecialRequests, setDS1ExpandSpecialRequests] =
    useState(false);
  const [DS1expandAccessibilityRequests, setDS1ExpandAccessibilityRequests] =
    useState(false);
  const [DS1expandArrival, setDS1ExpandArrival] = useState(false);
  const [DS1specialRequestMessage, setDS1SpecialRequestMessage] = useState("");
  const [
    DS1selectedAccessibilityRequests,
    setDS1SelectedAccessibilityRequests,
  ] = useState([]);
  const [DS1checkInDate, setDS1CheckInDate] = useState(() => {
    const storedDate = localStorage.getItem("DS1checkInDate");
    return storedDate ? new Date(JSON.parse(storedDate)) : null;
  });
  const [DS1checkOutDate, setDS1CheckOutDate] = useState(() => {
    const storedDate = localStorage.getItem("DS1checkOutDate");
    return storedDate ? new Date(JSON.parse(storedDate)) : null;
  });

  useEffect(() => {
    localStorage.setItem("DS1checkInDate", JSON.stringify(DS1checkInDate));
  }, [DS1checkInDate]);

  useEffect(() => {
    localStorage.setItem("DS1checkOutDate", JSON.stringify(DS1checkOutDate));
  }, [DS1checkOutDate]);

  useEffect(() => {
    const storedMessage = localStorage.getItem("DS1specialRequestMessage");
    if (storedMessage) {
      setDS1SpecialRequestMessage(storedMessage);
    }
  }, []);

  const handleDS1SpecialRequestChange = (e) => {
    const message = e.target.value;
    setDS1SpecialRequestMessage(message);
    localStorage.setItem("DS1specialRequestMessage", message);
  };
  const DS1accessibilityOptions = [
    "Wheelchair accessible (may have limitations)",
    "Wheelchair accessible parking",
    "Wheelchair-accessible concierge desk",
    "Wheelchair-accessible lounge",
    "Wheelchair-accessible meeting spaces/business center",
    "Wheelchair-accessible on-site restaurant",
    "Wheelchair-accessible registration desk",
  ];

  const handleDS1CheckboxChange = (value) => {
    const isSelected = DS1selectedAccessibilityRequests.includes(value);
    let updatedSelection = [];
    if (isSelected) {
      updatedSelection = DS1selectedAccessibilityRequests.filter(
        (item) => item !== value
      );
    } else {
      updatedSelection = [...DS1selectedAccessibilityRequests, value];
    }
    setDS1SelectedAccessibilityRequests(updatedSelection);
    localStorage.setItem(
      "DS1selectedAccessibilityRequests",
      JSON.stringify(updatedSelection)
    );
  };

  useEffect(() => {
    const storedSelection = localStorage.getItem(
      "DS1selectedAccessibilityRequests"
    );
    if (storedSelection) {
      setDS1SelectedAccessibilityRequests(JSON.parse(storedSelection));
    }
  }, []);

  //KING DELUXE SUITE ONE
  const [KDS1isOpen, setKDS1IsOpen] = useState(false);
  const [KDS1showExtraFields, setKDS1ShowExtraFields] = useState(false);
  const [KDS1expandSpecialRequests, setKDS1ExpandSpecialRequests] =
    useState(false);
  const [KDS1expandAccessibilityRequests, setKDS1ExpandAccessibilityRequests] =
    useState(false);
  const [KDS1expandArrival, setKDS1ExpandArrival] = useState(false);
  const [KDS1specialRequestMessage, setKDS1SpecialRequestMessage] =
    useState("");
  const [
    KDS1selectedAccessibilityRequests,
    setKDS1SelectedAccessibilityRequests,
  ] = useState([]);
  const [KDS1checkInDate, setKDS1CheckInDate] = useState(() => {
    const storedDate = localStorage.getItem("KDS1checkInDate");
    return storedDate ? new Date(JSON.parse(storedDate)) : null;
  });
  const [KDS1checkOutDate, setKDS1CheckOutDate] = useState(() => {
    const storedDate = localStorage.getItem("KDS1checkOutDate");
    return storedDate ? new Date(JSON.parse(storedDate)) : null;
  });

  useEffect(() => {
    localStorage.setItem("KDS1checkInDate", JSON.stringify(KDS1checkInDate));
  }, [KDS1checkInDate]);

  useEffect(() => {
    localStorage.setItem("KDS1checkOutDate", JSON.stringify(KDS1checkOutDate));
  }, [KDS1checkOutDate]);

  useEffect(() => {
    const storedMessage = localStorage.getItem("KDS1specialRequestMessage");
    if (storedMessage) {
      setKDS1SpecialRequestMessage(storedMessage);
    }
  }, []);

  const handleKDS1SpecialRequestChange = (e) => {
    const message = e.target.value;
    setKDS1SpecialRequestMessage(message);
    localStorage.setItem("KDS1specialRequestMessage", message);
  };
  const KDS1accessibilityOptions = [
    "Wheelchair accessible (may have limitations)",
    "Wheelchair accessible parking",
    "Wheelchair-accessible concierge desk",
    "Wheelchair-accessible lounge",
    "Wheelchair-accessible meeting spaces/business center",
    "Wheelchair-accessible on-site restaurant",
    "Wheelchair-accessible registration desk",
  ];

  const handleKDS1CheckboxChange = (value) => {
    const isSelected = KDS1selectedAccessibilityRequests.includes(value);
    let updatedSelection = [];
    if (isSelected) {
      updatedSelection = KDS1selectedAccessibilityRequests.filter(
        (item) => item !== value
      );
    } else {
      updatedSelection = [...KDS1selectedAccessibilityRequests, value];
    }
    setKDS1SelectedAccessibilityRequests(updatedSelection);
    localStorage.setItem(
      "KDS1selectedAccessibilityRequests",
      JSON.stringify(updatedSelection)
    );
  };

  useEffect(() => {
    const storedSelection = localStorage.getItem(
      "KDS1selectedAccessibilityRequests"
    );
    if (storedSelection) {
      setKDS1SelectedAccessibilityRequests(JSON.parse(storedSelection));
    }
  }, []);

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
                maxWidth: "600px",
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

              <div
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  width: "99%",
                  height: "auto",
                  background: "#ffffff",
                  borderRadius: "13px",
                  border: "1px solid #DFE0E4",
                  marginBottom: "10px", 
                  paddingBottom: "0px !important",
                }}
              >
                <div style={{ width: "35%", marginRight: "10px" }}>
                  <img
                    src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Twin Room"
                    style={{
                      width: "100%",
                      height: "auto", 
                      borderTopLeftRadius: "13px",
                      borderBottomLeftRadius: "13px",
                      clipPath: "polygon(0 0, 100% 0, 82% 100%, 0% 100%)",
                      verticalAlign: "bottom", 
                    }}
                  />
                </div>
                <div style={{ width: "65%" }}>
                  <h2
                    style={{
                      fontSize: "18px",
                      fontWeight: "300",
                      marginBottom: "10px",
                    }}
                  >
                    Standard Double Room
                  </h2>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      fontWeight: "100",
                      fontSize: "11px",
                    }}
                  >
                    {" "}
                    <li style={{ marginBottom: "0px" }}>
                      <FontAwesomeIcon
                        icon={faExpand}
                        style={{
                          fontSize: "13px",
                          marginLeft: "2px",
                          marginRight: "4px",
                        }}
                      />{" "}
                      30 sq m
                    </li>
                    <li style={{ marginBottom: "0px" }}>
                      <FontAwesomeIcon
                        icon={faUsers}
                        style={{ marginRight: "3px" }}
                      />{" "}
                      Sleeps 2
                    </li>
                    <li style={{ marginBottom: "0px", fontSize: "11px" }}>
                      <FontAwesomeIcon
                        icon={faBed}
                        style={{ marginRight: "7px" }}
                      />
                      1 Double Bed
                    </li>
                    <li
                      style={{
                        marginBottom: "0px",
                        textAlign: "right",
                        marginRight: "10px",
                        fontSize: "16px",
                      }}
                    >
                      €110.00
                      <div style={{ fontSize: "11px", marginTop: "0px" }}>
                        per night
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <form onSubmit={formik.handleSubmit}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center" }}>
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
                      <TextField
                        style={{ marginRight: "1rem", width: "40%" }}
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
                      />
                      <TextField
                        id="firstEmail"
                        name="firstEmail"
                        placeholder="Guest Email"
                        value={formik.values.firstEmail}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.firstEmail &&
                          Boolean(formik.errors.firstEmail)
                        }
                        style={{ marginRight: "1rem", width: "40%" }}
                      />

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          setSR1ShowExtraFields(!SR1showExtraFields)
                        }
                      >
                        <FontAwesomeIcon
                          icon={SR1showExtraFields ? faAngleUp : faAngleDown}
                        />
                      </div>
                    </div>

                    {SR1showExtraFields && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "0.5rem",
                        }}
                      >
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            border: "1px solid #ffffff",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: "8px",
                            color: "#ffffff",
                            fontSize: "1rem",
                          }}
                        >
                          1
                        </div>
                        <TextField
                          style={{ marginRight: "1rem", width: "40%" }}
                          id="secondFirstName"
                          name="secondFirstName"
                          placeholder="Guest Name"
                          value={formik.values.secondFirstName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <TextField
                          id="secondEmail"
                          name="secondEmail"
                          placeholder="Guest Email"
                          value={formik.values.secondEmail}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          style={{ marginRight: "1rem", width: "40%" }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <ul>
                  {formik.touched.firstName && formik.errors.firstName && (
                    <li style={{ color: "#D42F2F", fontWeight: "normal" }}>
                      {formik.errors.firstName}
                    </li>
                  )}
                  {formik.touched.firstEmail && formik.errors.firstEmail && (
                    <li style={{ color: "#D42F2F", fontWeight: "normal" }}>
                      {formik.errors.firstEmail}
                    </li>
                  )}
                </ul>
                <div>
                  <div
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: "normal",
                      color: "#1169E0",
                      marginLeft: "2.5rem",
                      marginBottom: "1rem",
                      marginTop: "0.3rem",
                    }}
                    onClick={() => setSR1IsOpen(!SR1isOpen)}
                  >
                    Booking Preferences{" "}
                    <FontAwesomeIcon
                      icon={SR1isOpen ? faAngleUp : faAngleDown}
                    />
                  </div>
                  {SR1isOpen && (
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
                          setSR1ExpandSpecialRequests(!SR1expandSpecialRequests)
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
                          Any special requests?{" "}
                          <FontAwesomeIcon
                            icon={
                              SR1expandSpecialRequests ? faAngleUp : faAngleDown
                            }
                          />
                        </span>
                        {SR1expandSpecialRequests && (
                          <div onClick={(e) => e.stopPropagation()}>
                            <p
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0rem",
                                fontSize: "11px",
                                fontWeight: "100",
                              }}
                            >
                              Please include details of your special request and
                              we’ll forward it to the property. Please note,
                              your request is not guaranteed and if you don’t
                              hear back from the property, you may want to
                              contact them directly to confirm.
                            </p>
                            <TextField
                              id="SR1specialRequests"
                              name="SR1specialRequests"
                              variant="outlined"
                              fullWidth
                              multiline
                              rows={4}
                              InputProps={{ style: { fontSize: "12px" } }}
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0rem",
                                width: "90%",
                              }}
                              value={SR1specialRequestMessage}
                              onChange={handleSR1SpecialRequestChange}
                            />
                          </div>
                        )}
                      </li>
                      <li
                        style={{ marginTop: "4px", cursor: "pointer" }}
                        onClick={() =>
                          setSR1ExpandAccessibilityRequests(
                            !SR1expandAccessibilityRequests
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
                          Any accessibility requests?{" "}
                          <FontAwesomeIcon
                            icon={
                              SR1expandAccessibilityRequests
                                ? faAngleUp
                                : faAngleDown
                            }
                          />
                        </span>
                        {SR1expandAccessibilityRequests && (
                          <div onClick={(e) => e.stopPropagation()}>
                            <p
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0rem",
                                fontSize: "11px",
                                fontWeight: "100",
                              }}
                            >
                              Please choose the accessibility options you
                              require and we’ll forward your request to the
                              property. Please note, your request is not
                              guaranteed and if you don’t hear back from the
                              property, you may want to contact them directly to
                              confirm.{" "}
                            </p>
                            <div
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0px",
                                fontSize: "12px",
                                fontWeight: "100",
                              }}
                            >
                              {SR1accessibilityOptions.map((option) => (
                                <li key={option}>
                                  <input
                                    type="checkbox"
                                    value={option}
                                    onChange={(e) =>
                                      handleSR1CheckboxChange(e.target.value)
                                    }
                                    checked={SR1selectedAccessibilityRequests.includes(
                                      option
                                    )}
                                  />
                                  {option}
                                </li>
                              ))}
                            </div>
                          </div>
                        )}
                      </li>
                      <li
                        style={{ marginTop: "4px", cursor: "pointer" }}
                        onClick={() => setSR1ExpandArrival(!SR1expandArrival)}
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
                          Will this guest be arriving on the same day?{" "}
                          <FontAwesomeIcon
                            icon={SR1expandArrival ? faAngleUp : faAngleDown}
                          />
                        </span>
                        {SR1expandArrival && (
                          <div onClick={(e) => e.stopPropagation()}>
                            <div
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0px",
                                fontSize: "12px",
                                fontWeight: "100",
                              }}
                            >
                              <p
                                style={{
                                  marginTop: "0rem",
                                  fontSize: "11px",
                                  fontWeight: "100",
                                }}
                              >
                                Please include details of your date change for
                                this guest and we’ll forward it to the property.
                                Please note, your request is not guaranteed and
                                if you don’t hear back from the property, you
                                may want to contact them directly to confirm.
                              </p>
                              <div>Check In:</div>
                              <DatePicker
                                format="DD MMM, YYYY"
                                value={SR1checkInDate}
                                onChange={(value) => setSR1CheckInDate(value)}
                                style={{ marginRight: "1rem" }}
                              />
                              <div style={{ marginTop: "10px" }}>
                                Check Out:
                              </div>
                              <DatePicker
                                format="DD MMM, YYYY"
                                value={SR1checkOutDate}
                                onChange={(value) => setSR1CheckOutDate(value)}
                              />
                            </div>
                          </div>
                        )}
                      </li>
                    </ul>
                  )}
                </div>

                {/* //////////////////////////STANDARD ROOM TWO////////////////////////// */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center" }}>
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
                        2
                      </div>
                      <TextField
                        style={{ marginRight: "1rem", width: "40%" }}
                        id="thirdFirstName"
                        name="thirdFirstName"
                        placeholder="Guest Name"
                        value={formik.values.thirdFirstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.thirdFirstName &&
                          Boolean(formik.errors.thirdFirstName)
                        }
                      />
                      <TextField
                        id="thirdEmail"
                        name="thirdEmail"
                        placeholder="Guest Email"
                        value={formik.values.thirdEmail}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.thirdEmail &&
                          Boolean(formik.errors.thirdEmail)
                        }
                        style={{ marginRight: "1rem", width: "40%" }}
                      />

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          setSR2ShowExtraFields(!SR2showExtraFields)
                        }
                      >
                        <FontAwesomeIcon
                          icon={SR2showExtraFields ? faAngleUp : faAngleDown}
                        />
                      </div>
                    </div>

                    {SR2showExtraFields && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "0.5rem",
                        }}
                      >
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            border: "1px solid #ffffff",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: "8px",
                            color: "#ffffff",
                            fontSize: "1rem",
                          }}
                        >
                          2
                        </div>
                        <TextField
                          style={{ marginRight: "1rem", width: "40%" }}
                          id="forthFirstName"
                          name="forthFirstName"
                          placeholder="Guest Name"
                          value={formik.values.forthFirstName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <TextField
                          id="forthEmail"
                          name="forthEmail"
                          placeholder="Guest Email"
                          value={formik.values.forthEmail}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          style={{ marginRight: "1rem", width: "40%" }}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <ul>
                  {formik.touched.thirdFirstName &&
                    formik.errors.thirdFirstName && (
                      <li style={{ color: "#D42F2F", fontWeight: "normal" }}>
                        {formik.errors.thirdFirstName}
                      </li>
                    )}
                  {formik.touched.thirdEmail && formik.errors.thirdEmail && (
                    <li style={{ color: "#D42F2F", fontWeight: "normal" }}>
                      {formik.errors.thirdEmail}
                    </li>
                  )}
                </ul>

                <div>
                  <div
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: "normal",
                      color: "#1169E0",
                      marginLeft: "2.5rem",
                      marginBottom: "1rem",
                      marginTop: "0.3rem",
                    }}
                    onClick={() => setSR2IsOpen(!SR2isOpen)}
                  >
                    Booking Preferences{" "}
                    <FontAwesomeIcon
                      icon={SR2isOpen ? faAngleUp : faAngleDown}
                    />
                  </div>
                  {SR2isOpen && (
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
                          setSR2ExpandSpecialRequests(!SR2expandSpecialRequests)
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
                          Any special requests?{" "}
                          <FontAwesomeIcon
                            icon={
                              SR2expandSpecialRequests ? faAngleUp : faAngleDown
                            }
                          />
                        </span>
                        {SR2expandSpecialRequests && (
                          <div onClick={(e) => e.stopPropagation()}>
                            <p
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0rem",
                                fontSize: "11px",
                                fontWeight: "100",
                              }}
                            >
                              Please include details of your special request and
                              we’ll forward it to the property. Please note,
                              your request is not guaranteed and if you don’t
                              hear back from the property, you may want to
                              contact them directly to confirm.
                            </p>
                            <TextField
                              id="SR2specialRequests"
                              name="SR2specialRequests"
                              variant="outlined"
                              fullWidth
                              multiline
                              rows={4}
                              InputProps={{ style: { fontSize: "12px" } }}
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0rem",
                                width: "90%",
                              }}
                              value={SR2specialRequestMessage}
                              onChange={handleSR2SpecialRequestChange}
                            />
                          </div>
                        )}
                      </li>
                      <li
                        style={{ marginTop: "4px", cursor: "pointer" }}
                        onClick={() =>
                          setSR2ExpandAccessibilityRequests(
                            !SR2expandAccessibilityRequests
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
                          Any accessibility requests?{" "}
                          <FontAwesomeIcon
                            icon={
                              SR2expandAccessibilityRequests
                                ? faAngleUp
                                : faAngleDown
                            }
                          />
                        </span>
                        {SR2expandAccessibilityRequests && (
                          <div onClick={(e) => e.stopPropagation()}>
                            <p
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0rem",
                                fontSize: "11px",
                                fontWeight: "100",
                              }}
                            >
                              Please choose the accessibility options you
                              require and we’ll forward your request to the
                              property. Please note, your request is not
                              guaranteed and if you don’t hear back from the
                              property, you may want to contact them directly to
                              confirm.{" "}
                            </p>
                            <div
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0px",
                                fontSize: "12px",
                                fontWeight: "100",
                              }}
                            >
                              {SR2accessibilityOptions.map((option) => (
                                <li key={option}>
                                  <input
                                    type="checkbox"
                                    value={option}
                                    onChange={(e) =>
                                      handleSR2CheckboxChange(e.target.value)
                                    }
                                    checked={SR2selectedAccessibilityRequests.includes(
                                      option
                                    )}
                                  />
                                  {option}
                                </li>
                              ))}
                            </div>
                          </div>
                        )}
                      </li>
                      <li
                        style={{ marginTop: "4px", cursor: "pointer" }}
                        onClick={() => setSR2ExpandArrival(!SR2expandArrival)}
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
                          Will this guest be arriving on the same day?{" "}
                          <FontAwesomeIcon
                            icon={SR2expandArrival ? faAngleUp : faAngleDown}
                          />
                        </span>
                        {SR2expandArrival && (
                          <div onClick={(e) => e.stopPropagation()}>
                            <div
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0px",
                                fontSize: "12px",
                                fontWeight: "100",
                              }}
                            >
                              <p
                                style={{
                                  marginTop: "0rem",
                                  fontSize: "11px",
                                  fontWeight: "100",
                                }}
                              >
                                Please include details of your date change for
                                this guest and we’ll forward it to the property.
                                Please note, your request is not guaranteed and
                                if you don’t hear back from the property, you
                                may want to contact them directly to confirm.
                              </p>
                              <div>Check In:</div>
                              <DatePicker
                                format="DD MMM, YYYY"
                                value={SR2checkInDate}
                                onChange={(value) => setSR2CheckInDate(value)}
                                style={{ marginRight: "1rem" }}
                              />
                              <div style={{ marginTop: "10px" }}>
                                Check Out:
                              </div>
                              <DatePicker
                                format="DD MMM, YYYY"
                                value={SR2checkOutDate}
                                onChange={(value) => setSR2CheckOutDate(value)}
                              />
                            </div>
                          </div>
                        )}
                      </li>
                    </ul>
                  )}
                </div>
                {/* //////////////////////////STANDARD ROOM THREE////////////////////////// */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center" }}>
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
                        3
                      </div>
                      <TextField
                        style={{ marginRight: "1rem", width: "40%" }}
                        id="fifthFirstName"
                        name="fifthFirstName"
                        placeholder="Guest Name"
                        value={formik.values.fifthFirstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.fifthFirstName &&
                          Boolean(formik.errors.fifthFirstName)
                        }
                      />
                      <TextField
                        id="fifthEmail"
                        name="fifthEmail"
                        placeholder="Guest Email"
                        value={formik.values.fifthEmail}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.fifthEmail &&
                          Boolean(formik.errors.fifthEmail)
                        }
                        style={{ marginRight: "1rem", width: "40%" }}
                      />

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          setSR3ShowExtraFields(!SR3showExtraFields)
                        }
                      >
                        <FontAwesomeIcon
                          icon={SR3showExtraFields ? faAngleUp : faAngleDown}
                        />
                      </div>
                    </div>

                    {SR3showExtraFields && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "0.5rem",
                        }}
                      >
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            border: "1px solid #ffffff",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: "8px",
                            color: "#ffffff",
                            fontSize: "1rem",
                          }}
                        >
                          3
                        </div>
                        <TextField
                          style={{ marginRight: "1rem", width: "40%" }}
                          id="sixthFirstName"
                          name="sixthFirstName"
                          placeholder="Guest Name"
                          value={formik.values.sixthFirstName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <TextField
                          id="sixthEmail"
                          name="sixthEmail"
                          placeholder="Guest Email"
                          value={formik.values.sixthEmail}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          style={{ marginRight: "1rem", width: "40%" }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <ul>
                  {formik.touched.fifthFirstName &&
                    formik.errors.fifthFirstName && (
                      <li style={{ color: "#D42F2F", fontWeight: "normal" }}>
                        {formik.errors.fifthFirstName}
                      </li>
                    )}
                  {formik.touched.fifthEmail && formik.errors.fifthEmail && (
                    <li style={{ color: "#D42F2F", fontWeight: "normal" }}>
                      {formik.errors.fifthEmail}
                    </li>
                  )}
                </ul>
                <div>
                  <div
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: "normal",
                      color: "#1169E0",
                      marginLeft: "2.5rem",
                      marginBottom: "1rem",
                      marginTop: "0.3rem",
                    }}
                    onClick={() => setSR3IsOpen(!SR3isOpen)}
                  >
                    Booking Preferences{" "}
                    <FontAwesomeIcon
                      icon={SR3isOpen ? faAngleUp : faAngleDown}
                    />
                  </div>
                  {SR3isOpen && (
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
                          setSR3ExpandSpecialRequests(!SR3expandSpecialRequests)
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
                          Any special requests?{" "}
                          <FontAwesomeIcon
                            icon={
                              SR3expandSpecialRequests ? faAngleUp : faAngleDown
                            }
                          />
                        </span>
                        {SR3expandSpecialRequests && (
                          <div onClick={(e) => e.stopPropagation()}>
                            <p
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0rem",
                                fontSize: "11px",
                                fontWeight: "100",
                              }}
                            >
                              Please include details of your special request and
                              we’ll forward it to the property. Please note,
                              your request is not guaranteed and if you don’t
                              hear back from the property, you may want to
                              contact them directly to confirm.
                            </p>
                            <TextField
                              id="SR3specialRequests"
                              name="SR3specialRequests"
                              variant="outlined"
                              fullWidth
                              multiline
                              rows={4}
                              InputProps={{ style: { fontSize: "12px" } }}
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0rem",
                                width: "90%",
                              }}
                              value={SR3specialRequestMessage}
                              onChange={handleSR3SpecialRequestChange} 
                            />
                          </div>
                        )}
                      </li>
                      <li
                        style={{ marginTop: "4px", cursor: "pointer" }}
                        onClick={() =>
                          setSR3ExpandAccessibilityRequests(
                            !SR3expandAccessibilityRequests
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
                          Any accessibility requests?{" "}
                          <FontAwesomeIcon
                            icon={
                              SR3expandAccessibilityRequests
                                ? faAngleUp
                                : faAngleDown
                            }
                          />
                        </span>
                        {SR3expandAccessibilityRequests && (
                          <div onClick={(e) => e.stopPropagation()}>
                            <p
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0rem",
                                fontSize: "11px",
                                fontWeight: "100",
                              }}
                            >
                              Please choose the accessibility options you
                              require and we’ll forward your request to the
                              property. Please note, your request is not
                              guaranteed and if you don’t hear back from the
                              property, you may want to contact them directly to
                              confirm.{" "}
                            </p>
                            <div
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0px",
                                fontSize: "12px",
                                fontWeight: "100",
                              }}
                            >
                              {SR3accessibilityOptions.map((option) => (
                                <li key={option}>
                                  <input
                                    type="checkbox"
                                    value={option}
                                    onChange={(e) =>
                                      handleSR3CheckboxChange(e.target.value)
                                    }
                                    checked={SR3selectedAccessibilityRequests.includes(
                                      option
                                    )}
                                  />
                                  {option}
                                </li>
                              ))}
                            </div>
                          </div>
                        )}
                      </li>
                      <li
                        style={{ marginTop: "4px", cursor: "pointer" }}
                        onClick={() => setSR3ExpandArrival(!SR3expandArrival)}
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
                          Will this guest be arriving on the same day?{" "}
                          <FontAwesomeIcon
                            icon={SR3expandArrival ? faAngleUp : faAngleDown}
                          />
                        </span>
                        {SR3expandArrival && (
                          <div onClick={(e) => e.stopPropagation()}>
                            <div
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0px",
                                fontSize: "12px",
                                fontWeight: "100",
                              }}
                            >
                              <p
                                style={{
                                  marginTop: "0rem",
                                  fontSize: "11px",
                                  fontWeight: "100",
                                }}
                              >
                                Please include details of your date change for
                                this guest and we’ll forward it to the property.
                                Please note, your request is not guaranteed and
                                if you don’t hear back from the property, you
                                may want to contact them directly to confirm.
                              </p>
                              <div>Check In:</div>
                              <DatePicker
                                format="DD MMM, YYYY"
                                value={SR3checkInDate}
                                onChange={(value) => setSR3CheckInDate(value)}
                                style={{ marginRight: "1rem" }}
                              />
                              <div style={{ marginTop: "10px" }}>
                                Check Out:
                              </div>
                              <DatePicker
                                format="DD MMM, YYYY"
                                value={SR3checkOutDate}
                                onChange={(value) => setSR3CheckOutDate(value)}
                              />
                            </div>
                          </div>
                        )}
                      </li>
                    </ul>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "stretch",
                    width: "99%",
                    height: "auto",
                    background: "#ffffff",
                    borderRadius: "13px",
                    border: "1px solid #DFE0E4",
                    marginBottom: "10px", 
                    paddingBottom: "0px !important",
                  }}
                >
                  <div style={{ width: "35%", marginRight: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1629078691977-dc51747c0263?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Deluxe Suite"
                      style={{
                        width: "100%",
                        height: "auto", 
                        borderTopLeftRadius: "13px",
                        borderBottomLeftRadius: "13px",
                        clipPath: "polygon(0 0, 100% 0, 82% 100%, 0% 100%)",
                        verticalAlign: "bottom", 
                      }}
                    />
                  </div>
                  <div style={{ width: "65%" }}>
                    <h2
                      style={{
                        fontSize: "18px",
                        fontWeight: "300",
                        marginBottom: "10px",
                      }}
                    >
                      Deluxe Suite
                    </h2>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        fontWeight: "100",
                        fontSize: "11px",
                      }}
                    >
                      {" "}
                      <li style={{ marginBottom: "0px" }}>
                        <FontAwesomeIcon
                          icon={faExpand}
                          style={{
                            fontSize: "13px",
                            marginLeft: "2px",
                            marginRight: "4px",
                          }}
                        />{" "}
                        45 sq m
                      </li>
                      <li style={{ marginBottom: "0px" }}>
                        <FontAwesomeIcon
                          icon={faUsers}
                          style={{ marginRight: "3px" }}
                        />{" "}
                        Sleeps 4
                      </li>
                      <li style={{ marginBottom: "0px", fontSize: "11px" }}>
                        <FontAwesomeIcon
                          icon={faBed}
                          style={{ marginRight: "7px" }}
                        />
                        2 Double Beds
                      </li>
                      <li
                        style={{
                          marginBottom: "0px",
                          textAlign: "right",
                          marginRight: "10px",
                          fontSize: "16px",
                        }}
                      >
                        €250.00
                        <div style={{ fontSize: "11px", marginTop: "0px" }}>
                          per night
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* //////////////////////////DELUXE SUITE ONE////////////////////////// */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center" }}>
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
                      <TextField
                        style={{ marginRight: "1rem", width: "40%" }}
                        id="seventhFirstName"
                        name="seventhFirstName"
                        placeholder="Guest Name"
                        value={formik.values.seventhFirstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.seventhFirstName &&
                          Boolean(formik.errors.seventhFirstName)
                        }
                      />
                      <TextField
                        id="seventhEmail"
                        name="seventhEmail"
                        placeholder="Guest Email"
                        value={formik.values.seventhEmail}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.seventhEmail &&
                          Boolean(formik.errors.seventhEmail)
                        }
                        style={{ marginRight: "1rem", width: "40%" }}
                      />

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          setDS1ShowExtraFields(!DS1showExtraFields)
                        }
                      >
                        <FontAwesomeIcon
                          icon={DS1showExtraFields ? faAngleUp : faAngleDown}
                        />
                      </div>
                    </div>
                    {DS1showExtraFields && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "0.5rem",
                        }}
                      >
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            border: "1px solid #ffffff",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: "8px",
                            color: "#ffffff",
                            fontSize: "1rem",
                          }}
                        >
                          1
                        </div>
                        <TextField
                          style={{ marginRight: "1rem", width: "40%" }}
                          id="eighthFirstName"
                          name="eighthFirstName"
                          placeholder="Guest Name"
                          value={formik.values.eighthFirstName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <TextField
                          id="eighthEmail"
                          name="eighthEmail"
                          placeholder="Guest Email"
                          value={formik.values.eighthEmail}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          style={{ marginRight: "1rem", width: "40%" }}
                        />
                      </div>
                    )}

                    {DS1showExtraFields && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "0.5rem",
                        }}
                      >
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            border: "1px solid #ffffff",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: "8px",
                            color: "#ffffff",
                            fontSize: "1rem",
                          }}
                        >
                          2
                        </div>
                        <TextField
                          style={{ marginRight: "1rem", width: "40%" }}
                          id="ninthFirstName"
                          name="ninthFirstName"
                          placeholder="Guest Name"
                          value={formik.values.ninthFirstName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <TextField
                          id="ninthEmail"
                          name="ninthEmail"
                          placeholder="Guest Email"
                          value={formik.values.ninthEmail}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          style={{ marginRight: "1rem", width: "40%" }}
                        />
                      </div>
                    )}

                    {DS1showExtraFields && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "0.5rem",
                        }}
                      >
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            border: "1px solid #ffffff",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: "8px",
                            color: "#ffffff",
                            fontSize: "1rem",
                          }}
                        >
                          3
                        </div>
                        <TextField
                          style={{ marginRight: "1rem", width: "40%" }}
                          id="tenthFirstName"
                          name="tenthFirstName"
                          placeholder="Guest Name"
                          value={formik.values.tenthFirstName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <TextField
                          id="tenthEmail"
                          name="tenthEmail"
                          placeholder="Guest Email"
                          value={formik.values.tenthEmail}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          style={{ marginRight: "1rem", width: "40%" }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <ul>
                  {formik.touched.seventhFirstName &&
                    formik.errors.seventhFirstName && (
                      <li style={{ color: "#D42F2F", fontWeight: "normal" }}>
                        {formik.errors.seventhFirstName}
                      </li>
                    )}
                  {formik.touched.seventhEmail &&
                    formik.errors.seventhEmail && (
                      <li style={{ color: "#D42F2F", fontWeight: "normal" }}>
                        {formik.errors.seventhEmail}
                      </li>
                    )}
                </ul>
                <div>
                  <div
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: "normal",
                      color: "#1169E0",
                      marginLeft: "2.5rem",
                      marginBottom: "1rem",
                      marginTop: "0.3rem",
                    }}
                    onClick={() => setDS1IsOpen(!DS1isOpen)}
                  >
                    Booking Preferences{" "}
                    <FontAwesomeIcon
                      icon={DS1isOpen ? faAngleUp : faAngleDown}
                    />
                  </div>
                  {DS1isOpen && (
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
                          setDS1ExpandSpecialRequests(!DS1expandSpecialRequests)
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
                          Any special requests?{" "}
                          <FontAwesomeIcon
                            icon={
                              DS1expandSpecialRequests ? faAngleUp : faAngleDown
                            }
                          />
                        </span>
                        {DS1expandSpecialRequests && (
                          <div onClick={(e) => e.stopPropagation()}>
                            <p
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0rem",
                                fontSize: "11px",
                                fontWeight: "100",
                              }}
                            >
                              Please include details of your special request and
                              we’ll forward it to the property. Please note,
                              your request is not guaranteed and if you don’t
                              hear back from the property, you may want to
                              contact them directly to confirm.
                            </p>
                            <TextField
                              id="DS1specialRequests"
                              name="DS1specialRequests"
                              variant="outlined"
                              fullWidth
                              multiline
                              rows={4}
                              InputProps={{ style: { fontSize: "12px" } }}
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0rem",
                                width: "90%",
                              }}
                              value={DS1specialRequestMessage}
                              onChange={handleDS1SpecialRequestChange} 
                            />
                          </div>
                        )}
                      </li>
                      <li
                        style={{ marginTop: "4px", cursor: "pointer" }}
                        onClick={() =>
                          setDS1ExpandAccessibilityRequests(
                            !DS1expandAccessibilityRequests
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
                          Any accessibility requests?{" "}
                          <FontAwesomeIcon
                            icon={
                              DS1expandAccessibilityRequests
                                ? faAngleUp
                                : faAngleDown
                            }
                          />
                        </span>
                        {DS1expandAccessibilityRequests && (
                          <div onClick={(e) => e.stopPropagation()}>
                            <p
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0rem",
                                fontSize: "11px",
                                fontWeight: "100",
                              }}
                            >
                              Please choose the accessibility options you
                              require and we’ll forward your request to the
                              property. Please note, your request is not
                              guaranteed and if you don’t hear back from the
                              property, you may want to contact them directly to
                              confirm.{" "}
                            </p>
                            <div
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0px",
                                fontSize: "12px",
                                fontWeight: "100",
                              }}
                            >
                              {DS1accessibilityOptions.map((option) => (
                                <li key={option}>
                                  <input
                                    type="checkbox"
                                    value={option}
                                    onChange={(e) =>
                                      handleDS1CheckboxChange(e.target.value)
                                    }
                                    checked={DS1selectedAccessibilityRequests.includes(
                                      option
                                    )}
                                  />
                                  {option}
                                </li>
                              ))}
                            </div>
                          </div>
                        )}
                      </li>
                      <li
                        style={{ marginTop: "4px", cursor: "pointer" }}
                        onClick={() => setDS1ExpandArrival(!DS1expandArrival)}
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
                          Will this guest be arriving on the same day?{" "}
                          <FontAwesomeIcon
                            icon={DS1expandArrival ? faAngleUp : faAngleDown}
                          />
                        </span>
                        {DS1expandArrival && (
                          <div onClick={(e) => e.stopPropagation()}>
                            <div
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0px",
                                fontSize: "12px",
                                fontWeight: "100",
                              }}
                            >
                              <p
                                style={{
                                  marginTop: "0rem",
                                  fontSize: "11px",
                                  fontWeight: "100",
                                }}
                              >
                                Please include details of your date change for
                                this guest and we’ll forward it to the property.
                                Please note, your request is not guaranteed and
                                if you don’t hear back from the property, you
                                may want to contact them directly to confirm.
                              </p>
                              <div>Check In:</div>
                              <DatePicker
                                format="DD MMM, YYYY"
                                value={DS1checkInDate}
                                onChange={(value) => setDS1CheckInDate(value)}
                                style={{ marginRight: "1rem" }}
                              />
                              <div style={{ marginTop: "10px" }}>
                                Check Out:
                              </div>
                              <DatePicker
                                format="DD MMM, YYYY"
                                value={DS1checkOutDate}
                                onChange={(value) => setDS1CheckOutDate(value)}
                              />
                            </div>
                          </div>
                        )}
                      </li>
                    </ul>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "stretch",
                    width: "99%",
                    height: "auto",
                    background: "#ffffff",
                    borderRadius: "13px",
                    border: "1px solid #DFE0E4",
                    marginBottom: "10px", 
                    paddingBottom: "0px !important",
                  }}
                >
                  <div style={{ width: "35%", marginRight: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="King Deluxe Suite"
                      style={{
                        width: "100%",
                        height: "auto", 
                        borderTopLeftRadius: "13px",
                        borderBottomLeftRadius: "13px",
                        clipPath: "polygon(0 0, 100% 0, 82% 100%, 0% 100%)",
                        verticalAlign: "bottom", 
                      }}
                    />
                  </div>
                  <div style={{ width: "65%" }}>
                    <h2
                      style={{
                        fontSize: "18px",
                        fontWeight: "300",
                        marginBottom: "10px",
                      }}
                    >
                      King Deluxe Suite
                    </h2>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        fontWeight: "100",
                        fontSize: "11px",
                      }}
                    >
                      {" "}
                      <li style={{ marginBottom: "0px" }}>
                        <FontAwesomeIcon
                          icon={faExpand}
                          style={{
                            fontSize: "13px",
                            marginLeft: "2px",
                            marginRight: "4px",
                          }}
                        />{" "}
                        55 sq m
                      </li>
                      <li style={{ marginBottom: "0px" }}>
                        <FontAwesomeIcon
                          icon={faUsers}
                          style={{ marginRight: "3px" }}
                        />{" "}
                        Sleeps 4
                      </li>
                      <li style={{ marginBottom: "0px", fontSize: "11px" }}>
                        <FontAwesomeIcon
                          icon={faBed}
                          style={{ marginRight: "7px" }}
                        />
                        2 Double Beds
                      </li>
                      <li
                        style={{
                          marginBottom: "0px",
                          textAlign: "right",
                          marginRight: "10px",
                          fontSize: "16px",
                        }}
                      >
                        €350.00
                        <div style={{ fontSize: "11px", marginTop: "0px" }}>
                          per night
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* //////////////////////////DELUXE SUITE ONE////////////////////////// */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center" }}>
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
                          <TextField
                            style={{ marginRight: "1rem", width: "40%" }}
                            id="eleventhFirstName"
                            name="eleventhFirstName"
                            placeholder="Guest Name"
                            value={formik.values.eleventhFirstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                              formik.touched.eleventhFirstName &&
                              Boolean(formik.errors.eleventhFirstName)
                            }
                          />
                          <TextField
                            id="eleventhEmail"
                            name="eleventhEmail"
                            placeholder="Guest Email"
                            value={formik.values.eleventhEmail}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                              formik.touched.eleventhEmail &&
                              Boolean(formik.errors.eleventhEmail)
                            }
                            style={{ marginRight: "1rem", width: "40%" }}
                          />

                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              setKDS1ShowExtraFields(!KDS1showExtraFields)
                            }
                          >
                            <FontAwesomeIcon
                              icon={
                                KDS1showExtraFields ? faAngleUp : faAngleDown
                              }
                            />
                          </div>
                        </div>
                        {KDS1showExtraFields && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginTop: "0.5rem",
                            }}
                          >
                            <div
                              style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                border: "1px solid #ffffff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginRight: "8px",
                                color: "#ffffff",
                                fontSize: "1rem",
                              }}
                            >
                              3
                            </div>
                            <TextField
                              style={{ marginRight: "1rem", width: "40%" }}
                              id="twelfthFirstName"
                              name="twelfthFirstName"
                              placeholder="Guest Name"
                              value={formik.values.twelfthFirstName}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            <TextField
                              id="twelfthEmail"
                              name="twelfthEmail"
                              placeholder="Guest Email"
                              value={formik.values.twelfthEmail}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              style={{ marginRight: "1rem", width: "40%" }}
                            />
                          </div>
                        )}

                        {KDS1showExtraFields && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginTop: "0.5rem",
                            }}
                          >
                            <div
                              style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                border: "1px solid #ffffff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginRight: "8px",
                                color: "#ffffff",
                                fontSize: "1rem",
                              }}
                            >
                              3
                            </div>
                            <TextField
                              style={{ marginRight: "1rem", width: "40%" }}
                              id="thirteenthFirstName"
                              name="thirteenthFirstName"
                              placeholder="Guest Name"
                              value={formik.values.thirteenthFirstName}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            <TextField
                              id="thirteenthEmail"
                              name="thirteenthEmail"
                              placeholder="Guest Email"
                              value={formik.values.thirteenthEmail}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              style={{ marginRight: "1rem", width: "40%" }}
                            />
                          </div>
                        )}

                        {KDS1showExtraFields && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginTop: "0.5rem",
                            }}
                          >
                            <div
                              style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                border: "1px solid #ffffff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginRight: "8px",
                                color: "#ffffff",
                                fontSize: "1rem",
                              }}
                            >
                              4
                            </div>
                            <TextField
                              style={{ marginRight: "1rem", width: "40%" }}
                              id="fourteenthFirstName"
                              name="fourteenthFirstName"
                              placeholder="Guest Name"
                              value={formik.values.fourteenthFirstName}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            <TextField
                              id="fourteenthEmail"
                              name="fourteenthEmail"
                              placeholder="Guest Email"
                              value={formik.values.fourteenthEmail}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              style={{ marginRight: "1rem", width: "40%" }}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <ul>
                      {formik.touched.eleventhFirstName &&
                        formik.errors.eleventhFirstName && (
                          <li
                            style={{ color: "#D42F2F", fontWeight: "normal" }}
                          >
                            {formik.errors.eleventhFirstName}
                          </li>
                        )}
                      {formik.touched.eleventhEmail &&
                        formik.errors.eleventhEmail && (
                          <li
                            style={{ color: "#D42F2F", fontWeight: "normal" }}
                          >
                            {formik.errors.eleventhEmail}
                          </li>
                        )}
                    </ul>
                    <div>
                      <div
                        style={{
                          textDecoration: "none",
                          cursor: "pointer",
                          fontSize: "12px",
                          fontWeight: "normal",
                          color: "#1169E0",
                          marginLeft: "2.5rem",
                          marginBottom: "1rem",
                          marginTop: "0rem",
                        }}
                        onClick={() => setKDS1IsOpen(!KDS1isOpen)}
                      >
                        Booking Preferences{" "}
                        <FontAwesomeIcon
                          icon={KDS1isOpen ? faAngleUp : faAngleDown}
                        />
                      </div>
                      {KDS1isOpen && (
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
                              setKDS1ExpandSpecialRequests(
                                !KDS1expandSpecialRequests
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
                              Any special requests?{" "}
                              <FontAwesomeIcon
                                icon={
                                  KDS1expandSpecialRequests
                                    ? faAngleUp
                                    : faAngleDown
                                }
                              />
                            </span>
                            {KDS1expandSpecialRequests && (
                              <div onClick={(e) => e.stopPropagation()}>
                                <p
                                  style={{
                                    marginLeft: "3.5rem",
                                    marginTop: "0rem",
                                    fontSize: "11px",
                                    fontWeight: "100",
                                  }}
                                >
                                  Please include details of your special request
                                  and we’ll forward it to the property. Please
                                  note, your request is not guaranteed and if
                                  you don’t hear back from the property, you may
                                  want to contact them directly to confirm.
                                </p>
                                <TextField
                                  id="KDS1specialRequests"
                                  name="KDS1specialRequests"
                                  variant="outlined"
                                  fullWidth
                                  multiline
                                  rows={4}
                                  InputProps={{ style: { fontSize: "12px" } }}
                                  style={{
                                    marginLeft: "3.5rem",
                                    marginTop: "0rem",
                                    width: "90%",
                                  }}
                                  value={KDS1specialRequestMessage}
                                  onChange={handleKDS1SpecialRequestChange} 
                                />
                              </div>
                            )}
                          </li>
                          <li
                            style={{ marginTop: "4px", cursor: "pointer" }}
                            onClick={() =>
                              setKDS1ExpandAccessibilityRequests(
                                !KDS1expandAccessibilityRequests
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
                              Any accessibility requests?{" "}
                              <FontAwesomeIcon
                                icon={
                                  KDS1expandAccessibilityRequests
                                    ? faAngleUp
                                    : faAngleDown
                                }
                              />
                            </span>
                            {KDS1expandAccessibilityRequests && (
                              <div onClick={(e) => e.stopPropagation()}>
                                <p
                                  style={{
                                    marginLeft: "3.5rem",
                                    marginTop: "0rem",
                                    fontSize: "11px",
                                    fontWeight: "100",
                                  }}
                                >
                                  Please choose the accessibility options you
                                  require and we’ll forward your request to the
                                  property. Please note, your request is not
                                  guaranteed and if you don’t hear back from the
                                  property, you may want to contact them
                                  directly to confirm.{" "}
                                </p>
                                <div
                                  style={{
                                    marginLeft: "3.5rem",
                                    marginTop: "0px",
                                    fontSize: "12px",
                                    fontWeight: "100",
                                  }}
                                >
                                  {KDS1accessibilityOptions.map((option) => (
                                    <li key={option}>
                                      <input
                                        type="checkbox"
                                        value={option}
                                        onChange={(e) =>
                                          handleKDS1CheckboxChange(
                                            e.target.value
                                          )
                                        }
                                        checked={KDS1selectedAccessibilityRequests.includes(
                                          option
                                        )}
                                      />
                                      {option}
                                    </li>
                                  ))}
                                </div>
                              </div>
                            )}
                          </li>
                          <li
                            style={{ marginTop: "4px", cursor: "pointer" }}
                            onClick={() =>
                              setKDS1ExpandArrival(!KDS1expandArrival)
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
                              Will this guest be arriving on the same day?{" "}
                              <FontAwesomeIcon
                                icon={
                                  KDS1expandArrival ? faAngleUp : faAngleDown
                                }
                              />
                            </span>
                            {KDS1expandArrival && (
                              <div onClick={(e) => e.stopPropagation()}>
                                <div
                                  style={{
                                    marginLeft: "3.5rem",
                                    marginTop: "0px",
                                    fontSize: "12px",
                                    fontWeight: "100",
                                  }}
                                >
                                  <p
                                    style={{
                                      marginTop: "0rem",
                                      fontSize: "11px",
                                      fontWeight: "100",
                                    }}
                                  >
                                    Please include details of your date change
                                    for this guest and we’ll forward it to the
                                    property. Please note, your request is not
                                    guaranteed and if you don’t hear back from
                                    the property, you may want to contact them
                                    directly to confirm.
                                  </p>
                                  <div>Check In:</div>
                                  <DatePicker
                                    format="DD MMM, YYYY"
                                    value={KDS1checkInDate}
                                    onChange={(value) =>
                                      setKDS1CheckInDate(value)
                                    }
                                    style={{ marginRight: "1rem" }}
                                  />
                                  <div style={{ marginTop: "10px" }}>
                                    Check Out:
                                  </div>
                                  <DatePicker
                                    format="DD MMM, YYYY"
                                    value={KDS1checkOutDate}
                                    onChange={(value) =>
                                      setKDS1CheckOutDate(value)
                                    }
                                  />
                                </div>
                              </div>
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
                  </div>
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
        </div>{" "}
      </div>
    </>
  );
}
