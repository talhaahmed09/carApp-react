import * as React from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import threedot from "../../img/3dot.png";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import delImg from "../../img/del.png";
import { CreateBtn } from "../../Buttons";
import AuthUser from "../Auth/AuthUser";
import { Link } from "react-router-dom";
import { deleteCompany } from "../../../apis/company";

export default function SelectPopover(props) {
  const { http } = AuthUser();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [openDelete, setOpenDelete] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const HandlerEdit = () => {
    props.setEditIndex(props.id);
    props.handleEdit(props.id);
  };
  const handleClickOpenDelete = () => {
    setOpenDelete(true);
    // console.log("hello");
  };

  const handleDeleteAPI = () => {
    deleteCompany(props.id)
      .then((res) => {
        props.refresh();
        setOpenDelete(false);
      })
      .catch((err) => console.log(err.message));
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

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
        <img src={threedot} alt="threedot" />
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
        <div className="w-[100px]">
          <Button style={{ width: "100%", color: "black" }}>Copy</Button>
          <Button
            onClick={HandlerEdit}
            style={{ width: "100%", color: "black" }}
          >
            Edit
          </Button>
          <Button
            style={{ width: "100%", color: "black" }}
            onClick={handleClickOpenDelete}
          >
            Delete
          </Button>
        </div>
      </Popover>
      {/* // dailog delete */}

      <Dialog
        fullScreen={fullScreen}
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <div className="lg:absolute lg:top-[-40px] lg:left-[40%] flex justify-center">
            <img src={delImg} alt="del" />
          </div>
          <div className="bg-white p-4 mt-4">
            <h1 className="text-2xl">Are You Sure To Delete This Company?</h1>
          </div>
          <div className="flex justify-center">
            <Button
              autoFocus
              onClick={handleCloseDelete}
              className="text-black"
            >
              Cancel
            </Button>

            <CreateBtn onClick={handleDeleteAPI} name="Delete" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
