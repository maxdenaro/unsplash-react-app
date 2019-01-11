import React from 'react';
import {Link, NavLink} from "react-router";

const Photo = (props) => {

    const { photo, index } = props;

    const divStyle = {
      backgroundImage: 'url(' + photo.urls.small + ')',
    };

    let amountLikes = photo.likes;
    function declOfNum(number, titles) {  
        var cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }
    let likes = declOfNum(amountLikes, ['отметка', 'отметки', 'отметок']);

    return (
        <div className="card">
            <div className="author-block">
                <a href={photo.user.links.html} target="_blank">
                    <img src={photo.user.profile_image.small} />
                    <span>{photo.user.name}</span>
                </a>
            </div>
            <div className="card-image" style={divStyle}></div>
            <div className="card-block">
                <p className="card-text">{photo.likes} {likes} "Нравится"</p>
                <div>
                    <Link to={`/photo/${index}`} className="link-to">Посмотреть</Link>
                </div>
            </div>
        </div>
    );
};

export default Photo;