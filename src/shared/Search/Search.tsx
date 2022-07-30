import React, { useState } from 'react';

const Search = ({ searchItem, refresh }:{searchItem:any, refresh:any}) => {

    const [ textInput, setTextInput ] = useState('');

    const handleChange = (e:any) => {
        setTextInput(e.currentTarget.value)
    }

    const handleSearch = (e:any) => {
        e.preventDefault();
        searchItem(textInput);
        setTextInput("");
    }

    const handleRefresh = ()=>{
        refresh();
    }

    return (
        <form className='input-group' onSubmit={handleSearch}>
            <input className='form-control' value={textInput} type="text" onChange={handleChange} placeholder="Search name..."/>
            <button className='btn btn-info'><i className="fas fa-search"></i></button>
            <button className='btn btn-info' onClick={handleRefresh} ><i className="fas fa-redo"></i></button>
        </form>
    );
};

export default Search;