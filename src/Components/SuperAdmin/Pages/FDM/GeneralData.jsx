import { TextField } from '@mui/material'
import React, { useState } from "react";
import { CreateBtn } from '../../../Buttons'

const GeneralData = () => {

  const [gd_license_plate, setgd_license_plate] = useState('')
  const [gd_vehicle_manufacturer, setgd_vehicle_manufacturer] = useState('')
  const [gd_vehicle_mode, setgd_vehicle_mode] = useState('')
  const [gd_owner_name, setgd_owner_name] = useState('')
  const [gd_owner_city, setgd_owner_city] = useState('')
  const [gd_owner_country, setgd_owner_country] = useState('')
  const [gd_email, setgd_email] = useState('')
  const [gd_contact_no, setgd_contact_no] = useState('')
  const [gd_order_date, setgd_order_date] = useState('')
  const [gd_inspection_date, setgd_inspection_date] = useState('')
  const [gd_expert_name, setgd_expert_name] = useState('')
  const [gd_clerk, setgd_clerk] = useState('')
  const [gd_order_placement, setgd_order_placement] = useState('')
  const [gd_vat_rate, setgd_vat_rate] = useState('')
  const [gd_address_city, setgd_address_city] = useState('')
  const [gd_address_country, setgd_address_country] = useState('')
  const [gd_street_no, setgd_street_no] = useState('')
  const [gd_mailbox, setgd_mailbox] = useState('')

  

  return (
    <div>
        
        <div>
          {/* Identification */}
        <div className="generl">
          <p>Overview</p>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="company">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                License plate
              </p>

              <TextField
               onChange={(e) => setgd_license_plate(e.target.value)}
              fullWidth label="Enter license plate no" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Vehicle manufacturer
              </p>

              <TextField
                fullWidth
                label="Enter your position"
                id=""
                onChange={(e) => setgd_vehicle_manufacturer(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-3">
          <div className="managing">
            <p style={{ fontWeight: "bold", fontSize: "12px" }}>
              Vehicle mode
            </p>

            <TextField
             onChange={(e) => setgd_vehicle_mode(e.target.value)}
              fullWidth
              label="Enter Vehicle Model"
              id=""
            />
          </div>
        </div>


        <div className="generl mt-5">
          <p>Owner Details</p>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="company">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Owner Name              </p>

              <TextField 
               onChange={(e) => setgd_owner_name(e.target.value)}
              fullWidth label="Country name" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                State / City              </p>

              <TextField
               onChange={(e) => setgd_owner_city(e.target.value)}
                fullWidth
                label="Enter your state with city "
                id=""
              />
            </div>
          </div>
        </div>


        <div className="row mt-3">
          <div className="col-lg-6">
            <div className="company">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Country               </p>

              <TextField 
               onChange={(e) => setgd_owner_country(e.target.value)}
              fullWidth label="Select Country" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Email              </p>

              <TextField
               onChange={(e) => setgd_email(e.target.value)}
                fullWidth
                label="Enter your email address"
                id=""
              />
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-3">
          <div className="managing">
            <p style={{ fontWeight: "bold", fontSize: "12px" }}>
              Contact No            </p>

            <TextField
             onChange={(e) => setgd_contact_no(e.target.value)}
              fullWidth
              label="Contact no"
              id=""
            />
          </div>
        </div>


        <div className="generl mt-5">
          <p>General</p>
        </div>

        <div className="row mt-3">
          <div className="col-lg-4">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Order date              </p>

              <TextField
               onChange={(e) => setgd_order_date(e.target.value)}
                fullWidth
                id="date"
                label="Enter Date"
                type="date"
                defaultValue=""
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="ZIP / City">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Inspection date              </p>

              <TextField
               onChange={(e) => setgd_inspection_date(e.target.value)}
                fullWidth
                id="date"
                label="Enter Date"
                type="date"
                defaultValue=""
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Name of the expert              </p>

              <TextField
               onChange={(e) => setgd_expert_name(e.target.value)}
                fullWidth
                label="example"
                id=""
              />
            </div>
          </div>
        </div>



        <div className="row mt-3">
          <div className="col-lg-4">
            <div className="company">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Clerk              </p>
              <TextField
               onChange={(e) => setgd_clerk(e.target.value)}
                fullWidth
                label="example"
                id=""
              />

            </div>
          </div>

          <div className="col-lg-4">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                order placement              </p>
              <TextField
               onChange={(e) => setgd_order_placement(e.target.value)}
                fullWidth
                label="Enter date"
                id=""
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                VAT rate              </p>

              <TextField
               onChange={(e) => setgd_vat_rate(e.target.value)}
                fullWidth
                label="Enter date"
                id=""
              />
            </div>
          </div>
        </div>

        <div className="generl mt-5">
          <p>Address</p>
        </div>

        <div className="row mt-3">
          <div className="col-lg-6">
            <div className="company">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Country               </p>

              <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" style={{ color: "darkgray", }}>
                <option selected>Select Country</option>
                <option value="1">Pakistan</option>
                <option value="2">Iran</option>
                <option value="3">China</option>
              </select>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                ZIP / City              </p>
              <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" style={{ color: "darkgray", }}>
                <option selected>Select City</option>
                <option value="1">Pakistan</option>
                <option value="2">Iran</option>
                <option value="3">China</option>
              </select>

            </div>
          </div>
        </div>


        <div className="row mt-3">
          <div className="col-lg-6">
            <div className="Street Number">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Street no               </p>

              <TextField 
               onChange={(e) => setgd_street_no(e.target.value)}
              fullWidth label="Select Country" id="0317258963" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="managing">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                Mailbox              </p>

              <TextField
               onChange={(e) => setgd_mailbox(e.target.value)}
                fullWidth
                label="Enter your mail box"
                id=""
              />
            </div>
          </div>
        </div>


        <div className="flex justify-between mt-5 my-6">

          <CreateBtn
            // onClick={() => setCompanyCheck(!companyCheck)}
            style={{
              color: "gray",
              padding: "6px 22px",
              diplay: "flex",
              alignItems: "center",
            }}
            name="Cancel"
          />
          <div className="mr-5">
            <CreateBtn
              onClick={() => {
                
              }}
              style={{
                color: "#000",
                padding: "6px 22px",
                diplay: "flex",
                alignItems: "center",
              }}
              name="Next"
            />
          </div>
        </div>
        </div>
    </div>
  )
}

export default GeneralData