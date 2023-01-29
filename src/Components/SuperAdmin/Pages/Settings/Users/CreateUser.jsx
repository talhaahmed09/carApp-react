import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import UsersList from "./UsersList";
import { Toolbar } from "@mui/material";
import AuthUser from "../../../Auth/AuthUser";
import WestIcon from '@mui/icons-material/West';
import '../../All.css'

export const CreateUser = (props) => {
  const { http } = AuthUser();
  const getToken = AuthUser();

  const [usermanagementCheck, setusermanagementCheck] = useState(false);
  // console.log("create props : ", props);



 // Fields States
 const [loaction, setLocation] = useState('')
 const [fname, setfName] = useState("");
 const [lname, setlName] = useState("");
 const [birthday, setBirthday] = useState("");
 const [password, setPassword] = useState("");
 const [passwordConfirm, setPasswordConfirm] = useState("");
 const [email, setEmail] = useState("");
 const [mobile, setMobile] = useState("");
 const [fax, setFax] = useState("");
 const [country, setCountry] = useState("");
 const [city, setCity] = useState("");
 const [street, setStreet] = useState("");
 const [mailbox, setMailbox] = useState("");
 const [role, setRole] = useState("");
 const [companyid, setCompanyid] = useState("");
 const [salutation, setSalutation] = useState("");
 const [title, setTitle] = useState("");
 const [homepage, setHomepage] = useState("");
 const [telephone, setTelephone] = useState("");




 // Handle Cancel Button

 const handleCancel = () => {
  setusermanagementCheck(true)
}


// Handle Save 
const handleSave = (data) => {

  

  const formData = new FormData();

  // If state is not empty then append state into formData otherwise append the props.editItem into formData

  { fname !== '' ? formData.append("first_name", fname) :
   formData.append("first_name", props.editItem.first_name) }

  { lname !== '' ? formData.append("last_name", lname) 
  : formData.append("last_name", props.editItem.last_name) }

  { birthday !== '' ? formData.append("birthday", birthday) 
  : formData.append("birthday", props.editItem.birthday) }

  { password !== '' ? formData.append("password", password) 
  : formData.append("password", props.editItem.password) }

  { passwordConfirm !== '' ? formData.append("password_confirmation", passwordConfirm) 
  : formData.append("password_confirmation", props.editItem.password_confirmation) }

  { email !== '' ? formData.append("email", email) 
  : formData.append("email", props.editItem.email) }

  { mobile !== '' ? formData.append("mobile", mobile) 
  : formData.append("mobile", props.editItem.mobile) }

  { fax !== '' ? formData.append("fax", fax) 
  : formData.append("fax", props.editItem.fax) }

  { country !== '' ? formData.append("country", country) 
  : formData.append("country", props.editItem.country) }

  { city !== '' ? formData.append("city", city) 
  : formData.append("city", props.editItem.city) }

  { street !== '' ? formData.append("street_no", street) 
  : formData.append("street_no", props.editItem.street_no) }
 
  { mailbox !== '' ? formData.append("mailbox", mailbox) 
  : formData.append("mailbox", props.editItem.mailbox) }
 
  { role !== '' ? formData.append("role", role) 
  : formData.append("role", props.editItem.myRole[0]) }
 
  { mailbox !== '' ? formData.append("mailbox", mailbox) 
  : formData.append("mailbox", props.editItem.mailbox) }

  { companyid !== '' ? formData.append("company_id", companyid) 
  : formData.append("company_id", props.editItem.company_id) }

  { salutation !== '' ? formData.append("salutation", salutation) 
  : formData.append("salutation", props.editItem.salutation) }
  
  { title !== '' ? formData.append("title", title) 
  : formData.append("title", props.editItem.title) }
  
  { homepage !== '' ? formData.append("homepage", homepage) 
  : formData.append("homepage", props.editItem.homepage) }
  
  formData.append("_method", "PUT")

  

  http.post(`/user/${props.editItem.id}`, formData)
  .then((res) => {
    // console.log(res)
    setusermanagementCheck(!usermanagementCheck)

  }).catch(err => console.log(err.message))


};

// Handle Create New Uuser 
const handleCreateUser = () => {



  const formData = new FormData();

  formData.append("first_name", fname)
  formData.append("last_name", lname)
  formData.append("birthday", birthday)
  formData.append("password", password)
  formData.append("password_confirmation", passwordConfirm)
  formData.append("email", email)
  formData.append("mobile", mobile)
  formData.append("fax", fax)
  formData.append("country", country)
  formData.append("city", city)
  formData.append("street_no", street)
  formData.append("mailbox", mailbox)
  formData.append("role", role)
  formData.append("company_id", companyid)
  formData.append("title", title)
  formData.append("homepage", homepage)
  formData.append("telephone", telephone)
  formData.append("salutation", salutation)

 

  

  http.post(`/user`, formData)
  .then((res) => {
    // console.log(res)
    setusermanagementCheck(!usermanagementCheck)
  }).catch(err => console.log(err.message))

  
};



  return (
    <>
      {usermanagementCheck ? (
        <UsersList />
      ) : (
        <div>
          {/* <Toolbar /> */}
        

          <div className="flex border-slate-400 " >
        <WestIcon onClick={() => setusermanagementCheck(!usermanagementCheck)} className="backButton"/>
        { props && props.editItem ? (<h1 className="text-base text-bold mb-0 ml-5">{props.editItem.first_name} {props.editItem.last_name}</h1>) :(
            <h1 className="text-base text-bold mb-0 ml-5">Create User</h1>) }
          
        </div>

          <hr />
              <div>
                  

                  <div className="generl mt-4">
                    <p>General</p>
                  </div>

                  <div className="col-lg-6 mt-5">
                    <div className="Mail">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Main Location
                      </p>

                      <TextField
                      onChange={(e) => setLocation(e.target.value)}
                        fullWidth
                        label="Select your option"
                        id="Enter your mail box"
                      />
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="First Name">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          First Name
                        </p>

                        <TextField
                        defaultValue = {props.editItem == undefined ? fname :props.editItem.first_name}
                        onChange={(e) => setfName(e.target.value)}
                          fullWidth
                          label="Enter your First Name"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Last Name">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Last Name
                        </p>

                        <TextField
                        defaultValue = {props.editItem == undefined ? lname :props.editItem.last_name}
                        onChange={(e) => setlName(e.target.value)}
                          fullWidth
                          label="Last Name"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="Salution">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Salution
                        </p>

                        <TextField
                        defaultValue = {props.editItem == undefined ? salutation :props.editItem.salutation}
                        onChange={(e) => setSalutation(e.target.value)}
                          fullWidth
                          label="Salutation"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Title">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Title
                        </p>

                        <TextField
                        defaultValue = {props.editItem == undefined ? title :props.editItem.title}
                        onChange={(e) => setTitle(e.target.value)}
                          fullWidth
                          label="Enter Title"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="Birthday">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Birthday
                        </p>

                        <TextField
                        defaultValue = {props.editItem == undefined ? birthday :props.editItem.birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                          fullWidth
                          label="22-10-1994"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Password">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Password
                        </p>

                        <TextField
                        defaultValue = {props.editItem == undefined ? password :props.editItem.password}
                        onChange={(e) => setPassword(e.target.value)}
                          fullWidth
                          label="*******"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="STATUS d-flex mt-5">
                    <p>Status: </p>

                    <div className="form-check form-check-inline ps-5">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="active"
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
                        value="non_active"
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        Not Active
                      </label>
                    </div>
                  </div>

                  <div className="Contactcent mt-5">
                    <p>Contact</p>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="E-mail">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          E-mail
                        </p>

                        <TextField
                        defaultValue = {props.editItem == undefined ? email :props.editItem.email}
                        onChange={(e) => setEmail(e.target.value)}
                          fullWidth
                          label="example@gmail.com"
                          id="0317258963"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Homepage">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Homepage
                        </p>

                        <TextField 
                        defaultValue = {props.editItem == undefined ? homepage :props.editItem.homepage}
                        onChange={(e) => setHomepage(e.target.value)}
                        fullWidth label="http:/" id="0317258963" />
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
                        defaultValue = {props.editItem == undefined ? telephone :props.editItem.telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                          fullWidth
                          label="0317258963"
                          id="0317258963"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Homepage">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Mobile
                        </p>

                        <TextField
                        defaultValue = {props.editItem == undefined ? mobile :props.editItem.mobile}
                        onChange={(e) => setMobile(e.target.value)}
                          fullWidth
                          label="0317258963"
                          id="0317258963"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 mt-5">
                      <div className="Fax">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Fax
                        </p>

                        <TextField 
                        defaultValue = {props.editItem == undefined ? fax :props.editItem.fax}
                        onChange={(e) => setFax(e.target.value)}
                        fullWidth label="000000" id="0317258963" />
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
                          Country
                        </p>
                        <TextField
                        defaultValue = {props.editItem == undefined ? country :props.editItem.country}
                        onChange={(e) => setCountry(e.target.value)}
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
                        defaultValue = {props.editItem == undefined ? city :props.editItem.city}
                        onChange={(e) => setCity(e.target.value)}
                        fullWidth label="City" id="City" />
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
                        defaultValue = {props.editItem == undefined ? street :props.editItem.street_no}
                        onChange={(e) => setStreet(e.target.value)}
                          fullWidth
                          label="Street No*"
                          id="Street No*"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="Mail">
                        <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                          Mailbox
                        </p>

                        <TextField
                        defaultValue = {props.editItem == undefined ? mailbox :props.editItem.mailbox}
                        onChange={(e) => setMailbox(e.target.value)}
                          fullWidth
                          label="Enter your mail box"
                          id="Enter your mail box"
                        />
                      </div>
                    </div>
                  </div>

                 
                
                </div> 


          <div className="flex justify-between mt-5 mb -5">
                                <Button
                                  className="text-black"
                                  onClick={handleCancel}
                                >
                                  Cancel
                                </Button>

                                <Button
                                  className="text-white"
                                  style={{ backgroundColor: "#5A4A42" }}
                                  onClick={() => {
                                    if(props.editItem == undefined){
                                      handleCreateUser()
                                    }
                                    handleSave()
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
