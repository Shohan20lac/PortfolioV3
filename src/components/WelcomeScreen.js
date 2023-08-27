import React from 'react';
import ReactDOM from 'react-dom/client';
import Buttons from './Buttons'

async function typeText(element) {
    const content = element.innerHTML;
    element.innerHTML = '';

    for (let i = 0; i < content.length; i++) {
        element.innerHTML += content[i];
        await new Promise(resolve => setTimeout(resolve, 50)); // Typing speed in milliseconds
    }
}
async function animateParagraphs() {
    const textElements = document.querySelectorAll('.text');
    for (const textElement of textElements) {
        await typeText(textElement);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay between paragraphs
    }
}

function WelcomeScreen(props) {

    return (
        <div className="typewriter">
            <p> Hi! Welcome to my portfolio website.<br/></p>
            <p> Choose a skill tree below to begin exploring.</p>
            <Buttons
                flexDir="row"
                changeScreen={props.changeScreen}
            />
        </div>
    );
}

export default WelcomeScreen;
