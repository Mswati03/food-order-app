//App.js

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Review from '../Review';
import { Component } from 'react';

const step = [
	{
		id: '0',
		message: 'Please leave a review!',

		// This calls the next id
		// i.e. id 1 in this case
			}, 
            
];

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
const config = {
	
	floating: true,
};
class Chatbot extends Component {
	render() {
        return (
            <ChatBot

					// This appears as the header
					// text for the chat bot
					headerTitle="Instant Eats Bot"
                    steps={[
                        {
                            id: '1',
                            message: 'What is your email?',
                            trigger: 'email',
                        },
                        {
                            id: 'email',
                            user: true,
                            trigger: '3',
                        },
                        {
                            id: '3',
                            message: 'Hi {previousValue}! Leave a review',
                            trigger: 'review',
                        },
                        {
                            id: 'review',
                            message: 'Great! Check out your summary',
                            trigger: 'review',
                        },
                        {
                            id: 'review',
                            component: <Review />,
                            asMessage: true,
                            trigger: 'end-message',
                        },
                        {
                            id: 'end-message',
                            message: 'Thanks! Your data was submitted successfully!',
                            end: true,
                        },
                    ]}
					{...config}

				/>
			
	
	);
}
}
export default Chatbot;
