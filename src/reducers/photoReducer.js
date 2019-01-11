const photoReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOAD_PHOTO':
            return [
                ...state, ...action.photos
            ];
            break;

        case 'LIKE_PHOTO':
            return state.map((photo) => {
                if (photo.id == action.id) {
                    let {liked_by_user, likes} = photo;
                    photo.liked_by_user = !liked_by_user;
                    photo.likes = likes + 1;
                    return photo;
                }
                return photo;
            });
            break;

        case 'UNLIKE_PHOTO':
            return state.map((photo) => {
                if (photo.id == action.id) {
                    let {liked_by_user, likes} = photo;
                    photo.liked_by_user = !liked_by_user;
                    photo.likes = likes - 1;
                    return photo;
                }
                return photo;
            });
            break;

        default:
            return state;
    }
};

export default photoReducer;
