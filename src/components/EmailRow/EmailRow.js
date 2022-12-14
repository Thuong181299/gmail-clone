import { IconButton } from "@material-ui/core";
import CheckBox from "@material-ui/core/CheckBox";
import React from "react";
import "./EmailRow.css";
import { useNavigate } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useDispatch } from "react-redux";
import { selectMail } from "../../features/mailSlice";

export default function EmailRow({ id, title, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );

    navigate("/mail");
  };
  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow_options">
        <CheckBox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow_title">{title}</h3>
      <div className="emailRow_message">
        <h4>
          {subject}
          <span className="emailRow_description">{description}</span>
        </h4>
      </div>
      <p className="emailRow_description">{time}</p>
    </div>
  );
}
