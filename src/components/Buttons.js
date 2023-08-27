import { React, useState } from 'react';
import PropTypes from 'prop-types';


function Buttons(props) {

    return (
        <div>
            <button
                className="button"
                onClick=  { props.changeScreen("author") }
            >
                Engineer
            </button>
        </div>
    )
    
}

export default Buttons;