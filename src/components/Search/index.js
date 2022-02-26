import { useState} from 'react';

const Search = ({setSearchTerm})=>{
    const [searchValue,setSearchValue] = useState('');

    const handleChange = (value)=>{
        setSearchValue(value);
    }

    const handleClick =  (e)=>{
        e.preventDefault()
       setSearchTerm(searchValue)
    }

    return (
      <div className="search w-75 mx-5">
        <form onSubmit={handleClick} className="d-flex ">
          <input
            type="search"
            className="form-control"
            name="search"
            value={searchValue}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="search here..."
          />
          <input type="submit" value="search" className="btn btn-warning" />
        </form>
      </div>
    );
}


export default Search