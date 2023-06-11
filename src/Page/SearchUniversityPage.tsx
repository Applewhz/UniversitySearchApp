import DisplayCardTable from '../Components/DisplaySearchResultTable/DisplaySearchResultTable';
import SearchBar from '../Components/SearchBar/SearchBar';
import Sidebar from '../Components/Sidebar/Sidebar';
import './SearchUniversityPage.css';
import { useEffect, useState } from "react";

const SearchUniversityPage = () => {
    
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    useEffect(() => {
        setShowErrorMessage(true)
        setTimeout(() => {
            setShowErrorMessage(false);
        }, 3000);
    },[])

    return (
        <div style={{display: 'flex', flexDirection: 'row', height: '100%'}}>
        <Sidebar />
        <div className="SearchUniversityPage">
            <SearchBar />
            {showErrorMessage ? 
                <div>
                    <h4 style={{padding: '3px', color: 'maroon'}}>Country/City Entered is not found! Please try again!</h4> 
                </div>
            : null}
            <DisplayCardTable />
        </div>
        </div>
    )
}

export default SearchUniversityPage;