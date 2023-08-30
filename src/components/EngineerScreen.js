import { React, useState } from 'react';
import ContentCard from './ContentCard';
import Experiences from './Experiences';

function EngineerScreen(props) {

    return (
        <>

            <p className="background-text"> I strive to create data-driven solutions at just the right level of complexity and customizability that fits the client's
                needs. <br /> <br /> Since my recent experiences in software engineering and ML engineering, I am motivated to dedicate
            myself full-time to the world of Data Science, Software Development and DevOps engineering. </p>

            <h3 className="background-text topheader"> Academic Experiences </h3>

            <Experiences category="Academic Experiences"/>
        </>
    );
}

export default EngineerScreen;