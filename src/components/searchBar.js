import { FaSearch } from "react-icons/fa";

const SearchBar = ({searchChange}) => {
    return (
    <div style={
        {
            textAlign: 'center', 
            margin: '10px', 
            width: '90%',
            backgroundColor: 'aliceblue',
            border: '1px solid #ccbebe',
            borderRadius: '0.25rem'
        }}>        
        <FaSearch style={{
            fontSize: '1rem',
            color: '#ccbebe',
            marginLeft: '5px'
        }}/>
        <input 
            type="text" 
            placeholder="Search.." 
            name="search" 
            style={{
                border: 'none',
                margin: '1rem',
                fontSize: '1.2rem',
                backgroundColor: 'aliceblue',
                width: '80%',
                height: '100%'
            }}
            onChange={searchChange}
        ></input>
    </div>
    )
}


export default SearchBar