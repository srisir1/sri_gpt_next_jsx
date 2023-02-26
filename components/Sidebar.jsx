'use client'
import NewChat from "./NewChat";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

const Sidebar = () => {
    const { data: session } = useSession();
    const [chats, loading, error] = useCollection(session && query(collection(db, 'users', session.user?.email, 'chats'), orderBy('createAt', 'asc')));
    if (error) return <h2>Somthing went to wrong..</h2>

    return (
        <div className="p-2  flex flex-col min-h-screen">
            <div className="flex-1">
                <NewChat />
                <div className="hidden sm:inline">
                    <ModelSelection />
                </div>
                {loading ? (
                    <div className="text-white text-center">Loadding chats...</div>
                ) : (
                    <div className="flex flex-col space-y-2 my-2">
                        {chats?.docs.map(chat => (
                            <ChatRow key={chat.id} id={chat.id} />
                        ))}
                    </div>
                )}
            </div>

            {session && (
                <div className="text-center text-white">
                    <img
                        onClick={() => signOut()}
                        src={session.user?.image || ' '} alt='Profile pic'
                        className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50 border-white border"
                    />
                    <p>{session.user?.name}</p>
                    <p>{session.user?.email}</p>
                </div>
            )}
        </div>
    )
}

export default Sidebar;