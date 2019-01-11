import Unsplash, { toJson } from 'unsplash-js';


export const unsplash = new Unsplash({
    applicationId: "1fb345e7c3461dd9b370f12a282f0bd296d7d0af5c973a33a82b74706fc95e34",
    secret: "ef4e6d21583276b6ad3c893e23960aa2444607f47ecd1b13bee6331784d0888a",
    callbackUrl: "http://localhost:8080/auth",
    //callbackUrl: "http://photos.maxgraph.ru//auth",
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes"
]);

export const setAccessTokenUnplash = (code) => {
    unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json =>
            localStorage.setItem('token', json.access_token)
        );
};

export const listPhoto = (start, end, access_token) => {

    unsplash.auth.setBearerToken(access_token);

    return unsplash.photos.listPhotos(start, end, "latest")
        .then(res => res.json());
};

export const likePhoto = (id, token) => {
    unsplash.auth.setBearerToken(token);

    unsplash.photos.likePhoto(id)
        .then(toJson)
        .then(json => {
            console.log(json);
        });
};

export const unLikePhoto = (id, token) => {
    unsplash.auth.setBearerToken(token);

    unsplash.photos.unlikePhoto(id)
        .then(toJson)
        .then(json => {
            console.log(json);
        });
};