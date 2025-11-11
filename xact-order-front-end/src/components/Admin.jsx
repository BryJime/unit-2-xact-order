import ExamsData from "./ExamData/ExamsData";
import AddExamForm from "./AddExamForm";
import { useState, useContext } from "react";
import { DataContext } from "./DataContext.jsx";


function Admin() {

    const { isLoading, allExams } = useContext(DataContext);

    const [isEditing, setIsEditing] = useState(false);

    const [editingId, setEditingId] = useState(null);



    if (isLoading || !allExams) {
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
            <td><button className="delete-exam-button" onClick={() => deleteExam(exam.id)}>DELETE</button></td>
            <td><button className="edit-exam-button" onClick={() => startEditing(exam.id)} >EDIT</button></td>
        </tr>

    )) : currentExams = allExams.map(exam => {

        if (exam.id === editingId) {

            return <tr key={exam.id}>
                <td>{exam.id}</td>
                <td>
                    <input className="exam-table-name-input" type="text" ></input>
                </td>
                <td>
                    <input className="exam-table-views-input" type="text" ></input>
                </td>
                <td>
                    <input className="exam-table-cpt-input" type="text"></input>
                </td>
                <td>
                    <input className="exam-table-description-input" type="text" ></input>
                </td>
                <td>
                    <input className="exam-table-alias-input" type="text" ></input>
                </td>
                <td>
                    <input className="exam-table-region-input" type="text" ></input>
                </td>
                <td>
                    <input className="exam-table-common-input" type="checkbox" ></input>
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
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify()

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

export default Admin;