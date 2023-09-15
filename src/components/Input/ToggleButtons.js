function ToggleButtons({ clickedCard, toggledButton, handleButtonToggle }) {
    return (
        <>
            {clickedCard !== null &&
                <div className="sort-by-container">
                    <div className="tri-state-toggle">
                        <button
                            className={`tri-state-toggle-button ${toggledButton === "Experiences" ? 'active' : ''}`}
                            onClick={() => handleButtonToggle("Experiences")}
                        >
                            Experiences
                        </button>

                        <button
                            className={`tri-state-toggle-button ${toggledButton === "Skills" ? 'active' : ''}`}
                            onClick={() => handleButtonToggle("Skills")}
                        >
                            Skills
                        </button>

                        <button
                            className={`tri-state-toggle-button ${toggledButton === "Projects" ? 'active' : ''}`}
                            onClick={() => handleButtonToggle("Projects")}
                        >
                            Projects
                        </button>
                    </div>

                </div>
            }
        </>

    )
}

export default ToggleButtons
