import { React, useState } from 'react';
import ContentCard from '../Experience/ContentCard';

import chaldal from '../../images/chaldal.jpg';
import altersense from '../../images/altersense.png';

let professionalIntros = [
    "Collaborated with world class fullstack framework developers and experts of functional programming Paradigms. A masterclass in F#/ C# codebases that transpile into React components and .NET Actors.",
    "Trained and tested state-of-the-art computer vision libraries like yoloV7 and openCV. Integrated those models into web applications. Deployed those models into CI/CD pipelines."
]
function ProfessionalExperience(props) {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <div className="experiences-container">
            <ContentCard
                cardTitle="Engineering Intern @ Chaldal"
                cardSubtitle="(Spring 2023, 6 months)"
                cardDescription={professionalIntros[0]}
                imageUrl={chaldal}
            />
            <ContentCard
                cardTitle="Machine Learning Intern @ Alter Sense Ltd."
                cardSubtitle="Summer 2022, 3 months"
                cardDescription={professionalIntros[1]}
                imageUrl={altersense}
                transparentLogo={true}
            />
        </div>

    )
}


export default ProfessionalExperience;