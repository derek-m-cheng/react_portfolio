import React, { Component } from 'react';
import {SRLWrapper} from 'simple-react-lightbox'
import Popup from 'reactjs-popup'

const axios = require('axios');
/*
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
*/


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
            <div className="movies">
                <Popup modal trigger={<img src={this.state.poster}/>} lockScroll closeOnDocumentClick>
                        <div>
                            <img src={this.state.poster}></img>
                            <p>{this.state.title}</p>
                            <p>A {this.state.genre} film</p>
                            <p>This film is directed by {this.state.director}</p>
                            <p>{this.state.plot}</p>
                            <p>Rated {this.state.rating}</p>
                            <p>IMDB Rating {this.state.imdbRating}</p>
                            <p>This film has a runtime of {this.state.runtime}</p>
                            <button>Delete Movie</button>
                        </div>
                </Popup>
          </div>
        )
    }
}

export default MovieInfo;