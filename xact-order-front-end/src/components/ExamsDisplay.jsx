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

    if (storeData === null) {
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

                        const addShortcut = async () => {

                            let selectedExam = storeData.find(d => data.id === d.id);
                            const updatedExam = {
                                name: selectedExam.name,
                                region: selectedExam.region,
                                shortcut: true,
                                common: selectedExam.common,
                                cptCode: selectedExam.cptCode.cptCode,
                                anatomy: selectedExam.anatomy.name,
                                views: selectedExam.views.name,
                                description: selectedExam.description.text,
                                alias: selectedExam.alias.name
                            };


                            console.log(storeData);

                            try {
                                const response = await fetch(`http://localhost:8080/exams/update/${data.id}`, {
                                    method: 'PUT',
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify(updatedExam)

                                })

                                if (!response.ok) {
                                    throw new Error("Failed to update exam!");
                                }
                            } catch (e) {
                                console.log(e)
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