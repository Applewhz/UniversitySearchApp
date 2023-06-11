import { faStar } from '@fortawesome/free-solid-svg-icons'
import { CustomButton } from '../Common/Button/Button'
import './SearchResultCard.css';
import { useContext } from 'react';
import { SearchResultDataContext } from '../../Services/Contexts/ApiContext';
import { v4 as uuid } from 'uuid';

interface SearchResultCardProps {
    date: string;
    universityName: string;
    universityCountry: string;
    websiteLink: string

}

export const SearchResultCard = ({ universityCountry, universityName, websiteLink}: SearchResultCardProps) => {

    const { favouriteList ,setFavouriteList} = useContext(SearchResultDataContext)
    
    const addToFavouriteListHandler = (event: any) => {
        event.preventDefault();
        const newFavourite = {
            id: uuid(),
            country: universityCountry,
            name: universityName,
            date: new Date().toLocaleDateString(),
            remarks: ''
        }
        const newFavouriteList = [...favouriteList, newFavourite ]
        setFavouriteList(newFavouriteList)
    }

    return (
        <div className="SearchResultCard">
            <div style={{marginRight: '10px', width: '10rem'}}>
                <p>Institute:</p>
                <p>{universityName}</p>
            </div>
            <div style={{marginRight: '10px', width: '10rem'}}>
                <p>Country:</p>
                <p>{universityCountry}</p>
            </div>
            <div className='SearchResultCardRightSide'>
                <p style={{marginRight: '10px'}}>Website:</p>
                <a style={{marginRight: '10px'}} href={`${websiteLink}`}>{websiteLink}</a>
                <CustomButton onClick={addToFavouriteListHandler} icon={faStar} divClassName={'SearchAndDeleteButtonContainer'}/>
            </div>
        </div>
    )
}