import { motion } from "framer-motion";

function EngineerIntro() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="section-header-container">
            <p className="background-text"> I am an entry-level full stack engineer with over 1 year of experience in modelling and developing scalable web applications.</p>

            <p className="background-text">
                Since my recent experiences in software engineering and ML engineering, I am motivated to dedicate
                myself full-time to the world of Data Science, Software Development and DevOps engineering.
            </p>
        </motion.div>
    );

}

export default EngineerIntro