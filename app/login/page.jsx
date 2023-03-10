
'use client'
import { useSession } from "next-auth/react";
import Home from '../../components/Home'
import Login from '../../components/Login'

const LoginPage = () => {
  const { data: session } = useSession();
  return (
    <>
      {!session ? (
        <Login />
      ) : (
        <Home />
      )}

    </>
  )
}

export default LoginPage