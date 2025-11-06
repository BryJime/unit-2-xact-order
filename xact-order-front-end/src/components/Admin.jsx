


function Admin() {
    return (
        <div>
            <form className="addExam-form">
                <label htmlFor="examName">Exam Name:</label>
                <input type="text" id="examName" name="examName" required />

                <label htmlFor="examViews">Views:</label>
                <input type="text" id="examViews" name="examViews" required />

                <label htmlFor="examCPT">CPT Code:</label>
                <input type="text" id="examCPT" name="examCPT" required />

                <label htmlFor="examDescription">Description:</label>
                <textarea id="examDescription" name="examDescription" required />

                <label htmlFor="examAlias">Alias:</label>
                <input type="text" id="examAlias" name="examAlias" required />

                <label htmlFor="examRegion">Region:</label>
                <input type="text" id="examRegion" name="examRegion" required />

                <label class="toggle-switch">Common Exam:
                    <input type="checkbox" />
                        <span class="slider"></span>
                </label>

                <button type="reset">Clear</button>
                <button type="submit">Save Exam</button>


            </form>

            <hr className="line"/>
        </div>
    );
}

export default Admin;