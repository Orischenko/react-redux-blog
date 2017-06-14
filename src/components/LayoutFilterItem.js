import React from 'react';

export default function LayoutFilterItem ({ layout, isOpenItem, onClick }) {
    return(
        <li onClick={ onClick(layout) } className={ isOpenItem ? 'active' : '' }>{ layout }</li>
    );
}