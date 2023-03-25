import {
  Autocomplete,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
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
import { FixedSizeList } from "react-window";
import Virtualize from "./LargeDropDown";
import { useParams, useNavigate } from "react-router";
import { createUser, getUserDetails, updateUser } from "../../../../apis/user";
import { getAllCompanies } from "../../../../apis/company";
import { intersection, isEmpty } from "lodash";
import { postcodeValidator } from "postcode-validator";

const ITEM_SIZE = 36;
const LIST_HEIGHT = ITEM_SIZE * 8; // Show 8 items at a time

const countriesObj = Country.getAllCountries();
let isNewUser = true;

const getCities = (countryName) => {
  const country = countriesObj.find((item) => {
    return item.name === countryName;
  });
  const code = country ? country.isoCode : "DE";
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
  salution: Yup.string().required("Salutation is required"),
  title: Yup.string().required("Title is required"),
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  ...(isNewUser && {
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain at least 1 uppercase, 1 number, and 1 special character"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    company_id: Yup.string().required("Company is required"),
  }),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  street_no: Yup.string().required("Street address is required"),
  role: Yup.string().required("Role is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  homepage: Yup.string().test("is-valid-url", "Not a valid URL", isValidUrl),
  telephone: Yup.string().required("Telephone Number is required"),
  zip: Yup.string()
    .test( 'valid-zipcode',
    '${value} is not a valid ziptcode for the selected country',
    function (value) {
      const { country } = this.parent;
      return postcodeValidator(value, country);
    }
  )
    .required("Zip code is required"),
});

export const Usermanagementcreate = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const countriesArr = countriesObj.map((country) => {
    return { label: country.name, value: country.name };
  });

  const [selectedCountry, setSelectedCountry] = useState("DE");

  const initialValues = {
    salution: "",
    title: "",
    first_name: "",
    last_name: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    active: false,
    email: "",
    role: "",
    homepage: "",
    company_id: "",
    telephone: "",
    mobile: "",
    fax: "",
    country: "DE",
    mailbox: "",
    city: "",
    street_no: "",
    zip: ""
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

  const cities = useMemo(() => {
    const cities = getCities(values.country);
    
    values.city = cities[0] ? cities[0].value : "";
    return cities;
  }, [values.country]);

  useEffect(() => {
    setSelectedCountry(values.country);
  }, [values.country])

  const [userManagementCheck, setuserManagementCheck] = useState(false);
  // console.log("create props : ", props);
  // Handle Cancel Button

  const handleCancel = () => {
    navigate('/users')
  };

  const getUser = async () => {
    const {
      objData: { content },
    } = await getUserDetails(id);
      setuserManagementCheck(true)
    const role = intersection(content.myRole, [
      "expert",
      "clerk",
      "company-admin",
    ]);
    setValues({
      salution: content.salution ? content.salution : "",
      title: content.title ? content.title : "",
      first_name: content.first_name ? content.first_name : "",
      last_name: content.last_name ? content.last_name : "",
      birthday: content.birthday ? content.birthday : "",
      password: content.password ? content.password : "",
      active: content.active ? content.active : false,
      email: content.email ? content.email : "",
      role: !isEmpty(role) ? role.pop() : "",
      homepage: content.homepage ? content.homepage : "",
      company_id: content.company_id ? content.company_id : "",
      telephone: content.telephone ? content.telephone : "",
      mobile: content.mobile ? content.mobile : "",
      fax: content.fax ? content.fax : "",
      country: content.country ? content.country : "DE",
      mailbox: content.mailbox ? content.mailbox : "",
      city: content.city ? content.city : "",
      street_no: content.street_no ? content.street_no : "",
      zip: content.zipcode ? content.zipcode : "",
      status: content.status === "1" ? 1 : 0,
    });
    isNewUser = false;
  };

  // Handle Save
  const handleSave = (data) => {
    // console.log("companyid", companyid);
    // console.log("props", props.id);

    // If state is not empty then append state into formData otherwise append the props.editItem into formDate
    setTouched({
      ...Object.keys(initialValues).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {}
      ),
    });
    if (!isValid) {
      toast.error('Please fill required fields')
    }
    
    updateUser(id, values)
      .then((res) => {
        console.log(res);
        toast.success("update succesfully");
        setuserManagementCheck(!userManagementCheck);
        navigate('/users')
      })
      .catch((err) => toast.error('Error', err.message));
  };

  // Handle Create New Uuser
  const handleCreateUser = () => {
    setTouched({
      ...Object.keys(initialValues).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {}
      ),
    });
    if (!isValid) {
      toast.error('Please fill required fields')
    }
    // console.log("companyid", companyid);
    // const formData = new FormData();
    createUser(values)
      .then((res) => {
        toast.success("create succesfully");
        setuserManagementCheck(!userManagementCheck);
        navigate('/users')
      })
      .catch((err) => toast.error(err.message));
  };
  const [companylist, setCompanylist] = useState([]);
  const fetchListCompany = async () => {
    // api call

    let res = await getAllCompanies({ size: 5, page: 1 });
    setCompanylist(res.objData.data);
  };
  useEffect(() => {
    fetchListCompany();
  }, []);

  useEffect(() => {
    getUser();
  }, [id]);

  const handleCityChange = (e) => {
    console.log(e);
    setFieldValue("city", e.target.textContent);
  };

  return (
    <div>
      <Toolbar />
      <div className="flex justify-between items-center border-slate-400 ">
        <div className="flex items-center justify-center">
          <WestIcon onClick={() => navigate(-1)} className="backButton" />
          {userManagementCheck ? (
            <h1 className="text-base text-bold mb-0 ml-5">
              Edit User
            </h1>
          ) : (
            <h1 className="text-base text-bold mb-0 ml-5">Create User</h1>
          )}
        </div>

        <div className="w-[200px]">
          <FormControl fullWidth error={touched.role && errors.role}>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Role"
              value={values.role}
              onChange={(e) => setFieldValue("role", e.target.value)}
              onBlur={handleBlur}
            >
              <MenuItem value="expert">Experts</MenuItem>
              <MenuItem value="clerk">Clerks</MenuItem>
              <MenuItem value="company-admin">Company admin</MenuItem>
            </Select>
            <FormHelperText>{touched.role && errors.role}</FormHelperText>
          </FormControl>
        </div>
      </div>

      <hr />

      {/* General */}

      <section>
        <div className="generl">
          <p>General</p>
        </div>
        {isNewUser && (
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="Street Number">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Company</p>
                <div className="w-[200px]">
                  <FormControl
                    fullWidth
                    error={touched.company_id && errors.company_id}
                    helperText={touched.company_id && errors.company_id}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Select Company
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Select Company"
                      value={values.company_id}
                      onChange={(e) =>
                        setFieldValue("company_id", e.target.value)
                      }
                      onBlur={handleBlur}
                    >
                      {companylist.map(({ id, name }, index) => (
                        <MenuItem key={index} value={id} name={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>
                      {touched.company_id && errors.company_id}
                    </FormHelperText>
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
        )}
        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>Salution *</p>
              <FormControl
                fullWidth
                error={touched.salutation && errors.salutation}
                helperText={touched.salutation && errors.salutation}
              >
                <InputLabel id="demo-simple-salutation-select-label">
                  Salutation *
                </InputLabel>
                <Select
                  required
                  labelId="demo-simple-salutation-select-label"
                  label="Salutation *"
                  id="demo-simple-salutation--select"
                  value={values.salutation}
                  onChange={(e) => setFieldValue("salutation", e.target.value)}
                  onBlur={handleBlur}
                  error={touched.salutation && errors.salutation}
                  helperText={touched.salutation && errors.salutation}
                >
                  <MenuItem value="MR">MR</MenuItem>
                  <MenuItem value="MRS">MR's</MenuItem>
                  <MenuItem value="MS">MS</MenuItem>
                </Select>
                <FormHelperText>
                  {touched.salutation && errors.salutation}
                </FormHelperText>
              </FormControl>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="company">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>Title</p>

              <TextField
                fullWidth
                required
                label="Enter Title"
                id="title"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.title && errors.title}
                helperText={touched.title && errors.title}
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
                id="first_name"
                name="first_name"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.first_name && errors.first_name}
                helperText={touched.first_name && errors.first_name}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="company">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>Last Name</p>

              <TextField
                fullWidth
                label="Last Name"
                id="last_name"
                name="last_name"
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.last_name && errors.last_name}
                helperText={touched.last_name && errors.last_name}
                InputLabelProps={{
                  shrink: values.last_name && values.last_name.length !== 0,
                }}
              />
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="contact">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>Birthday</p>
              <TextField
                type="date"
                fullWidth
                id="birthday"
                name="birthday"
                value={values.birthday}
                onChange={handleChange}
                label="Birthday"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
          <div className=" col-lg-6 ">
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Status *
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={values.status}
                onChange={(e) => {
                  setFieldValue("active", e.target.value);
                }}
                onBlur={handleBlur}
                error={touched.active && errors.active}
                helperText={touched.active && errors.active}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Active"
                />
                <FormControlLabel
                  value="0"
                  control={<Radio />}
                  label="Not Active"
                />
              </RadioGroup>
            </FormControl>
          </div>
          {isNewUser && (
            <>
              <div className="col-lg-6 mt-5">
                <div className="Commerical">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                    Password
                  </p>

                  <TextField
                    type="password"
                    name="password"
                    fullWidth
                    label="Password"
                    id="0317258963"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && errors.password}
                    helperText={touched.password && errors.password}
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-5">
                <div className="Commerical">
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                    Confirm Password
                  </p>

                  <TextField
                    name="confirmPassword"
                    id="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.confirmPassword && errors.confirmPassword}
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                    fullWidth
                  />
                </div>
              </div>{" "}
            </>
          )}
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
                type="email"
                label="Email"
                id="email"
                name="email"
                required
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email}
                helperText={touched.email && errors.email}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="Mail">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>Homepage</p>

              <TextField
                fullWidth
                label="http//"
                id="homepage"
                name="homepage"
                value={values.homepage}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.homepage && errors.homepage}
                helperText={touched.homepage && errors.homepage}
              />
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="Telephone">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>Telephone</p>

              <MuiTelInput
                defaultCountry={selectedCountry}
                forceCallingCode
                id="telephone"
                name="telephone"
                label="Telephone"
                value={values.telephone}
                onChange={(e) => setFieldValue("telephone", e)}
                fullWidth
                required
                onBlur={handleBlur}
                error={touched.telephone && errors.telephone}
                helperText={touched.telephone && errors.telephone}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="Homepage">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>Mobile</p>
              <MuiTelInput
               defaultCountry={selectedCountry}
                id="mobile"
                name="mobile"
                label="Mobile"
                forceCallingCode
                value={values.mobile}
                onChange={(e) => setFieldValue("mobile", e)}
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
               defaultCountry={selectedCountry}
                forceCallingCode
                id="fax"
                name="fax"
                label="Fax"
                value={values.fax}
                onChange={(e) => setFieldValue("fax", e)}
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
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>Country</p>
              <FormControl
                fullWidth
                required
                error={Boolean(touched.country && errors.country)}
              >
                <InputLabel id="country-label">Country</InputLabel>
                <Select
                  id="country"
                  name="country"
                  labelId="country-label"
                  label="Country"
                  value={values.country}
                  error={Boolean(touched.country && errors.country)}
                  helperText={touched.country && errors.country}
                  required
                  onChange={(e) => {
                    setFieldValue("country", e.target.value);
                  }}
                >
                  {!!countriesArr?.length &&
                    countriesArr.map(({ label, value }) => (
                      <MenuItem key={value} value={value}>
                        {label}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="country">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>City</p>
              {/* <Autocomplete
                      id="zipCity"
                      name="zipCity"
                      labelId="city-label"
                      options={cities}
                      value={values.city}
                      error={Boolean(touched.city && errors.city)}
                      helperText={touched.city && errors.city}
                      required
                      onChange={(e) => {
                        setFieldValue("city", e.target.value);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select a city"
                          variant="outlined"
                        />
                      )}
                      ListboxComponent={VirtualizedList}
                      ListboxProps={{
                        ref: listboxRef,
                        style: { maxHeight: 200, overflow: 'auto' },
                      }}
                      renderOption={(option) => <div key={option.id}>{
                        option.key}</div>}
                    /> */}
              <Virtualize cities={cities} onChange={handleCityChange} />
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>Street No</p>

              <TextField
                fullWidth
                label="Street #"
                id="street_no"
                name="street_no"
                value={values.street_no}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.street_no && errors.street_no)}
                helperText={touched.street_no && errors.street_no}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="Street Number">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>Mailbox</p>

              <TextField
                fullWidth
                label="mailbox"
                id="mailbox"
                name="mailbox"
                value={values.mailbox}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="Homepage">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>Zip *</p>

              <TextField
                id="zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.zip && Boolean(errors.zip)}
                helperText={touched.zip && errors.zip}
                fullWidth
                label="Zip"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-between mt-5 mb -5">
        <Button className="text-black" onClick={handleCancel}>
          Cancel
        </Button>

        <Button
          className="text-white"
          style={{ backgroundColor: "#5A4A42" }}
          onClick={() => {
            if (id == undefined) {
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
  );
};
