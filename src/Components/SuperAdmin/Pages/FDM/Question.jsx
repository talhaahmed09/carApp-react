import React, { useState } from "react";
import { CreateBtn } from "../../../Buttons";
import QuestionCreate from "./QuestionCreate";

const Question = () => {
  const [check, setCheck] = useState(false);
  const style = {
    addFromContact: {
      padding: "12px 102px",
      border: "2px solid rgba(226, 202, 190, 0.68)",
      borderRadius: "0px 5px 5px 0px",
    },
    bgcolor: {
      background: "#5A4A42",
    },
  };

  //   array of an object
  const dummy = [
    {
      num: "2",
      text: "Kühlsystem",
    },
    {
      num: "33",
      text: "Bresanlage",
    },
    {
      num: "255",
      text: "Motorraum",
    },
    {
      num: "67.4",
      text: "Motor",
    },
    {
      num: "5.4",
      text: "Karosserie",
    },
    {
      num: "24",
      text: "Räder/Reifen",
    },

    {
      num: "24",
      text: "kofferraum",
    },
    {
      num: "24",
      text: "Innenraum",
    },
    {
      num: "24",
      text: "Elektrik/Elektronik",
    },
    {
      num: "24",
      text: "Unterboden",
    },
    {
      num: "24",
      text: "Getriebe",
    },
    {
      num: "24",
      text: "Lenkung",
    },
    {
      num: "24",
      text: "Fahrwerk",
    },
    {
      num: "24",
      text: "Probefahrt",
    },
  ];

  return (
    <>
      {check ? (
        <QuestionCreate />
      ) : (
        <div>
          <div className="grid lg:grid-cols-3">
            {dummy.map((item) => {
              return (
                <div className="flex mt-3 cursor-pointer" onClick={()=> setCheck(!check)}>
                  <div
                    className="flex justify-center items-center p-3 text-white rounded-sm "
                    style={style.bgcolor}
                  >
                    {item.num}
                  </div>
                  <div
                    className=" flex justify-center items-center p-2 px-5"
                    style={style.addFromContact}
                  >
                    {item.text}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between my-6 mt-5">
            <CreateBtn
              // onClick={() => setValue(value - 1)}
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
                //   onClick={handleSubmit}
                style={{
                  color: "#000",
                  padding: "6px 22px",
                  diplay: "flex",
                  alignItems: "center",
                }}
                name="Submit"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Question;
