import { useState, useContext } from "react";
import { SearchInput } from "../Common/Input/Input"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { CustomButton } from "../Common/Button/Button";
import './SearchBar.css';
import axios from "axios";
import { SearchResultDataContext } from "../../Services/Contexts/ApiContext";

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const { setSearchResultData} = useContext(SearchResultDataContext)

    const getSearchResults = () => {
        axios.get(`http://universities.hipolabs.com/search?name=${searchTerm}`)
          .then((response) => {
            setSearchResultData(response.data)
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          });
    }

    const onChangeHandler = (event: any) => {
        setSearchTerm(event.target.value)
    }

    const onSearchHandler = (event: any) => {
        event.preventDefault();
        getSearchResults()
        setSearchTerm('')
    }

    const onEnterHandler = (event: any) => {
        if(event.key !== 'Enter') return
        getSearchResults()
        setSearchTerm('')
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <SearchInput onChange={onChangeHandler} value={searchTerm} placeholder={'Enter University Name ...'} onKeyDown={onEnterHandler}/>
            <CustomButton onClick={onSearchHandler} icon={faMagnifyingGlass} divClassName={'SearchButtonContainer'} iconClassName={'SearchIcon'}/>
        </div>
    )
}

export default SearchBar