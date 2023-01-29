import React from "react";
import upload from "../../../img/ant-design_cloud-upload-outlined.png";

const Photos = () => {
  const style = {
    button: {
      padding: "10px",
      background: "#5B4A42",
      borderRadius: "4px",
      color: "#fff",
    },
    border: {
      background: "#FFFFFF",
      border: "1px dashed rgba(226, 202, 190, 0.68)",
      borderRadius: " 4px",
      padding: "20px",
    },
  };
  return (
    <div>
      <div className="generl ">
        <p>Upload photos</p>
      </div>

      <div className="grid grid-cols-5">
        <div className="mt-2 w-[100px] h-[100px]">
          <img
            src="https://www.fillmurray.com/640/360"
            alt="dummy" className="w-full h-full"
          />
        </div>
        <div className="mt-2 w-[100px] h-[100px]">
          <img
            src="https://www.fillmurray.com/640/360"
            alt="dummy" className="w-full h-full"
          />
        </div>
        <div className="mt-2 w-[100px] h-[100px]">
          <img
            src="https://www.fillmurray.com/640/360"
            alt="dummy" className="w-full h-full"
          />
        </div>
        <div className="mt-2 w-[100px] h-[100px]">
          <img
            src="https://www.fillmurray.com/640/360"
            alt="dummy" className="w-full h-full"
          />
        </div>
        <div className="mt-2 w-[100px] h-[100px]">
          <img
            src="https://www.fillmurray.com/640/360"
            alt="dummy" className="w-full h-full"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div
          className="flex justify-center items-center w-[60%] h-[60%]"
          style={style.border}
        >
          <div className="text-center">
            <div className="flex justify-center">
              <img src={upload} alt="upload" />
            </div>
            <p>Drag and Drop here</p>
            <button style={style.button}>
              <label for="file-upload" className="custom-file-upload">
                <i className="fa fa-cloud-upload"></i> Custom Upload
              </label>
              <input id="file-upload" type="file" className="none" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
