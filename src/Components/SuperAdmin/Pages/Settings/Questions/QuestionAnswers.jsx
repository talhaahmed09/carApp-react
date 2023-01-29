import React, { useState, useEffect } from "react";
import kuhl from "../../../../img/kuhl.png";
import AuthUser from "../../../Auth/AuthUser";
import Grid from "@mui/material/Grid";
import "./QuestionButton.css";
import { QsAns } from "./QsAns";

const QuestionAnswers = () => {
  const { http } = AuthUser();

  const [qsList, setQsList] = useState();
  const [loading, setLoading] = useState();
  const [checkQs, setCheckQs] = useState(false);
  const [editItem, setEditItem] = useState();

  // Api Call Fetch Questions List
  const fetchQuestionsList = async () => {
    setLoading(true);
    let res = await http.get("/question-type");
    setQsList(res.data.responseMessage);
    setLoading(false);
  };

  // Api Call in useEffect
  useEffect(() => {
    fetchQuestionsList();
  }, []);

  const handleClick = (data) => {
    setEditItem(data);

    setCheckQs(!checkQs);
  };

  return (
    <div>
      {checkQs ? (
        <QsAns data={editItem} />
      ) : (
        <>
          <div className="flex justify-between border-slate-400">
            <h1 className="text-base text-bold mb-0 ml-5">Questions</h1>
          </div>

          <hr />

          <div className="generl">
            <p>Questions</p>
          </div>
          <br />
          <Grid
            container
            spacing={{ xs: 2, md: 5 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {loading ? null : (
              <>
                {qsList?.map((data, index) => (
                  <Grid item xs={6} sm={4} md={4} key={index}>
                    <button
                      type="button"
                      className="button2"
                      onClick={() => handleClick(data)}
                    >
                      <span className="button__icon">{data.id}</span>

                      <span className="button__text ">
                        <img src={kuhl} alt="kuhl" className="mr-2" />

                        {data.qt_name}
                      </span>
                    </button>
                  </Grid>
                ))}
              </>
            )}
          </Grid>
        </>
      )}
    </div>
  );
};

export default QuestionAnswers;
