export const loadPhoto = (photos) => {
    //console.log('action photos', photos);
    return {
        type: 'LOAD_PHOTO',
        photos
    }
};

export const like = (id) => {
    console.log('action likePhoto', id);
    return {
        type: 'LIKE_PHOTO',
        id
    }
};

export const unlike = (id) => {
    console.log('action unlikePhoto', id);
    return {
        type: 'UNLIKE_PHOTO',
        id
    }
};
