import React from "react";
import { Formik, Form, Field } from "formik";
// Import the useNavigate hook
import { useNavigate } from "react-router-dom";

// Define the Search component
const Search = () => {
  // Use the navigate hook
  const navigate = useNavigate();

  return (
    <Formik
      // Set the initial values for the form fields
      initialValues={{
        location: "Dublin",
        checkIn: "2024-10-10",
        checkOut: "2024-10-12",
        adults: 18,
        children: 2,
      }}
      onSubmit={() => {
        // Navigate to the results page
        navigate("/results");
      }}
    >
      <Form className="search-form">
        <div className="search-form-group">
          <label htmlFor="location" className="search-field-label">
            Location:
          </label>
          <Field
            as="select"
            id="location"
            name="location"
            className="search-field"
          >
            <option value="Dublin">Dublin</option>
            <option value="Carlow">Carlow</option>
            <option value="Cavan">Cavan</option>
            <option value="Clare">Clare</option>
            <option value="Cork">Cork</option>
            <option value="Donegal">Donegal</option>
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
            <option value="Waterford">Waterford</option>
            <option value="Westmeath">Westmeath</option>
            <option value="Wexford">Wexford</option>
            <option value="Wicklow">Wicklow</option>{" "}
          </Field>
        </div>

        <div className="search-form-group">
          <label htmlFor="checkIn" className="search-field-label">
            Check In:
          </label>
          <Field
            type="date"
            id="checkIn"
            name="checkIn"
            className="search-field"
          />
        </div>

        <div className="search-form-group">
          <label htmlFor="checkOut" className="search-field-label">
            Check Out:
          </label>
          <Field
            type="date"
            id="checkOut"
            name="checkOut"
            className="search-field"
          />
        </div>

        <div className="search-form-group">
          <label htmlFor="adults" className="search-field-label">
            Adults:
          </label>
          <Field
            type="number"
            id="adults"
            name="adults"
            className="search-field"
          />
        </div>

        <div className="search-form-group">
          <label htmlFor="children" className="search-field-label">
            Children:
          </label>
          <Field
            type="number"
            id="children"
            name="children"
            className="search-field"
          />
        </div>

        <button type="submit" className="search-button">
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default Search;
