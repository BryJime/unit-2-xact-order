import { useState, } from "react";


function AddExamForm() {


    const [examData, setExamData] = useState({
        "name": "",
        "region": "",
        "shortcut": null,
        "common": null,
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


    const saveExam = async () => {
        if ((window.confirm("ADD EXAM?"))) {
            try {
                const response = await fetch('http://localhost:8080/exams/add', {
                    method: 'POST',
                    body: JSON.stringify(examData),
                    headers: {
                        "Content-type": "application/json"
                    }
                });

                if (!response.ok) {
                    let error = await response.json();
                    throw new Error(error.message || 'Failed to POST exam');
                }

            } catch (e) {
                console.error('Error saving exam:', e);
            }
            window.location.reload();
        }
    }




    return <form className="add-exam-form">

        <label htmlFor="examName" className="exam-form-cell">Exam Name:
            <input className="exam-input" type="text" id="examName" name="name" onChange={handleChange} required />
        </label>

        <label htmlFor="examViews" className="exam-form-cell">Views:
            <input className="exam-input" type="text" id="examViews" name="views" onChange={handleChange} required />
        </label>

        <label htmlFor="examCPT" className="exam-form-cell">CPT Code:
            <input className="exam-input" type="text" id="examCPT" name="cptCode" onChange={handleChange} required />
        </label>


        <label htmlFor="examAlias" className="exam-form-cell">Alias:
            <input className="exam-input" type="text" id="examAlias" name="alias" onChange={handleChange} required />
        </label>

        <label htmlFor="examRegion" className="exam-form-cell">Region:
            <input className="exam-input" type="text" id="examRegion" name="region" onChange={handleChange} required />
        </label>

        <label htmlFor="examAnatomy" className="exam-form-cell">Anatomy:
            <input className="exam-input" type="text" id="examAnatomy" name="anatomy" placeholder="*Must match Skeleton Anatomy*" onChange={handleChange} required />
        </label>

        <label htmlFor="examDescription" className="exam-form-cell">Description:
            <textarea className="exam-input" id="examDescription" name="description" onChange={handleChange} required />
        </label>
             
        <label className="exam-form-cell" >Common Exam:
            <input type="checkbox" name="common" onChange={handleChange} />
        </label>

        <label className="exam-form-cell">Add to Shortcut:
            <input type="checkbox" name="shortcut" onChange={handleChange} />
        </label>

            <button className="admin-button-clear" type="reset">Clear</button>

            <button className="admin-button-add" type="submit" onClick={saveExam} >Add Exam</button>
    </form>
}

export default AddExamForm;