import { React, useState , useEffect} from 'react';
import PropTypes from 'prop-types';

let identityTypes = [
    "engineer",
    "author",
    "artist"
]

function Buttons (props) {

    const [isSlidUp, setIsSlidUp] = useState(false);

    const handleButtonClick = (screenMode) => {
        props.setCurrentScreen(screenMode);
        setIsSlidUp(true);
    };

    return (
        <div>

            {identityTypes.map((identity, index) => (

                <button
                    key={index}
                    className={`identity-button`}
                    id={`${identity}-button-${props.currentScreen === identityTypes[index] ? 'pressed': ''}`}
                    onClick = {
                        () => {
                            props.updateClickedButton(identity);
                            handleButtonClick(identity)
                        }
                    }
                >
                    {identity.charAt(0).toUpperCase() + identity.slice(1)}
                </button>
            ))}

        </div>
    )
    
}

export default Buttons;