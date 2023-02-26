import React from 'react'
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

const Home = () => {
    return (
        <div className='text-white flex  flex-col items-center justify-center h-screen'>
            <h1 className='text-5xl text-bold mb-20'>SriSir_Gpt</h1>

            <div className='flex space-x-2 text-center'>
                <div>
                    <div className='flex flex-col justify-center items-center mb-5'>
                        <SunIcon className="h-8 w-8 " />
                        <h2>Example </h2>
                    </div>
                    <div className='space-y-2'>
                        <p className='infoTech'>"Explain quantum computing in simple terms" →</p>
                        <p className='infoTech'>Got any creative ideas for a 10 year old’s birthday?</p>
                        <p className='infoTech'>How do I make an HTTP request in Javascript?</p>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col justify-center items-center mb-5'>
                        <BoltIcon className="h-8 w-8 " />
                        <h2>Capabilities </h2>
                    </div>
                    <div className='space-y-2'>
                        <p className='infoTech'>Remembers what user said earlier in the conversation</p>
                        <p className='infoTech'>Allows user to provide follow-up corrections</p>
                        <p className='infoTech'>Trained to decline inappropriate requests</p>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col justify-center items-center mb-5'>
                        <ExclamationTriangleIcon className="h-8 w-8 " />
                        <h2>Limitations </h2>
                    </div>
                    <div className='space-y-2'>
                        <p className='infoTech'>May occasionally generate incorrect information</p>
                        <p className='infoTech'>May occasionally produce harmful instructions or biased content</p>
                        <p className='infoTech'>Limited knowledge of world and events after 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;