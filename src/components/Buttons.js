import { React, useState } from 'react';
import PropTypes from 'prop-types';

let identityTypes = [
    "engineer",
    "author",
    "artist"
]

function Buttons(props) {

    const handleButtonClick = (screenMode) => {
        props.changeScreen(screenMode);
    };

    return (
        <div>

            {identityTypes.map((identity, index) => (
                <button
                    key       = {index}
                    className = "button"
                    onClick   = {() => handleButtonClick(identity)}
                >
                    {identity}
                </button>
            ))}

        </div>
    )
    
}

export default Buttons;