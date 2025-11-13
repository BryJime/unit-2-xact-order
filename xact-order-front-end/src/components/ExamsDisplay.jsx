import { useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import Exam from "./Exam";
import { DataContext } from "./DataContext.jsx";



function ExamsDisplay() {

    const { isLoading, allExams } = useContext(DataContext);
    const { state } = useLocation();
    const { inputValue, searchType } = state;

    console.log("searchType: ", searchType);


    let examStatus = '';




    isLoading && <div className="loading-exams">LOADING EXAMS...</div>

    if (allExams === null) {
        return examStatus = <div className="loading-exams-error">ERROR FETCHING EXAMS!</div>
    }


    console.log("Input Value: ", inputValue);
    console.log("Exams Value 1: ", allExams);


    const search = inputValue.toLowerCase().trim();

    let exams = [];

    if (searchType === "searchbar") {

        exams = allExams.filter(exam => {
            return exam.alias.name.toLowerCase().split(",").some(part => part.trim().includes(search));
        });

    } else if (searchType === "skeleton") {

        exams = allExams.filter(exam => {
            return exam.anatomy.name.includes(search)
        })

    }

    if (exams = []) {
        return examStatus = "NO EXAMS TO BE FOUND!"
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
                            let selectedExam = exam.find(d => data.id === d.id);
                            const updatedExam = {
                                name: selectedExam.name,
                                region: selectedExam.region,
                                shortcut: true,
                                common: selectedExam.common,
                                cptCode: selectedExam.cptCode.cptCode,
                                anatomy: selectedExam.anatomy.name,
                                views: selectedExam.views.name,
                                description: selectedExam.description.text,
                                alias: selectedExam.alias.name
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
                        }

                        return <Exam key={data.id} procedure={data.name} views={data.views.name} cpt={data.cptCode.cptCode} add={addShortcut} button={data.shortcut ? "ADDED!" : "ADD SHORTCUT"} description={data.description.text} />
                    })}
                </div>
            </div>
        </>
    )
}

export default ExamsDisplay;