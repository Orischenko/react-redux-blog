import { FILTER_CATEGORIES, ALL_CATEGORY, ADD_MORE_POST } from '../constants';

export function filterCategories(category) {
    return{
        type: FILTER_CATEGORIES,
        payload: { category }
    }
}

export function allCategory() {
    return{
        type: ALL_CATEGORY
    }
}

export function addMorePost(category) {
    return{
        type: ADD_MORE_POST,
        payload: { category }
    }
}