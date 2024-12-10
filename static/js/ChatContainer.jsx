const ChatContainer = ({ isRecursive, faissCount, vectorDim }) => {
    const [messages, setMessages] = React.useState([]);
    const chatRef = React.useRef(null);

    // Initial welcome message
    React.useEffect(() => {
        setMessages([
            {
                type: 'assistant',
                content: 'Please select a vector representation and segmentation strategy.'
            },
            {
                type: 'assistant',
                content: `
                    <strong>Database Statistics</strong><br><br>
                    Number of FAISS Vectors: ${faissCount}<br>
                    Vector Dimensions: ${vectorDim}<br><br>
                    Please describe the topics or content of the nanoscience papers you want to search for.
                `
            }
        ]);
    }, [faissCount, vectorDim]);

    // Remove initial message after the next message
    React.useEffect(() => {
        if (messages.length > 1) {
            setMessages(prevMessages => prevMessages.filter((_, index) => index !== 0));
        }
    }, [messages]);

    // Scroll to bottom when messages change
    React.useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    return React.createElement(
        'div',
        { 
            className: 'chat-outer-container'
        },
        React.createElement(
            'div',
            { 
                className: 'chat-scroll-area',
                ref: chatRef
            },
            React.createElement(
                'div',
                { 
                    className: 'chat-container',
                    id: 'chatContainer'
                },
                messages.map((message, index) => 
                    React.createElement('div', {
                        key: index,
                        className: `${message.type}-message`,
                        dangerouslySetInnerHTML: { __html: message.content }
                    })
                )
            )
        )
    );
}; 
