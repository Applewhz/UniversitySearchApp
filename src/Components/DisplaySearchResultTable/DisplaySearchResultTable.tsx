import { useContext, useState } from 'react';
import { SearchResultCard } from '../SearchResultCard/SearchResultCard';
import './DisplaySearchResultTable.css';
import { SearchResultDataContext } from '../../Services/Contexts/ApiContext';
import { SearchInput } from '../Common/Input/Input';
import { CustomButton } from '../Common/Button/Button';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const DisplaySearchResultTable = () => {

    const { searchResultData, setSearchResultData} = useContext(SearchResultDataContext)

    const [countryFilter, setCountryFilter] = useState<string>('')
    
    const renderHistoryCard = (dataForHistory:any) => {
        if(dataForHistory.length > 0){
            return (
                dataForHistory.map((data:any) => 
                <div>
                    <SearchResultCard 
                        websiteLink={data.web_pages}
                        universityCountry={data.country} 
                        universityName={data.name} 
                        date={data.date}
                    /> 
                </div>
                )
            )
        }else {
            return <h2>Please Search Something to View</h2>
        }
    }

    const sortResultByCountry = (country: string) => {
        const sortedList = searchResultData.sort((a, b) => {
            const nameA = a.country.toUpperCase();
            const nameB = b.country.toUpperCase();
            const compareName = country.toLocaleUpperCase()

            if (nameA.startsWith(compareName) && nameB.startsWith(compareName)) return nameA.localeCompare(nameB);
            else if (nameA.startsWith(compareName)) return -1;
            else if (nameB.startsWith(compareName)) return 1; 

            return nameA.localeCompare(nameB);

          })
        setSearchResultData([...sortedList])
    }
    const onChangeHandler = (event: any) => {
        setCountryFilter(event.target.value)
    }

    const onSearchHandler = (event: any) => {
        event.preventDefault();
        sortResultByCountry(countryFilter)
    }

    const onEnterHandler = (event: any) => {
        if(event.key !== 'Enter') return
        sortResultByCountry(countryFilter)
    }

    return (
        <div className="SearchHistoryOverview">
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{width: '90%'}}>
                <h4>Search Results</h4>
                </div>
                <SearchInput onChange={onChangeHandler} value={countryFilter} placeholder={'Filter Country ...'} onKeyDown={onEnterHandler}/>  
                <CustomButton onClick={onSearchHandler} icon={faMagnifyingGlass} divClassName={'FilterButtonContainer'} iconClassName={'FilterIcon'}/>
            </div>
            {renderHistoryCard(searchResultData)}
        </div>
    )
}

export default DisplaySearchResultTable
    