import React from 'react'
import WestIcon from '@mui/icons-material/West';
import '../../All.css'
import { CreateBtn } from '../../../../Buttons';

const Notifications = (props) => {
  return (
    <div>
       <div className="flex">
       <WestIcon className="backButton" onClick={() => props.setCheckNotification(false)} />

                    <h1 className="text-base text-bold mb-0 ml-5">
                      Notfications
                    </h1>
                    <div className="mr-5"></div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Company
                      </p>
                      <div className="slct">
                        <select
                          className="form-select form-select-lg mb-0 w-100"
                          aria-label=".form-select-lg example"
                        >
                          <option selected>Select your option</option>
                          <option value="1">Experts</option>
                          <option value="2">Clerks</option>
                          <option value="3">Company Admin</option>
                        </select>
                      </div>
                    </div>

                  </div>

                  <div className="generl mt-5">
                    <p>Browser</p>
                  </div>

                  <div className="row">
                    <div className="col-lg-2">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          File Assigned
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          Appointment Reminder
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          Notes In File
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-2">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          Message Received
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-2">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          Task Assigned
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>Email</p>
                  </div>

                  <div className="row">
                    <div className="col-lg-2">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          File Assigned
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          Appointment Reminder
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          Notes In File
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-2">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          Message Received
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-2">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label" for="flexCheckDefault">
                          Task Assigned
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between my-6 mt-5">

                    <CreateBtn
                    
                    style={{
                        color: "gray",
                        padding: "6px 22px",
                        diplay: "flex",
                        alignItems: "center",
                    }}
                    name="Previous"
                    />
                    <div className="mr-5">
                    <CreateBtn
                        
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
  )
}

export default Notifications
