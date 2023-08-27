import { React, useState } from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const identityTypes = [
    "engineer",
    "author",
    "artist"
]

function Buttons(props) {

    return (
        <div>
            {identityTypes.map (
                (identity, index) => (
                    <Button
                        index={index}
                        label={identity}
                    />
                )
            )}
        </div>
    )
    
}

Button.propTypes = {
    value: PropTypes.string.isRequired,
    customClassName: PropTypes.string.isRequired
};

export default Buttons;