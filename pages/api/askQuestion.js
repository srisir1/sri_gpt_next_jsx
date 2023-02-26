// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import query from '../../lib/QueryApi'
import admin from "firebase-admin";
import { adminDb } from '../../firebaseAdmin';


export default async function handler(req, res) {
          const { prompt, chatId, model, session } = req.body;

          if (!prompt) {
                    res.status(404).json({ answer: 'Please provide a prompt' });
                    return;
          };
          if (!chatId) {
                    res.status(404).json({ answer: 'Please provide a valied chat id' });
                    return;
          }
          const response = await query(prompt, chatId, model);

          const message= {
                    text: response,
                    createAt: admin.firestore.Timestamp.now(),
                    user: {
                              _id: "ChatGpt",
                              name: "ChatGpt",
                              avatar: "avatar"
                    }
          };

          await adminDb.collection('users').doc(session?.user?.email).collection('chats').doc(chatId).collection('message').add(message)
          res.status(200).json({ answer: message.text })
}
