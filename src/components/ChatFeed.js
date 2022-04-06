import MessageForm from "./MessageForm";
import UserMessage from "./UserMessage";
import OtherUserMessage from "./OtherUserMessage";
import chatImg from "../assets/chat.jpg";
import { NewChatForm, ChatHeader } from "react-chat-engine";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages, conn } = props;
  const chat = chats && chats[activeChat];
  //if reciever read msg
  const renderReadReceipts = (message, isUserMessage) =>
    chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isUserMessage ? "right" : "left",
              backgroundImage:
                person.person.avatar && `url(${person.person.avatar})`,
            }}
          />
        )
    );
  const renderMessages = () => {
    const keys = Object.keys(messages);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isUserMessage = userName === message.sender.username;
      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isUserMessage ? (
              <UserMessage message={message} />
            ) : (
              <OtherUserMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isUserMessage ? "18px" : "0px",
              marginLeft: isUserMessage ? "0px" : "68px",
            }}
          >
            {renderReadReceipts(message, isUserMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat)
    return (
      <div>
        <p className="create-chat">Create a chat to connect people</p>
        <img className="chat-img" src={chatImg} alt="chat icon" />
        {props.renderNewChatForm ? (
          props.renderNewChatForm(conn)
        ) : (
          <NewChatForm
            onClose={props.onClose ? () => props.onClose() : undefined}
          />
        )}
      </div>
    );
  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        {props.renderChatHeader ? props.renderChatHeader(chat) : <ChatHeader />}
      </div>
      <div>{renderMessages()}</div>

      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
