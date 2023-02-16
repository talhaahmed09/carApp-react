import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { Button } from "@mui/material";
import Usermanagment from "./Usermanagment";
import { Toolbar } from "@mui/material";
import AuthUser from "../../Auth/AuthUser";
import WestIcon from "@mui/icons-material/West";
import "../All.css";
import { MuiTelInput } from "mui-tel-input";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormLabel } from "react-bootstrap";
import { Country, City } from "country-state-city";

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

const validationSchema = Yup.object().shape({
  salutation: Yup.string().required("Salutation is required"),
  title: Yup.string().required("Title is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  password: Yup.string().required("Password is required"),
  country: Yup.string().required("Country is required"),
  zip: Yup.string().required("Zip code is required"),
  city: Yup.string().required("City is required"),
  street: Yup.string().required("Street address is required"),
  role: Yup.string().required("Role is required"),
  companyid: Yup.string().required("Company is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  homepage: Yup.string().test("is-valid-url", "Not a valid URL", isValidUrl),
});

export const Usermanagementcreate = (props) => {
  const { http } = AuthUser();
  const getToken = AuthUser();

  const countriesArr = countriesObj.map((country) => {
    return { label: country.name, value: country.name };
  });

  const cities = useMemo(() => getCities(values.country), [values.country]);

  const initialValues = {
    salutation: "",
    title: "",
    firstName: "",
    lastName: "",
    birthday: "",
    password: "",
    active: false,
    email: "",
    role: "",
    telephone: "",
    mobile: "",
    fax: "",
    country: "",
    zip: "",
    mailbox: "",
    city: "",
    street: "",
    design: "",
    letterhead: "",
    letterfoot: "",
    siteProfile: "",
    postalSender: "",
    senderAddress: "",
    senderName: "",
    contactDetails: "",
    signature: "",
    rubberStamp: "",
    smtpServer: "",
    smtpPort: "",
    username: "",
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
    validationSchema,
  });

  const [usermanagementCheck, setusermanagementCheck] = useState(false);
  // console.log("create props : ", props);
  const [companyName, setCompanyName] = useState("");

  // Fields States
  // const [fname, setfName] = useState("");
  // const [lname, setlName] = useState("");
  // const [birthday, setBirthday] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordConfirm, setPasswordConfirm] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [fax, setFax] = useState("");
  // const [country, setCountry] = useState("");
  // const [city, setCity] = useState("");
  // const [street, setStreet] = useState("");
  // const [mailbox, setMailbox] = useState("");
  // const [role, setRole] = useState("");
  // const [companyid, setCompanyid] = useState("");
  // const [salutation, setSalutation] = useState("");
  // const [title, setTitle] = useState("");
  // const [homepage, setHomepage] = useState("");
  // const [telephone, setTelephone] = useState("");

  // Handle Cancel Button

  const handleCancel = () => {
    setusermanagementCheck(true);
  };

  // Handle Save
  const handleSave = (data) => {
    const formData = new FormData();
    // console.log("companyid", companyid);
    // console.log("props", props.id);

    // If state is not empty then append state into formData otherwise append the props.editItem into formDate

    http
      .post(`/user/${props.editItem.id}`, formData)
      .then((res) => {
        console.log(res);
        toast.success("update succesfully");
        setusermanagementCheck(!usermanagementCheck);
      })
      .catch((err) => toast.error(err.message));
  };

  // Handle Create New Uuser
  const handleCreateUser = () => {
    // console.log("companyid", companyid);
    // const formData = new FormData();
    // http
    //   .post(`/user`, formData)
    //   .then((res) => {
    //     toast.success("create succesfully");
    //     setusermanagementCheck(!usermanagementCheck);
    //   })
    //   .catch((err) => toast.error(err.message));
  };
  const [companylist, setCompanylist] = useState([]);
  const fetchListCompany = async () => {
    // api call

    let res = await http.get("/company");
    setCompanylist(res.data.responseMessage);
  };
  React.useEffect(() => {
    fetchListCompany();
  }, []);

  return (
    <>
      {usermanagementCheck ? (
        <Usermanagment />
      ) : (
        <div>
          <Toolbar />

          <div className="flex justify-between items-center border-slate-400 ">
            <div className="flex items-center justify-center">
              <WestIcon
                onClick={() => setusermanagementCheck(!usermanagementCheck)}
                className="backButton"
              />
              {props && props.editItem ? (
                <h1 className="text-base text-bold mb-0 ml-5">
                  {props.editItem.first_name} {props.editItem.last_name}
                </h1>
              ) : (
                <h1 className="text-base text-bold mb-0 ml-5">Create User</h1>
              )}
            </div>

            <div className="w-[200px]">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.role}
                  onChange={handleChange}
                >
                  <MenuItem value="expert">Experts</MenuItem>
                  <MenuItem value="clerk">Clerks</MenuItem>
                  <MenuItem value="company-admin">Company admin</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <hr />

          {/* General */}

          <section>
            <div className="generl">
              <p>General</p>
            </div>
            <div className="row mt-5">
              <div className="col-lg-12">
                <div className="Street Number">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                    Company
                  </p>
                  <div className="w-[200px]">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select Company
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={values.companyid}
                        onChange={handleChange}
                      >
                        {companylist.map(({ id, name }, index) => (
                          <MenuItem key={index} value={id} name={name}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  {/* <TextField
                    fullWidth
                    label="company id"
                    id="Street No*"
                    defaultValue={
                      props.editItem == undefined
                        ? companyid
                        : props.editItem.company_id
                    }
                    onChange={(e) => setCompanyid(e.target.value)}
                  /> */}
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6">
                <div className="managing">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                    Salution
                  </p>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-salutation-select-label">
                      {" "}
                      Salutation{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-salutation-select-label"
                      id="demo-simple-salutation--select"
                      value={values.salutation}
                      onChange={handleChange}
                    >
                      <MenuItem value="MR">MR</MenuItem>
                      <MenuItem value="MRS">MR's</MenuItem>
                      <MenuItem value="MS">MS</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="company">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>Title</p>

                  <TextField
                    fullWidth
                    label="Enter Title"
                    id="0317258963"
                    value={values.title}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-6">
                <div className="managing">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                    First Name{" "}
                  </p>

                  <TextField
                    fullWidth
                    label="First Name"
                    id="fname"
                    value={values.fname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="company">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                    Last Name
                  </p>

                  <TextField
                    fullWidth
                    label="Last Name"
                    id="0317258963"
                    values={values.lname}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-6">
                <div className="contact">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                    Birthday
                  </p>

                  <TextField
                    type="date"
                    fullWidth
                    value={values.birthday}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="Commerical">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                    Password
                  </p>

                  <TextField
                    type="password"
                    fullWidth
                    label="Password"
                    id="0317258963"
                    value={values.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* <div className="col-lg-6 mt-5">
              <div className="Tax">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Password Confirmation
                </p>

                <TextField fullWidth label="confirm password" id="0317258963"  defaultValue = {props.editItem == undefined ? passwordConfirm : props.editItem.password_confirmation}
                onChange={(e) => setPasswordConfirm(e.target.value)} />
              </div>
            </div> */}
              <div className="STATUS d-flex mt-5">
                <p>Status: </p>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Status
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={values.gender}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="option1"
                      control={<Radio />}
                      label="Active"
                    />
                    <FormControlLabel
                      value="option2"
                      control={<Radio />}
                      label="Not Active"
                    />
                  </RadioGroup>
                </FormControl>
                {/* <div className="form-check form-check-inline ps-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    Active
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label className="form-check-label" for="inlineRadio2">
                    Not Active
                  </label>
                </div> */}
              </div>
            </div>
          </section>

          {/* Contact */}

          <section>
            <div className="Contactcent mt-5">
              <p>Contact</p>
            </div>

            <div className="row mt-5">
              <div className="col-lg-6">
                <div className="E-mail">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>E-mail</p>

                  <TextField
                    fullWidth
                    label="exam@gmail.com"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="Mail">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                    Homepage
                  </p>

                  <TextField
                    fullWidth
                    label="http//"
                    id="Enter your mail box"
                    value={values.homepage}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-6">
                <div className="Telephone">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                    Telephone
                  </p>

                  <MuiTelInput
                    defaultCountry="DE"
                    forceCallingCode
                    value={values.telephone}
                    onChange={handleChange}
                    fullWidth
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="Homepage">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>Mobile</p>
                  <MuiTelInput
                    defaultCountry="DE"
                    forceCallingCode
                    value={values.mobile}
                    onChange={handleChange}
                    fullWidth
                  />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-6">
                <div className="Telephone">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>Fax</p>
                  <MuiTelInput
                    defaultCountry="DE"
                    forceCallingCode
                    id="fax"
                    value={values.fax}
                    onChange={handleChange}
                    fullWidth
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Address */}

          <section>
            <div className="Address mt-5">
              <p>Address</p>
            </div>

            <div className="row mt-5">
              <div className="col-lg-6">
                <div className="Mail">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                    Country
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
                <div className="country">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>City</p>

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
                <div className="ZIP / City">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                    Street No
                  </p>

                  <TextField
                    fullWidth
                    label="street no."
                    id="City"
                    value={values.street}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="Street Number">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                    Mailbox
                  </p>

                  <TextField
                    fullWidth
                    label="mailbox"
                    id="Street No*"
                    value={values.mailbox}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* <div className="col-lg-6">
              <div className="Mail">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Role</p>

                <TextField fullWidth label="role" id="Enter your mail box"  defaultValue = {props.editItem == undefined ? role :props.editItem.myRole[0]}
                onChange={(e) => setRole(e.target.value)}/>
              </div>
            </div> */}
            </div>

            {/* <div className="row mt-5">
            <div className="col-lg-6">
              <div className="Street Number">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Company id
                </p>

                <TextField fullWidth label="company id" id="Street No*"   defaultValue = {props.editItem == undefined ? companyid :props.editItem.company_id}
                onChange={(e) => setCompanyid(e.target.value)}/>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Mail">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Role</p>

                <TextField fullWidth label="role" id="Enter your mail box"  defaultValue = {props.editItem == undefined ? role :props.editItem.myRole[0]}
                onChange={(e) => setRole(e.target.value)}/>
              </div>
            </div>

        
          </div> */}
          </section>

          <div className="flex justify-between mt-5 mb -5">
            <Button className="text-black" onClick={handleCancel}>
              Cancel
            </Button>

            <Button
              className="text-white"
              style={{ backgroundColor: "#5A4A42" }}
              onClick={() => {
                if (props.editItem == undefined) {
                  handleCreateUser();
                  return;
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
