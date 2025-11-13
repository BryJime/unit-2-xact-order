import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import SkeletonSelection from "./SkeletonSelection";
import { DataContext } from "../DataContext.jsx";

function Search() {

    const [inputValue, setinputValue] = useState('');
    const [validInput, setvalidInput] = useState(true);

    const [searchType, setSearchType] = useState('')

    const { allExams } = useContext(DataContext);

    const navigate = useNavigate();


    //Finds data based on user text input
    const getSearchData = (e) => {
        e.preventDefault();

        const updateSearchType = "searchbar"

        setSearchType(updateSearchType);
        const search = inputValue.toLowerCase().trim();

        const findExam = allExams.filter(exam => {
            const aliasParts = exam.alias.name.toLowerCase().split(",");
            return aliasParts.some(part => part.trim().includes(search));
        });

        if (!findExam.length) {
            setvalidInput(false);
        } else {
            navigate('/ExamsDisplay.jsx', { state: { inputValue, searchType: updateSearchType } })
        }
    };

    // Finds data based on Skeleton selection
    const getSkeletonData = (value) => {
        const updateSearchType = "skeleton"
        setSearchType(updateSearchType);
        navigate('/ExamsDisplay.jsx', { state: { inputValue: value, searchType: updateSearchType } })
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