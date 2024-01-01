import * as api from '../api';

// Acrtion creators
export const fetchPost = (payload) =>{
    return {
        type: "FETCH_ALL",
        payload
    }
}

export const savePost = (payload) => {
    return {
        type: "CREATE",
        payload
    }
}

export const getPosts = () => async(dispatch) =>{
    
    try {
        const {data } = await api.fetchPosts();
        dispatch(fetchPost(data));
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) =>{
    try {
        const {data } = await api.createPost(post);
        console.log(data.data);
        dispatch(savePost(data))
    } catch (error) {
        console.log(error.message);
    }
}