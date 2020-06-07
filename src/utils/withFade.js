import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const withFade = Component => {
    return props => {
        const [ref, inView] = useInView({
            threshold: 0.3
        });
        return (
            <motion.div ref={ref} initial={{opacity: 0}} animate={{opacity: inView ? 1: 0}} transition={{duration: 1}}>
                <Component {...props} />
            </motion.div>
        )
    }
};

export default withFade;
