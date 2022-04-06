import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";
import LogOut from "./Logout";

const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;
  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping(props, chatId);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); //not do browser refresh onece submitting the form

    const text = value.trim();
    //message comes from the react chat engine
    //passing threads, chatId, and text
    if (text.length > 0) sendMessage(creds, chatId, { text });
    setValue("");
  };
  //create an event to contain img
  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: "" });
  };

  return (
    <div>
      <form className="message-form" onSubmit={handleSubmit}>
        <input
          className="message-input"
          placeholder="Send a message..."
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <label htmlFor="upload-button">
          <span className="image-button">
            <PictureOutlined className="picture-icon" />
          </span>
        </label>
        <input
          type="file"
          multiple={false}
          id="upload-button"
          style={{ display: "none" }}
          onChange={handleUpload.bind(this)}
        />
        <button type="submit" className="send-button">
          <SendOutlined className="send-icon" />
        </button>
      </form>
      <div>
        <LogOut />
      </div>
    </div>
  );
};

export default MessageForm;
