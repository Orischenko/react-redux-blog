import React from 'react';
import {MdNavigateBefore, MdNavigateNext} from 'react-icons/md';

export default function Paginations({ paginations, selectValue, onClick, handlePagNum, prevClick, nextClick }) {

    const pagItems = paginations.map((pagination, i) => {
        if (handlePagNum - 1 === i) {
            return(
                <li key={i} className="active" onClick={ onClick(i) }>{i+1}</li>
            );
        }

        return(
            <li key={i} onClick={ onClick(i) }>{i+1}</li>
        );
    });

    const prevButton = <li className="prev" onClick={ prevClick() }><MdNavigateBefore/> prev page</li>;
    const nextButton = <li className="next" onClick={ nextClick() }>next page <MdNavigateNext/></li>;

    pagItems.length = Math.ceil(pagItems.length/selectValue);

    return(
        <ul className="post-pagination">
            { prevButton }
            { pagItems }
            { nextButton }
        </ul>
    );
}