import { motion } from 'framer-motion'
import { useState } from 'react';

// Reusable component to display individual exam information
function Exam(props) {

    const [showDescription, setShowDescription] = useState(false);

    // Inline styles for shortcut button depending on active state
    const buttonColor = {
        backgroundColor: props.isActive ? '#346740ff' : '#6c757d',
        color: '#ffffff',
        border: 'none',
        padding: '10px 14px',
        borderRadius: '6px',
        cursor: 'pointer'
    }

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    }

    return <>
        <section className="exam-display" onClick={toggleDescription}>

            <div className="exam-display-header">
                <h2 className="exam-display-procedure">{`${props.procedure}: `}</h2>
                <h2 className="exam-display-views">{props.views}</h2>
                <h1 className="exam-display-cpt">CPT: {props.cpt}</h1>
            </div>

            {showDescription && (
                <div className="exam-display-expanded">
                    <div className="exam-display-description">
                        <h3>Description:</h3>
                        <p style={{whiteSpace: "pre-wrap", fontWeight: "bold"}}> {props.description} </p>
                    </div>
                </div>
            )}


        <motion.button
            whileTap={{
                scale: .85,
                transition: { duration: 0.05 },
            }} className="shortcut-button" onClick={(e) => { e.stopPropagation(); props.add(e); }} style={buttonColor}>
            {props.isActive ? 'ADDED' : props.button}
        </motion.button>
        </section>
    </>

}

export default Exam;