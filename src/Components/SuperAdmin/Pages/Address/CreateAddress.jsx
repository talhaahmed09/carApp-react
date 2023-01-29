import { TextField } from "@mui/material";
import React, { useState, useMemo } from "react";
import { Button } from "@mui/material";
import { Toolbar } from "@mui/material";
import AuthUser from "../../Auth/AuthUser";
import Addresses from "./Addresses";
import WestIcon from "@mui/icons-material/West";
import "../All.css";
import { MuiTelInput } from "mui-tel-input";
import {toast} from 'react-toastify';
import countryList from "react-select-country-list";
import {useFormik} from 'formik';

export const CreateAddress = (props) => {

  const formRef = React.useRef();

  const { http } = AuthUser();

  const [addressCheck, setAddressCheck] = useState(false);

  // Fields States
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [company, setCompany] = useState("");
  const [fax, setFax] = useState("");
  const [country, setCountry] = useState("Germany");
  const [city, setCity] = useState("");
  const [streetNo, setStreetNo] = useState("");
  const [mailbox, setMailbox] = useState();
  const [companyId, setCompanyId] = useState("");
  const [salution, setSalutaion] = useState("Select Salutation");
  const [homepage, setHomepage] = useState();
  const [telephone, setTelephone] = useState();
  const [addComment, setAddComment] = useState("");
  const [vatId, setVatId] = useState("");

  const options = useMemo(() => countryList().getData(), []);

  // Handle Cancel Button

  const handleCancel = () => {
    setAddressCheck(!addressCheck);
  };

  // Handle Create company
  const handleSave = () => {
    if(formRef.current){
      formRef.current.reportValidity()

    }
    const formData = new FormData();

    formData.append("title", title);
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("fax", fax);
    formData.append("country", country);
    formData.append("city", city);
    formData.append("street_no", streetNo);
    formData.append("mailbox", mailbox);
    formData.append("company_id", companyId);
    formData.append("salution", salution);
    formData.append("homepage", homepage);
    formData.append("telephone", telephone);
    formData.append("add_comment", addComment);
    formData.append("vat_id", vatId);

    http
      .post(`/address`, formData)
      .then((res) => {
        toast.success('create sucessfully')
        setAddressCheck(!addressCheck);
      })
      .catch((err) => toast.error(err.message));
  };

  // Handle Edit Company
  const handleEditCompany = () => {
    const formData = new FormData();
    {
      title != ""
        ? formData.append("title", title)
        : formData.append("title", props.editItem.title);
    }
    {
      firstName != ""
        ? formData.append("first_name", firstName)
        : formData.append("first_name", props.editItem.first_name);
    }
    {
      lastName != ""
        ? formData.append("last_name", lastName)
        : formData.append("last_name", props.editItem.last_name);
    }
    {
      email != ""
        ? formData.append("email", email)
        : formData.append("email", props.editItem.email);
    }
    {
      mobile != ""
        ? formData.append("mobile", mobile)
        : formData.append("mobile", props.editItem.mobile);
    }

    {
      fax != ""
        ? formData.append("fax", fax)
        : formData.append("fax", props.editItem.fax);
    }

    {
      country != ""
        ? formData.append("country", country)
        : formData.append("country", props.editItem.country);
    }

    {
      city != ""
        ? formData.append("city", city)
        : formData.append("city", props.editItem.city);
    }

    {
      streetNo != ""
        ? formData.append("street_no", streetNo)
        : formData.append("street_no", props.editItem.street_no);
    }

    {
      mailbox != undefined
        ? formData.append("mailbox", mailbox)
        : formData.append("mailbox", props.editItem.mailbox);
    }
    {
      companyId != ""
        ? formData.append("company_id", companyId)
        : formData.append("company_id", props.editItem.company_id);
    }

    {
      salution != ""
        ? formData.append("salution", salution)
        : formData.append("salution", props.editItem.salution);
    }

    {
      homepage != undefined
        ? formData.append("homepage", homepage)
        : formData.append("homepage", props.editItem.homepage);
    }

    {
      telephone != undefined
        ? formData.append("telephone", telephone)
        : formData.append("telephone", props.editItem.telephone);
    }

    {
      addComment != ""
        ? formData.append("add_comment", addComment)
        : formData.append("add_comment", props.editItem.add_comment);
    }

    formData.append("_method", "PUT");
    formData.append("vat_id", props.editItem.vat_id);

    http
      .post(`address/${props.editItem.id}`, formData)
      .then((res) => {
        toast.success('update sucessfully')
        setAddressCheck(!addressCheck);
      })
      .catch((err) => toast.error(err.response.data.errors));
  };

  //   Handle Back
  const handleBack = () => {
    setAddressCheck(!addressCheck);
  };

  return (
    <>
      {addressCheck ? (
        <Addresses />
      ) : (
        <div>
          <Toolbar />
          <div className="flex border-slate-400 ">
            <WestIcon className="backButton" onClick={handleBack} />
            {props && props.editItem ? (
              <h1 className="text-base text-bold mb-0 ml-5">
                {props.editItem.title}
              </h1>
            ) : (
              <h1 className="text-base text-bold mb-0 ml-5">Create Address</h1>
            )}
          </div>
          <div className="flex justify-between"></div>

          {/* <hr /> */}

          {/* General */}
          <form ref={formRef}>
          <div className="generl mt-3">
            <p>General</p>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Salutation
                </p>
                <select
                  className="form-select form-select-lg mb-0 w-100"
                  aria-label=".form-select-lg example"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setSalutaion(e.target.value);
                  }}
                >
                  <option selected>
                    {props.editItem == undefined
                      ? salution
                      : props.editItem.salution}
                  </option>
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Company">Company</option>
                </select>

                {/* <TextField
                defaultValue={  props.editItem == undefined ? salution : props.editItem.salution  }
                onChange={(e) => setSalutaion(e.target.value)}
                fullWidth label="Enter Salutation" id="0317258963" /> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Title</p>

                <TextField
                  defaultValue={
                    props.editItem == undefined ? title : props.editItem.title
                  }
                  onChange={(e) => setTitle(e.target.value)}
                  fullWidth
                  label="Enter Title"
                  id="0317258963"
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  First Name
                </p>

                <TextField
                  required
                  id="outlined-error-helper-text"
                  
                  defaultValue={
                    props.editItem == undefined
                      ? firstName
                      : props.editItem.first_name
                  }
                  onChange={(e) => setFirstName(e.target.value)}
                  fullWidth
                  label="Enter First Name"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Surname</p>

                <TextField
                  defaultValue={
                    props.editItem == undefined
                      ? lastName
                      : props.editItem.last_name
                  }
                  onChange={(e) => setLastName(e.target.value)}
                  fullWidth
                  label="Enter Surname"
                  id="0317258963"
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Company</p>

                <TextField
                  defaultValue={
                    props.editItem == undefined
                      ? company
                      : props.editItem.company
                  }
                  onChange={(e) => setCompany(e.target.value)}
                  fullWidth
                  label="Enter Company"
                  id="0317258963"
                />
              </div>
            </div>
          </div>
          <br />

          {/* Contact */}
          <div className="generl mt-3">
            <p>Contact</p>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>E-mail</p>

                <TextField
                  defaultValue={
                    props.editItem == undefined ? email : props.editItem.email
                  }
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  label="Enter E-mail"
                  id="0317258963"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Homepage</p>

                <TextField
                  defaultValue={
                    props.editItem == undefined
                      ? homepage
                      : props.editItem.homepage
                  }
                  onChange={(e) => setHomepage(e.target.value)}
                  fullWidth
                  label="http:/"
                  id="0317258963"
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Telephone
                </p>
                <MuiTelInput
                  defaultCountry="DE"
                  value={
                    telephone
                      ? telephone
                      : props.editItem && props.editItem.telephone
                  }
                  onChange={(value) => setTelephone(value)}
                  fullWidth
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Mobile</p>
                <MuiTelInput
                  defaultCountry="DE"
                  value={
                    mobile ? mobile : props.editItem && props.editItem.mobile
                  }
                  onChange={(value) => setMobile(value)}
                  fullWidth
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Fax</p>

                <MuiTelInput
                  defaultCountry="DE"
                  value={fax ? fax : props.editItem && props.editItem.fax}
                  onChange={(value) => setFax(value)}
                  fullWidth
                />

                {/* <TextField
                defaultValue={  props.editItem == undefined ? fax : props.editItem.fax  }
                onChange={(e) => setFax(e.target.value)}
                fullWidth label="Enter Fax" id="0317258963" /> */}
              </div>
            </div>
          </div>
          <br />

          {/* Address */}
          <div className="generl mt-3">
            <p>Address</p>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Country</p>

                <select
                  className="form-select form-select-lg mb-0 w-100"
                  aria-label=".form-select-lg example"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setCountry(e.target.value);
                  }}
                >
                  <option selected value="Germany">
                    {props.editItem == undefined
                      ? country
                      : props.editItem.country}
                  </option>
                  {options.map((items, id) => {
                    return <option value={items.label}>{items.label}</option>;
                  })}
                </select>
                {/* <TextField
                defaultValue={  props.editItem == undefined ? country : props.editItem.country  }
                onChange={(e) => setCountry(e.target.value)}
                fullWidth label="Enter Country" id="0317258963" /> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  ZIP / City
                </p>

                <TextField
                  defaultValue={
                    props.editItem == undefined ? city : props.editItem.city
                  }
                  onChange={(e) => setCity(e.target.value)}
                  fullWidth
                  label="Enter city"
                  id="0317258963"
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Street Number
                </p>

                <TextField
                  defaultValue={
                    props.editItem == undefined
                      ? streetNo
                      : props.editItem.street_no
                  }
                  onChange={(e) => setStreetNo(e.target.value)}
                  fullWidth
                  label="Enter Street Number"
                  id="0317258963"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Mailbox</p>

                <TextField
                  defaultValue={
                    props.editItem == undefined
                      ? mailbox
                      : props.editItem.mailbox
                  }
                  onChange={(e) => setMailbox(e.target.value)}
                  fullWidth
                  label="Enter Mailbox"
                  id="0317258963"
                />
              </div>
            </div>
          </div>

          <br />

          {/* Miscellaneous */}
          <div className="generl mt-3">
            <p>Miscellaneous</p>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Comment</p>

                <TextField
                  defaultValue={
                    props.editItem == undefined
                      ? addComment
                      : props.editItem.add_comment
                  }
                  onChange={(e) => setAddComment(e.target.value)}
                  fullWidth
                  label="Enter Comment"
                  id="0317258963"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>VAT ID</p>

                <TextField
                  defaultValue={
                    props.editItem == undefined ? vatId : props.editItem.vat_id
                  }
                  onChange={(e) => setVatId(e.target.value)}
                  fullWidth
                  label="Enter VAT ID"
                  id="0317258963"
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Company Id
                </p>

                <TextField
                  defaultValue={
                    props.editItem == undefined
                      ? companyId
                      : props.editItem.company_id
                  }
                  onChange={(e) => setCompanyId(e.target.value)}
                  fullWidth
                  label="Enter Company Id"
                  id="0317258963"
                />
              </div>
            </div>
          </div>

          <br />

          <div className="flex justify-between mt-5 mb -5">
            <Button className="text-black" onClick={handleCancel}>
              Cancel
            </Button>

            <Button
              className="text-white"
              style={{ backgroundColor: "#5A4A42" }}
              onClick={() => {
                if (props.editItem == undefined) {
                  handleSave();
                }
                handleEditCompany();
              }}
            >
              Save
            </Button>
          </div>
          </form>
        </div>
      )}
    </>
  );
};
