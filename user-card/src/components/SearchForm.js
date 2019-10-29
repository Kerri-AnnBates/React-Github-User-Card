import React from 'react';

function SearchForm(props) {
    const { handleChange, handleSubmit } = props;
    return (
        <div className="search-form">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search for new user" onChange={handleChange} />
            </form>
        </div>
    )
}

export default SearchForm;