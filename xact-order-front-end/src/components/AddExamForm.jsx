

function AddExamForm() {

    



  return <form className="add-exam-form">

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
}

export default AddExamForm;