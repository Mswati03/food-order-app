import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot';


const  SimpleForm = () => {
    const steps = [
        {
            id: '1',
            message: 'What is your name?',
            trigger: '3'
        },
        {
            id: '2',
            
             message: 'Thank you for your review',
            end: true
        },
        {
            id: '3',
           user: true,
           trigger: '2',
            
        }
       
    ];
console.log(steps);
    return (
        <div>
            <ChatBot
                steps={steps}
                floating={true}
                optionStyle={{ fontSize: '20px', padding: '10px', margin: '5px' }} />
        </div>
    )
}
export default SimpleForm;
