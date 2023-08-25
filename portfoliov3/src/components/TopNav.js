import React from 'react';
import ReactDOM from 'react-dom/client';

import shohan from '../images/shohan.png';
import github from '../images/github.png';
import linkedIn from '../images/linkedin.png';
import facebook from '../images/facebook.png';
import spotify from '../images/spotify.png';

function ImageContainer() {
    return (
        <div className ="profile-pic-container">
            <img
                className="profile-picture"
                src={shohan}
                alt="Grapefruit slice atop a pile of other slices"
            />
        </div>
    )
}
function NameCard() {

    return (
        <div className="namecard">
            <h1 id="topnav-header"> Shohan Mozid Rahman </h1>
            <h2 id="topnav-subheader"> Engineer, Author, Artist </h2>
        </div>
    );

}
function SocialsContainer () {
    const socialIconUrls = [
         github,
         linkedIn,
         facebook,
         spotify
    ];

    return (
        <div className = "socials-container">
            {socialIconUrls.map((url, index) => (
                <img class="socials-icon"key={index} src={url} alt={`${index}`} />
            ))}

        </div>
    )
}

function TopNav () {
    return (
        <div className="topnav-container">

            <ImageContainer/>

            

            <NameCard/>
            
            <SocialsContainer />
        </div>
    );
}

export default TopNav;