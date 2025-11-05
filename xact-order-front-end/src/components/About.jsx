
function About() {

    return (
        <>
            <div className="about-content">
                <h2 className="about-title"> ABOUT </h2>
                <hr></hr>
                <br></br>
                <section className="about-body">
                    <section className="why-section">
                        <h1 className="why-header"> Why I Built It </h1>
                        <p> Ordering plain film X-rays should not feel like guesswork. X-ACT ORDER puts the
                            exact exam name and view list at your fingertips, so exams can be ordered
                            correctly the first time. </p>
                        <ul className="why-list">
                            <li>Eliminates incorrect ordered exams</li>
                            <li>Reduces callbacks and rewritten orders</li>
                            <li>Saves time on looking up procedures</li>
                        </ul>
                    </section>
                    <br></br>
                    <section className="who-section">
                        <h1 className="who-header">Who It's For</h1>
                        <table className="who-table">
                            <thead className="table-headers">
                                <tr>
                                    <th>Role</th>
                                    <th>Purpose</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                <tr>
                                    <td>Physicians  </td>
                                    <td>Order X-Ray procedures with correct exam wording</td>
                                </tr>
                                <tr>
                                    <td>Nurses</td>
                                    <td>Save common exams for quick ordering</td>
                                </tr>
                                <tr>
                                    <td>Rad Techs</td>
                                    <td>Get procedural information such as views for exam preperation</td>
                                </tr>
                                <tr>
                                    <td>Students</td>
                                    <td>Discover standard view groupings interactively</td>
                                </tr>
                                <tr>
                                    <td>Anyone</td>
                                    <td>Find out about x-ray exams </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <br></br>
                    <hr></hr>
                    <section className="diclaimers-section">
                        <h1 className="disclaimers-header">Disclaimers</h1>
                        <p className="disclaimers-body">X-ACT ORDER is an educational support tool, not a substitute for clinical
                            judgment or institutional policy. Protocols reflect common practice; follow your facility's guidelines
                            when they differ. No patient data is stored in the application.</p>
                    </section>
                    <section className="builtby-section">
                        <h1>Built By</h1>
                        <p>Bryan Jimenez </p>
                        <p>Radiologic Technologist R.T. (R) | LaunchCode Software Development Student</p>
                    </section>
                </section>
            </div>
        </>
    )
}

export default About;

