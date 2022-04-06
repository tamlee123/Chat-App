import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./ChatFeed";

const projectID = process.env.REACT_APP_PROJECTID;

function ChatApp() {
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default ChatApp;
