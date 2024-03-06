import React, { useState } from 'react';
import axios from 'axios';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Gif from '../assets/logo.png'
import AniGif from '../assets/gif.gif'
import AskD from '../assets/AskDe.png'
const ChatBot = () => {
    const [userInput, setUserInput] = useState('');
    const [systemPrompt, setSystemPrompt] = useState('');
    const [userModel, setUsrModel] = useState('gemma');
    const [output, setOutput] = useState("Hello , welcome to the conversation ! 👋 What would you like to talk about today ? I'm a large language model , and I'm here to help you with your queries.");
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSystemPromptChange = (e) => {
        setSystemPrompt(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Show loading animation
        setLoading(true);

        // Make an API call to fetch the response from Ollama
        try {
            const response = await sendRequest(userInput, systemPrompt);
            handleResponse(response.data);
        } catch (error) {
            console.error('Error fetching bot response:', error);
        } finally {
            // Hide loading animation
            setLoading(false);
        }
    };

    const sendRequest = async (messageContent, systemPrompt) => {
        const requestData = {
            model: userModel,
            messages: [
                {
                    role: 'system',
                    content: systemPrompt,
                },
                {
                    role: 'user',
                    content: messageContent,
                },
            ],
        };

        const apiUrl = 'http://localhost:11434/api/chat';

        try {
            const response = await axios.post(apiUrl, requestData);
            return response;
        } catch (error) {
            console.error('Error sending the request:', error);
            throw error;
        }
    };

    const handleResponse = (response) => {
        const arr = response.split('\n');
        const outputArr = [];

        try {
            arr.forEach((item) => {
                const responseObj = JSON.parse(item);
                const word = responseObj.message.content;
                outputArr.push(word);
            });
        } catch (error) {
            console.error('Error parsing response:', error);
        }

        setOutput(outputArr.join(' '));
    };
    const renderFormattedText = (text) => {
        const lines = text.split('\n');
        let isInCodeBlock = false;
        let codeBlock = [];
        let listItems = [];

        return lines.map((line, index) => {
            if (line.trim().startsWith('```')) {
                isInCodeBlock = !isInCodeBlock;

                if (isInCodeBlock) {
                    codeBlock = [];
                    return null;
                } else {

                    const codeBlockContent = codeBlock.join('\n');
                    return (

                        <SyntaxHighlighter language="javascript" style={docco}>
                            {codeBlockContent}
                        </SyntaxHighlighter>
                    );
                }
            }

            if (isInCodeBlock) {
                codeBlock.push(line);
                return null; // Skip lines within the code block
            }

            if (line.trim().startsWith('**')) {
                const headingContent = line.match(/\*\*(.*?)\*\*/)[1];
                return <h2 key={index}>{headingContent}</h2>;
            }

            if (line.trim().startsWith('*')) {
                const listItemContent = line.substring(1).trim();
                listItems.push(<li key={index}>{listItemContent}</li>);
                return null; // Skip lines added to the list
            }

            return <p key={index}>{line}</p>;
        }).concat(listItems);
    };


    return (
        <div className="flex bg-zinc-950 flex-col h-screen items-center overflow-hidden">
            <header className="flex text-white p-4 left-0 right-0 absolute backdrop-blur-md bg-black/30 items-center justify-between">

                <div className='flex items-center gap-2'>
                    <img src={Gif} className='bg-blend-darken h-[40px] ' />
                    <h1 className=" text-2xl font-bold">Diligent AI</h1>
                </div>
                <div className='flex gap-2'>
                {/* <a href="https://www.linkedin.com/in/atharva-arbat-b594211ab/" target='_blank'>Linkedin</a> */}
                <p className='text-zinc-400'>Made with ❤️ by Atharva Arbat</p>

                </div>
            </header>

            <main className="flex-1 overflow-y-auto  p-4 pt-20">
                
                <div className="bg-black border border-zinc-900 p-6 text-white rounded-lg shadow-lg max-w-[700px] md:min-w-[800px] min-w-[500px]">
                    {/* Render the bot response here */}
                    {loading ? (
                        <div className="text-gray-100 flex flex-col justify-center items-center">
                            <img src={AniGif} className='bg-blend-darken h-[110px]' />
                        </div>
                    ) : (
                        <div className="text-gray-200">
                            <div className='flex items-center gap-2 mb-2'>
                                <img src={Gif} className='bg-blend-darken h-[30px]' />
                                <p className='font-bold'>Assistant</p>
                            </div>
                            {renderFormattedText(output)}
                        </div>
                    )}
                </div>
                <p className='text-zinc-600 absolute bottom-1 right-1 text-xs'>©️Copyright - Atharva Arbat | 2024</p>
            </main>

            <footer className="bg-zinc-950 border-t flex justify-center border-zinc-800 p-4 w-full ">
                {/* Input box for user interaction */}
                <form onSubmit={handleSubmit} className="flex flex-col min-w-[500px]  md:min-w-[800px] items-center gap-2 max-w-[800px]">
                    <div className='flex w-full gap-4 justify-center'>
                        <input
                            type="text"
                            aria-multiline="true"
                            value={userInput}
                            onChange={handleInputChange}
                            placeholder="Type your prompt"
                            className="mb-2 px-2 py-2 flex-1 rounded-lg border border-zinc-800 bg-zinc-900 text-white focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-black 
                        text-blue-500 px-4 h-fit py-2 rounded-[40px]
                         hover:bg-zinc-900 w-[150px] border border-zinc-900"
                        >
                            <img src={AskD} />
                        </button>


                    </div>
                    <div className='flex w-full gap-4 items-center'>
                    <textarea
                        type="text"
                        rows={1}
                        value={systemPrompt}
                        onChange={handleSystemPromptChange}
                        placeholder="Enter system prompt"
                        className="mb-2 px-2 py-2 rounded-lg flex-1 w-full border border-zinc-800 bg-zinc-900 text-white focus:outline-none"
                    />
                        <input
                        type="text"
                        value={userModel}
                       
                        onChange={(e)=> setUsrModel(e.target.value)}
                        placeholder="Model Name"
                        className="mb-2 px-2 py-2 rounded-lg border border-zinc-800 bg-zinc-900 text-white focus:outline-none"
                    />


                    </div>
                    
                  

                </form>
            </footer>
        </div>
    );
};

export default ChatBot;
