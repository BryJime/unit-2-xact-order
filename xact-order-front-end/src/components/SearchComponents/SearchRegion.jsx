import SearchButton from './SearchButton';

function SearchRegion(props) {

  // Creates functional dropdown selection for Regional Search  
  return (
    <>
      <div className="search-region" >
        <select className="search-dropdown" value={props.value} onChange={props.change}>
          <option default>ALL REGIONS</option>
          <option >UPPER EXTREMITY</option>
          <option >LOWER EXTREMITY</option>
          <option >SPINE</option>
          <option >PELVIS</option>
          <option >CHEST</option>
          <option >ABDOMEN</option>
          <option >HEAD</option>
        </select>
        <SearchButton data={props.data} />
      </div>
    </>
  )
}

export default SearchRegion;