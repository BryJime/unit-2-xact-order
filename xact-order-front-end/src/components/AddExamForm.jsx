import { useState } from "react";
import ExamsData from "./ExamData/ExamsData";  



function AddExamForm() {

    let initialExamData = {};

    const [ examData, setExamData ] = useState(initialExamData);


    const handleChange = (e) => {
        
        let updatedExamData = { ...examData,
        [e.target.name]: e.target.value
        };
        setExamData(updatedExamData);
    }



    const saveExam = (e) => {
        e.preventDefault();
        ExamsData.push(examData);
        
        // Submit examData to the server or perform other actions
    }

    console.log(ExamsData);

  return <form className="add-exam-form">

                <label htmlFor="examName">Exam Name:
                    <input className="exam-input" type="text" id="examName" name="name" onChange={handleChange} required />
                </label>

                <label htmlFor="examViews">Views:
                    <input className="exam-input" type="text" id="examViews" name="views" onChange={handleChange} required />
                </label>

                <label htmlFor="examCPT">CPT Code:
                    <input className="exam-input" type="text" id="examCPT" name="cptCode" onChange={handleChange} required />
                </label>

                <label htmlFor="examDescription">Description:
                    <textarea className="exam-input" id="examDescription" name="description" onChange={handleChange} required />
                </label>

                <label htmlFor="examAlias">Alias:
                    <input className="exam-input" type="text" id="examAlias" name="alias" onChange={handleChange} required />
                </label>

                <label htmlFor="examRegion">Region:
                    <input className="exam-input" type="text" id="examRegion" name="region" onChange={handleChange} required />
                </label>

                <label className="common-label">Common Exam:
                    <input type="checkbox" name="common" onChange={handleChange} />
                </label>


                <button className="admin-button" type="reset">Clear</button>

                <button className="admin-button" type="submit" onClick={saveExam}>Save Exam</button>
            </form>
}

export default AddExamForm;