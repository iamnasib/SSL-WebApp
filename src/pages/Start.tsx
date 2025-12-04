import { Questionnaire } from '../components/Questionnaire';
import { motion } from 'framer-motion';

export const Start = () => {
    return (
        <div className="container mx-auto px-6 py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                    Start your project in <span className="text-gradient">5 minutes</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-text-secondary"
                >
                    Answer a few questions so we can recommend the best way to build your product and give you a realistic cost & timeline.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <Questionnaire />
            </motion.div>
        </div>
    );
};
