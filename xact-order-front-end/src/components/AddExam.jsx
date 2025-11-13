import ExamsData from "./ExamData/ExamsData.js";
import AddExamForm from "./AddExamForm.jsx";
import { useState, useContext } from "react";
import { DataContext } from "./DataContext.jsx";


function AddExam() {

    const { isLoading, allExams } = useContext(DataContext);

    const [isEditing, setIsEditing] = useState(false);

    const [editingId, setEditingId] = useState(null);

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

    if (allExams === null) {
        return examStatus = <div className="exam-status">ERROR LOADING EXAMS.</div>;
    }

    const handleChange = (e) => {
        e.preventDefault();

        const { name, value, type, checked } = e.target;

        setExamData((data) => ({
            ...data,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    if (isLoading) {
        return <div className="loading-exams">Loading exams...</div>;
    }



    let currentExams = [];

    !isEditing ? currentExams = allExams.map(exam =>
    (

        <tr key={exam.id}>
            <td>{exam.id}</td>
            <td>{exam.name}</td>
            <td>{exam.views.name}</td>
            <td>{exam.cptCode.cptCode}</td>
            <td>{exam.description.text}</td>
            <td>{exam.alias.name}</td>
            <td>{exam.region}</td>
            <td>{exam.anatomy.name}</td>
            <td>{exam.common ? "Yes" : "No"}</td>
            <td>{exam.shortcut ? "Yes" : "No"}</td>
            <td><button className="delete-exam-button" onClick={() => deleteExam(exam.id)}>DELETE</button></td>
            <td><button className="edit-exam-button" onClick={() => startEditing(exam.id)} >EDIT</button></td>
        </tr>

    )) : currentExams = allExams.map(exam => {

        if (exam.id === editingId) {

            return <tr key={exam.id}>
                <td>{exam.id}</td>
                <td>
                    <input className="exam-table-name-input" type="text" name="name" placeholder={exam.name} onChange={handleChange} required></input>
                </td>
                <td>
                    <input className="exam-table-views-input" type="text" name="views" placeholder={exam.views.name} onChange={handleChange} required></input>
                </td>
                <td>
                    <input className="exam-table-cpt-input" type="text" name="cptCode" placeholder={exam.cptCode.cptCode} onChange={handleChange} style={{width: "50px"}} required></input>
                </td>
                <td>
                    <input className="exam-table-description-input" type="text" name="description" placeholder={exam.description.text} onChange={handleChange} required></input>
                </td>
                <td>
                    <input className="exam-table-alias-input" type="text" name="alias" placeholder={exam.alias.name} onChange={handleChange} required></input>
                </td>
                <td>
                    <input className="exam-table-region-input" type="text" name="region" placeholder={exam.region} onChange={handleChange} style={{width: "80px"}}required></input>
                </td>
                <td>
                    <input className="exam-table-anatomy-input" type="text" name="anatomy" placeholder={exam.anatomy.name} onChange={handleChange} style={{width: "80px"}}required></input>
                </td>
                <td>
                    <input className="exam-table-common-input" type="checkbox" name="common" onChange={handleChange}></input>
                </td>
                <td>
                    <input className="exam-table-shortcut-input" type="checkbox" name="shortcut" onChange={handleChange}></input>
                </td>
                <td><button className="delete-exam-button" onClick={() => updateExam(exam.id)}>SAVE</button></td>
                <td><button className="delete-exam-button" onClick={() => setIsEditing(false)}>CANCEL</button></td>
            </tr>
        }

    })

    const startEditing = (id) => {
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
                </div>
            }
        </div>
    );
}

export default AddExam;