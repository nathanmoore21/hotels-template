import React, { useState, useRef, useEffect } from "react"; // Import the useState, useEffect, and useRef hooks
import { Formik, Form, Field, ErrorMessage } from "formik"; // Import the Formik components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faUser,
  faLocationDot,
  faCalendar,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons"; // Import the FontAwesome icons
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import DatePicker from "react-multi-date-picker"; // Import the DatePicker component

// Create a functional component called Search
const Search = () => {
  // navigation function
  const navigate = useNavigate();
  // create state for isError and setIsError and set it to false
  const [isError, setIsError] = useState(false);
  // create a new Date object called today
  const today = new Date();
  // format the today date to a string
  const formattedToday = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // create state for dateRange and setDateRange and set it to the searchStartDate and searchEndDate from localStorage or the formattedToday date
  const [dateRange, setDateRange] = useState(
    // if searchStartDate and searchEndDate are in localStorage, set the dateRange to the searchStartDate and searchEndDate
    localStorage.getItem("searchStartDate") &&
      localStorage.getItem("searchEndDate")
      ? `${localStorage.getItem("searchStartDate")} to ${localStorage.getItem("searchEndDate")}`
      : // else set the dateRange to the formattedToday date
        formattedToday
  );

  // create state for showTravellersOptions and setShowTravellersOptions and set it to false
  const [showTravellersOptions, setShowTravellersOptions] = useState(false);
  // create state for adults and setAdults
  const [adults, setAdults] = useState(
    // if searchAdults is in localStorage, set the adults to the searchAdults
    // 10 is the radix parameter, which specifies the base of the number (normal number)
    // || 2 is the default value if searchAdults is not in localStorage
    parseInt(localStorage.getItem("searchAdults"), 10) || 2
  );
  const [children, setChildren] = useState(
    parseInt(localStorage.getItem("searchChildren"), 10) || 0
  );
  // create a ref for travellersRef and set it to null
  const travellersRef = useRef(null);

  // useEffect hook to handle click outside of the travellers options
  // useEffect(() => {
  //   // (event) is the event object
  //   const handleClickOutside = (event) => {
  //     // if travellersRef.current is not null and the event target is not inside the travellersRef.current
  //     // then setShowTravellersOptions to false
  //     // if the event target is inside the travellersRef.current, then do nothing
  //     if (
  //       travellersRef.current &&
  //       !travellersRef.current.contains(event.target)
  //     ) {
  //       setShowTravellersOptions(false);
  //     }
  //   };
  //   // Add event listener for mousedown event, which triggers when the mouse button is pressed down
  //   // document.addEventListener("mousedown", handleClickOutside);

  //   // return () => {
  //   //   document.removeEventListener("mousedown", handleClickOutside);
  //   // };
  // }, []);

  // handleTravellersClick function to toggle the showTravellersOptions state
  const handleTravellersClick = () => {
    // toggle the showTravellersOptions state
    setShowTravellersOptions(!showTravellersOptions);
  };

  // handleAddAdult function to increment the adults state
  const handleAddAdult = (event) => {
    // stop the dropdown from closing
    event.stopPropagation();
    // increment the adults state
    setAdults(adults + 1);
  };

  // handleRemoveAdult function to decrement the adults state
  const handleRemoveAdult = (event) => {
    // stop the dropdown from closing
    event.stopPropagation();
    // if adults is greater than 1, then decrement the adults state
    if (adults > 1) {
      // decrement the adults state
      setAdults(adults - 1);
    }
  };

  // handleAddChild function to increment the children state
  const handleAddChild = (event) => {
    // stop the dropdown from closing
    event.stopPropagation();
    // increment the children state
    setChildren(children + 1);
  };

  // handleRemoveChild function to decrement the children state
  const handleRemoveChild = (event) => {
    // stop the dropdown from closing
    event.stopPropagation();
    // if children is greater than 0, then decrement the children state
    if (children > 0) {
      // decrement the children state
      setChildren(children - 1);
    }
  };

  // handleSubmit function to handle the form submission
  const handleSubmit = (values, { setSubmitting }) => {
    // set isError to false
    setIsError(false);

    // if there's no location or dateRange or the dateRange length is not 2
    if (
      values.location === "Going to" ||
      !dateRange ||
      dateRange.length !== 2
    ) {
      // set isError to true
      setIsError(true);
      // setSubmitting to false
      setSubmitting(false);
      // return to prevent form submission
      return;
    }

    // set the StartDate and EndDate to the dateRange
    // [0] is the first date in the dateRange and [1] is the second date in the dateRange
    const startDate = dateRange[0].format("DD MMM YYYY");
    const endDate = dateRange[1].format("DD MMM YYYY");

    // set the searchStartDate, searchEndDate, searchAdults, searchChildren, and searchLocation in localStorage
    localStorage.setItem("searchStartDate", startDate);
    localStorage.setItem("searchEndDate", endDate);
    localStorage.setItem("searchAdults", adults);
    localStorage.setItem("searchChildren", children);
    localStorage.setItem("searchLocation", values.location);
    navigate("/results");
  };
  
  return (
    <>
      <Formik
        initialValues={{
          // get the searchLocation from localStorage or set it to "Going to"
          location: localStorage.getItem("searchLocation") || "Going to",
          // set the initial values for the form
          travellers: 0,
        }}
        // onSubmit function to handle the form submission
        onSubmit={handleSubmit}
      >
        {/* // isSubmitting is a boolean that is true when the form is being submitted */}
        {({ isSubmitting }) => (
          <Form style={{ display: "flex", alignItems: "center" }}>
            <div
              className="search-form-group"
              style={{
                position: "relative",
                flex: "1",
                marginRight: "10px",
              }}
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#191E3A",
                }}
              />
              <Field
                as="select"
                // label for the location field
                label="Location"
                // id for the location field
                id="location"
                name="location"
                className="search-field"
                style={{
                  paddingLeft: "30px",
                  fontSize: "15px",
                  height: "42px",
                  border: "1px solid #818494",
                  backgroundColor: "transparent",
                  borderRadius: "9px",
                  width: "100%",
                }}
              >
                {/* // the disabled option for the location field is 'going to' */}
                <option disabled selected>
                  Going to
                </option>

                {/* // options for locations */}
                <option value="Antrim">Antrim</option>
                <option value="Armagh">Armagh</option>
                <option value="Carlow">Carlow</option>
                <option value="Cavan">Cavan</option>
                <option value="Clare">Clare</option>
                <option value="Cork">Cork</option>
                <option value="Derry">Derry</option>
                <option value="Donegal">Donegal</option>
                <option value="Down">Down</option>
                <option value="Dublin">Dublin</option>
                <option value="Fermanagh">Fermanagh</option>
                <option value="Galway">Galway</option>
                <option value="Kerry">Kerry</option>
                <option value="Kildare">Kildare</option>
                <option value="Kilkenny">Kilkenny</option>
                <option value="Laois">Laois</option>
                <option value="Leitrim">Leitrim</option>
                <option value="Limerick">Limerick</option>
                <option value="Longford">Longford</option>
                <option value="Louth">Louth</option>
                <option value="Mayo">Mayo</option>
                <option value="Meath">Meath</option>
                <option value="Monaghan">Monaghan</option>
                <option value="Offaly">Offaly</option>
                <option value="Roscommon">Roscommon</option>
                <option value="Sligo">Sligo</option>
                <option value="Tipperary">Tipperary</option>
                <option value="Tyrone">Tyrone</option>
                <option value="Waterford">Waterford</option>
                <option value="Westmeath">Westmeath</option>
                <option value="Wexford">Wexford</option>
                <option value="Wicklow">Wicklow</option>
              </Field>
              <ErrorMessage
                name="location"
                component="div"
                className="error-message"
              />
            </div>

            <div
              //  dateRange field
              className="search-form-group"
              style={{
                position: "relative",
                flex: "1",
                marginRight: "10px",
              }}
            >
              <FontAwesomeIcon
                icon={faCalendar}
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#191E3A",
                }}
              />
              {/* // DatePicker component */}
              <div
                style={{
                  Width: "100%",
                }}
              >
                <DatePicker
                  range
                  dateSeparator=" to "
                  value={dateRange}
                  onChange={setDateRange}
                  format="DD MMM YYYY"
                  style={{
                    width: "100% !important",
                    height: "42px",
                    border: "1px solid #818494",
                    backgroundColor: "transparent",
                    borderRadius: "9px",
                    paddingLeft: "30px",
                    fontSize: "15px",
                  }}
                  // minDate={new Date()}
                  // renderInputValue={({ startDate, endDate }) => {
                  //   if (!startDate || !endDate) return "";
                  //   return `${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`;
                  // }}
                />
              </div>

              {/* // error message for the dateRange field */}
              <ErrorMessage
                name="dateRange"
                component="div"
                className="error-message"
              />
            </div>

            <div
              className="search-form-group"
              style={{
                position: "relative",
                flex: "1",
              }}
              // onClick event for the travellers field
              onClick={handleTravellersClick}
            >
              <FontAwesomeIcon
                icon={faUser}
                style={{
                  fontSize: "15px",
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#191E3A",
                }}
              />
              <div
                className="search-field"
                style={{
                  fontSize: "15px",
                  paddingLeft: "30px",
                  height: "42px",
                  border: "1px solid #818494",
                  backgroundColor: "transparent",
                  borderRadius: "9px",
                  width: "100%",
                }}
              >
                {/* //if showTravellersOptions is true, then display the travellers options */}
                {/* // else display the number of adults and children */}
                {/* // if adults is not equal to 1, then display "Adults" */}
                {/* // if children is equal to 0/, then display "Children" */}
                {/* // else if children is equal to 1, then display "Child" */}
                {`${adults} Adult${adults !== 1 ? "s" : ""}, ${children} ${children === 0 ? "Children" : children === 1 ? "Child" : "Children"}`}
              </div>

              {/* // show the travellers options */}
              {showTravellersOptions && (
                <div
                  className="travellers-options"
                  ref={travellersRef}
                  style={{
                    width: "100%",
                    position: "absolute",
                    // top is 100% + 10px
                    top: "calc(100% + 10px)",
                    left: 0,
                    backgroundColor: "#ffffff",
                    padding: "20px",
                    borderRadius: "10px",
                    // add shadow to the dropdown
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    // z-index is 9999 which is for the dropdown to be on top of everything
                    zIndex: 9999,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ marginRight: "auto", fontSize: "15px" }}>
                      Adults
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      <div
                        style={{
                          marginRight: "10px",
                          fontSize: "15px",
                          display: "inline-block",
                          borderRadius: "50%",
                          border: "1px solid #818494",
                          width: "30px",
                          height: "30px",
                          textAlign: "center",
                          lineHeight: "30px",
                          cursor: "pointer",
                          // transition for the background-color and border-color
                          transition:
                            "background-color 0.3s, border-color 0.3s",
                        }}
                        // onClick event for the remove adult button
                        onClick={handleRemoveAdult}
                        onMouseOver={(e) => {
                          // change the border color and background color when the mouse is over the button
                          e.target.style.borderColor = "#1169E0";
                          e.target.style.backgroundColor = "#ECF4FD";
                        }}
                        onMouseOut={(e) => {
                          // change the border color and background color when the mouse is out of the button
                          e.target.style.borderColor = "#818494";
                          e.target.style.backgroundColor = "transparent";
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faMinus}
                          style={{ pointerEvents: "none" }}
                        />
                      </div>
                      <div style={{ marginRight: "10px", fontSize: "15px" }}>
                        {adults}
                      </div>
                      <div
                        style={{
                          marginRight: "10px",
                          fontSize: "15px",
                          display: "inline-block",
                          borderRadius: "50%",
                          border: "1px solid #818494",
                          width: "30px",
                          height: "30px",
                          textAlign: "center",
                          lineHeight: "30px",
                          cursor: "pointer",
                          // transition for the background-color and border-color
                          transition:
                            "background-color 0.3s, border-color 0.3s",
                        }}
                        // onClick event for the add adult button
                        onClick={handleAddAdult}
                        onMouseOver={(e) => {
                          // change the border color and background color when the mouse is over the button
                          e.target.style.borderColor = "#1169E0";
                          e.target.style.backgroundColor = "#ECF4FD";
                        }}
                        onMouseOut={(e) => {
                          // change the border color and background color when the mouse is out of the button
                          e.target.style.borderColor = "#818494";
                          e.target.style.backgroundColor = "transparent";
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faPlus}
                          style={{ pointerEvents: "none" }}
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "5px",
                    }}
                  >
                    <div style={{ marginRight: "auto", fontSize: "15px" }}>
                      Children
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      <div
                        style={{
                          marginRight: "10px",
                          fontSize: "15px",
                          display: "inline-block",
                          borderRadius: "50%",
                          border: "1px solid #818494",
                          width: "30px",
                          height: "30px",
                          textAlign: "center",
                          lineHeight: "30px",
                          cursor: "pointer",
                          transition:
                            "background-color 0.3s, border-color 0.3s",
                        }}
                        // onClick event for the remove child button
                        onClick={handleRemoveChild}
                        onMouseOver={(e) => {
                          // change the border color and background color when the mouse is over the button
                          e.target.style.borderColor = "#1169E0";
                          e.target.style.backgroundColor = "#ECF4FD";
                        }}
                        onMouseOut={(e) => {
                          // change the border color and background color when the mouse is out of the button
                          e.target.style.borderColor = "#818494";
                          e.target.style.backgroundColor = "transparent";
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faMinus}
                          style={{ pointerEvents: "none" }}
                        />
                      </div>
                      <div style={{ marginRight: "10px", fontSize: "15px" }}>
                        {children}
                      </div>
                      <div
                        style={{
                          marginRight: "10px",
                          fontSize: "15px",
                          display: "inline-block",
                          borderRadius: "50%",
                          border: "1px solid #818494",
                          width: "30px",
                          height: "30px",
                          textAlign: "center",
                          lineHeight: "30px",
                          cursor: "pointer",
                          // transition for the background-color and border-color
                          transition:
                            "background-color 0.3s, border-color 0.3s",
                        }}
                        // onClick event for the add child button
                        onClick={handleAddChild}
                        onMouseOver={(e) => {
                          // change the border color and background color when the mouse is over the button
                          e.target.style.borderColor = "#1169E0";
                          e.target.style.backgroundColor = "#ECF4FD";
                        }}
                        onMouseOut={(e) => {
                          // change the border color and background color when the mouse is out of the button
                          e.target.style.borderColor = "#818494";
                          e.target.style.backgroundColor = "transparent";
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faPlus}
                          style={{ pointerEvents: "none" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="search-button"
              style={{
                height: "42px",
                width: "100px",
                borderRadius: "20px",
                marginTop: "3px",
              }}
              disabled={isSubmitting}
            >
              Search
            </button>
          </Form>
        )}
      </Formik>
      {/* // if there is an error in the form, then display the error message */}
      {isError && (
        <div
          className="error-message"
          style={{ color: "#E71E42", fontWeight: "bold", fontSize: "14px" }}
        >
          Please ensure all fields are selected.
        </div>
      )}
    </>
  );
};

export default Search;
