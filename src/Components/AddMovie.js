import React, { Component } from 'react';
const axios = require('axios');

class AddMovie extends Component {
    constructor(){
        super();
        this.state = {
            id: '',
            poster: '',
            title: '',
            director: '',
            plot: '',
            genre: '',
            imdbRating: '',
            rating: '',
            runtime: '',
        }
        //this.updateHandler = this.updateHandler.bind(this); 
       //this.submissionHandler = this.submissionHandler.bind(this);
    }

    async retrieveMovieData(){
        const id = this.state.id;
        await axios.get('https://www.omdbapi.com/?apikey=305fe9e5&i=' + id)
        .then (response => {
            this.setState({
                id: response.data.imdbID,
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
            <div>
                <p>Filler</p>
            </div>
        );
    }
}

export default AddMovie;