import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./ChatFeed";

const projectID = "32f34d99-af3d-4830-9718-92751ffa16a0";
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
