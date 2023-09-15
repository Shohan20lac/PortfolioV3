import MenuCard from "./MenuCard"
import {useState} from 'react'

function Icon({ imageUrl }) {
    return (
        <img
            className = "modal-image"
            src       = {imageUrl}
            alt       = {imageUrl}
        />
    );
}


function Icons (props) {
    const [iconCLicked, setIconClicked] = useState (null);

    return (
        <>
            
        </>
    );
}

export default Icons