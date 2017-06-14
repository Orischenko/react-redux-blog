import { posts } from '../data/data';
import { FILTER_CATEGORIES, ALL_CATEGORY, ADD_MORE_POSTS } from '../constants';

const activeFilters = {
    filters: []
};

export default (postState = posts, action) => {
    const{ type, payload } = action;

    switch (type) {
        case FILTER_CATEGORIES :

            let arr = [];

            for(let i = 0; i < posts.length; i++) {

                for(let y = 0; y < payload.category.length; y++) {
                    if(posts[i].category === payload.category[y]) {
                        arr.push(posts[i]);
                    }
                }
            }

            if(arr.length) {
                return arr;

            } else {

                return postState;
            }

        case ALL_CATEGORY : return posts;

        case ADD_MORE_POSTS:

            const arrPosts = [];

            if (!activeFilters.filters.includes(payload.category)) {
                activeFilters.filters = [...activeFilters.filters, payload.category];

            } else {
                activeFilters.filters = activeFilters.filters.filter( id => id !== payload.category );
            }

            for(let i = 0; i < posts.length; i++) {

                for(let y = 0; y < activeFilters.filters.length; y++) {
                    if(posts[i].category === activeFilters.filters[y]) {
                        arrPosts.push(posts[i]);
                    }
                }
            }

            if (activeFilters.filters.length) {
                return arrPosts;

            } else {
                return posts;
            }
    }

    return postState;
}