import React, { Component } from 'react';
import {SRLWrapper} from 'simple-react-lightbox'
import SimpleReactLightbox from "simple-react-lightbox";

const axios = require('axios');

const options = {
    settings: {
        overlayColor: "rgb(25, 136, 124)",
      },
      buttons: {
        backgroundColor: "#1b5245",
        iconColor: "rgba(126, 172, 139, 0.8)",
        showAutoplayButton: false,
        showCloseButton: true,
        showDownloadButton: false,
        showFullscreenButton: false,
        showNextButton: false,
        showPrevButton: false,
        showThumbnailsButton: false,
      },
    
};
class MovieInfo extends Component {
    constructor(){
        super();
        this.state = {
            poster: '',
            title: '',
            director: '',
            plot: '',
            genre: '',
            imdbRating: '',
            rating: '',
            runtime: '',
        }
    }

    componentDidMount() {
        axios.get('https://www.omdbapi.com/?apikey=305fe9e5&i=' + this.props.id)
        .then(response => {
            this.setState({
                poster: response.data.Poster,
                title: response.data.Title,
                director: response.data.Director,
                plot: response.data.Plot,
                genre: response.data.Genre,
                imdbRating: response.data.imdbRating,
                rating: response.data.Rated,
                runtime: response.data.Runtime,
            })
        })

    }
    render() {
        return (
            <SRLWrapper options = {options}>
            <div>
                        <div className="movie-poster">
                            <img src={this.state.poster} alt={
                                this.state.title + " " +
                                "Directed By: " + this.state.director + " " +
                                "Genre: " + this.state.genre + " " +
                                "Plot: " + this.state.plot + " " +
                                "Rating: " + this.state.rating + " " +
                                "IMDB Reviewer Rating: " + this.state.imdbRating + " " +
                                "Runtime: " + this.state.runtime                                
                            }>
                            </img>
                        </div>
            </div>
            </SRLWrapper>
        );
    }
}

export default MovieInfo;