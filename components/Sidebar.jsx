'use client'
import NewChat from "./NewChat";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Img1 from '../images/img3.png';
import Image from "next/image";

const Sidebar = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const [chats, loading, error] = useCollection(session && query(collection(db, 'users', session.user?.email, 'chats'), orderBy('createAt', 'asc')));
    if (error) return <h2>Somthing went to wrong..</h2>


    return (

        <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
            <div className="p-2  flex flex-col min-h-screen">
                {!session ? (
                    <>
                        <div className="flex-1">
                            {loading ? (
                                <div className="text-white text-center">Loadding chats...</div>
                            ) : (
                                <div className="flex flex-col space-y-2 my-2 text-white">
                                    <div>
                                        <Image src={Img1} width={300} height={100} alt='profile' />
                                    </div>
                                    <b className="text-xl text-center">Please login to access this resource</b>
                                </div>
                            )}
                        </div>
                        <Link className="text-white text-center" href={'/login'}>
                            <button className="px-5 py-2 rounded-sm bg-slate-50 text-black">Login</button>
                        </Link>
                    </>

                ) : (<>
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

                    <div className="text-center text-white">
                        <img
                            onClick={() => { signOut(); router.push('/') }}
                            src={session.user?.image || ' '} alt='Profile pic'
                            className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50 border-white border"
                        />
                        <p>{session.user?.name}</p>
                        <p>{session.user?.email}</p>
                    </div>
                </>)}

            </div>
        </div>

    )
}

export default Sidebar;