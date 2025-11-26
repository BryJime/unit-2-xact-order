import AddExamForm from "./AddExamForm.jsx";
import { useState, useContext } from "react";
import { DataContext } from "./DataContext.jsx";

// Component for adding, editing, and deleting exams
function AddExam() {

    const { isLoading, allExams } = useContext(DataContext);

    const [isEditing, setIsEditing] = useState(false);

    const [editingId, setEditingId] = useState(null);

    // State for storing exam data during editing
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
    })

    let examStatus = '';

    if (allExams === null && !isLoading) {
        return examStatus = <div className="loading-exams-error">ERROR FETCHING EXAMS! *SERVER UNAVAILABLE*</div>;
    }

    // Handles changes to exam data inputs during editing
    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setExamData((data) => ({
            ...data,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    // Displays loading message while exams are being fetched
    if (isLoading) {
        return <div className="loading-exams">Loading exams...</div>;
    }

    let currentExams = [];

    // Renders exam list, either in view or edit mode
    !isEditing ? currentExams = allExams.sort((a, b) => b.id - a.id).map(exam =>
    (

        <tr key={exam.id}>
            <td>{exam.id}</td>
            <td>{exam.name}</td>
            <td>{exam.views.name}</td>
            <td>{exam.cptCode.cptCode}</td>
            <td style={{ whiteSpace: "pre-wrap" }} >{exam.description.text}</td>
            <td>{exam.alias.name}</td>
            <td>{exam.region}</td>
            <td>{exam.anatomy.name}</td>
            <td>{exam.common ? "Yes" : "No"}</td>
            <td>{exam.shortcut ? "Yes" : "No"}</td>
            <td><button className="delete-exam-button" onClick={() => deleteExam(exam.id)}>DELETE</button></td>
            <td><button className="edit-exam-button" type="button" onClick={() => startEditing(exam.id)} >EDIT</button></td>
        </tr>

    )) : currentExams = allExams.map(exam => {

        if (exam.id === editingId) {

            return <tr key={exam.id}>
                <td>{exam.id}</td>
                <td>
                    <input className="exam-table-name-input" type="text" name="name" value={examData.name} onChange={handleChange} required></input>
                </td>
                <td>
                    <input className="exam-table-views-input" type="text" name="views" value={examData.views} onChange={handleChange} required></input>
                </td>
                <td>
                    <input className="exam-table-cpt-input" type="text" name="cptCode" value={examData.cptCode} onChange={handleChange} style={{ width: "50px" }} required></input>
                </td>
                <td>
                    <textarea className="exam-table-description-input" type="text" name="description" value={examData.description} onChange={handleChange} style={{ width: "200px" }} required></textarea>
                </td>
                <td>
                    <input className="exam-table-alias-input" type="text" name="alias" value={examData.alias} onChange={handleChange} required></input>
                </td>
                <td>
                    <input className="exam-table-region-input" type="text" name="region" value={examData.region} onChange={handleChange} style={{ width: "80px" }} required></input>
                </td>
                <td>
                    <label htmlFor="examAnatomy">
                        <select id="examAnatomy" name="anatomy" onChange={handleChange} required >
                            <option value={examData.anatomy}>{examData.anatomy}</option>
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
                </td>
                <td>
                    <input className="exam-table-common-input" type="checkbox" name="common" checked={examData.common} onChange={handleChange}></input>
                </td>
                <td>
                    <input className="exam-table-shortcut-input" type="checkbox" name="shortcut" checked={examData.shortcut} onChange={handleChange}></input>
                </td>
                <td><button className="delete-exam-button" type="submit" onClick={() => updateExam(exam.id)}>SAVE</button></td>
                <td><button className="delete-exam-button" type="button" onClick={() => setIsEditing(false)}>CANCEL</button></td>
            </tr>
        }

    })

    const startEditing = (id) => {


        const exam = allExams.find((ex) => ex.id === id);

        setExamData({
            "name": exam.name,
            "region": exam.region,
            "shortcut": exam.shortcut,
            "common": exam.common,
            "cptCode": exam.cptCode.cptCode,
            "anatomy": exam.anatomy.name,
            "views": exam.views.name,
            "description": exam.description.text,
            "alias": exam.alias.name
        });

        setEditingId(id);
        setIsEditing(true);
    }

    const deleteExam = async (id) => {
        if ((window.confirm("Are you sure you want to delete this Exam?"))) {

            try {

                const response = await fetch(`http://localhost:8080/exams/delete/${id}`, {
                    method: 'DELETE',
                })

                if (!response.ok) {
                    throw new Error("Failed to delete exam!");

                }
                console.log(`Deleted Exam ID: ${id}`);

            } catch (e) {
                console.log(e)
            }

            window.location.reload();
        }

    }

    const updateExam = async (id) => {
        const form = document.querySelector('.edit-exam-form');
        if (form.checkValidity()) {
            if ((window.confirm("Save changes to Exam?"))) {

                try {
                    const response = await fetch(`http://localhost:8080/exams/update/${id}`, {
                        method: 'PUT',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(examData)

                    })

                    if (!response.ok) {
                        throw new Error("Failed to update exam!");
                    }
                } catch (e) {
                    console.log(e)
                }

                setIsEditing(false);
                window.location.reload();
            }
        } else {
            form.reportValidity();
        }
    }

    return (
        <div>

            {examStatus}

            <AddExamForm />

            <hr className="line" />
            {isLoading ? <div>Loading exams...</div> :
                <div className="exam-list">
                    <h2 className="exam-list-title">All Exams: </h2>
                    <br />
                    <form className="edit-exam-form" >
                        <table className="exam-list-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Exam</th>
                                    <th>Views</th>
                                    <th>CPT</th>
                                    <th>Description</th>
                                    <th>Alias</th>
                                    <th>Region</th>
                                    <th>Anatomy</th>
                                    <th>Common</th>
                                    <th>Shortcut</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentExams}
                            </tbody>
                        </table>
                    </form>
                </div>

            }
        </div>
    );
}

export default AddExam;