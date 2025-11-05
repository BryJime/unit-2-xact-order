import SearchButton from './SearchButton';

function Searchbar(props) {

    // Reusable search button
    return (
        <div className="search-feature">
            <input type="text" name="search-bar" value={props.input} placeholder="Search Body Part" className="searchBar"
                onChange={props.setInput} />
            <SearchButton data={props.data} />
        </div>
    )
}
    
export default Searchbar;