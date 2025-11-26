import { useState, useEffect} from "react";


function AddExamForm() {

    const [addExamSuccess, setAddExamSuccess] = useState("");

    // State for storing exam data during input
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

    useEffect(() => {
        const msg = localStorage.getItem("examSuccess");
        if (msg) {
            setAddExamSuccess(msg);
            localStorage.removeItem("examSuccess");

            setTimeout(() => setAddExamSuccess(""), 3000);
        }
    }, []);



    const handleChange = (e) => {
        e.preventDefault();

        const { name, value, type, checked } = e.target;

        setExamData((data) => ({
            ...data,
            [name]: type === "checkbox" ? checked : value
        }));
    }



    const saveExam = async (e) => {
        e.preventDefault();
        const form = document.querySelector('.add-exam-form');
        if (form.checkValidity()) {
            if (window.confirm("ADD EXAM?")) {
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
                localStorage.setItem("examSuccess", "Exam added successfully!");
                window.location.reload();
            }

        }


    }


    return <form className="add-exam-form" onSubmit={saveExam}>

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
            <select className="exam-input" id="examAnatomy" name="anatomy" onChange={handleChange} required >
                <option value="" disable="true">Select Anatomy</option>
                <option value="Skull">Skull</option>
                <option value="Facial/ENT">Facial/ENT</option>
                <option value="Chest">Chest</option>
                <option value="Ribs/Sternum/SC Joint">Ribs/Sternum/SC Joint</option>
                <option value="Abdomen">Abdomen</option>
                <option value="Pelvis/Hips">Pelvis/Hips</option>
                <option value="Shoulder/Clavicle/Scapula">Shoulder/Clavicle/Scapula</option>
                <option value="Humerus">Humerus</option>
                <option value="Elbow/Forearm">Elbow/Forearm</option>
                <option value="Wrist/Hand/Fingers">Wrist/Hand/Fingers</option>
                <option value="Cervical Spine">Cervical Spine</option>
                <option value="Thoracic Spine">Thoracic Spine</option>
                <option value="Lumbar Spine">Lumbar Spine</option>
                <option value="Sacrum/Other">Sacrum/Other</option>
                <option value="Femur">Femur</option>
                <option value="Knee">Knee</option>
                <option value="TibFib/Ankle">TibFib/Ankle</option>
                <option value="Foot/Toes">Foot/Toes</option>
            </select>
        </label>

        <label htmlFor="examDescription" className="exam-form-cell">Description:
            <textarea className="exam-input" id="examDescription" name="description" onChange={handleChange} style={{ whiteSpace: "pre-wrap" }} required />
        </label>

        <label className="exam-form-cell" >Common Exam:
            <input type="checkbox" name="common" onChange={handleChange} />
        </label>

        <label className="exam-form-cell">Add to Shortcut:
            <input type="checkbox" name="shortcut" onChange={handleChange} />
        </label>

        <button className="admin-button-clear" type="reset">Clear</button>
        <button className="admin-button-add" type="submit">Add Exam</button>
        {addExamSuccess && <p className="success-message">{addExamSuccess}</p>}
    </form>
}

export default AddExamForm;