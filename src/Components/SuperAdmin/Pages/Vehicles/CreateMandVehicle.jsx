import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import Company from "./Company";
import { Toolbar } from "@mui/material";
import { CreateBtn } from "../../Buttons";
import { Mandatory } from "./Mandatory";
import VehiclesMand from "./VehiclesMand";

export const CreateMandVehicle = () => {
  const [companyCheck, setCompanyCheck] = useState(false);

  return (
    <>
      {companyCheck ? (
        <VehiclesMand />
      ) : (
        <div>
        <div className="flex justify-between">
            <h1 className="text-base text-bold mb-0 ml-5">Create Vehicle</h1>
            
            
          </div>

          <hr />

          
         
          <div className="generl">
            <p>All Details</p>
          </div>
         
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Vehicle Name
                </p>

                <TextField fullWidth label="Company name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Model
                </p>

                <TextField
                  fullWidth
                  label="Enter your position"
                  id="0317258963"
                />
              </div>
            </div>


          </div>


            <div className="row mt-5">
            <div className="col-lg-6">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Vehicle Name
                </p>

                <TextField fullWidth label="Company name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Model
                </p>

                <TextField
                  fullWidth
                  label="Enter your position"
                  id="0317258963"
                />
              </div>
            </div>


          </div>
          <div className="flex justify-between my-6">
            
                <CreateBtn
                  onClick={() => setCompanyCheck(!companyCheck)}
                  style={{
                    color: "#000",
                    padding: "6px 22px",
                    diplay: "flex",
                    alignItems: "center",
                  }}
                  name="Cancel"
                />
                <div className="mr-5">
                  <CreateBtn
                    onClick={() => setCompanyCheck(!companyCheck)}
                    style={{
                      color: "#000",
                      padding: "6px 22px",
                      diplay: "flex",
                      alignItems: "center",
                    }}
                    name="Save"
                  />
                </div>
              </div>

          

          
          </div>

      )}
    </>
  );
};
