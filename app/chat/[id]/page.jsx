'use client'
import { useSession } from "next-auth/react";
import Chat from "../../../components/Chat";
import ChatInput from "../../../components/ChatInput";
import Home from "../../../components/Home";

const ChatPage = ({ params: { id } }) => {
        const { data: session } = useSession();

        return (
                <>
                        {!session ? (
                                <Home />
                        ) : (
                                <div className="flex flex-col h-screen overflow-y-scroll">
                                        <Chat chatId={id} />
                                        <ChatInput chatId={id} />
                                </div>
                        )}
                </>

        )
}

export default ChatPage;