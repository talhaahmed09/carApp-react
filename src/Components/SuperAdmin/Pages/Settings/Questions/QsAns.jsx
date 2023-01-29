import React, { useState, useEffect } from "react";
import { CreateBtn } from "../../../../Buttons";
import { TextField } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import QuestionAnswers from "./QuestionAnswers";
import AuthUser from "../../../Auth/AuthUser";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "../../All.css";
import Icon from "../../../../img/Icon.png";
import delImg from "../../../../img/del.png";
import { toast } from "react-toastify";

export const QsAns = (props) => {
  const qsId = props.data.id;

  const { http } = AuthUser();

  const [checkQs, setCheckQs] = useState(false);
  const [qsList, setQsList] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [editItem, setEditItem] = useState("");
  const [editCheck, setEditCheck] = useState(false);

  const [loading, setLoading] = useState();

  const fetchQuestions = async () => {
    setLoading(true);
    let res = await http.get(`/question`);
    const resData = res.data.responseMessage;
    setQsList(resData.filter((qustions) => qustions.qt_id === qsId));
    setLoading(false);
  };

  // Api Call in useEffect
  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleCancel = () => {
    setCheckQs(!checkQs);
  };

  const handleSave = () => {
    setCheckQs(!checkQs);
  };

  const handleBack = () => {
    setCheckQs(!checkQs);
  };

  // Handle Create question Api on create quesiton button
  const handleCreateQuestion = () => {
    const formData = new FormData();
    formData.append("qt_id", qsId);
    formData.append("question", question);
    formData.append("answer", answer);

    http
      .post(`/question`, formData)
      .then((res) => {
        toast.success("create successfully");
        setOpen(false);
        fetchQuestions();
      })
      .catch((err) => toast.error(err.message));
  };

  // Handle Edit question Api on create quesiton button
  const handleEditQuestion = () => {
    const formData = new FormData();

    formData.append("qt_id", qsId);

    {
      question !== ""
        ? formData.append("question", question)
        : formData.append("question", editItem.question);
    }

    {
      answer !== ""
        ? formData.append("answer", answer)
        : formData.append("answer", editItem.answer);
    }

    formData.append("_method", "PUT");

    http
      .post(`/question/${editItem.id}`, formData)
      .then((res) => {
        toast.success('update successfully')
        setOpen(false);
        fetchQuestions();
      })
      .catch((err) => console.log(err.message));
  };

  // Dialog Code Create, Edit
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditCheck(false);
  };

  // Delete Modal
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  // Delete Modal
  const handleDeleteAPI = () => {
    const formData = new FormData();
    formData.append("_method", "DELETE");
    http
      .post(`/question/${editItem.id}`, formData)
      .then((res) => {
        setOpenDelete(false);
        fetchQuestions();
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      {checkQs ? (
        <QuestionAnswers />
      ) : (
        <div>
          <div
            className="flex border-slate-400 backButton "
            onClick={handleBack}
          >
            <WestIcon />
            <h1 className="text-base text-bold mb-0 ml-5">Questions</h1>
          </div>
          <hr />
          <div className="generl  ">
            <p>Questions</p>
          </div>{" "}
          <br />
          {qsList?.map((data, index) => {
            return (
              <div key={index}>
                <div className="flex justify-between mb-3">
                  <p>
                    {" "}
                    <strong>
                      {" "}
                      Qs.{index + 1} {data.question}
                    </strong>{" "}
                  </p>

                  {/* Edit, Delete Qustion Button */}
                  <div className="">
                    <Button
                      onClick={() => {
                        setEditItem(data);
                        handleClickOpen();
                        setEditCheck(true);
                      }}
                      style={{
                        backgroundColor: "  #5A4A42",
                        color: "#fff",
                        padding: "10px 10px",
                        diplay: "flex",
                        alignItems: "center",
                        marginRight: "5px",
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => {
                        setEditItem(data);
                        handleClickOpenDelete();
                      }}
                      style={{
                        backgroundColor: "  #5A4A42",
                        color: "#fff",
                        padding: "10px 10px",
                        diplay: "flex",
                        alignItems: "center",
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
                <TextField
                  id="outlined-multiline-static"
                  label="Answer"
                  multiline
                  rows={5}
                  fullWidth
                  value={data.answer}
                />
                <br /> <br />
                <br />
              </div>
            );
          })}
          {/* Create New Quesiton Button */}
          <div className=" flex justify-end">
            <Button
              onClick={handleClickOpen}
              style={{
                backgroundColor: "  #5A4A42",
                color: "#fff",
                padding: "10px 10px",
                diplay: "flex",
                alignItems: "center",
              }}
            >
              Add New Question +
            </Button>
          </div>
          <br />
          <hr />
          {/* Create/Edit Question Modal */}
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <DialogContent style={{ width: "800px", backgroundColor: "white" }}>
              <div className="lg:absolute lg:top-[-40px] lg:left-[60%] flex justify-center">
                <img src={Icon} alt="Icon" />
              </div>
              <div className="bg-white p-4 mt-4">
                {editCheck ? (
                  <h1 className="text-2xl text-center"> Edit This Question</h1>
                ) : (
                  <h1 className="text-2xl text-center">
                    {" "}
                    Create Your Question
                  </h1>
                )}
              </div>
              <div className="questionAnswer">
                <TextField
                  onChange={(e) => setQuestion(e.target.value)}
                  defaultValue={
                    editItem && editItem.question ? editItem.question : ""
                  }
                  id="outlined-multiline-static"
                  label="Enter your question"
                  fullWidth
                />
                <br /> <br />
                <TextField
                  defaultValue={
                    editItem && editItem.answer ? editItem.answer : ""
                  }
                  onChange={(e) => setAnswer(e.target.value)}
                  id="outlined-multiline-static"
                  label="Enter Answer"
                  fullWidth
                />
              </div>
              <br /> <br />
              <div className="flex justify-center">
                <Button
                  autoFocus
                  onClick={() => {
                    handleClose();
                  }}
                  className="text-black"
                >
                  Cancel
                </Button>

                <CreateBtn
                  onClick={() => {
                    if (editCheck === true) {
                      handleEditQuestion();
                    } else {
                      handleCreateQuestion();
                    }
                  }}
                  name="Create"
                />
              </div>
            </DialogContent>
          </Dialog>
          {/* Delete Modal */}
          <Dialog
            fullScreen={fullScreen}
            open={openDelete}
            onClose={handleCloseDelete}
            aria-labelledby="responsive-dialog-title"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <DialogContent>
              <div className="lg:absolute lg:top-[-40px] lg:left-[40%] flex justify-center">
                <img src={delImg} alt="del" />
              </div>
              <div className="bg-white p-4 mt-4">
                <h1 className="text-2xl">
                  Are You Sure To Delete This Question?
                </h1>
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
          <div className="flex justify-between my-6">
            <CreateBtn
              style={{
                color: "#000",
                padding: "6px 22px",
                diplay: "flex",
                alignItems: "center",
              }}
              onClick={handleCancel}
              name="Cancel"
            />
            <div className="mr-5">
              <CreateBtn
                style={{
                  color: "#000",
                  padding: "6px 22px",
                  diplay: "flex",
                  alignItems: "center",
                }}
                onClick={handleSave}
                name="Save"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
