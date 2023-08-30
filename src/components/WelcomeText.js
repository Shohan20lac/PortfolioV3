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

function WelcomeText  (props) {

    return (
        <div className="typewriter">
            <p className="background-text"> Hi! Welcome to my portfolio website.<br/></p>
            <p className="background-text"> Click on a <button className="identity-button" id="myButton">Tag</button> above to start exploring.</p>
        </div>
    );
}

export default WelcomeText;
