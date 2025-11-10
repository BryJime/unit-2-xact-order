import ExamsData from "./ExamData/ExamsData";
import AddExamForm from "./AddExamForm";
import { useState, useContext } from "react";
import { DataContext } from "./DataContext.jsx";


function Admin() {

    const { isLoading, allExams } = useContext(DataContext);


    if (isLoading || !allExams) {
        return <div className="loading-exams">Loading exams...</div>;
    }

    let currentExams = allExams.map(exam =>
    (

        <tr key={exam.id}>
            <td>{exam.name}</td>
            <td>{exam.views.name}</td>
            <td>{exam.cptCode.cptCode}</td>
            <td>{exam.description.text}</td>
            <td>{exam.alias.name}</td>
            <td>{exam.region}</td>
            <td>{exam.common ? "Yes" : "No"}</td>
            <td><button className="delete-exam-button" onClick={() => deleteExam(exam.id)}>DELETE</button></td>
            <td><button className="edit-exam-button" onClick={() => updateExam(exam.id)} >EDIT</button></td>
        </tr>

    ));

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
                console.log(response.e)
            }

            window.location.reload();
        }

    }

    const updateExam = async (id) => {
        try 
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
                                <th>Exam</th>
                                <th>Views</th>
                                <th>CPT</th>
                                <th>Description</th>
                                <th>Alias</th>
                                <th>Region</th>
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