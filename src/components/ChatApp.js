import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./ChatFeed";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });
const projectID = process.env.REACT_APP_PROJECTID;

function ChatApp() {
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
}

export default ChatApp;
