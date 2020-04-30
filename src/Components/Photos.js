import React, { Component } from 'react';
import "../App.css"
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import central from './images/centralpark.jpg';
import sunrise from './images/sunrise.jpg';
import waffle from './images/waffle.jpg';
import staff from './images/staff.jpg';
import shaver from './images/shaver.jpg';
import shaver2 from './images/shaver2.jpg';
import met from './images/met.jpg';
import met2 from './images/met2.jpg';
import met3 from './images/met3.jpg';
import {SRLWrapper} from 'simple-react-lightbox';

class Photos extends Component {
    render() {
        return (
            <div>
                <div class="header-photos">
		            <h1>My Photos</h1>
	            </div>
                <div class="header-caption">
                    <h3>Here's a selection of my photos!</h3>
                </div>
                <div>
                    <ScrollUpButton/>
                </div>
                <SRLWrapper>
                <div className="photos-container">
                    <div className="images"><img src={central} alt="Central Park"/><p>A picture of Central Park taken on a vacation.</p></div>
                    <div className="images"><img src={sunrise} alt="Sunrise in Santa Barbara"/><p>A photo of the sunrise taken at Campus Point before the COVID-19 outbreak.</p></div>
                    <div className="images"><img src={waffle} alt="Waffle"/><p>A photo of a symptious waffle from a stand in Prospect Park.</p></div>
                    <div className="images"><img src={staff} alt="San Miguel RA Staff"/><p>A photo of my RA staff this year of San Miguel.</p></div>
                    <div className="images"><img src={shaver} alt="Shaver Lake"/><p>A photo taken of the magnificient mountains on the way down from Kaiser Pass.</p></div>
                    <div className="images"><img src={shaver2} alt="Shaver Lake"/><p>A photo taken of a serene meadow on the way down from Kaiser Pass.</p></div>
                    <div className="images"><img src={met} alt="Amor Caritas"/><p>Amor Caritas</p></div>
                    <div className="images"><img src={met2} alt="Antigone Pouring Libations"/><p>Antigone Pouring Libations</p></div>
                    <div className="images"><img src={met3} alt="Mourning Victory"/><p>Mourning Victory</p></div>
                </div>
                </SRLWrapper>
            </div>
        );
    }
}

export default Photos;