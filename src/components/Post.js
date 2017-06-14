import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {MdPerson, MdAccessTime, MdContentPaste} from 'react-icons/md';

export default class Post extends Component{
    static propTypes = {
        post: PropTypes.object.isRequired
    };

    render() {
        const { post, layoutType } = this.props;

        const dateReg = post.date.match(/[0-9]+-[0-9]+-[0-9]+/g);

        const date = new Date(dateReg[0].replace(/-/g, ','));

        const postDate = `${date.toLocaleString('en', {month: 'short'}).toString()} ${date.getDate().toString()}, ${date.getFullYear().toString()}`;

        const postTags = post.tags.map((tag,i) => {
            return (
                <a href="#" key={i}>{ tag }</a>
            );
        });

        return(
            <article className="post-item">
                <figure className="post-thumbnail">
                    <a href="#">
                        <img alt={ post.title } src={ post.imageUrl[layoutType || 'grid'] } />
                    </a>
                </figure>
                <div className="post-list__item-content">

                    <header className="entry-header">
                        <div className="entry-meta">
                            <div className="post__cats"><i className="icon"><MdContentPaste size={12} /></i> <a href="#">{ post.category }</a></div>
                            <div className="posted-by"><i className="icon"><MdPerson size={12} /></i><a href="#">{ post.author }</a></div>
                            <div className="post__date"><i className="icon"><MdAccessTime size={12} /></i> { postDate }</div>
                        </div>
                        <div className="post__tags">{postTags}</div>
                        <h4 className="entry-title">{ post.title }</h4>
                    </header>

                    <div className="entry-content">
                        <p>{ post.description }</p>
                    </div>

                    <footer className="entry-footer">
                        <div className="entry-meta">
                            <div className="post__comments">{ post.comments.length > 1 ? `${post.comments.length} Comments` : `${post.comments.length} Comment` }</div>
                        </div>
                        <a href="#" className="btn">Read more</a>
                    </footer>

                </div>
            </article>
        );
    }
}