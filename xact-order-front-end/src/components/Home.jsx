import Search from "./SearchComponents/Search";
import { motion } from 'framer-motion'


function Home() {

    // Home page intro and search feature with animations
    return (
        <>
            <motion.h1 className="home-introduction"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >Order X‑Ray Exams With Confidence</motion.h1>
            <picture className="home-image">
                <img src="..\Images\thumb-up-xray.png" alt="X-Ray Hand Thumbs Up" width="900" height="500" />
            </picture>
            <motion.p className="get-started"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            > Get Started </motion.p>
            <motion.h2 className="down-arrow"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 1.5, ease: "easeOut", y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
            >⯆</motion.h2>

            <Search />

            <br/> 

            
        </>
    )
}

export default Home; 