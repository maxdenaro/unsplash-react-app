import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from "react-router";
import { likePhoto, unLikePhoto } from '../unsplash';
import { like, unlike } from "../actions/";

class DetailPhoto extends Component {

    constructor(props) {
        super(props);

        console.log(props)
        const { params } = props;

        this.state = {
            id_photo: '',
        }
    }

    componentDidMount() {
        const photos = this.props.photos;
        const id = this.props.params.id;
        const id_photo = photos[+id].id;

        this.setState(
            {
                id_photo
            }
        )
    }

    goBack() {

        this.props.history.goBack()
    }

    changeLikePhotoStatus() {
        const id = this.props.params.id;
        let status = this.props.photos[+id].liked_by_user;


        if (!status) {
            likePhoto(this.state.id_photo, localStorage.getItem('token'));
            this.props.likePhotoAction(this.state.id_photo);
        } else {
            unLikePhoto(this.state.id_photo, localStorage.getItem('token'));
            this.props.unlikePhotoAction(this.state.id_photo);
        }
    }

    render() {
        //console.log(this.props)
        const id = this.props.params.id;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="main-card">
                        <img className="card-img-top" src={this.props.photos[+id].urls.regular} alt="Card image cap" />
                        <div className="card-bottom">
                            <p className="card-text"> <span>Автор:</span> {this.props.photos[+id].user.name}<br/> <a href={this.props.photos[+id].user.links.html}>{this.props.photos[+id].user.links.html}</a></p>
                            <p className="card-text">Лайков: {this.props.photos[+id].likes}</p>
                            <button className={this.props.photos[+id].liked_by_user ? 'unlike_btn' : 'like_btn'} onClick={this.changeLikePhotoStatus.bind(this)}>
                                {this.props.photos[+id].liked_by_user ? 'Unlike' : 'Like'}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <button type="button" className="but_go_back" onClick={browserHistory.goBack}>&#8592; back</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        photos: state.photoReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        likePhotoAction: (id) => dispatch(like(id)),
        unlikePhotoAction: (id) => dispatch(unlike(id))
    }
} 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailPhoto);
