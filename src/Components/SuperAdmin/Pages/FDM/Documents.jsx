import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { Dropdown } from "react-bootstrap";
import { CreateBtn } from "../../../Buttons";

const Documents = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <div className="generl ">
        <p> Documents</p>
      </div>

      <div>
        <div className=" mt-3">
          <div className="flex">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ background: "#5A4A42", boxShadow: "none" }}
              >
                Menu +
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Documents</Dropdown.Item>
                <Dropdown.Item>Documents</Dropdown.Item>
                <Dropdown.Item>Documents</Dropdown.Item>
                {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div className=" mt-3 border-3 p-3 w-[250px] rounded-md">
          <h1 className="text-xl">Heading</h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
            aliquid? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Culpa, asperiores?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Documents;
