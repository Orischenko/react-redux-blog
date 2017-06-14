import React, { Component } from 'react';
import LayoutFilterItem from './LayoutFilterItem';

export default class LayoutFilter extends Component{
    render() {
        const { layouts, onClick, layoutType } = this.props;

        const layoutElements = layouts.map((layout, i) => {
            return(
                <LayoutFilterItem
                    key={i}
                    layout={ layout }
                    isOpenItem={ layoutType === layout }
                    onClick={ onClick }
                />
            );
        });

        return(
            <ul className="layout_filter">
                { layoutElements }
            </ul>
        );
    }

}