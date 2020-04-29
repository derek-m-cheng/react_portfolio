import React, { Component } from 'react';
import "../App.css"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

class Music extends Component {
    render() {
        return (
            <div>
                <div class="header">
		            <h1>My Music</h1>
	            </div>

                <div class="header-caption">
                    <h3>Here's a selection of my music taste!</h3>
                </div>
	
                <button class="scrollTop"> 
                    <i class="material-icons"><ArrowUpwardIcon/></i>
                </button>

                <div class="music-container">
                    <div>
                        <iframe src="https://open.spotify.com/embed/playlist/2JN43T4roMHnH2OGice8Y8" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        <p>Relaxing playlist but has a lot of French songs on it for some reason.</p>
                    </div>
                    <div>
                        <iframe src="https://open.spotify.com/embed/playlist/5JLcz5O7DX7TVi5PiJgF6X" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        <p>Alt/Indie playlist.</p>
                    </div>
                    <div>
                        <iframe src="https://open.spotify.com/embed/playlist/4qhThJc7idmdHCM9oa8WQQ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        <p>Chill music to vibe to.</p>
                    </div>
                    <div>
                        <iframe src="https://open.spotify.com/embed/playlist/6yawnxAPxpqGRYeEHZDZcM" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        <p>Playlist for all your 88rising needs.</p>
                    </div>
                    <div>
                        <iframe src="https://open.spotify.com/embed/playlist/5gpuZ4SoZVs8Q5r6eSq57y" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        <p>Playlist for when you need to study.</p>
                    </div>
                    <div>
                        <iframe src="https://open.spotify.com/embed/playlist/7jIIUcqsc3ns8UklA4W2mT" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        <p>Playlist for when you need to study and things are getting dire.</p>
                    </div>

                </div>

	
            </div>
        );
    }
}

export default Music;