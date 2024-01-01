const initialState = {
    posts: []
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return {
                ...state,
                posts: action.payload
            };
        case "CREATE":
            return {
                ...state,
                posts: [...state.posts, action.payload.data]
            };
    
        default: return state;
    }
}

export default postReducer;