import { React, useState } from 'react';
import PropTypes from 'prop-types';


function Buttons(props) {

    const handleButtonClick = (screenMode) => {
        props.changeScreen(screenMode);
    };

    return (
        <div>
            <button
                className="button"
                onClick={ () => handleButtonClick("engineer")}
            >
                Engineer
            </button>
        </div>
    )
    
}

export default Buttons;