import React from 'react';

export default function OrderByFilter({ handleChangeSelect }) {
    return (
        <select onChange={ handleChangeSelect }>
            <option value="">choose sort type</option>
            <option>order by title</option>
            <option>order by date</option>
            <option>order by author</option>
            <option>order by comment</option>
            <option>order by random</option>
        </select>
    );
}