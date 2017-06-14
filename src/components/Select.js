import React from 'react';

export default function Select({ handleChangeSelect }) {
    return (
        <select onChange={ handleChangeSelect }>
            <option>6 per page</option>
            <option>9 per page</option>
            <option>12 per page</option>
        </select>
    );
}