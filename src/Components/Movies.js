import React, { Component } from 'react';
import MovieInfo from './MovieInfo';




class Movies extends Component {
    constructor() {
        super();
        this.state = {
            id: ["tt0057115", "tt0482571", "tt0816692", "tt0382932", "tt0266987", "tt8579674", "tt5013056", "tt1375666"]
        }
    }
    render() {
        return (
            
            <div>
                <h2> A Curated Selection of Fine Movies</h2>
                <div className="movies">
                {this.state.id.map((movie) => {
							return <MovieInfo id={movie}/>
						})}
                </div>
            </div>
      
        );
    }
}

export default Movies;