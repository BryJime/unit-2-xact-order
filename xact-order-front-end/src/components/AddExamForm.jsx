import { useState } from "react";


function AddExamForm() {

    let initialExamData = {
        name: "",
        region: "",
        common: false,
        shortcut: false,
        cptCode: "",
        anatomy: "",
        views: "",
        description: "",
        alias: ""
    };

    const [ examData, setExamData ] = useState(initialExamData);


    const handleChange = (e) => {
        let updatedExamData = { ...examData,
        [e.target.name]: e.target.value
        };
        setExamData(updatedExamData);
    }

    console.log(examData);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit examData to the server or perform other actions
    }

  return <form className="add-exam-form">

                <label htmlFor="examName">Exam Name:
                    <input className="exam-input" type="text" id="examName" name="examName" onChange={handleChange} required />
                </label>

                <label htmlFor="examViews">Views:
                    <input className="exam-input" type="text" id="examViews" name="examViews" onChange={handleChange} required />
                </label>

                <label htmlFor="examCPT">CPT Code:
                    <input className="exam-input" type="text" id="examCPT" name="examCPT" onChange={handleChange} required />
                </label>

                <label htmlFor="examDescription">Description:
                    <textarea className="exam-input" id="examDescription" name="examDescription" onChange={handleChange} required />
                </label>

                <label htmlFor="examAlias">Alias:
                    <input className="exam-input" type="text" id="examAlias" name="examAlias" onChange={handleChange} required />
                </label>

                <label htmlFor="examRegion">Region:
                    <input className="exam-input" type="text" id="examRegion" name="examRegion" onChange={handleChange} required />
                </label>

                <label className="common-label">Common Exam:
                    <input type="checkbox" onChange={handleChange} />
                </label>


                <button className="admin-button" type="reset">Clear</button>

                <button className="admin-button" type="submit" onClick={handleSubmit}>Save Exam</button>
            </form>
}

export default AddExamForm;