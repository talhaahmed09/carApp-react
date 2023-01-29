import React from "react";
import Suzuki from "../../../img/Suzuki.png";
import Oldtimer from "../../../img/Oldtimer.png";
import "../../SuperAdmin.css";
import EmailIcon from "@mui/icons-material/Email";
import LockKeyOpen from "../../../img/LockKeyOpen.png";
import { useNavigate } from "react-router-dom";

const Forgotpas = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container h-[100vh] flex items-center justify-center">
        <div className="brv">
          <div className="row">
            <div className="col-lg-6 col-12 hidden lg:block">
              <div className="suzuimg text-center">
                <img src={Suzuki} alt="suzuki" />
              </div>
            </div>

            <div className="col-lg-6 col-12 flex justify-center">
              <div>
                <div className="oldimg flex justify-center">
                  <img src={LockKeyOpen} alt="oldtimer" />
                </div>
                <div className="oldimg  ">
                  <div className="pinkbox shadow">
                    <h2>
                      <b>Forgot Password</b>
                    </h2>

                    <div className="login-form">
                      <form>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                          />
                          <span className="input-icon">
                            <EmailIcon />
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                  <button
                    className="login-btn mt-3"
                    onClick={() => {
                        navigate(`/email`);
                    }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgotpas;
