import React, { useEffect, useState } from 'react'
import Post from './Post';
import FlipMove from 'react-flip-move';
import './style.css';
import TweetBox from './TweetBox';
import db from '../../firebase';

function Feed() {

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection('post').onSnapshot(snapshot=>{
			setPosts(snapshot.docs.map( doc => doc.data()));
		})
	}, [])



	return (
		<div className="Feed">
			{/* Header */}
			<div className="Feed__header">
				<h2>Home</h2>
			</div>

			{/* TweetBox */}
			<TweetBox />

			{/* Post */}
			<FlipMove>
				{posts.map((post, index) => (
					<Post
						displayName={post.displayName}
						avatar={post.avatar}
						username={post.username}
						verified={post.verified}
						text={post.text}
						image={post.image}
						key={index}
					/>
				))}
			</FlipMove>
		</div>
	)
}

export default Feed
