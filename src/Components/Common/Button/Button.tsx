import React from "react";
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface CustomButtonProps {
    divClassName: string;
    onClick: React.MouseEventHandler;
    iconClassName?: string;
    icon: IconDefinition
    largeSize?: boolean
}

export const CustomButton = ({divClassName, onClick, icon, iconClassName, largeSize}: CustomButtonProps) => {
    return (
        <div className={`buttonContainer ${divClassName}`} onClick={onClick}>
            {largeSize ? <FontAwesomeIcon className={`Icon ${iconClassName}`} icon={icon} size='xl'/> 
            : <FontAwesomeIcon className={`Icon ${iconClassName}`} icon={icon}/>
            }
        </div>
    )

}

