import { PrettyChatWindow } from "react-chat-engine-pretty";
import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '6ea12df3-fee5-49e4-b937-f0044e6d39d2', props.user.username, props.user.secrect )
  return (
    <div className="background">
    <MultiChatSocket {...chatProps}/>
    <MultiChatWindow {...chatProps}/>
    </div>
  );
};

export default ChatsPage;