import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import {CompanyProfile} from "./CompanyProfile";
import { Toolbar } from "@mui/material";
import AuthUser from "../../../Auth/AuthUser";
import WestIcon from '@mui/icons-material/West';
import {toast} from 'react-toastify';


export const Createcompany = (props) => {


  const { http } = AuthUser();

  const [companyCheck, setCompanyCheck] = useState(false);
  

  // Fields States
  const [cp_name, setName] = useState();
  const [cp_location, setcp_location] = useState();
  const [cp_letterhead, setcp_letterhead] = useState();
  const [cp_letterfoot, setcp_letterfoot] = useState();
  const [cp_sender_address, setcp_sender_address] = useState();
  const [cp_contact_details, setcp_contact_details] = useState();
  const [cp_signature, setcp_signature] = useState();
  const [cp_rubber_stamp, setcp_rubber_stamp] = useState();
  const [cp_stmp_server, setcp_stmp_server] = useState();
  const [cp_stmp_port, setcp_stmp_port] = useState();
  const [cp_user_name, setcp_user_name] = useState();
  const [cp_password, setcp_password] = useState();
  const [cp_signature_imprint, setcp_signature_imprint] = useState();
  const [company_id, setcompany_id] = useState();
  const [cp_sender_name, setcp_sender_name] = useState();





  // Handle Cancel Button

  const handleCancel = () => {
    setCompanyCheck(!companyCheck)
  }


  // Handle Save Create Company Profile 
  const handleSave = () => {

  

    const formData = new FormData();

    formData.append("cp_name", cp_name)
    formData.append("cp_location", cp_location)
    formData.append("cp_letterhead", cp_letterhead)
    formData.append("cp_letterfoot", cp_letterfoot)
    formData.append("cp_sender_address", cp_sender_address)
    formData.append("cp_contact_details", cp_contact_details)
    formData.append("cp_signature", cp_signature)
    formData.append("cp_rubber_stamp", cp_rubber_stamp)
    formData.append("cp_stmp_server", cp_stmp_server)
    formData.append("cp_stmp_port", cp_stmp_port)
    formData.append("cp_user_name", cp_user_name)
    formData.append("cp_password", cp_password)
    formData.append("cp_signature_imprint", cp_signature_imprint)
    formData.append("company_id", company_id)
    formData.append("cp_sender_name", cp_sender_name)


    http.post(`/company-profile`, formData)
    .then((res) => {
      toast.success('create successfully')
      setCompanyCheck(!companyCheck)
    }).catch(err => toast.error(err.message))
  
    
  };

  // Handle Edit Company Profile
   const handleEditCompany = (data) => {

    console.log(data);

    const formData = new FormData();
    
    {
      cp_name != undefined ? formData.append("cp_name", cp_name) :
       formData.append("cp_name", data.cp_name);
    }
    {
      cp_location != undefined ? formData.append("cp_location", cp_location)
        : formData.append("cp_location", data.cp_location);
    }
    {
      cp_letterhead != undefined
        ? formData.append("cp_letterhead", cp_letterhead)
        : formData.append("cp_letterhead", data.cp_letterhead);
    }

    {
      cp_letterfoot != undefined
        ? formData.append("cp_letterfoot", cp_letterfoot)
        : formData.append("cp_letterfoot", data.cp_letterfoot);
    }

    {
      cp_sender_address != undefined
        ? formData.append("cp_sender_address", cp_sender_address)
        : formData.append("cp_sender_address", data.cp_sender_address);
    }

    {
      cp_contact_details != undefined
        ? formData.append("cp_contact_details", cp_contact_details)
        : formData.append("cp_contact_details", data.cp_contact_details);
    }

    {
      cp_signature != undefined
        ? formData.append("cp_signature", cp_signature)
        : formData.append("cp_signature", data.cp_signature);
    }

    {
      cp_rubber_stamp != undefined
        ? formData.append("cp_rubber_stamp", cp_rubber_stamp)
        : formData.append("cp_rubber_stamp", data.cp_rubber_stamp);
    }

    {
      cp_stmp_server != undefined
        ? formData.append("cp_stmp_server", cp_stmp_server)
        : formData.append("cp_stmp_server", data.cp_stmp_server);
    }

    {
      cp_stmp_port != undefined
        ? formData.append("cp_stmp_port", cp_stmp_port)
        : formData.append("cp_stmp_port", data.cp_stmp_port);
    }

    {
      cp_user_name != undefined
        ? formData.append("cp_user_name", cp_user_name)
        : formData.append("cp_user_name", data.cp_user_name);
    }
    {
      cp_password != undefined
        ? formData.append("cp_password", cp_password)
        : formData.append("cp_password", data.cp_password);
    }


    {
      cp_signature_imprint != undefined
        ? formData.append("cp_signature_imprint", cp_signature_imprint)
        : formData.append("cp_signature_imprint", data.cp_signature_imprint);
    }

   

    {
      cp_sender_name != undefined
        ? formData.append("cp_sender_name", cp_sender_name)
        : formData.append("cp_sender_name", data.cp_sender_name);
    }
    formData.append("_method", "PUT");

    http
      .post(`/company-profile/${data.id}`, formData)
      .then((res) => {
        toast.success('update successfully')
        setCompanyCheck(!companyCheck)
      })
      .catch((err) => console.log(err.message));
  };





  return (
    <>
      {companyCheck ? (
        <CompanyProfile />
      ) : (
        <div>
          {/* <Toolbar /> */}
          <div className="flex">
          <WestIcon className="backButton" onClick={() => setCompanyCheck(!companyCheck)} />

          { props && props.editItem ? (<h1 className="text-base text-bold mb-0 ml-5">{props.editItem.cp_name}</h1>) :(
            <h1 className="text-base text-bold mb-0 ml-5">Create Company Profile</h1>) }
            
          </div>

          {/* <hr /> */}

          
              {/* General */}
          <div className="generl mt-3">
            <p>General</p>
          </div>
          <div className="row mt-3">
          
            <div className="col-lg-6">
              
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                   Profile Name
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? cp_name : props.editItem.cp_name  }
                onChange={(e) => setName(e.target.value)}
                fullWidth label="Enter Profile Name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                 Location
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? cp_location : props.editItem.cp_location  }
                 onChange={(e) => setcp_location(e.target.value)}
                  fullWidth
                  label="Enter location"
                  id="0317258963"
                />
              </div>
            </div>
          </div> <br />

                {/* Design */}
          <div className="generl mt-3">
            <p>Design</p>
          </div>

                {/* Sender */}
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="contact">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Leterhead
                </p>

                <input type="file"
                
                onChange={(event) => setcp_letterhead(event.target.files[0])}/>

                
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Commerical">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Letterfoot
                </p>

                <input type="file" onChange={(event) => setcp_letterfoot(event.target.files[0])}/>

              </div>
            </div>

          
          </div><br />

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="contact">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Sender Name
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? cp_sender_name : props.editItem.cp_sender_name  }
                 onChange={(e) => setcp_sender_name(e.target.value)}
                fullWidth label="Enter sender name" id="0317258963" />
              </div>
            </div>

           

          
          </div>
         

                {/* Signature */}
          <div className="generl mt-3">
            <p>Sender</p>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="contact">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Sender Address
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? cp_sender_address : props.editItem.cp_sender_address  }
                 onChange={(e) => setcp_sender_address(e.target.value)}
                fullWidth label="Enter sender address" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Commerical">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Contact
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? cp_contact_details : props.editItem.cp_contact_details  }
                 onChange={(e) => setcp_contact_details(e.target.value)}
                fullWidth label="Enter contact" id="0317258963" />
              </div>
            </div>

          
          </div><br />


                {/* Email */}
          <div className="generl mt-3">
            <p>Signature</p>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="contact">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Signature
                </p>
                <input type="file" onChange={(event) => setcp_signature(event.target.files[0])}/>

                </div>
            </div>

            <div className="col-lg-6">
              <div className="Commerical">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Rubber Stamp
                </p>
                <input type="file" onChange={(event) => setcp_rubber_stamp(event.target.files[0])}/>

              </div>
            </div>

          
          </div><br />


          <div className="generl mt-3">
            <p>Email</p>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="contact">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Stmp server
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? cp_stmp_server : props.editItem.cp_stmp_server  }
                 onChange={(e) => setcp_stmp_server(e.target.value)}
                fullWidth label="Enter stmp server" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Commerical">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Stmp port
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? cp_stmp_port : props.editItem.cp_stmp_port  }
                 onChange={(e) => setcp_stmp_port(e.target.value)}
                fullWidth label="Enter stmp port" id="0317258963" />
              </div>
            </div>

          
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="contact">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  User name
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? cp_user_name : props.editItem.cp_user_name  }
                 onChange={(e) => setcp_user_name(e.target.value)}
                fullWidth label="Enter user name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Commerical">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Password
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? cp_password : props.editItem.cp_password  }
                 onChange={(e) => setcp_password(e.target.value)}
                fullWidth label="Enter password" id="0317258963" />
              </div>
            </div>

          
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="contact">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Signature imprint
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? cp_signature_imprint : props.editItem.cp_signature_imprint  }
                 onChange={(e) => setcp_signature_imprint(e.target.value)}
                fullWidth label="Enter Signature imprint" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Commerical">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Company id
                </p>

                <TextField
                defaultValue={  props.editItem == undefined ? company_id : props.editItem.company_id  }
                 onChange={(e) => setcompany_id(e.target.value)}
                fullWidth label="Enter company id" id="0317258963" />
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
                                    if(props.editItem === undefined){
                                      
                                      handleSave()
                                    }
                                    handleEditCompany(props.editItem)
                                  }
                                  }
                                  >
                                  Save
                                </Button>
                              </div>
        </div>
      )}
    </>
  );
};
