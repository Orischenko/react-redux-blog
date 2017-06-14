import React from 'react';
import {MdRadioButtonUnchecked, MdRadioButtonChecked} from 'react-icons/md';

const FilterCategoryItem = ({filter, onClick, isActive}) => {
    return (
        <li onClick={ onClick(filter.category) } className={ isActive ? 'active' : null }>{ filter.category }
            <i className="icon">{ isActive ? <MdRadioButtonChecked size={12} /> : <MdRadioButtonUnchecked size={12} /> }</i>
        </li>
    )
};

export default FilterCategoryItem;