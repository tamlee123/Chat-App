import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";

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

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </form>
  );
};

export default MessageForm;
