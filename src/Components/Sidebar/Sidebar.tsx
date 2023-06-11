import { CustomButton } from "../Common/Button/Button"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css';
import { useState } from "react";
import SidebarTable from "./SidebarTable/SidebarTable";

const Sidebar = () => {

    const [ showSideBar, setShowSideBar] = useState(false)

    const showSideBarHandler = (event: any) => {
        event.preventDefault();
        setShowSideBar(!showSideBar)
    }

    return (
        <div className="SideBar">
            <CustomButton onClick={showSideBarHandler} icon={faStar} divClassName={'SideBarFav'} largeSize={true}/>
            {showSideBar ? 
            <div className="SearchHistoryFavoriteBar">
                <SidebarTable /> 
            </div>
            : null}
        </div>
    )
}

export default Sidebar