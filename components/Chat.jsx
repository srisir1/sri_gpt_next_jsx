"use client";

import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import { collection, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Message from './Message';


function Chat({ chatId }) {
  const { data: session } = useSession();
  const [message] = useCollection(session && query(collection(db, 'users', session.user?.email, 'chats', chatId, 'message'), orderBy('createAt', 'desc')));

  return (
    <div className='flex flex-col justify-center items-center'>
      {message?.empty && (
        <>
          <p className='mt-10 text-center text-white'>Type a prompt in below to get started!</p>
          <ArrowDownCircleIcon className='h-10 w-10 max-auto mt-5 text-white animate-bounce' />
        </>
      )}
      {message?.docs?.map((chats) => (
        <Message key={chats.id} message={chats.data()} />
      ))}
    </div>
  )
}

export default Chat;