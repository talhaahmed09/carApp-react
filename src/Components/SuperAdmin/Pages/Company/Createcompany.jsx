import { OutlinedInput, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Company } from "./Company";
import { Toolbar } from "@mui/material";
import AuthUser from "../../Auth/AuthUser";
import WestIcon from "@mui/icons-material/West";
import "../All.css";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { matchIsValidTel, MuiTelInput } from "mui-tel-input";
import { Country, City } from "country-state-city";
import { useMemo } from "react";

const countriesObj = Country.getAllCountries();
const getCities = (countryName) => {
  const code = countriesObj.find((item) => {
    return item.name === countryName;
  }).isoCode;
  console.log("called");
  const cities = City.getCitiesOfCountry(code);
  return cities.map((city) => {
    return { label: city.name, value: city.name };
  });
};
const isValidUrl = (value) => {
  try {
    new URL(value);
    return true;
  } catch (_) {
    return false;
  }
};

const formValidationSchema = Yup.object().shape({
  name: Yup.string().required("Company Name is required"),
  director: Yup.string().required("Managing Director is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Telephone Number is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  // city: Yup.string().required("City is required"),
  street_no: Yup.string().required("Street is required"),
  homepage: Yup.string().test("is-valid-url", "Not a valid URL", isValidUrl),
});

export const Createcompany = (props) => {
  const { http } = AuthUser();

  const countriesArr = countriesObj.map((country) => {
    return { label: country.name, value: country.name };
  });

  useEffect(() => {
    console.log(props);
    if (typeof props.editItem !== "undefined") {
      setValues({
        name: props.editItem.name,
        director: props.editItem.director,
        person: props.editItem.person,
        register: props.editItem.register,
        tax_number: props.editItem.taxNumber,
        email: props.editItem.email,
        homepage: props.editItem.homepage,
        phone: props.editItem.phone,
        mobile: props.editItem.mobile,
        fax: props.editItem.fax,
        country: props.editItem.country,
        city: props.editItem.zipCity,
        street_no: props.editItem.streetNo,
      });
    } else {
      console.log("My prop is not present");
    }
  }, [props]);

  const [companyCheck, setCompanyCheck] = useState(false);
  const initialValues = {
    name: "",
    director: "",
    person: "",
    register: "",
    tax_number: "",
    email: "",
    homepage: "",
    phone: "",
    mobile: "",
    fax: "",
    country: "Germany",
    city: "",
    street_no: "",
  };

  const {
    values,
    handleChange,
    setFieldValue,
    setTouched,
    isValid,
    handleBlur,
    touched,
    setValues,
    errors,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: formValidationSchema,
  });

  const cities = useMemo(() => getCities(values.country), [values.country]);
  // Handle Cancel Button
  const handleSave = () => {
    setTouched({
      ...Object.keys(initialValues).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {}
      ),
    });
    if (!isValid) {
      console.log(values);
      return console.log("Hello dumb mf");
    }
    console.log(values, touched);
    http
      .post(`/company`, values)
      .then((res) => {
        toast.success("create sucessfully");
        setCompanyCheck(!companyCheck);
      })
      .catch((err) => toast.error(err.message));
  };
  const handleCancel = () => {
    setCompanyCheck(!companyCheck);
  };

  // Handle Create company

  // Handle Edit Company
  const handleEditCompany = () => {
    http
      .post(`company/${props.editItem.id}`, values)
      .then((res) => {
        toast.success("update successfully");
        setCompanyCheck(!companyCheck);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      {companyCheck ? (
        <Company />
      ) : (
        <div>
          <Toolbar />

          <div className="flex border-slate-400 ">
            <WestIcon
              onClick={() => setCompanyCheck(!companyCheck)}
              className="backButton"
            />
            {props && props.editItem ? (
              <h1 className="text-base text-bold mb-0 ml-5">
                {props.editItem.name}
              </h1>
            ) : (
              <h1 className="text-base text-bold mb-0 ml-5">Create Company</h1>
            )}
          </div>

          <hr />

          <div className="company">
            {props && props.editItem ? (
              <p>Edit Company</p>
            ) : (
              <p>Create Company</p>
            )}
          </div>

          <div className="generl">
            <p>General</p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Company Name *
                </p>

                <TextField
                  required
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                  label="Enter Company Name"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Managing Director *
                </p>

                <TextField
                  required
                  id="director"
                  name="director"
                  value={values.director}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  error={Boolean(touched.director && errors.director)}
                  helperText={touched.director && errors.director}
                  label="Enter your position"
                />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="contact">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Contact person
                </p>

                <TextField
                  value={values.person}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  label="Enter your name"
                  id="person"
                  name="person"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Commerical">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Commerical Register
                </p>

                <TextField
                  id="register"
                  name="register"
                  value={values.register}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  label="Enter your text"
                />
              </div>
            </div>

            <div className="col-lg-6 mt-5">
              <div className="Tax">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Tax number
                </p>

                <TextField
                  id="tax_number"
                  name="tax_number"
                  value={values.tax_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  label="Enter your tax no"
                />
              </div>
            </div>
          </div>

          <div className="Contactcent mt-5">
            <p>Contact</p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="E-mail">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>E-mail *</p>

                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Homepage">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Homepage *
                </p>

                <TextField
                  id="homepage"
                  name="homepage"
                  value={values.homepage}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.homepage && Boolean(errors.homepage)}
                  helperText={touched.homepage && errors.homepage}
                  fullWidth
                  label="http://"
                />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="Telephone">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Telephone *
                </p>
                <MuiTelInput
                  defaultCountry="DE"
                  forceCallingCode
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={(e) => {
                    setFieldValue("phone", e);
                    matchIsValidTel(e);
                  }}
                  onBlur={handleBlur}
                  fullWidth
                  required
                  error={Boolean(touched.phone && errors.phone)}
                  helperText={touched.phone && errors.phone}
                  label="Telephone"
                  inputProps={{ maxLength: 13 }}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Homepage">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Mobile</p>
                <MuiTelInput
                  defaultCountry="DE"
                  forceCallingCode
                  id="mobile"
                  name="mobile"
                  value={values.mobile}
                  onChange={(e) => {
                    setFieldValue("mobile", e);
                    matchIsValidTel(e);
                  }}
                  onBlur={handleBlur}
                  fullWidth
                  required
                  error={Boolean(touched.mobile && errors.mobile)}
                  helperText={touched.mobile && errors.mobile}
                  label="Mobile"
                  inputProps={{ maxLength: 13 }}
                />
              </div>
            </div>

            <div className="col-lg-6 mt-5">
              <div className="Homepage">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Fax</p>
                <MuiTelInput
                  defaultCountry="DE"
                  forceCallingCode
                  id="fax"
                  name="fax"
                  value={values.fax}
                  onChange={(e) => {
                    setFieldValue("fax", e);
                    matchIsValidTel(e);
                  }}
                  onBlur={handleBlur}
                  fullWidth
                  required
                  error={Boolean(touched.mobile && errors.mobile)}
                  helperText={touched.mobile && errors.mobile}
                  label="Enter Fax"
                  inputProps={{ maxLength: 13 }}
                />
              </div>
            </div>
          </div>

          <div className="Address mt-5">
            <p>Address</p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="country">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Country *
                </p>
                <select
                  id="country"
                  name="country"
                  labelId="country"
                  value={values.country}
                  onChange={(e) => {
                    setFieldValue("country", e.target.value);
                  }}
                  label="Country"
                  className="form-select form-select-lg mb-0 w-100"
                  required
                  error={Boolean(touched.country && errors.country)}
                  helperText={touched.country && errors.country}
                >
                  {!!countriesArr?.length &&
                    countriesArr.map(({ label, value }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="ZIP / City">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>City *</p>
                <select
                  id="zipCity"
                  name="zipCity"
                  labelId="zipCity"
                  value={values.city}
                  onChange={(e) => {
                    setFieldValue("city", e.target.value);
                  }}
                  label="City"
                  required
                  input={<OutlinedInput label="Name" />}
                  className="form-select form-select-lg mb-0 w-100"
                  error={Boolean(touched.city && errors.city)}
                  helperText={touched.city && errors.city}
                >
                  {cities.map(({ label, value }, id) => (
                    <option key={id} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="Street Number">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Street Number *
                </p>

                <TextField
                  id="street_no"
                  name="street_no"
                  value={values.street_no}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  required
                  error={Boolean(touched.street_no && errors.street_no)}
                  helperText={touched.street_no && errors.street_no}
                  label="Street No"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Mail">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Mailbox</p>

                <TextField
                  id="mailbox"
                  name="mailbox"
                  value={values.mailbox}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  error={Boolean(touched.mailbox && errors.mailbox)}
                  helperText={touched.mailbox && errors.mailbox}
                  label="Enter your mail box"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-5 mb -5">
            <Button className="text-black" onClick={handleCancel}>
              Cancel
            </Button>

            <Button
              className="text-white"
              style={{ backgroundColor: "#5A4A42" }}
              onClick={() => {
                if (props.editItem !== undefined) {
                  handleEditCompany();
                }
                handleSave();
              }}
            >
              Save
            </Button>
          </div>
        </div>
      )}
    </>
  );
};