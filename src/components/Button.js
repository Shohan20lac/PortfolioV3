import { React, useState } from 'react';
import PropTypes from 'prop-types';

function Button(props) {

    let label = props.label;
    

    return (
        <button
            /*className={`button ${customClassName}`}>*/
            className="button"
        >
            {label}
        </button>
    );    // TODO: remember the use of $ and ``
}

export default Button;