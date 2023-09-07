import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { motion, AnimatePresence } from 'framer-motion';

function TypewriterText({ text }) {
    const props = useSpring({
        from: { width: '0%' },
        to: async next => {
            await next({ width: '100%' });
        },
        config: { duration: 1500 }, // Adjust the duration as needed
    });

    return (
        <animated.p className="background-text" style={props}>
            {text}
        </animated.p>
    );
}

const TypewriterEffect = ({ text }) => {
    const [visibleText, setVisibleText] = useState("");
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (textIndex < text.length) {
                setVisibleText(text.substring(0, textIndex + 1));
                setTextIndex(textIndex + 1);
            } else {
                clearInterval(timer);
            }
        }, 30); // Adjust the duration to control typing speed
        return () => clearInterval(timer);
    }, [text, textIndex]);

    return (
        <div>
            <AnimatePresence>
                <motion.span
                    key={text} // Ensure a new animation when the text changes
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {visibleText}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};


function WelcomeText(props) {
    const elements = [
        { text: "Hi! Welcome to my portfolio website.", delay: 2000 },
        { text: "Click on a tag above to start exploring.", delay: 0 }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showTypewriter, setShowTypewriter] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentIndex < elements.length - 1) {
                setCurrentIndex(prevIndex => prevIndex + 1);
            }
        }, elements[currentIndex].delay);

        if (currentIndex === elements.length - 1) {
            setShowTypewriter(true);
        }

        return () => clearTimeout(timer);
    }, [currentIndex, elements]);

    const filteredElements = elements.filter((_, index) => index <= currentIndex);

    return (
        <div className="typewriter foreground-content">
            {filteredElements.map((element, index) => (
                <span key={index}>
                    {element.component ? (
                        element.component
                    ) : (
                        <TypewriterText text={element.text} />
                    )}
                </span>
            ))}
        </div>
    );
}


export default WelcomeText;
