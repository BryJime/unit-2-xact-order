import { useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import Exam from "./Exam";
import { DataContext } from "./DataContext.jsx";



function ExamsDisplay() {

    const { isLoading, allExams } = useContext(DataContext);
    const { state } = useLocation();
    const { inputValue, searchType } = state;

    let examStatus = '';

    isLoading && (examStatus = <div className="loading-exams">LOADING EXAMS...</div>);

    if (allExams === null) {
        return examStatus = <div className="loading-exams-error">ERROR FETCHING EXAMS! *SERVER UNAVAILABLE*</div>
    }

    const search = inputValue.toLowerCase().trim();

    let exams = [];

    if (searchType === "searchbar") {

        exams = allExams.filter(exam => {
            const aliasParts = exam.alias.name.toLowerCase().split(",");
            return aliasParts.some(part => part.trim().includes(search));
        });

    } else if (searchType === "skeleton") {

        exams = allExams.filter(exam => {
            return exam.anatomy.name.includes(inputValue)
        })

    }


    if (typeof exams === "object" && Object.keys(exams).length === 0) {
        return examStatus = "WOW, SUCH EMPTY!"
    }

    // Finds data based on search value and displays all exams based on value
    return (
        <>
            <div className="exam-display-page">
                <h1 className="exam-title-display">{`${inputValue.toUpperCase()} EXAMS: `}</h1>
                <hr className="exams-display-line"></hr>
                <br></br>
                <div>
                    {examStatus}
                    {exams.map((data) => {

                        const addShortcut = async () => {
                            const updatedExam = {
                                name: data.name,
                                region: data.region,
                                shortcut: true,
                                common: data.common,
                                cptCode: data.cptCode.cptCode,
                                anatomy: data.anatomy.name,
                                views: data.views.name,
                                description: data.description.text,
                                alias: data.alias.name
                            };

                            try {
                                const response = await fetch(`http://localhost:8080/exams/update/${data.id}`, {
                                    method: 'PUT',
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify(updatedExam)

                                })

                                if (!response.ok) {
                                    throw new Error("Failed to update exam!");
                                }
                            } catch (e) {
                                console.log(e)
                            }
                            window.location.reload();
                        }

                        return <Exam key={data.id} procedure={data.name} views={data.views.name} cpt={data.cptCode.cptCode} add={addShortcut} button={data.shortcut ? "ADDED!" : "ADD SHORTCUT"} isActive={data.shortcut} description={data.description.text} />
                    })}
                </div>
            </div>
        </>
    )
}

export default ExamsDisplay;