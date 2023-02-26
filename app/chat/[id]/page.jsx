import Chat from "../../../components/Chat";
import ChatInput from "../../../components/ChatInput";

const ChatPage = ({ params: { id } }) => {

        return (
                <>
                        <div className="flex flex-col h-screen overflow-y-scroll">
                                <Chat chatId={id} />
                                <ChatInput chatId={id} />
                        </div>
                </>
        )
}

export default ChatPage;