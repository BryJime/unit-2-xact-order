import { useLocation } from "react-router-dom";
import { useState } from "react";
import Exam from "./Exam";


function ExamsDisplay() {

    const { state } = useLocation();
    const { storeData, inputValue } = state;
    const [isActive, setIsActive] = useState(false);

    console.log("Data from context (ExamsDisplay.jsx): ", storeData)

    console.log("Input Value (ExamsDisplay.jsx): ", inputValue);

    let examStatus = '';

    if (storeData === null ){
        return examStatus = <div className="exam-status">ERROR LOADING EXAMS.</div>;
    }

    // Finds data based on search value and displays all exams based on value
    return (
        <>
            <div className="exam-display-page">
                <h1 className="exam-title-display">{`${inputValue.toUpperCase()} EXAMS: `}</h1>
                <hr className="exams-display-line"></hr>
                <br></br>
                <div>
                    {examStatus}
                    {storeData.map((data) => {

                        const addShortcut = () => {
                            if (data.shortcut === false) {
                                for (let exam of ExamsData) {
                                    if (exam.name === data.name) {
                                        exam.shortcut = true
                                        setIsActive(true);
                                    }
                                }
                                return data.shortcut;
                            }
                        }

                        return <Exam key={data.id} procedure={data.name} views={data.views.name} cpt={data.cptCode.cptCode} add={addShortcut} button="ADD SHORTCUT" isActive={isActive} setIsActive={setIsActive} description={data.description.text} />
                    })}
                </div>
            </div>
        </>
    )
}

export default ExamsDisplay;