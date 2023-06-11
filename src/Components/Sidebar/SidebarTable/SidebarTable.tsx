import { useContext } from 'react';
import { SidebarCard } from '../SidebarCard/SidebarCard';
import './SidebarTable.css';
import { SearchResultDataContext } from '../../../Services/Contexts/ApiContext';

const SidebarTable = () => {

    const { favouriteList } = useContext(SearchResultDataContext)

    
    const renderHistoryCard = (dataForHistory:any) => {
        if(dataForHistory.length > 0){
            return (
                dataForHistory.map((data:any) => 
                <div>
                    <SidebarCard 
                        id={data.id}
                        universityCountry={data.country} 
                        universityName={data.name} 
                        date={data.date}
                        remarks={data.remarks}
                    /> 
                </div>
                )
            )
        }else {
            return <h2>Add Favourite to View</h2>
        }
    }

    return (
        <div className="SidebarTableOverview">
            <h4>Favorites</h4>
            {renderHistoryCard(favouriteList)}
        </div>
    )
}

export default SidebarTable
    