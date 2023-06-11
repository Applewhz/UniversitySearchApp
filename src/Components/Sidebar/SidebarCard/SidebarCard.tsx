import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'
import { CustomButton } from '../../Common/Button/Button'
import './SidebarCard.css';
import { useContext, useState } from 'react';
import { SearchResultDataContext } from '../../../Services/Contexts/ApiContext';

interface SidebarCardProps {
    id: string;
    date: string;
    universityName: string;
    universityCountry: string;
    remarks: string

}

export const SidebarCard = ({id, date, universityCountry, universityName, remarks}: SidebarCardProps) => {

    const [showRemark, setShowRemark] = useState<boolean>(false)
    const [editRemarks, setEditRemarks] = useState<boolean>(false)
    const [newRemarks, setNewRemarks] = useState<string>(remarks)
    const { favouriteList, setFavouriteList } = useContext(SearchResultDataContext)

    const index = favouriteList.findIndex(data => data.id === id)

    const showRemarkHandler = (event: any) => {
        event.stopPropagation();
        setShowRemark(!showRemark)
    }

    const onEditHandler = (event: any) => {
        event.preventDefault();
        setEditRemarks(!editRemarks)
        if(editRemarks){
            favouriteList[index].remarks = newRemarks
            setFavouriteList([...favouriteList])
        }
    }

    const onDeleteHandler = (event: any) => {
        event.preventDefault();
        const newFavouriteList = favouriteList.filter(data => data.id !== id)
        setFavouriteList(newFavouriteList)
    }

    const onDeleteRemarksHandler = (event: any) => {
        event.preventDefault();
        favouriteList[index].remarks = ''
        setFavouriteList([...favouriteList])
    }

    return (
        <>
        {showRemark ? 
            <>
                <div className="SidebarCard" style={{flexDirection: 'column'}}>
                    <div style={{ display: 'flex', flexDirection: 'row' , justifyContent: 'space-between'}}>
                        <div style={{ display: 'flex', flexDirection: 'row'}}>
                            <CustomButton onClick={onEditHandler} icon={faPencil} divClassName={'EditAndDeleteRemarkButtonContainer'}/>
                            <CustomButton onClick={onDeleteRemarksHandler} icon={faTrash} divClassName={'EditAndDeleteRemarkButtonContainer'}/>
                        </div>
                        <p>Remarks</p>
                        <div onClick={showRemarkHandler} >
                            <p>Back{'>'} </p>
                        </div>
                    </div>
                    {editRemarks ? <input onChange={(event) => setNewRemarks(event.target.value)} value={newRemarks}/>
                    : <p>{remarks}</p>
                    }
                </div>
            </> : <>
                <div className="SidebarCard">
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>{universityName}</p>
                        <p>{universityCountry}</p>
                    </div>
                    <div className='SidebarCardRightSide'>
                        <div onClick={showRemarkHandler} >
                            <p>Remarks{'>'} </p>
                        </div>
                        <CustomButton onClick={onDeleteHandler} icon={faTrash} divClassName={'EditAndDeleteRemarkButtonContainer'}/>
                        <p>{date}</p>
                    </div>
                </div>
            </>}
        </>
    )
}