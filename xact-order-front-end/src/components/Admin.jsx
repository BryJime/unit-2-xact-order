import ExamsData from "./ExamData/ExamsData";


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
            <td>{exam.commonExam ? "Yes" : "No"}</td>
        </tr>)

    })
    



    return (
        <div>
            <form className="add-exam-form">

                <label htmlFor="examName">Exam Name:
                    <input className="exam-input" type="text" id="examName" name="examName" required />
                </label>

                <label htmlFor="examViews">Views:
                    <input className="exam-input" type="text" id="examViews" name="examViews" required />
                </label>

                <label htmlFor="examCPT">CPT Code:
                    <input className="exam-input" type="text" id="examCPT" name="examCPT" required />
                </label>

                <label htmlFor="examDescription">Description:
                    <textarea className="exam-input" id="examDescription" name="examDescription" required />
                </label>

                <label htmlFor="examAlias">Alias:
                    <input className="exam-input" type="text" id="examAlias" name="examAlias" required />
                </label>

                <label htmlFor="examRegion">Region:
                    <input className="exam-input" type="text" id="examRegion" name="examRegion" required />
                </label>

                <label className="common-label">Common Exam:
                    <input type="checkbox" />
                </label>


                <button className="admin-button" type="reset">Clear</button>
                <button className="admin-button" type="submit">Save Exam</button>
            </form>

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