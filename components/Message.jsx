
import Image from 'next/image';
import igdb from '../images/icon1.png'
const Message = ({ message }) => {
    const isChatGpt = message?.user?.name === "ChatGpt"
    return (
        <div className="flex-1">
            <div className={`py-5 text-white ${isChatGpt && 'bg-[#21242f]'}`}>
                <div className="flex space-x-1 px-10 max-w-screen mx-auto">

                    {message?.user?.avatar !== 'avatar' ? (
                        <img src={message?.user?.avatar} alt='pro pic' className="h-8 w-8 " />
                    ) : (
                        <Image src={igdb} width={30} height={30} alt='hdadhak' className="h-8 w-8 mr-3" />
                    )}
                    <p className="pt-1 text-sm">
                        {message.text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Message;