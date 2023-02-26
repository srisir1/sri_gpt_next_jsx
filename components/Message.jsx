
const Message = ({ message }) => {
    const isChatGpt = message?.user?.name === "ChatGpt"
    return (
        <div className={`py-5 text-white ${isChatGpt && 'bg-[#434654]'}`}>
            <div className="flex space-x-1 px-10 max-w-screen mx-auto">
                <img src={message?.user?.avatar} alt='pro pic' className="h-8 w-8 " />
                <p className="pt-1 text-sm">
                    {message.text}
                </p>
            </div>
        </div>
    )
}

export default Message;