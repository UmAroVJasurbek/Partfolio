import { FiX } from "react-icons/fi";
import Search from "../../assets/Search.tsx";
import "./SearchPanel.scss"
import { useState } from "react";

const SearchPanel = ({setSearchActive} : {setSearchActive: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div className="search-panel-wrapper" onClick={(e) => {
        if(e.target === e.currentTarget){
            setSearchActive(false);
        }
    }}>
        <div className='search-panel'>
        <div className="container container--md">
            <form className="search-panel__form">
                <input type="text" placeholder='Search' value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                <button onClick={() => setSearchValue("")} type="button"><FiX/></button>
                <Search/>
            </form>
        </div>
    </div>
    </div>
  )
}

export default SearchPanel