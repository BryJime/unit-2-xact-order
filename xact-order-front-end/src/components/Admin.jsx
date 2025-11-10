import ExamsData from "./ExamData/ExamsData";
import AddExamForm from "./AddExamForm";
import { useState, useContext } from "react";
import { DataContext } from "./DataContext.jsx";


function Admin() {

    const { isLoading, allExams } = useContext(DataContext);

    const [examList, setExamList] = useState(allExams || []);


    if (isLoading || !examList) {
        return <div>Loading exams...</div>;
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
        </tr>
        
    ));

    let refreshExamList = () => {
        setExamList([...allExams]);
    }

    return (
        <div>
            <AddExamForm reRender={refreshExamList} />

            <hr className="line" />
            { isLoading ? <div>Loading exams...</div> :
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