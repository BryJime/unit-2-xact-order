import ExamsData from "./ExamData/ExamsData.js";
import Exam from "./Exam";
import { useState } from "react";

// Finds exams that have been assigned to Shortcut page
function Shortcuts() {

    const [examValues, setExamValues] = useState(ExamsData.filter(data => data.shortcut));

    let shortcutButton;
    

    // Sets exam shortcut to false and updates exam data
    function removeShortcut(id) {
        
        for(let exam of ExamsData){ 
            if (id === exam.id){
                exam.shortcut = false;
                break;
            }
        }

        setExamValues(ExamsData.filter(data => data.shortcut));
        
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