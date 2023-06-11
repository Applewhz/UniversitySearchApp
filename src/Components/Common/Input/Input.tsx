import React from "react";
import './Input.css';

interface SearchInputProps {
    placeholder: string;
    onChange: React.ChangeEventHandler;
    onKeyDown: React.KeyboardEventHandler;
    value: string
}

export const SearchInput = ({placeholder, onChange, onKeyDown, value}: SearchInputProps) => {
    return (
        <div className='SearchBar'>
            <input type='text' placeholder={placeholder} onChange={onChange} onKeyDown={onKeyDown} value={value} />
        </div>
    )
}
