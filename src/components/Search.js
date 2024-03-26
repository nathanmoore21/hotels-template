import React, { useState, useEffect, useRef } from "react";
import { Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLocationDot,
  faCalendar,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-multi-date-picker";

const Search = () => {
  const navigate = useNavigate();

  const today = new Date();
  const formattedToday = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const [dateRange, setDateRange] = useState(
    localStorage.getItem("searchStartDate") &&
      localStorage.getItem("searchEndDate")
      ? `${localStorage.getItem("searchStartDate")} to ${localStorage.getItem("searchEndDate")}`
      : formattedToday
  );

  const [showTravellersOptions, setShowTravellersOptions] = useState(false);
  const [adults, setAdults] = useState(
    parseInt(localStorage.getItem("searchAdults"), 10) || 2
  );
  const [children, setChildren] = useState(
    parseInt(localStorage.getItem("searchChildren"), 10) || 0
  );
  const travellersRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        travellersRef.current &&
        !travellersRef.current.contains(event.target)
      ) {
        setShowTravellersOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTravellersClick = () => {
    setShowTravellersOptions(!showTravellersOptions);
  };

  const handleAddAdult = (event) => {
    event.stopPropagation();
    setAdults(adults + 1);
  };

  const handleRemoveAdult = (event) => {
    event.stopPropagation();
    if (adults > 1) {
      setAdults(adults - 1);
    }
  };

  const handleAddChild = (event) => {
    event.stopPropagation();
    setChildren(children + 1);
  };

  const handleRemoveChild = (event) => {
    event.stopPropagation();
    if (children > 0) {
      setChildren(children - 1);
    }
  };

  const handleSubmit = (values) => {
    const startDate = dateRange[0].format("DD MMM YYYY");
    const endDate = dateRange[1].format("DD MMM YYYY");

    localStorage.setItem("searchStartDate", startDate);
    localStorage.setItem("searchEndDate", endDate);
    localStorage.setItem("searchAdults", adults);
    localStorage.setItem("searchChildren", children);
    localStorage.setItem("searchLocation", values.location);
    navigate("/results");
  };

  return (
    <Formik
      initialValues={{
        location: localStorage.getItem("searchLocation") || "Going to",
        travellers: 18,
      }}
      onSubmit={handleSubmit}
    >
      {() => (
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
              label="Location"
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
              <option disabled selected>
                Going to
              </option>

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
          </div>

          <div
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

            <DatePicker
              range
              dateSeparator=" to "
              id="dateRange"
              value={dateRange}
              onChange={setDateRange}
              format="DD MMM YYYY"
              className="search-field"
              style={{
                width: "138%",
                minWidth: "15rem",
                height: "42px",
                border: "1px solid #818494",
                backgroundColor: "transparent",
                borderRadius: "9px",
                paddingLeft: "30px",
                fontSize: "15px",
              }}
            />
          </div>

          <div
            className="search-form-group"
            style={{
              position: "relative",
              flex: "1",
            }}
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
              {`${adults} Adult${adults !== 1 ? "s" : ""}, ${children} ${children === 0 ? "Children" : children === 1 ? "Child" : "Children"}`}
            </div>

            {showTravellersOptions && (
              <div
                className="travellers-options"
                ref={travellersRef}
                style={{
                  width: "100%",
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  left: 0,
                  backgroundColor: "#ffffff",
                  padding: "20px",
                  // border: "2px solid #818494",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
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
                        transition: "background-color 0.3s, border-color 0.3s",
                      }}
                      onClick={handleRemoveAdult}
                      onMouseOver={(e) => {
                        e.target.style.borderColor = "#1169E0";
                        e.target.style.backgroundColor = "#ECF4FD";
                      }}
                      onMouseOut={(e) => {
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
                        transition: "background-color 0.3s, border-color 0.3s",
                      }}
                      onClick={handleAddAdult}
                      onMouseOver={(e) => {
                        e.target.style.borderColor = "#1169E0";
                        e.target.style.backgroundColor = "#ECF4FD";
                      }}
                      onMouseOut={(e) => {
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
                        transition: "background-color 0.3s, border-color 0.3s",
                      }}
                      onClick={handleRemoveChild}
                      onMouseOver={(e) => {
                        e.target.style.borderColor = "#1169E0";
                        e.target.style.backgroundColor = "#ECF4FD";
                      }}
                      onMouseOut={(e) => {
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
                        transition: "background-color 0.3s, border-color 0.3s",
                      }}
                      onClick={handleAddChild}
                      onMouseOver={(e) => {
                        e.target.style.borderColor = "#1169E0";
                        e.target.style.backgroundColor = "#ECF4FD";
                      }}
                      onMouseOut={(e) => {
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
          >
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Search;
