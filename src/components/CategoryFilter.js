import React, { Component } from 'react';
import CategoryFilterItem from './CategoryFilterItem';
import { posts } from '../data/data';
import { addMorePost } from './../actions';
import { connect } from 'react-redux';

class CategoryFilter extends Component{
    state = {
        activeFilters: []
    };

    render() {
        return(
            <div>
                { this.addCategories() }
            </div>
        );
    }

    addCategories() {
        let sortedArray = []; //sorted array by unique category

        nextInput:
        for (let i = 0; i < posts.length; i++) {

            for (let j = 0; j < sortedArray.length; j++) {
                if (sortedArray[j].category == posts[i].category) continue nextInput;
            }

            sortedArray.push(posts[i]);
        }

        //sorted array by name category
        sortedArray.sort((a,b) => { return a.category > b.category ? 1 : -1; });

        const filterElements = sortedArray.map((filter) => {
            return(
                <CategoryFilterItem
                    key={ filter.id }
                    filter={ filter }
                    isActive={ this.state.activeFilters.includes(filter.category) }
                    onClick={ this.handleClickBtnCategory } //поднимаю данные на верх, сетю в стейт
                />
            );
        });

        return(
            <ul className="filter-category">
                { filterElements }
            </ul>
        );
    }

    handleClickBtnCategory = (filterId) => () => {
        if (!this.state.activeFilters.includes(filterId)) {
            this.setState({
                activeFilters: [...this.state.activeFilters, filterId]  //пушит в массив стейта имя категории
            });

        } else {

            this.setState({
                activeFilters: this.state.activeFilters.filter( id => id !== filterId )
            });
        }

        //store
        this.props.addMorePost(filterId);
    }
}

export default connect(null, { addMorePost })(CategoryFilter);