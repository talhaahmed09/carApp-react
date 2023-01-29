import { TextField } from "@mui/material";
import React, { useState } from "react";
import { CreateBtn } from "../../../Buttons";

const VehicleInspection = () => {
  const [vi_ort_firma, setvi_ort_firma] = useState('')
  const [vi_address, setvi_address] = useState('')
  const [vi_from, setvi_from] = useState('')
  const [vi_to, setvi_to] = useState('')
  const [vi_expert, setvi_expert] = useState('')
  const [vi_participator, setvi_participator] = useState('')
  return (
    <div>
      <div className="generl ">
        <p>Inspection</p>
      </div>

      <div className="row mt-3">
        <div className="col-lg-6">
          <div className="Street Number">
            <p style={{ fontWeight: "bold", fontSize: "12px" }}>Ort/Firma </p>

            <TextField
            onChange={(e) => setvi_ort_firma(e.target.value)}
            fullWidth label="Ort/Firma" id="0317258963" />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="managing">
            <p style={{ fontWeight: "bold", fontSize: "12px" }}>Address </p>

            <TextField 
            onChange={(e) => setvi_address(e.target.value)}
            fullWidth label="Address" id="" />
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-lg-6">
          <div className="Street Number">
            <p style={{ fontWeight: "bold", fontSize: "12px" }}>From </p>

            <TextField 
            onChange={(e) => setvi_from(e.target.value)}
            fullWidth  type="date" />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="managing">
            <p style={{ fontWeight: "bold", fontSize: "12px" }}>To </p>

            <TextField 
            onChange={(e) => setvi_to(e.target.value)}
            fullWidth  type="date" />
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-lg-6">
          <div className="Street Number">
            <p style={{ fontWeight: "bold", fontSize: "12px" }}>Expert </p>

            <TextField 
            onChange={(e) => setvi_expert(e.target.value)}
            fullWidth label="Expert" />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="managing">
            <p style={{ fontWeight: "bold", fontSize: "12px" }}>
              Participator{" "}
            </p>

            <TextField 
            onChange={(e) => setvi_participator(e.target.value)}
            fullWidth label="Participator" />
          </div>
        </div>
      </div>


      <div className="flex justify-between my-6 mt-5">
            {/* <CreateBtn
              onClick={() => setcheck(!check)}
              style={{
                color: "gray",
                padding: "6px 22px",
                diplay: "flex",
                alignItems: "center",
              }}
              name="Back"
            /> */}
            <div className="mr-5">
              <CreateBtn
                //   onClick={handleSubmit}
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
  );
};

export default VehicleInspection;
