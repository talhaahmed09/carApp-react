import { TextareaAutosize } from "@mui/base";
import React, { useState } from "react";
import { CreateBtn } from "../../../Buttons";
import Question from "./Question";

const QuestionCreate = () => {
  const [check, setcheck] = useState(false);
  return (
    <>
      {check ? (
        <Question />
      ) : (
        <div>
          <div className="generl ">
            <p>Questions</p>
          </div>
          <div className="mt-3">
            <h2 className="font-semibold text-lg">
              Q1: What is the Mileage of the car?{" "}
              <span className="font-normal text-base">
                {" "}
                (Example Question){" "}
              </span>
            </h2>
            <TextareaAutosize
              className="w-100 border p-3"
              aria-label="minimum height"
              minRows={2}
              placeholder="Answer"
            />
          </div>

          <div className="mt-3">
            <h2 className="font-semibold text-lg">
              Q2: Are there any sounds with the engine?
              <span className="font-normal text-base">
                {" "}
                (Example Question){" "}
              </span>
            </h2>
            <TextareaAutosize
              className="w-100 border p-3"
              aria-label="minimum height"
              minRows={2}
              placeholder="Answer"
            />
          </div>

          <div className="mt-3">
            <h2 className="font-semibold text-lg">
              Q3: "What is the condition of vehicle color?
              <span className="font-normal text-base">
                {" "}
                (Example Question){" "}
              </span>
            </h2>
            <TextareaAutosize
              className="w-100 border p-3"
              aria-label="minimum height"
              minRows={2}
              placeholder="Answer"
            />
          </div>

          <div className="flex justify-between my-6 mt-5">
            <CreateBtn
              onClick={() => setcheck(!check)}
              style={{
                color: "gray",
                padding: "6px 22px",
                diplay: "flex",
                alignItems: "center",
              }}
              name="Back"
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
                name="Save"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionCreate;
