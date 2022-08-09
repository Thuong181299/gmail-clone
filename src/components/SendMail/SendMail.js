import React from "react";
import "./SendMail.css";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
// import { ErrorMessage } from "@hookform/error-message";
import { closeSendMessage } from "../../features/mailSlice";
import { db } from "../../firebase";
// import { collection } from "firebase/firestore";
import firebase from "firebase/compat/app";

export default function SendMail() {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New message</h3>
        <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail_close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          {...register("to", { required: "This is required." })}
          placeholder="To"
          type="text"
        />
        {/* {errors.to && errors.name.type === "required" && (
          <p className="sendMail_error">To is required</p>
        )} */}
        {/* <ErrorMessage errors={errors} name="name" />
        <ErrorMessage errors={errors} name="name" render={({ message }) => <p>{message}</p>} /> */}

        <input
          name="subject"
          {...register("subject", { required: true })}
          placeholder="Subject"
          type="text"
        />
        <input
          name="message"
          {...register("message", { required: true })}
          placeholder="Message..."
          className="sendMail_message"
          type="text"
        />
        <div className="sendMail_options">
          <Button className="sendMail_send" variant="contained" color="primary" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
