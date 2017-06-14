import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import { connect } from 'react-redux';
import Select from './Select';
import Paginations from './Pagination';
import CategoryFilter from './CategoryFilter';
import OrderByFilter from './OrderByFilter';
import LayoutFilter from './LayoutFilter';

class Table extends Component{
    static propTypes = {
        posts: PropTypes.array.isRequired
    };

    state = {
        selectValuePerPage: 6,
        pugNum: 1,
        selectValueOrderBy: '',
        layoutType: 'grid'
    };

    render() {
        return(
            <div>
                <h2>Blog</h2>
                <div className="control__up">
                    { this.addSelect() }
                    { this.addOrderByFilter() }
                    { this.addLayoutFilter() }
                    { this.addFilterCategories() }
                </div>

                { this.addPosts() }

                <div className="control__down">
                    { this.addPagination() }
                </div>
            </div>
        );
    }

    addLayoutFilter() {
        const defaultLayoutTypes = ['list','grid','masonry'];

        return(
            <LayoutFilter layouts={ defaultLayoutTypes } onClick={ this.handleLayoutFilterClick } layoutType={ this.state.layoutType }/>
        );
    }

    handleLayoutFilterClick = (type) => () => {
        this.setState({
            layoutType: type
        });
    };

    addOrderByFilter() {
        return(
            <OrderByFilter handleChangeSelect={ this.handleChangeSelectOrderBy }/>
        );
    }

    addPosts() {
        const { posts } = this.props;

        //массив фильтруется под orderBy
        const sortedTable = !this.state.selectValueOrderBy ? posts : posts.sort(this.tableSortedMethod(this.state.selectValueOrderBy));

        //массив фильтруется под sortedPerPage && pagination
        const postElements = sortedTable.slice(this.state.pugNum * this.state.selectValuePerPage - this.state.selectValuePerPage, this.state.pugNum * this.state.selectValuePerPage).map((post) => {
            return(
                <Post
                    key={ post.id }
                    post={ post }
                    layoutType={ this.state.layoutType }
                />
            );
        });

        return(
            <div className={ `post-container ${this.state.layoutType}-layout` }>
                <div className="posts-list">
                    { postElements }
                </div>
            </div>
        );
    }

    tableSortedMethod = (type) => (a,b) => {
        switch (type) {
            case 'order by title' : return a.title > b.title ? 1 : -1;
            case 'order by date' : return a.date < b.date ? 1 : -1;
            case 'order by author' : return a.author > b.author ? 1 : -1;
            case 'order by comment' : return a.comments.length < b.comments.length ? 1 : -1;
            case 'order by random' : return Math.random() - 0.5;
        }
    };

    addFilterCategories() {
        const { posts } = this.props;

        return(
            <CategoryFilter filterСategory={ posts } />
        )
    }

    addSelect() {
        return(
            <Select handleChangeSelect={ this.handleChangeSelectPerPage } />
        );
    }

    addPagination() {
        const { posts } = this.props;

        return(
            <div>
                <Paginations
                    paginations={ posts }
                    selectValue={ this.state.selectValuePerPage }
                    onClick={ this.handlePaginationClick }
                    handlePagNum={ this.state.pugNum }
                    prevClick={ this.handlePrevClick }
                    nextClick={ this.handleNextClick }
                />
            </div>
        );
    }

    handleChangeSelectOrderBy = (event) => {
        this.setState({
            selectValueOrderBy: event.target.value
        });
    };

    handlePrevClick = () => () => {
        if(this.state.pugNum > 1) {
            this.setState({
                pugNum: this.state.pugNum - 1
            });
        }
    };

    handleNextClick = () => () => {
        const { posts } = this.props;
        const buttonQuantity = Math.ceil(posts.length/this.state.selectValuePerPage);

        if(this.state.pugNum < buttonQuantity) {
            this.setState({
                pugNum: this.state.pugNum + 1
            });
        }
    };

    handleChangeSelectPerPage = (event) => {
        this.setState({
            selectValuePerPage: Number( event.target.value.match(/[0-9]+/g)[0] ),
            pugNum: 1
        });
    };

    handlePaginationClick = (num) => (event) => {
        event.preventDefault();

        this.setState({
            pugNum: num+1
        });
    };
}

export default connect(
    (state) => {
        return{
            posts: state.posts
        }
    }
)(Table); //данные передаются из store redux