import React, { Component } from 'react';
import { motion } from "framer-motion"
import config from "../config.js"
const firebase = require('firebase')

const guestbookVariant = {
	visible:  {opacity: 1},
	hidden: {opacity: 0},
}

const submissionVariant = {
	visible:  {opacity: 1},
	hidden: {opacity: 0},
}

class GuestBook extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            bio: '',
            message: '',
            hiddenPreference: '',
            email: '',
            shouldUpdate: false,
            time: '',
            data: []
        }
        this.updateHandler = this.updateHandler.bind(this);
        this.submissionHandler = this.submissionHandler.bind(this);
    }

    componentDidMount(){
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }
        //get a reference to the database
        let ref = firebase.database().ref('data')
        //retrieve its data
        ref.on('value', snapshot => {
            let data = snapshot.val();
            let values = [];
            for(let submission in data){
                if(data[submission].hiddenPreference == "No"){
                    values.push({
                        id: submission,
                        name: data[submission].name,
                        bio: data[submission].bio,
                        message: data[submission].message,
                        hiddenPreference: data[submission].hiddenPreference,
                        email: data[submission].email,
                        time: data[submission].time
                    });
                }
            }
            this.setState({data:values});
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.state.shouldUpdate != prevState.shouldUpdate) {
            let ref = firebase.database().ref('data')
            //retrieve its data
            ref.on('value', snapshot => {
                let data = snapshot.val();
                let values = [];
                for(let submission in data){
                    if(data[submission].hiddenPreference == "No"){
                        values.push({
                            id: submission,
                            name: data[submission].name,
                            bio: data[submission].bio,
                            message: data[submission].message,
                            hiddenPreference: data[submission].hiddenPreference,
                            email: data[submission].email,
                            time: data[submission].time
                        });
                    }
                }
                this.setState({data:values});
            });
        }
    }

    updateHandler(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submissionHandler(event){
        event.preventDefault();
        const ref = firebase.database().ref('data')
        let today = new Date();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        if(today.getHours() < 12) {
            var nonmilitaryTime = "AM";
            var hour = today.getHours();
        } else {
            nonmilitaryTime = "PM";
            hour = today.getHours() - 12;
        }
        let date = months[today.getMonth()]+' '+today.getDate() + ', ' + today.getFullYear();
        let time = hour + ":" + today.getMinutes() + ' ' + nonmilitaryTime;
        let dateTime = date+' '+time;
        const submission = {
            name: this.state.name,
            bio: this.state.bio,
            message: this.state.message,
            hiddenPreference: this.state.hiddenPreference,
            email: this.state.email,
            time: dateTime
        }
        if (submission.name.length < 5 || submission.name.length > 19) {
            alert("Please submit a name that is longer than 5 characters and shorter than 20 characters.");
            return;
        }
        if(submission.bio.length > 100) {
            alert("Please submit a bio that is shorter than 100 characters.");
            return;
        }
        if(submission.message.length < 15 || submission.message.length > 499) {
            alert("Please submit a message that is longer than 15 characters and shorter than 500 characters.");
            return;
        }
        ref.push(submission);
        this.setState({
            name: '',
            bio: '',
            message: '',
            hiddenPreference: '',
            email: '',
            time: ''
        });
        alert("Thank you for sending a message!");

    }

    
    render() {
        return(
            <div className="main-container">
                <div className="guestbook-container">
                    <h2>Guest Book</h2>
                        <div className= "form">
                            <form className="guest-book" onSubmit={this.submissionHandler}>
                                <h3 className="guest-title">Tell Me More About Yourself!</h3>
                                <motion.div initial="hidden" animate="visible" variants={guestbookVariant}
								transition={{ duration:2}}>
                                <div className="user-name">
                                    <p>What's your name? </p>
                                    <input className="form-fields" name = "name" type="text" onChange={event => this.updateHandler(event)} placeholder="Name" required/>
                                </div>

                                <div className="user-bio">
                                    <p>* Submit a short bio!</p>
                                    <input className="form-fields" name= "bio" type="text" onChange={event => this.updateHandler(event)} placeholder="Bio"/>
                                </div>

                                <div className="user-message">
                                    <p>Send me a message! </p>
                                    <textarea className="form-fields" name = "message" type="text" rows="5" onChange={event => this.updateHandler(event)} placeholder="Message" required/>
                                </div>

                                <div className="user-visibility">
                                    <label for="hiddenPreference">Do you want this message to be private? </label>
                                    <select name = "hiddenPreference" id="hiddenPreference" onChange={event => this.updateHandler(event)} value={this.state.hiddenPreference}>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                                <div className="user-email">
                                    <p>* If you want, send me your email! It won't be displayed on the form.</p>
                                    <input className="form-fields" name = "email" type= "text"  onChange={event => this.updateHandler(event)} placeholder="Email"></input> 
                                </div>

                                <div className="submit-button">
                                    <button>Submit</button>
                                </div>
                                </motion.div>
                        </form>
                    </div>
                </div>
                <div className="submissions-container">
                    <h2>Guest Submissions</h2>
                    <motion.div initial="hidden" animate="visible" variants={submissionVariant}
								transition={{ duration:2}}>
                    {this.state.data.map((submission) =>{
                       return(
                            <div className="swrapper">
                                <div className="submissions">
                                <motion.div initial="hidden" animate="visible" variants={submissionVariant}
								transition={{ duration:2}}>
                                    <div className="submission-name"><p>{submission.name}</p></div>
                                    <div className="submission-time"><p >{submission.time}</p></div>
                                    <div className="submission-bio"><p>{submission.bio}</p></div>
                                    <div className="submission-message"><p>{submission.message}</p></div>
                                    </motion.div>
                                </div>
                            </div>
                       )
                   })}
                    </motion.div>
                </div>
            </div>
        );
    }
			
}

export default GuestBook;