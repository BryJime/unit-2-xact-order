import ExamsData from "./ExamData/ExamsData";
import AddExamForm from "./AddExamForm";


function Admin() {
    

    let allExams = ExamsData.map(exam => {

        return (
        <tr key={exam.id}>
            <td>{exam.name}</td>
            <td>{exam.views.name}</td>
            <td>{exam.cptCode.cptCode}</td>
            <td>{exam.description.text}</td>
            <td>{exam.alias.name}</td>
            <td>{exam.region}</td>
            <td>{exam.common ? "Yes" : "No"}</td>
        </tr>)

    })
    



    return (
        <div>
            <AddExamForm />

            <hr className="line" />

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
                        {allExams}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Admin;