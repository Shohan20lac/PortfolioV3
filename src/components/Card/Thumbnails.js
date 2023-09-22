import { motion } from "framer-motion"
import { professionalExperiences } from "../../utilities/Experiences";
import { academicExperiences } from "../../utilities/Experiences";
import Icons from "./Icons"


const Thumbnail = ({ imageUrl, iconLabel }) => (
    <div
        className="column"
    >
        <div className="subexperience-container">
            <img
                src={imageUrl}
                alt={iconLabel}
                className="subexperience-thumbnail"
            />
        </div>

        <span className="card-thumb-label centered"> {iconLabel} </span>

    </div>
)

function Thumbnails ({
    openModal,
    contentIndex
}) {

    let experience = professionalExperiences[contentIndex]

    let containerHeading = `${experience.title} @ ${experience.institute}`
    let containerSubtitle = experience.duration

    return (
        
        <>
            <h3 className="centered card-header"> {containerHeading} </h3>
            <h4 className="centered card-subtitle" > {containerSubtitle} </h4>


            <motion.div
                initial    = {{ opacity: 0 }}
                animate    = {{ opacity: 1 }}
                exit       = {{ opacity: 0 }}
                className  = {`thumbnails-container row fullwidth`}
                transition = {{ duration: 1 }}
            >


                {
                    experience.subExperiences.map(subExperience =>
                        <Thumbnail
                            imageUrl  = {subExperience.thumbnailUrl}
                            iconLabel = {subExperience.title}
                        />
                    )

                }

            </motion.div>
        
        </>
    );
}

export default Thumbnails