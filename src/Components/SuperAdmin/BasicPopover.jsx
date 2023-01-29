import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Vectorr from '../img/Vectorr.png';
export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button aria-describedby={id} onClick={handleClick}>
        <NotificationsIcon style={{ color: "gray" }} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="" style={{ width: "400px" }}>
          <div className="form pt-5">
            <div className="container">
              <div className="click">
                <div className="belltext d-flex">
                  <img
                    src={Vectorr}
                    style={{ height: "15px", width: "15px" }}
                  />

                  <p className="ps-3">
                    <b>Name</b> Lorem Ipsum is simply dummy text of the printing{" "}
                  </p>
                </div>

                <div className="vl d-flex">
                  <h6
                    className="ps-3"
                    style={{ marginLeft: "10px", paddingTop: "-150px" }}
                  >
                    22 DEC 7:20 PM
                  </h6>
                </div>
              </div>

              <div className="click pt-3">
                <div className="belltext d-flex">
                  <img
                    src={Vectorr}
                    style={{ height: "15px", width: "15px" }}
                  />

                  <p className="ps-3">
                    <b>Name</b> Lorem Ipsum is simply dummy text of the printing{" "}
                  </p>
                </div>

                <div className="vl d-flex">
                  <h6
                    className="ps-3"
                    style={{ marginLeft: "10px", paddingTop: "-150px" }}
                  >
                    22 DEC 7:20 PM
                  </h6>
                </div>
              </div>

              <div className="click pt-3">
                <div className="belltext d-flex">
                  <img
                    src={Vectorr}
                    style={{ height: "15px", width: "15px" }}
                  />

                  <p className="ps-3">
                    <b>Name</b> Lorem Ipsum is simply dummy text of the printing{" "}
                  </p>
                </div>

                <div className="vl d-flex">
                  <h6
                    className="ps-3"
                    style={{ marginLeft: "10px", paddingTop: "-150px" }}
                  >
                    22 DEC 7:20 PM
                  </h6>
                </div>
              </div>

              <div className="click pt-3">
                <div className="belltext d-flex">
                  <img
                    src={Vectorr}
                    style={{ height: "15px", width: "15px" }}
                  />

                  <p className="ps-3">
                    <b>Name</b> Lorem Ipsum is simply dummy text of the printing{" "}
                  </p>
                </div>

                <div className="vl d-flex">
                  <h6
                    className="ps-3"
                    style={{ marginLeft: "10px", paddingTop: "-150px" }}
                  >
                    22 DEC 7:20 PM
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Popover>
    </div>
  );
}
