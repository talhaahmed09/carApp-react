import React, { useState } from "react";
import { CreateBtn } from "../../../Buttons";

const Involed = () => {

  const [inv_participation, setinv_participation] = useState('')
  const [inv_designation, setinv_designation] = useState('')

  const style = {
    addFromContact: {
        padding: "12px 102px",
        border: "1px solid #F4E9E4",
        borderRadius: "5px",
      }
  }
  
  return (
    <>
      <div className="flex justify-between ">
        <h1 className="text-xl">Participation</h1>
        <h1 className="text-xl">Contact</h1>
        <h1 className="text-xl">Designation</h1>
      </div>

      <div className="mt-5 flex justify-between">
        <button style={style.addFromContact}>Add from Contact</button>
        <CreateBtn
          // onClick={() => setCompanyCheck(!companyCheck)}
          style={{
            padding: "12px 102px",
            diplay: "flex",
            alignItems: "center",
          }}
          name="Add New Party/Contact +"
        />
      </div>
    </>
  );
};

export default Involed;
