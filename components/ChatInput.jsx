'use client'
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { FormEvent, useState } from "react"
import { db } from "../firebase"
import { toast } from 'react-hot-toast';
import ModelSelection from "./ModelSelection"
import useSWR from 'swr';




const ChatInput = ({ chatId }) => {
    const [prompt, setPrompt] = useState('');
    const { data: session } = useSession();

    const { data: model } = useSWR('model', { fallbackData: 'text-davinci-003' })

    // use SWR to get model
    // const model = 'text-davinci-003';

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!prompt) return;

        const input = prompt.trim();
        setPrompt('');

        const message = {
            text: input,
            createAt: serverTimestamp(),
            user: {
                _id: session.user?.email,
                name: session.user?.name,
                avatar: session.user?.image || " "
            }
        }

        await addDoc(collection(db, 'users', session.user?.email, 'chats', chatId, 'message'), message);

        const notifications = toast.loading(<b className="p-2 text-black">Please wait srisir_gpt is thinking about...</b>)
        await fetch(`/api/askQuestion`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                prompt: input, chatId, model, session
            })
        }).then(() => {
            // toast notification  to say successfull!
            toast.success('SriSir has got a result', {
                id: notifications,
            })
        })

    }
    return (
        <>
            <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
                <form onSubmit={submitHandler} className="p-5 space-x-5 flex">
                    <input
                        className="bg-transparent  focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
                        disabled={!session}
                        type={'text'}
                        placeholder='Type your message here....'
                        value={prompt}
                        onChange={e => setPrompt(e.target.value)}
                    />
                    <button
                        disabled={!prompt || !session} type='submit'
                        className="bg-[#11a37f] hover:opacity-50 text-white font-bold px-4 py-2 rounded cursor-pointer  disabled:cursor-not-allowed disabled:bg-gray-300"
                    >
                        <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
                    </button>
                </form>
                <div className="md:hidden">
                    <ModelSelection />
                </div>
            </div>
        </>
    )
}

export default ChatInput