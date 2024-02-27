//App.js

import ChatBot from 'react-simple-chatbot';



// Creating our own theme
const theme = {
	background: '#C9FF8F',
	headerBgColor: '#197B22',
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};

// Set some properties of the bot

function Chatbot (){
    const randomNumber = Math.floor(Math.random() * 3) + 1; // Generate a random number between 1 and 3

    const wrongAnswers = [
        "Wrong answer, try again.",
        "Oops, that's not it. Give it another shot.",
        "Not quite. Guess again!"
    ];

    return (
        <ChatBot
            steps={[
                {
                    id: '1',
                    message: 'What is your name?',
                    trigger: '2',
                },
                {
                    id: '2',
                    user: true,
                    trigger: '3',
                },
                {
                    id: '3',
                    message: 'Hi {previousValue}, nice to meet you!',
                    trigger: '4',
                },
                {
                    id: '4',
                    message: 'What number am I thinking?',
                    trigger: '5',
                },
                {
                    id: '5',
                    options: [
                        { value: 1, label: 'Number 1', trigger: randomNumber === 1 ? '7' : '6' },
                        { value: 2, label: 'Number 2', trigger: randomNumber === 2 ? '7' : '6' },
                        { value: 3, label: 'Number 3', trigger: randomNumber === 3 ? '7' : '6' },
                    ],
                },
                {
                    id: '6',
                    message: wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)],
                    trigger: '5',
                },
                {
                    id: '7',
                    message: 'Awesome! You are a telepath!',
                    end: true,
                },
            ]}
            floating={true}
            optionStyle={{ fontSize: '20px', padding: '10px', margin: '5px' }} // Styling for options
        />
    );
}
export default Chatbot;
