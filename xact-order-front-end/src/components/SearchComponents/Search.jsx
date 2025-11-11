import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";

import SkeletonSelection from "./SkeletonSelection";

import { DataContext } from "../DataContext.jsx";

function Search() {

    const [inputValue, setinputValue] = useState('');
    const [validInput, setvalidInput] = useState(true);

    const { allExams } = useContext(DataContext);

    console.log("Input Value (Search.jsx): ", inputValue);


    const navigate = useNavigate();
    //Assigned data variable to be passed with state via useNavigate
    let storeData;

    //Finds data based on user text input
    const getSearchData = (e) => {
        e.preventDefault();

        const search = inputValue.toLowerCase().trim();

        const exam = allExams.filter(exam => {
            const aliasParts = exam.alias.name.toLowerCase().split(",");
            return aliasParts.some(part => part.trim().includes(search));
        });


        storeData = exam;

        if (!exam.length) {
            setvalidInput(false);
        } else {
            navigate('/ExamsDisplay.jsx', { state: { storeData, inputValue } })
        }
    };

    // Finds data based on Skeleton selection
    const getSkeletonData = (value) => {


        setinputValue(value);

        const exam = allExams.filter(exam => {
            if (exam.region.includes(value, 0)) {
                return exam
            }
        })

        storeData = exam;


        navigate('/ExamsDisplay.jsx', { state: { storeData, inputValue } })
    }

    return (

        <form>
            <h1 className="search-body-message">Search by Body Part</h1>
            <br />
            <Searchbar input={inputValue} setInput={(event) => setinputValue(event.target.value)} data={getSearchData} />
            <h1 className="search-region-message">or Region</h1>
            <div className="validation-message">
                {validInput ? <p> </p> : <p> CANNOT FIND EXAM. ENTER A VALID BODY PART </p>}
            </div>
            <SkeletonSelection click={getSkeletonData} />
        </form>
    )
}

export default Search;