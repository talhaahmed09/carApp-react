import React, {useState} from 'react'
import WestIcon from '@mui/icons-material/West';
import { CreateBtn } from '../../../../Buttons';
import '../../All.css'
import AuthUser from '../../../Auth/AuthUser';


const Permission = (props) => {

  const {http} = AuthUser()

  const [role, setRole] = useState("")
  const [permissions, setPermissions] = useState(Array)

  // Handle Change checkboxes
  const handleChange = (e) => { 
    let arrayPermissions = []

    if(e.target.checked){
    arrayPermissions.push(e.target.value)
    setPermissions(oldArray => [...oldArray, e.target.value]);
    } else{
    setPermissions(permissions.filter(item =>  item != e.target.value));
    }
  }; 
  
  
  // Handle Save Assign Permission API
  const handleSave = () => {

    const payload = {
      role: role,
      permissions:[permissions]
    }
    http.post(`/assign-permission`, payload)
      .then((res) => {
        alert("Permission granted!")
      })
      .catch((err) => console.log(err.message));

  }

  return (
    <div>
       <div className="flex">
       <WestIcon className="backButton" onClick={() => props.setCheckPermission(false)} />

                    <h1 className="text-base text-bold mb-0 ml-5">
                      Permissions
                    </h1>
                    <div className="mr-5"></div>
                  </div>

                  <div className="row mt-5">
                    {/* <div className="col-lg-6">
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
                    </div> */}

                    <div className="col-lg-6">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Role
                      </p>
                      <div className="slct">
                        <select
                          className="form-select form-select-lg mb-0 w-100"
                          aria-label=".form-select-lg example"
                          onChange={(e) => setRole(e.target.value)}
                        >
                          <option selected>Select your option</option>
                          <option value="expert">Experts</option>
                          <option value="clerk">Clerks</option>
                          <option value="company-admin">Company Admin</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>General</p>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Administrator"
                          onChange={handleChange}
                          id="Administrator"
                        />
                        <label className="form-check-label" for="Administrator">
                          Administrator
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Sachverstandiger"
                          id="Sachverstandiger"
                          onChange={handleChange}
                          
                        />
                        <label className="form-check-label" for="Sachverstandiger">
                          Sachverstandiger
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Sachbearbeitera"
                          id="Sachbearbeitera"
                          onChange={handleChange}

                        />
                        <label className="form-check-label" for="Sachbearbeitera">
                          Sachbearbeiter
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="change-location"
                          id="Change Location"
                          onChange={handleChange}

                        />
                        <label className="form-check-label" for="Change Location">
                          Change Location
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>Vehicle Management</p>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="list-vehicle"
                          id="list-vehicle"
                          onChange={handleChange}

                        />
                        <label className="form-check-label" for="list-vehicle">
                          Read
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="create-vehivcle"
                          id="create-vehivcle"
                          onChange={handleChange}

                        />
                        <label className="form-check-label" for="create-vehivcle">
                          Create
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="edit-vehicle"
                          id="edit-vehicle"
                          onChange={handleChange}
                        />
                        <label className="form-check-label" for="edit-vehicle">
                          Edit
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="delete-vehicle"
                          id="delete-vehicle"
                          onChange={handleChange}

                        />
                        <label className="form-check-label" for="delete-vehicle">
                          Delete
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>Manage Addresses</p>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="list-address"
                          id="read-address"
                          onChange={handleChange}

                        />
                        <label className="form-check-label" for="read-address">
                          Read
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="create-address"
                          id="create-address"
                          onChange={handleChange}

                        />
                        <label className="form-check-label" for="create-address">
                          Create
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="edit-address"
                          id="edit-address"
                          onChange={handleChange}

                        />
                        <label className="form-check-label" for="edit-address">
                          Edit
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="delete-address"
                          id="delete-address"
                          onChange={handleChange}

                        />
                        <label className="form-check-label" for="delete-address">
                          Delete
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>Dossier</p>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="list-file"
                          id="read-dossier"
                          onChange={handleChange}

                        />
                        <label className="form-check-label" for="read-dossier">
                          Read
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="create-file"
                          id="create-dossier"
                          onChange={handleChange}

                        />
                        <label className="form-check-label" for="create-dossier">
                          Create
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="edit-file"
                          id="edit-dossier"
                          onChange={handleChange}

                        />
                        <label className="form-check-label" for="edit-dossier">
                          Edit
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="delete-file"
                          id="delete-dossier"
                          onChange={handleChange}

                        />
                        <label className="form-check-label" for="delete-dossier">
                          Delete
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>Protocol / Logging</p>
                  </div>

                  <div className="col-lg-3">
                    <div className="form-check mt-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="read-protocol"
                        id="read-protocol"
                        onChange={handleChange}

                      />
                      <label className="form-check-label" for="read-protocol">
                        Read
                      </label>
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
            name="Cancel"
          />
          <div className="mr-5">
            <CreateBtn
              onClick={handleSave}
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
  )
}

export default Permission
