'use client'
import { signIn } from "next-auth/react";
import Image from "next/image";
import img1 from '../images/img3.png';

const Login = () => {
    return (
        <>
            <div className="bg-[#11a37f] h-screen flex flex-col items-center justify-center">
                <Image
                    src={img1}
                    alt={'alo'}
                    width={200}
                    height={250}
                    loading='eager'
                    className="rounded-full"
                />
                <button
                    onClick={() => signIn('google')}
                    className="text-white text-3xl font-bold animate-pulse"
                >Sign in to use SriSir_Gpt</button>
            </div>

        </>
    )
}

export default Login