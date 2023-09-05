import { React, useState } from 'react';
import Accordion from '../Accordion';

function EngineerScreen(props) {

    return (
        <>
            <p className="background-text"> I strive to create data-driven solutions at just the right level of complexity and customizability that fits the client's
                needs. <br /> <br /> Since my recent experiences in software engineering and ML engineering, I am motivated to dedicate
            myself full-time to the world of Data Science, Software Development and DevOps engineering. </p>

            <Accordion />

        </>
    );
}

export default EngineerScreen;