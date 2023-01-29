import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Suzuki from "../../../img/Suzuki.png";
import "../../SuperAdmin.css";

const Email = () => {
  return (
    <>
      <div className="container h-[100vh] flex items-center justify-center">
        <div className="brv">
          <div className="row">
            <div className="col-lg-6 col-12 hidden lg:block">
              <div className="suzuimg text-center">
                <img src={Suzuki} />
              </div>
            </div>

            <div className="col-lg-6 col-12 flex items-center justify-center">
              <div className="check">
                <h5>
                  <b>Check Email</b>
                </h5>

                <p>
                  Plaese check your email and click on the provided <br />
                  link to confirm your password. If you don’t receive email,
                  click here to resend
                </p>

                <Button className="">
                  {" "}
                  <Link to={"/"} className="no-underline text-black">
                    {" "}
                    Back to Login{" "}
                  </Link>{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
