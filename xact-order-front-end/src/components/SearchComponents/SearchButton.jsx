import { motion } from 'framer-motion'

function SearchButton(props) {

    return (
        <>
            <motion.button whileHover={{
                scale: .9,
            }} onClick={props.data} className="search-button">Search</motion.button>
        </>
    )
}

export default SearchButton;