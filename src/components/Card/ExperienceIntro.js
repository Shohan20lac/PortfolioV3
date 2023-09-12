import { motion } from "framer-motion"
import '../../styles/cardStyles.css'

function Text ({ title, subtitle, description }) {
    return (
        <>
            <h3> {title}</h3>
            <h4> {subtitle}</h4>
            <p>  {description}</p>
        </>
    )
}

function ExperienceIntro ({
    screenSize,
    title,
    subtitle,
    description,
    imageUrl,
    handleMouseEnter,
    handleMouseLeave,
    showMore,
    setShowMore }) {

    console.log("image Url:", imageUrl)

    if (screenSize === "Desktop") {
        let topRow = <img className="card-thumbnail" src={imageUrl} alt="cse" />
        let bottomRow =
            <div className="card-text-container">
                <Text
                    title={title}
                    subtitle={subtitle}
                    description={description}
                />

                <div className="show-more-button-container">
                    <button
                        className="mech-button "
                        onClick={() => setShowMore(!showMore)}
                    >
                        <span>
                            Show more
                        </span>
                        <i></i>
                    </button>

                </div>

            </div>

        return (
            <div className="card-content">
                {topRow}
                {bottomRow}
            </div>

        );
    }

    else if (screenSize === "Handheld") {
        let leftColumn = <img className="card-thumbnail" src={imageUrl} alt="cse" />
        let rightColumn =
            <div className="card-text-container">
                <Text
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    onClick={() => setShowMore(!showMore)}
                />

                <div className="show-more-button-container">
                    <button
                        className="mech-button "
                        onClick={() => {
                        }}
                    >
                        <span>
                            Show more
                        </span>
                        <i></i>
                    </button>

                </div>

            </div>

        return (
            <motion.div
                className={`content-card row` }
                whileHover={{ scale: 1.05 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setShowMore(!showMore)}
            >
                <div className="card-content">
                    {leftColumn}
                    {rightColumn}
                </div>
            </motion.div>
        );
    }
}


export default ExperienceIntro;