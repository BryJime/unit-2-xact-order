import Exam from "./Exam";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "./DataContext.jsx";


// Finds exams that have been assigned to Shortcut page
function Shortcuts() {

    const { allExams } = useContext(DataContext);

    const [examValues, setExamValues] = useState([]);

    console.log(examValues)

    let shortcutButton;

    useEffect(() => {
        if (allExams) {
            const shortcuts = allExams.filter(data => data.shortcut === true);
            setExamValues(shortcuts);
        }
    }, [allExams])

    // Sets exam shortcut to false and updates exam data
    const removeShortcut = async (id) => {

        let selectedExam = allExams.find(data => id === data.id);
        const updatedExam = {
            name: selectedExam.name,
            region: selectedExam.region,
            shortcut: false,
            common: selectedExam.common,
            cptCode: selectedExam.cptCode.cptCode,
            anatomy: selectedExam.anatomy.name,
            views: selectedExam.views.name,
            description: selectedExam.description.text,
            alias: selectedExam.alias.name
        };


        console.log(updatedExam);

        try {
            const response = await fetch(`http://localhost:8080/exams/update/${id}`, {
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

        setExamValues(allExams.filter(data => data.shortcut));
        window.location.reload();
    }





    return (
        <>
            <div className="shortcuts-title-feature">
                <h2 className="shortcuts-title">SHORTCUTS</h2>
            </div>
            <hr></hr>
            <div>
                {examValues.map((data) => {
                    if (data.shortcut === true) {
                        shortcutButton = "REMOVE SHORTCUT";
                        return <Exam key={data.id} procedure={data.name} views={data.views.name} cpt={data.cptCode.cptCode} button={shortcutButton} add={() => removeShortcut(data.id)} />
                    }
                })}
            </div>
        </>
    )
}

export default Shortcuts;