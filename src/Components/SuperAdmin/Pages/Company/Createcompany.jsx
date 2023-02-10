import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { Company } from "./Company";
import { Toolbar } from "@mui/material";
import AuthUser from "../../Auth/AuthUser";
import WestIcon from "@mui/icons-material/West";
import "../All.css";
import { toast } from "react-toastify";
import { useFormik } from "formik";

export const Createcompany = (props) => {
  const { http } = AuthUser();

  const [companyCheck, setCompanyCheck] = useState(false);

  // Fields States
  // const [name, setName] = useState("");
  // const [director, setDirector] = useState("");
  // const [person, setPerson] = useState("");
  // const [taxNumber, setTaxNumber] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [fax, setFax] = useState("");
  // const [country, setCountry] = useState("");
  // const [zipCity, setZipCity] = useState("");
  // const [streetNo, setStreetNo] = useState("");
  // const [mailbox, setMailbox] = useState("");

  // const [register, setRegister] = useState("");
  // const [homepage, setHomepage] = useState("");

  // Handle Cancel Button

  const handleCancel = () => {
    setCompanyCheck(!companyCheck);
  };

  // Handle Create company
  const handleSave = () => {
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("director", director);
    // formData.append("person", person);
    // formData.append("tax_number", taxNumber);
    // formData.append("email", email);
    // formData.append("phone", phone);
    // formData.append("mobile", mobile);
    // formData.append("fax", fax);
    // formData.append("country", country);
    // formData.append("city", zipCity);
    // formData.append("street_no", streetNo);
    // formData.append("mailbox", mailbox);
    // formData.append("register", register);
    // formData.append("homepage", homepage);
    // http
    //   .post(`/company`, formData)
    //   .then((res) => {
    //     toast.success("create sucessfully");
    //     setCompanyCheck(!companyCheck);
    //   })
    //   .catch((err) => toast.error(err.message));
  };
  const { values, handleChange } = useFormik({
    initialValues: {
      name: "",
      director: "",
      person: "",
      taxNumber: "",
      email: "",
      phone: "",
      fax: "",
      country: "",
      zipCity: "",
      streetNo: "",
      register: "",
      homepage: "",
    },
    handleSave,
  });
  // Handle Edit Company
  const handleEditCompany = () => {
    // console.log("Props: ", props.editItem);
    // const formData = new FormData();
    // {
    //   name != ""
    //     ? formData.append("name", name)
    //     : formData.append("name", props.editItem.name);
    // }
    // {
    //   director != ""
    //     ? formData.append("director", director)
    //     : formData.append("director", props.editItem.director);
    // }
    // {
    //   person != ""
    //     ? formData.append("person", person)
    //     : formData.append("person", props.editItem.person);
    // }
    // {
    //   taxNumber != ""
    //     ? formData.append("tax_number", taxNumber)
    //     : formData.append("tax_number", props.editItem.tax_number);
    // }
    // {
    //   email != ""
    //     ? formData.append("email", email)
    //     : formData.append("email", props.editItem.email);
    // }
    // {
    //   phone != ""
    //     ? formData.append("phone", phone)
    //     : formData.append("phone", props.editItem.phone);
    // }
    // {
    //   mobile != ""
    //     ? formData.append("mobile", mobile)
    //     : formData.append("mobile", props.editItem.mobile);
    // }
    // {
    //   fax != ""
    //     ? formData.append("fax", fax)
    //     : formData.append("fax", props.editItem.fax);
    // }
    // {
    //   country != ""
    //     ? formData.append("country", country)
    //     : formData.append("country", props.editItem.country);
    // }
    // {
    //   zipCity != ""
    //     ? formData.append("city", zipCity)
    //     : formData.append("city", props.editItem.city);
    // }
    // {
    //   streetNo != ""
    //     ? formData.append("street_no", streetNo)
    //     : formData.append("street_no", props.editItem.street_no);
    // }
    // {
    //   mailbox != ""
    //     ? formData.append("mailbox", mailbox)
    //     : formData.append("mailbox", props.editItem.mailbox);
    // }
    // formData.append("_method", "PUT");
    // formData.append("register", props.editItem.register);
    // http
    //   .post(`company/${props.editItem.id}`, formData)
    //   .then((res) => {
    //     toast.success("update successfully");
    //     setCompanyCheck(!companyCheck);
    //   })
    //   .catch((err) => toast.error(err.message));
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
                  Company Name
                </p>

                <TextField
                  // defaultdefaultValue={
                  //   props.editItem == undefined ? name : props.editItem.name
                  // }
                  defaultValue={values.name}
                  onChange={handleChange}
                  fullWidth
                  label="Company name"
                  id="0317258963"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Managing Director
                </p>

                <TextField
                  // defaultdefaultValue={
                  //   props.editItem == undefined
                  //     ? director
                  //     : props.editItem.director
                  // }
                  onChange={handleChange}
                  defaultValue={values.director}
                  fullWidth
                  label="Enter your position"
                  id="0317258963"
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
                  // defaultdefaultValue={
                  //   props.editItem == undefined ? person : props.editItem.person
                  // }
                  onChange={handleChange}
                  defaultValue={values.person}
                  fullWidth
                  label="Enter your name"
                  id="0317258963"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Commerical">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Commerical Register
                </p>

                <TextField
                  // defaultdefaultValue={
                  //   props.editItem == undefined
                  //     ? register
                  //     : props.editItem.register
                  // }
                  onChange={handleChange}
                  defaultValue={values.register}
                  fullWidth
                  label="Enter your text"
                  id="0317258963"
                />
              </div>
            </div>

            <div className="col-lg-6 mt-5">
              <div className="Tax">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Tax number
                </p>

                <TextField
                  // defaultdefaultValue={
                  //   props.editItem == undefined
                  //     ? taxNumber
                  //     : props.editItem.tax_number
                  // }
                  onChange={handleChange}
                  defaultValue={values.taxNumber}
                  fullWidth
                  label="Enter your tax"
                  id="0317258963"
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
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>E-mail</p>

                <TextField
                  // defaultdefaultValue={
                  //   props.editItem == undefined ? email : props.editItem.email
                  // }
                  onChange={handleChange}
                  defaultValue={values.email}
                  fullWidth
                  label="Enter email"
                  id="0317258963"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Homepage">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Homepage</p>

                <TextField
                  // defaultdefaultValue={
                  //   props.editItem == undefined
                  //     ? homepage
                  //     : props.editItem.homepage
                  // }
                  onChange={handleChange}
                  defaultValue={values.homepage}
                  fullWidth
                  label="http://"
                  id="0317258963"
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

                <TextField
                  // defaultdefaultValue={
                  //   props.editItem == undefined ? phone : props.editItem.phone
                  // }
                  onChange={handleChange}
                  defaultValue={values.phone}
                  fullWidth
                  label="0317258963"
                  id="0317258963"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Homepage">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Mobile</p>

                <TextField
                  // defaultdefaultValue={
                  //   props.editItem == undefined ? mobile : props.editItem.mobile
                  // }
                  onChange={handleChange}
                  defaultValue={values.mobile}
                  fullWidth
                  label="Enter Mobile number"
                  id="0317258963"
                />
              </div>
            </div>

            <div className="col-lg-6 mt-5">
              <div className="Homepage">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Fax</p>

                <TextField
                  // defaultdefaultValue={
                  //   props.editItem == undefined ? fax : props.editItem.fax
                  // }
                  onChange={handleChange}
                  defaultValue={values.fax}
                  fullWidth
                  label="Enter Fax"
                  id="0317258963"
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
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Country</p>

                <TextField
                  // defaultdefaultValue={
                  //   props.editItem == undefined
                  //     ? country
                  //     : props.editItem.country
                  // }
                  onChange={handleChange}
                  defaultValue={values.country}
                  fullWidth
                  label="Country name"
                  id="Country name"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="ZIP / City">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  ZIP / City
                </p>

                <TextField
                  // defaultdefaultValue={
                  //   props.editItem == undefined ? zipCity : props.editItem.city
                  // }
                  onChange={handleChange}
                  defaultValue={values.zipCity}
                  fullWidth
                  label="City"
                  id="City"
                />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="Street Number">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Street Number
                </p>

                <TextField
                  // defaultdefaultValue={
                  //   props.editItem == undefined
                  //     ? streetNo
                  //     : props.editItem.street_no
                  // }
                  onChange={handleChange}
                  defaultValue={values.streetNo}
                  fullWidth
                  label="Street No*"
                  id="Street No*"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Mail">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Mailbox</p>

                <TextField
                  // defaultdefaultValue={
                  //   props.editItem == undefined
                  //     ? mailbox
                  //     : props.editItem.mailbox
                  // }
                  onChange={handleChange}
                  defaultValue={values.mailbox}
                  fullWidth
                  label="Enter your mail box"
                  id="Enter your mail box"
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
