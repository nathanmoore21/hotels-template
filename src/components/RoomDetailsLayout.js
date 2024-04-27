import React, { useState, useEffect } from "react"; // import useState and useEffect hooks
import PropTypes from "prop-types"; // import PropTypes
import Box from "@mui/material/Box"; // import Box component from Material-UI
import { Icon } from "@iconify/react"; // import Icon component from Iconify
import bedIcon from "@iconify-icons/mdi/bed"; // import bedIcon from Material Design Icons
import { useFormik } from "formik"; // import useFormik hook from formik
import * as yup from "yup"; // import yup for form validation
import TextField from "@mui/material/TextField"; // import TextField component from Material-UI
import Button from "@mui/material/Button"; // import Button component from Material-UI
import { Link } from "react-router-dom"; // import Link component from react-router-dom
import DatePicker from "react-multi-date-picker"; // import DatePicker component from react-multi-date-picker
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // import FontAwesomeIcon component from @fortawesome/react-fontawesome
import {
  faAngleDown,
  faAngleUp,
  faPlus,
  faExpand,
  faUsers,
  faBed,
  faWifi,
  faPersonChalkboard,
  faChair,
  faCalendar,
  faTag,
  faBellConcierge,
} from "@fortawesome/free-solid-svg-icons"; // import necessary icons from @fortawesome/free-solid-svg-icons
import LogoImage from "./images/logo.svg"; // import LogoImage from images folder

// create validationSchema using yup
const validationSchema = yup.object({
  // create validationSchema for the form
  // firstName, firstEmail (and so on) are required
  // yup.string is used to validate the input as a string
  firstName: yup
    .string()
    .required("Guest Name is required")
    // Only allow letters in the first name
    .matches(/^[A-Za-z]+$/, "Please enter a valid First Name"),
  firstEmail: yup
    .string()
    .required("Email is required")
    // Validate the email address
    .email("Please enter a valid email address"),
  thirdFirstName: yup
    .string()
    .required("Guest Name is required")
    .matches(/^[A-Za-z]+$/, "Please enter a valid First Name"),
  thirdEmail: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  fifthFirstName: yup
    .string()
    .required("Guest Name is required")
    .matches(/^[A-Za-z]+$/, "Please enter a valid First Name"),
  fifthEmail: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  seventhFirstName: yup
    .string()
    .required("Guest Name is required")
    .matches(/^[A-Za-z]+$/, "Please enter a valid First Name"),
  seventhEmail: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  eleventhFirstName: yup
    .string()
    .required("Guest Name is required")
    .matches(/^[A-Za-z]+$/, "Please enter a valid First Name"),
  eleventhEmail: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
});

// create Item component that takes in props
function Item(props) {
  // sx means style
  // ...other means other props
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

// set propTypes for Item component
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

// create FlexGrow component
export default function FlexGrow() {
  // create formik object using useFormik hook
  const formik = useFormik({
    // initialValues for the form
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
    // validationSchema for the form
    validationSchema: validationSchema,
    // onSubmit function for the form
    onSubmit: (values) => {
      // alert the form values
      // convert the values object to a JSON string
      // null means no replacer function, which is used to filter the properties of the object
      // 2 is the number of spaces to indent the nested objects
      alert(JSON.stringify(values, null, 2));
    },
  });

  // useEffect hook to store form values in localStorage
  // .setItem() method sets the value of the specified Storage Object item
  // formik.values.firstName is the value of the firstName field in the form
  useEffect(
    () => {
      localStorage.setItem("firstName", formik.values.firstName);
      localStorage.setItem("firstEmail", formik.values.firstEmail);
    },
    // formik.values.firstName and formik.values.firstEmail are the dependencies of the useEffect hook
    [formik.values.firstName, formik.values.firstEmail]
  );

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

  // FUNCTION ROOM
  // expand function request for that booking
  const [FRRequestMessage, setFRRequestMessage] = useState("");

  //STANDARD ROOM ONE
  // useState hook to create a boolean state variable
  // setSR1IsOpen is a function that will be used to expand the add. info. menu for that room
  const [SR1isOpen, setSR1IsOpen] = useState(false);
  // setSR1ShowExtraFields is a function that will be used to show all fields (guest) for that room
  const [SR1showExtraFields, setSR1ShowExtraFields] = useState(false);
  // expand special requests for that room
  const [SR1expandSpecialRequests, setSR1ExpandSpecialRequests] =
    useState(false);
  // expand kids requests for that room
  const [SR1expandKidsRequests, setSR1ExpandKidsRequests] = useState(false);
  // expand kids request message for that room
  const [SR1kidsRequestMessage, setSR1KidsRequestMessage] = useState("");
  // expand accessibility requests for that room
  const [SR1expandAccessibilityRequests, setSR1ExpandAccessibilityRequests] =
    useState(false);
  // expand arrival for that room
  const [SR1expandArrival, setSR1ExpandArrival] = useState(false);
  // special special request message for that room
  const [SR1specialRequestMessage, setSR1SpecialRequestMessage] = useState("");
  // selected accessibility requests for that room
  const [
    SR1selectedAccessibilityRequests,
    setSR1SelectedAccessibilityRequests,
  ] = useState([]);
  // check-in date for that room
  // save to local storage
  // get the date from local storage and display it
  // new Date() creates a new date object
  // : null means if there is no date, set it to null
  const [SR1checkInDate, setSR1CheckInDate] = useState(() => {
    const storedDate = localStorage.getItem("SR1checkInDate");
    return storedDate
      ? new Date(JSON.parse(storedDate))
      : // if there is no date, set it to May 10, 2024
        new Date(2024, 4, 10);
  });

  // check-out date for that room
  const [SR1checkOutDate, setSR1CheckOutDate] = useState(() => {
    const storedDate = localStorage.getItem("SR1checkOutDate");
    return storedDate
      ? new Date(JSON.parse(storedDate))
      : // if there is no date, set it to May 12, 2024
        new Date(2024, 4, 12);
  });

  // save the check-in date to local storage
  useEffect(() => {
    localStorage.setItem("SR1checkInDate", JSON.stringify(SR1checkInDate));
  }, [SR1checkInDate]);

  // save the check-out date to local storage
  useEffect(() => {
    localStorage.setItem("SR1checkOutDate", JSON.stringify(SR1checkOutDate));
  }, [SR1checkOutDate]);

  // get the special request message from local storage
  // [] means run once the page loads
  useEffect(() => {
    const storedMessage = localStorage.getItem("SR1specialRequestMessage");
    if (storedMessage) {
      setSR1SpecialRequestMessage(storedMessage);
    }
  }, []);

  // handle special request change
  const handleSR1SpecialRequestChange = (e) => {
    const message = e.target.value;
    setSR1SpecialRequestMessage(message);
    localStorage.setItem("SR1specialRequestMessage", message);
  };

  // get the kids request message from local storage
  useEffect(() => {
    const storedMessage = localStorage.getItem("SR1kidsRequestMessage");
    if (storedMessage) {
      setSR1KidsRequestMessage(storedMessage);
    }
  }, []);

  // handle kids request change
  const handleSR1KidsRequestChange = (e) => {
    const message = e.target.value;
    setSR1KidsRequestMessage(message);
    localStorage.setItem("SR1kidsRequestMessage", message);
  };

  // get the function room request message from local storage
  useEffect(() => {
    const storedMessage = localStorage.getItem("FRRequestMessage");
    if (storedMessage) {
      setFRRequestMessage(storedMessage);
    }
  }, []);

  // handle function room request change
  const handleFRRequestChange = (e) => {
    const message = e.target.value;
    setFRRequestMessage(message);
    localStorage.setItem("FRRequestMessage", message);
  };

  // accessibility options for that (all) room/s
  const SR1accessibilityOptions = [
    "Wheelchair accessible (may have limitations)",
    "Wheelchair accessible parking",
    "Wheelchair-accessible concierge desk",
    "Wheelchair-accessible lounge",
    "Wheelchair-accessible meeting spaces/business center",
    "Wheelchair-accessible on-site restaurant",
    "Wheelchair-accessible registration desk",
  ];

  // Function to handle the change in SR1 checkbox
  const handleSR1CheckboxChange = (value) => {
    // Check if the value is already in the selected accessibility requests
    const isSelected = SR1selectedAccessibilityRequests.includes(value);
    // If the value is already selected, remove it from the selection
    let updatedSelection = [];
    if (isSelected) {
      updatedSelection = SR1selectedAccessibilityRequests.filter(
        (item) => item !== value
      );
    } else {
      // If the value is not selected, add it to the selection
      updatedSelection = [...SR1selectedAccessibilityRequests, value];
    }
    // Update the state with the new selection
    setSR1SelectedAccessibilityRequests(updatedSelection);
    localStorage.setItem(
      // Store the updated selection in local storage
      "SR1selectedAccessibilityRequests",
      JSON.stringify(updatedSelection)
    );
  };

  // Effect hook to load the selected accessibility requests from local storage when the page loads
  useEffect(() => {
    // Retrieve the stored selection from local storage
    const storedSelection = localStorage.getItem(
      "SR1selectedAccessibilityRequests"
    );
    if (storedSelection) {
      // If there is a stored selection, set the state with the retrieved value
      setSR1SelectedAccessibilityRequests(JSON.parse(storedSelection));
    }
  }, []);

  //STANDARD ROOM TWO
  const [SR2isOpen, setSR2IsOpen] = useState(false);
  const [SR2showExtraFields, setSR2ShowExtraFields] = useState(false);
  const [SR2expandSpecialRequests, setSR2ExpandSpecialRequests] =
    useState(false);
  const [SR2expandKidsRequests, setSR2ExpandKidsRequests] = useState(false);
  const [SR2kidsRequestMessage, setSR2KidsRequestMessage] = useState("");
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
    return storedDate
      ? new Date(JSON.parse(storedDate))
      : new Date(2024, 4, 10);
  });
  const [SR2checkOutDate, setSR2CheckOutDate] = useState(() => {
    const storedDate = localStorage.getItem("SR2checkOutDate");
    return storedDate
      ? new Date(JSON.parse(storedDate))
      : new Date(2024, 4, 12);
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
  useEffect(() => {
    const storedMessage = localStorage.getItem("SR2kidsRequestMessage");
    if (storedMessage) {
      setSR2KidsRequestMessage(storedMessage);
    }
  }, []);

  const handleSR2KidsRequestChange = (e) => {
    const message = e.target.value;
    setSR2KidsRequestMessage(message);
    localStorage.setItem("SR2kidsRequestMessage", message);
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
  const [SR3expandKidsRequests, setSR3ExpandKidsRequests] = useState(false);
  const [SR3kidsRequestMessage, setSR3KidsRequestMessage] = useState("");
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
    return storedDate
      ? new Date(JSON.parse(storedDate))
      : new Date(2024, 4, 10);
  });
  const [SR3checkOutDate, setSR3CheckOutDate] = useState(() => {
    const storedDate = localStorage.getItem("SR3checkOutDate");
    return storedDate
      ? new Date(JSON.parse(storedDate))
      : new Date(2024, 4, 12);
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
  useEffect(() => {
    const storedMessage = localStorage.getItem("SR3kidsRequestMessage");
    if (storedMessage) {
      setSR3KidsRequestMessage(storedMessage);
    }
  }, []);

  const handleSR3KidsRequestChange = (e) => {
    const message = e.target.value;
    setSR3KidsRequestMessage(message);
    localStorage.setItem("SR3kidsRequestMessage", message);
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
  const [DS1expandKidsRequests, setDS1ExpandKidsRequests] = useState(false);
  const [DS1kidsRequestMessage, setDS1KidsRequestMessage] = useState("");
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
    return storedDate
      ? new Date(JSON.parse(storedDate))
      : new Date(2024, 4, 10);
  });
  const [DS1checkOutDate, setDS1CheckOutDate] = useState(() => {
    const storedDate = localStorage.getItem("DS1checkOutDate");
    return storedDate
      ? new Date(JSON.parse(storedDate))
      : new Date(2024, 4, 12);
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
  useEffect(() => {
    const storedMessage = localStorage.getItem("DS1kidsRequestMessage");
    if (storedMessage) {
      setDS1KidsRequestMessage(storedMessage);
    }
  }, []);

  const handleDS1KidsRequestChange = (e) => {
    const message = e.target.value;
    setDS1KidsRequestMessage(message);
    localStorage.setItem("DS1kidsRequestMessage", message);
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
  const [KDS1expandKidsRequests, setKDS1ExpandKidsRequests] = useState(false);
  const [KDS1kidsRequestMessage, setKDS1KidsRequestMessage] = useState("");
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
    return storedDate
      ? new Date(JSON.parse(storedDate))
      : new Date(2024, 4, 10);
  });
  const [KDS1checkOutDate, setKDS1CheckOutDate] = useState(() => {
    const storedDate = localStorage.getItem("KDS1checkOutDate");
    return storedDate
      ? new Date(JSON.parse(storedDate))
      : new Date(2024, 4, 12);
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
  useEffect(() => {
    const storedMessage = localStorage.getItem("KDS1kidsRequestMessage");
    if (storedMessage) {
      setKDS1KidsRequestMessage(storedMessage);
    }
  }, []);

  const handleKDS1KidsRequestChange = (e) => {
    const message = e.target.value;
    setKDS1KidsRequestMessage(message);
    localStorage.setItem("KDS1kidsRequestMessage", message);
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

  // save the selected option to local storage
  const [selectedOption, setSelectedOption] = useState(
    JSON.parse(localStorage.getItem("selectedOption")) || null
  );

  //FORM VALIDATION
  // State to track form validity, initially set to false
  const [isFormValid, setIsFormValid] = React.useState(true);
  // useEffect hook to check if all required fields are filled
  React.useEffect(
    () => {
      // Check if all required fields are filled
      // trim() removes whitespace from both ends of a string
      // !== "" checks if the string is not empty
      const isFirstNameValid = formik.values.firstName.trim() !== "";
      const isFirstEmailValid = formik.values.firstEmail.trim() !== "";

      const isThirdFirstNameValid = formik.values.thirdFirstName.trim() !== "";
      const isThirdEmailValid = formik.values.thirdEmail.trim() !== "";

      const isFifthFirstNameValid = formik.values.fifthFirstName.trim() !== "";
      const isFifthEmailValid = formik.values.fifthEmail.trim() !== "";

      const isSexenthFirstNameValid =
        formik.values.seventhFirstName.trim() !== "";
      const isSeventhEmailValid = formik.values.seventhEmail.trim() !== "";

      const isEleventhFirstNameValid =
        formik.values.eleventhFirstName.trim() !== "";
      const isEleventhEmailValid = formik.values.eleventhEmail.trim() !== "";

      // Check if an option is selected
      const isOptionSelected = selectedOption !== null;

      // Set the form validity state
      // form is valid if all fields are filled
      // && is the logical AND operator
      // !formik.touched.firstName means the field is not touched
      setIsFormValid(
        isFirstNameValid &&
          isFirstEmailValid &&
          isThirdFirstNameValid &&
          isThirdEmailValid &&
          isFifthFirstNameValid &&
          isFifthEmailValid &&
          isSexenthFirstNameValid &&
          isSeventhEmailValid &&
          isEleventhFirstNameValid &&
          isEleventhEmailValid &&
          isOptionSelected &&
          !formik.touched.firstName &&
          !formik.touched.firstEmail &&
          !formik.touched.thirdFirstName &&
          !formik.touched.thirdEmail &&
          !formik.touched.fifthFirstName &&
          !formik.touched.fifthEmail &&
          !formik.touched.seventhFirstName &&
          !formik.touched.seventhEmail &&
          !formik.touched.eleventhFirstName &&
          !formik.touched.eleventhEmail
      );
    },
    // [formik.values] is the dependency array which means React will re-run the effect if any of the values in the dependency array change.
    // [selectedOption] is the dependency array which means React will re-run the effect if the selected option changes.
    // [formik.touched] is the dependency array which means React will re-run the effect if the touched state changes.
    [formik.values, selectedOption, formik.touched]
  );

  // useEffect hook to update the form validity state
  React.useEffect(() => {
    setIsFormValid(formik.isValid);
    // formik.isValid is the dependency array which means React will re-run the effect if the isValid state changes.
  }, [formik.isValid]);

  // Function to handle form submission
  // e is the event object
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Proceed to the next page if form is valid
    if (formik.isValid) {
      formik.submitForm();
    }
  };

  // Function to handle checkbox state changes
  const handleCheckboxChange = (option) => {
    // Update the selected option state
    setSelectedOption(selectedOption === option ? null : option);
    // Save the selected option to local storage
    localStorage.setItem(
      "selectedOption",
      JSON.stringify(selectedOption === option ? null : option)
    );
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
                Want to discuss your booking before you confirm? Call us on
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

              {/* bedrooms */}
              <div
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  width: "99%",
                  height: "auto",
                  background: "#ffffff",
                  borderRadius: "13px",
                  border: "1px solid #DFE0E4",
                  paddingBottom: "0px !important",
                }}
              >
                <div style={{ width: "35%", marginRight: "10px" }}>
                  <img
                    src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Standard Double Room Image"
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
              <div>
                <input
                  // The checkbox is checked if the selected option is 1
                  type="checkbox"
                  id="option1"
                  // The checkbox is checked if the selected option is 1
                  checked={selectedOption === 1}
                  // When the checkbox is clicked, call the handleCheckboxChange function with the value 1
                  onChange={() => handleCheckboxChange(1)}
                  // The checkbox is disabled if the selected option is not null and not 1
                  disabled={selectedOption !== null && selectedOption !== 1}
                  style={{ marginBottom: "10px" }}
                />
                <label
                  htmlFor="option1"
                  style={{ fontWeight: "100", fontSize: "12px" }}
                >
                  I will be staying in the Standard Double Room
                </label>
              </div>

              {/* // Formik form for the first room */}
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
                        // id is a unique identifier for the input field
                        id="firstName"
                        // name is the key of the value in the formik values object
                        name="firstName"
                        // The placeholder text for the input field
                        placeholder="Guest Name (Required)"
                        // The value of the input field is the value in the formik values object
                        value={formik.values.firstName}
                        // The onChange event handler updates the formik values object
                        onChange={formik.handleChange}
                        // The onBlur event handler updates the formik touched object
                        onBlur={formik.handleBlur}
                        // The error prop is true if the field has been touched and there is an error
                        error={
                          formik.touched.firstName &&
                          Boolean(formik.errors.firstName)
                        }
                        // The helperText is the error message if there is an error
                        helperText={
                          formik.touched.firstName && formik.errors.firstName
                        }
                        // The Input prop is used to style the input field
                        Input={{
                          classes: {
                            input: "input-field",
                          },
                        }}
                        style={{ marginRight: "1rem", width: "40%" }}
                      />
                      <TextField
                        id="firstEmail"
                        name="firstEmail"
                        placeholder="Guest Email (Required)"
                        value={formik.values.firstEmail}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.firstEmail &&
                          Boolean(formik.errors.firstEmail)
                        }
                        helperText={
                          formik.touched.firstEmail && formik.errors.firstEmail
                        }
                        Input={{
                          classes: {
                            input: "input-field",
                          },
                        }}
                        style={{ marginRight: "1rem", width: "40%" }}
                      />

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                        // When the div is clicked, the showExtraFields state is toggled
                        onClick={() =>
                          setSR1ShowExtraFields(!SR1showExtraFields)
                        }
                      >
                        <FontAwesomeIcon
                          // if the showExtraFields state is true, show the up arrow, otherwise show the plus icon
                          icon={SR1showExtraFields ? faAngleUp : faPlus}
                        />
                      </div>
                    </div>

                    {/* // If the showExtraFields state is true, show the extra fields */}
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

                <div>
                  <div
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: "normal",
                      color: "#1169E0",
                      marginLeft: "2.5rem",
                      marginBottom: "0.5rem",
                      marginTop: "0.3rem",
                    }}
                    // When the div is clicked, the SR1isOpen state is toggled, which is used for additional information
                    onClick={() => setSR1IsOpen(!SR1isOpen)}
                  >
                    Additional Information{" "}
                    <FontAwesomeIcon
                      // If the add. info. state is true, show the up arrow, otherwise show the down arrow
                      icon={SR1isOpen ? faAngleUp : faAngleDown}
                    />
                  </div>
                  {/* // If the additional information state is true, show the additional information */}
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
                          // When the div is clicked, the special requests state is toggled
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
                              // If the special requests state is true, show the up arrow, otherwise show the down arrow
                              SR1expandSpecialRequests ? faAngleUp : faAngleDown
                            }
                          />
                        </span>
                        {SR1expandSpecialRequests && (
                          // If the special requests state is true, show the special requests input field
                          // e.stopPropagation() stops the click event from affecting parent elements.
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
                              // id is a unique identifier for the input field
                              id="SR1specialRequests"
                              // name is the key of the value in the formik values object
                              name="SR1specialRequests"
                              variant="outlined"
                              // fullWidth makes the input field take up the full width of the parent container
                              fullWidth
                              // multiline allows the input field to have multiple lines
                              multiline
                              // rows is the number of rows the input field will have
                              rows={4}
                              // The InputProps prop is used to style the input field
                              InputProps={{ style: { fontSize: "12px" } }}
                              // The style prop is used to style the input field
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0rem",
                                width: "90%",
                              }}
                              // The value of the input field is the value in the formik values object
                              value={SR1specialRequestMessage}
                              // The onChange event handler updates the formik values object
                              onChange={handleSR1SpecialRequestChange}
                            />
                          </div>
                        )}
                      </li>
                      <li
                        style={{ marginTop: "4px", cursor: "pointer" }}
                        // When the div is clicked, the accessibility requests state is toggled
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
                              // If the accessibility requests state is true, show the up arrow, otherwise show the down arrow
                              SR1expandAccessibilityRequests
                                ? faAngleUp
                                : faAngleDown
                            }
                          />
                        </span>
                        {/* // If the accessibility requests state is true, show the accessibility requests options */}
                        {SR1expandAccessibilityRequests && (
                          // e.stopPropagation() stops the click event from affecting parent elements.
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
                              {/* // Map over the accessibility options and create a checkbox for each option */}
                              {SR1accessibilityOptions.map((option) => (
                                // The key is a unique identifier for the list item
                                <li key={option}>
                                  <input
                                    type="checkbox"
                                    // The value of the checkbox is the option
                                    value={option}
                                    // The onChange event handler calls the handleCheckboxChange function with the option
                                    onChange={(e) =>
                                      handleSR1CheckboxChange(e.target.value)
                                    }
                                    // The checked prop is true if the selected accessibility requests include the option
                                    checked={SR1selectedAccessibilityRequests.includes(
                                      option
                                    )}
                                  />
                                  {/* // The label is the list of options */}
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
                          // When the div is clicked, the kids requests state is toggled
                          setSR1ExpandKidsRequests(!SR1expandKidsRequests)
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
                          Kids club request?{" "}
                          <FontAwesomeIcon
                            icon={
                              // If the kids requests state is true, show the up arrow, otherwise show the down arrow
                              SR1expandKidsRequests ? faAngleUp : faAngleDown
                            }
                          />
                        </span>
                        {SR1expandKidsRequests && (
                          // If the kids requests state is true, show the kids requests input field
                          // e.stopPropagation() stops the click event from affecting parent elements.
                          <div onClick={(e) => e.stopPropagation()}>
                            <p
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0rem",
                                fontSize: "11px",
                                fontWeight: "100",
                              }}
                            >
                              Please include any necessary information about
                              your child such as their name, age, and dietary
                              information, and we’ll forward it to the property.
                              Please note, your request is not guaranteed, and
                              if you don’t hear back from the property, you may
                              want to contact them directly to confirm.
                            </p>
                            <TextField
                              id="SR1kidsRequests"
                              name="SR1kidsRequests"
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
                              value={SR1kidsRequestMessage}
                              onChange={handleSR1KidsRequestChange}
                            />
                          </div>
                        )}
                      </li>

                      <li
                        style={{ marginTop: "4px", cursor: "pointer" }}
                        // When the div is clicked, the arrival state is toggled
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
                            // If the arrival state is true, show the up arrow, otherwise show the down arrow
                            icon={SR1expandArrival ? faAngleUp : faAngleDown}
                          />
                        </span>
                        {SR1expandArrival && (
                          // If the arrival state is true, show the arrival input fields
                          // e.stopPropagation() stops the click event from affecting parent elements.
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
                              {/* // The DatePicker component is used to select a date */}
                              {/* // DD MMM, YYYY is the format of the date */}
                              <DatePicker
                                format="DD MMM, YYYY"
                                // The value of the DatePicker is the check in date
                                value={SR1checkInDate}
                                // The onChange event handler updates the check in date
                                onChange={(value) => setSR1CheckInDate(value)}
                                style={{ marginRight: "1rem" }}
                              />
                              <div style={{ marginTop: "10px" }}>
                                Check Out:
                              </div>
                              <DatePicker
                                format="DD MMM, YYYY"
                                value={SR1checkOutDate}
                                // The onChange event handler updates the check out date
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
                        id="thirdFirstName"
                        name="thirdFirstName"
                        placeholder="Guest Name (Required)"
                        value={formik.values.thirdFirstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.thirdFirstName &&
                          Boolean(formik.errors.thirdFirstName)
                        }
                        helperText={
                          formik.touched.thirdFirstName &&
                          formik.errors.thirdFirstName
                        }
                        Input={{
                          classes: {
                            input: "input-field",
                          },
                        }}
                        style={{ marginRight: "1rem", width: "40%" }}
                      />
                      <TextField
                        id="thirdEmail"
                        name="thirdEmail"
                        placeholder="Guest Email (Required)"
                        value={formik.values.thirdEmail}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.thirdEmail &&
                          Boolean(formik.errors.thirdEmail)
                        }
                        helperText={
                          formik.touched.thirdEmail && formik.errors.thirdEmail
                        }
                        Input={{
                          classes: {
                            input: "input-field",
                          },
                        }}
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
                          icon={SR2showExtraFields ? faAngleUp : faPlus}
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

                <div>
                  <div
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: "normal",
                      color: "#1169E0",
                      marginLeft: "2.5rem",
                      marginBottom: "0.5rem",
                      marginTop: "0.3rem",
                    }}
                    onClick={() => setSR2IsOpen(!SR2isOpen)}
                  >
                    Additional Information{" "}
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
                        onClick={() =>
                          setSR2ExpandKidsRequests(!SR2expandKidsRequests)
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
                          Kids club request?{" "}
                          <FontAwesomeIcon
                            icon={
                              SR2expandKidsRequests ? faAngleUp : faAngleDown
                            }
                          />
                        </span>
                        {SR2expandKidsRequests && (
                          <div onClick={(e) => e.stopPropagation()}>
                            <p
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0rem",
                                fontSize: "11px",
                                fontWeight: "100",
                              }}
                            >
                              Please include any necessary information about
                              your child such as their name, age, and dietary
                              information, and we’ll forward it to the property.
                              Please note, your request is not guaranteed, and
                              if you don’t hear back from the property, you may
                              want to contact them directly to confirm.
                            </p>
                            <TextField
                              id="SR2kidsRequests"
                              name="SR2kidsRequests"
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
                              value={SR2kidsRequestMessage}
                              onChange={handleSR2KidsRequestChange}
                            />
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
                        id="fifthFirstName"
                        name="fifthFirstName"
                        placeholder="Guest Name (Required)"
                        value={formik.values.fifthFirstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.fifthFirstName &&
                          Boolean(formik.errors.fifthFirstName)
                        }
                        helperText={
                          formik.touched.fifthFirstName &&
                          formik.errors.fifthFirstName
                        }
                        Input={{
                          classes: {
                            input: "input-field",
                          },
                        }}
                        style={{ marginRight: "1rem", width: "40%" }}
                      />
                      <TextField
                        id="fifthEmail"
                        name="fifthEmail"
                        placeholder="Guest Email (Required)"
                        value={formik.values.fifthEmail}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.fifthEmail &&
                          Boolean(formik.errors.fifthEmail)
                        }
                        helperText={
                          formik.touched.fifthEmail && formik.errors.fifthEmail
                        }
                        Input={{
                          classes: {
                            input: "input-field",
                          },
                        }}
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
                          icon={SR3showExtraFields ? faAngleUp : faPlus}
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

                <div>
                  <div
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: "normal",
                      color: "#1169E0",
                      marginLeft: "2.5rem",
                      marginBottom: "0.5rem",
                      marginTop: "0.3rem",
                    }}
                    onClick={() => setSR3IsOpen(!SR3isOpen)}
                  >
                    Additional Information{" "}
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
                        onClick={() =>
                          setSR3ExpandKidsRequests(!SR3expandKidsRequests)
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
                          Kids club request?{" "}
                          <FontAwesomeIcon
                            icon={
                              SR3expandKidsRequests ? faAngleUp : faAngleDown
                            }
                          />
                        </span>
                        {SR3expandKidsRequests && (
                          <div onClick={(e) => e.stopPropagation()}>
                            <p
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0rem",
                                fontSize: "11px",
                                fontWeight: "100",
                              }}
                            >
                              Please include any necessary information about
                              your child such as their name, age, and dietary
                              information, and we’ll forward it to the property.
                              Please note, your request is not guaranteed, and
                              if you don’t hear back from the property, you may
                              want to contact them directly to confirm.
                            </p>
                            <TextField
                              id="SR3kidsRequests"
                              name="SR3kidsRequests"
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
                              value={SR3kidsRequestMessage}
                              onChange={handleSR3KidsRequestChange}
                            />
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
                    paddingBottom: "0px !important",
                    marginTop: "1.5rem",
                  }}
                >
                  <div style={{ width: "35%", marginRight: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1629078691977-dc51747c0263?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Deluxe Suite Image"
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
                <div>
                  <input
                    type="checkbox"
                    id="option2"
                    checked={selectedOption === 2}
                    onChange={() => handleCheckboxChange(2)}
                    disabled={selectedOption !== null && selectedOption !== 2}
                    style={{ marginBottom: "10px" }}
                  />
                  <label
                    htmlFor="option2"
                    style={{ fontWeight: "100", fontSize: "12px" }}
                  >
                    I will be staying in the Deluxe Suite
                  </label>
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
                        placeholder="Guest Name (Required)"
                        value={formik.values.seventhFirstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.seventhFirstName &&
                          Boolean(formik.errors.seventhFirstName)
                        }
                        helperText={
                          formik.touched.seventhFirstName &&
                          formik.errors.seventhFirstName
                        }
                        Input={{
                          classes: {
                            input: "input-field",
                          },
                        }}
                      />
                      <TextField
                        id="seventhEmail"
                        name="seventhEmail"
                        placeholder="Guest Email (Required)"
                        value={formik.values.seventhEmail}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.seventhEmail &&
                          Boolean(formik.errors.seventhEmail)
                        }
                        helperText={
                          formik.touched.seventhEmail &&
                          formik.errors.seventhEmail
                        }
                        Input={{
                          classes: {
                            input: "input-field",
                          },
                        }}
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
                          icon={DS1showExtraFields ? faAngleUp : faPlus}
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

                <div>
                  <div
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: "normal",
                      color: "#1169E0",
                      marginLeft: "2.5rem",
                      marginBottom: "0.5rem",
                      marginTop: "0.3rem",
                    }}
                    onClick={() => setDS1IsOpen(!DS1isOpen)}
                  >
                    Additional Information{" "}
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
                        onClick={() =>
                          setDS1ExpandKidsRequests(!DS1expandKidsRequests)
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
                          Kids club request?{" "}
                          <FontAwesomeIcon
                            icon={
                              DS1expandKidsRequests ? faAngleUp : faAngleDown
                            }
                          />
                        </span>
                        {DS1expandKidsRequests && (
                          <div onClick={(e) => e.stopPropagation()}>
                            <p
                              style={{
                                marginLeft: "3.5rem",
                                marginTop: "0rem",
                                fontSize: "11px",
                                fontWeight: "100",
                              }}
                            >
                              Please include any necessary information about
                              your child such as their name, age, and dietary
                              information, and we’ll forward it to the property.
                              Please note, your request is not guaranteed, and
                              if you don’t hear back from the property, you may
                              want to contact them directly to confirm.
                            </p>
                            <TextField
                              id="DS1kidsRequests"
                              name="DS1kidsRequests"
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
                              value={DS1kidsRequestMessage}
                              onChange={handleDS1KidsRequestChange}
                            />
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
                    paddingBottom: "0px !important",
                    marginTop: "1.5rem",
                  }}
                >
                  <div style={{ width: "35%", marginRight: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="King Deluxe Suite Image"
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
                <div>
                  {" "}
                  <input
                    type="checkbox"
                    id="option3"
                    checked={selectedOption === 3}
                    onChange={() => handleCheckboxChange(3)}
                    disabled={selectedOption !== null && selectedOption !== 3}
                    style={{ marginBottom: "10px" }}
                  />
                  <label
                    htmlFor="option3"
                    style={{ fontWeight: "100", fontSize: "12px" }}
                  >
                    I will be staying in the King Deluxe Suite
                  </label>
                </div>
                {/* //////////////////////////KING DELUXE SUITE ONE////////////////////////// */}
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
                            placeholder="Guest Name (Required)"
                            value={formik.values.eleventhFirstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                              formik.touched.eleventhFirstName &&
                              Boolean(formik.errors.eleventhFirstName)
                            }
                            helperText={
                              formik.touched.eleventhFirstName &&
                              formik.errors.eleventhFirstName
                            }
                            Input={{
                              classes: {
                                input: "input-field",
                              },
                            }}
                          />
                          <TextField
                            id="eleventhEmail"
                            name="eleventhEmail"
                            placeholder="Guest Email (Required)"
                            value={formik.values.eleventhEmail}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                              formik.touched.eleventhEmail &&
                              Boolean(formik.errors.eleventhEmail)
                            }
                            helperText={
                              formik.touched.eleventhEmail &&
                              formik.errors.eleventhEmail
                            }
                            Input={{
                              classes: {
                                input: "input-field",
                              },
                            }}
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
                              icon={KDS1showExtraFields ? faAngleUp : faPlus}
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

                    <div>
                      <div
                        style={{
                          textDecoration: "none",
                          cursor: "pointer",
                          fontSize: "12px",
                          fontWeight: "normal",
                          color: "#1169E0",
                          marginLeft: "2.5rem",
                          marginBottom: "0.5rem",
                          marginTop: "0rem",
                        }}
                        onClick={() => setKDS1IsOpen(!KDS1isOpen)}
                      >
                        Additional Information{" "}
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
                              setKDS1ExpandKidsRequests(!KDS1expandKidsRequests)
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
                              Kids club request?{" "}
                              <FontAwesomeIcon
                                icon={
                                  KDS1expandKidsRequests
                                    ? faAngleUp
                                    : faAngleDown
                                }
                              />
                            </span>
                            {KDS1expandKidsRequests && (
                              <div onClick={(e) => e.stopPropagation()}>
                                <p
                                  style={{
                                    marginLeft: "3.5rem",
                                    marginTop: "0rem",
                                    fontSize: "11px",
                                    fontWeight: "100",
                                  }}
                                >
                                  Please include any necessary information about
                                  your child such as their name, age, and
                                  dietary information, and we’ll forward it to
                                  the property. Please note, your request is not
                                  guaranteed, and if you don’t hear back from
                                  the property, you may want to contact them
                                  directly to confirm.
                                </p>
                                <TextField
                                  id="KDS1kidsRequests"
                                  name="KDS1kidsRequests"
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
                                  value={KDS1kidsRequestMessage}
                                  onChange={handleKDS1KidsRequestChange}
                                />
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

                    {/* //////////////////////////////////////////////FUNCTION ROOM////////////////////////////////////////////// */}
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
                        marginTop: "1.5rem",
                      }}
                    >
                      <div style={{ width: "35%", marginRight: "10px" }}>
                        <img
                          // img from unsplash
                          src="https://images.unsplash.com/photo-1620735692151-26a7e0748429?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Function Room"
                          style={{
                            width: "100%",
                            height: "135px",
                            borderTopLeftRadius: "13px",
                            borderBottomLeftRadius: "13px",
                            clipPath: "polygon(0 0, 100% 0, 82% 100%, 0% 100%)",
                            verticalAlign: "bottom",
                            objectFit: "cover",
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
                          Function Room
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
                              icon={faPersonChalkboard}
                              style={{
                                fontSize: "13px",
                                marginLeft: "2px",
                                marginRight: "4px",
                              }}
                            />{" "}
                            Audio-visual equipment
                          </li>
                          <li
                            style={{ marginBottom: "0px", marginLeft: "1px" }}
                          >
                            <FontAwesomeIcon
                              icon={faWifi}
                              style={{ marginRight: "6px" }}
                            />{" "}
                            High-speed Wi-Fi
                          </li>
                          <li
                            style={{
                              marginBottom: "0px",
                              fontSize: "11px",
                              marginLeft: "3px",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faChair}
                              style={{ marginRight: "11px" }}
                            />
                            Flexible seating arrangements
                          </li>
                          <li
                            style={{
                              marginBottom: "0px",
                              textAlign: "right",
                              marginRight: "10px",
                              fontSize: "16px",
                            }}
                          >
                            €500.00
                            <div style={{ fontSize: "11px", marginTop: "0px" }}>
                              per day
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p
                      style={{
                        marginTop: "0rem",
                        fontSize: "13px",
                        fontWeight: "100",
                      }}
                    >
                      Please include any necessary information about your event
                      and we’ll forward it to the property. Please note, if you
                      don’t hear back from the property, you may want to contact
                      them directly to confirm.
                    </p>
                    <TextField
                      // text field for function room requests
                      id="FRRequests"
                      name="FRRequests"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      InputProps={{ style: { fontSize: "12px" } }}
                      style={{
                        marginTop: "0rem",
                        width: "100%",
                      }}
                      value={FRRequestMessage}
                      onChange={handleFRRequestChange}
                    />

                    <hr />
                    {/* Submit Button */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: "1rem",
                      }}
                    >
                      <div
                        style={{
                          textAlign: "right",
                          fontWeight: "100",
                          fontSize: "11px",
                          marginRight: "15px",
                        }}
                      >
                        <i>
                          *<b>Note:</b> Once you confirm the booking, each guest
                          will receive an email requesting payment for their
                          share. Those without emails provided are assumed
                          covered by other room guests.*
                        </i>
                      </div>
                      {/* // if form is valid, link to card details page. */}
                      {!formik.isValid ||
                      // Check if the form is touched and has errors
                      Object.keys(formik.touched).length === 0 ||
                      // Check if the form has errors
                      Object.keys(formik.errors).length > 0 ? (
                        // If form is invalid, disable the button
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
                        // If form is valid, link to card details page
                        <Link to="/CardDetails" className="router-link">
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
                  </div>
                </div>
              </form>
            </Item>
          </div>

          {/* // Right component, which is breakdown of the booking information */}
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
        </div>{" "}
      </div>
    </>
  );
}
