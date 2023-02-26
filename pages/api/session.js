// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getServerSession } from "next-auth/next"
import authOptions from './auth/[...nextauth]'
// import { authOptions } from '../pages/api/auth/[...nextauth]';

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) res.status(404).json({ success: false, message: 'Must be login' })

  res.status(200).json({ success: true, session });
}
