import { useState, useContext } from "react";
import ExamsData from "./ExamData/ExamsData";
import { DataContext } from "./DataContext";


function AddExamForm({ reRender }) {

    const { allExams } = useContext(DataContext);

    console.log("DB EXAMS: " + allExams);


    const [examData, setExamData] = useState({
        "name": "",
        "region": "",
        "shortcut": false,
        "common": true,
        "cptCode": "",
        "anatomy": "",
        "views": "",
        "description": "",
        "alias": ""
    });



    const handleChange = (e) => {
        e.preventDefault();

        const { name, value, type, checked } = e.target;

        setExamData((data) => ({
            ...data,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    const saveExam = (e) => {
        e.preventDefault();


        // Submit examData to the server or perform other actions
        reRender();
    }

    console.log(examData);




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

        <label htmlFor="examAnatomy">Anatomy:
            <input className="exam-input" type="text" id="examAnatomy" name="anatomy" onChange={handleChange} required />
        </label>

        <label className="common-label">Common Exam:
            <input type="checkbox" name="common" onChange={handleChange} />
        </label>


        <button className="admin-button" type="reset">Clear</button>

        <button className="admin-button" type="submit" onClick={saveExam} >Save Exam</button>
    </form>
}

export default AddExamForm;