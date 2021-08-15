import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import db from '../../../firebase';
import './style.css';

function TweetBox() {

	const [tweetMessage, setMessage] = useState("");
	const [tweetImage, setImage] = useState("");

	const sendTweet = e=>{
		e.preventDefault();
		db.collection('post').add({
			displayName:"Maycon Huayapa",
			avatar:"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
			username:"mayconxhh",
			verified:true,
			text:tweetMessage,
			image:tweetImage
		})

		setMessage("");
		setImage("");
	}

	return (
		<div className="TweetBox">
			<form onSubmit={sendTweet}>
				<div className="TweetBox__input">
					<Avatar src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png"/>
					<input onChange={
						(e)=> setMessage(e.target.value)
					} value={tweetMessage} placeholder="What's happening?" type="text"/>
					{/* <input placeholder="Enter image URL" type="text"/> */}
				</div>
				<input onChange={
						(e)=> setImage(e.target.value)
					} value={tweetImage} className="TweetBox__imageInput" placeholder="Optional: Enter image URL" type="text"/>
				<Button type="submit" className="TweetBox__tweetButton">Tweet</Button>
			</form>
		</div>
	)
}

export default TweetBox
