import { Avatar } from '@material-ui/core';
import { ChatBubbleOutline, FavoriteBorder, PublicSharp, Repeat, VerifiedUser } from '@material-ui/icons';
import React, { forwardRef } from 'react';
import './style.css';

const Post = forwardRef(({
	displayName,
	avatar,
	username,
	verified,
	text,
	image
}, ref) => {
	return (
		<div className="Post" ref={ref}>
			<div className="Post__avatar">
				<Avatar src={avatar} />
			</div>
			<div className="Post__body">
				<div className="Post__header">
					<div className="Post__headerText">
						<h3>
							{displayName} {" "}
							<span className="Post__headerSpecial">
								{verified && <VerifiedUser className="Post__badge"/>} @{username}
							</span>
						</h3>
					</div>
					<div className="Post__headerDescription">
						<p>{text}</p>
					</div>
				</div>
				<img src={image} alt="" />
				<div className="Post__footer">
					<ChatBubbleOutline fontSize="small" />
					<Repeat fontSize="small" />
					<FavoriteBorder fontSize="small" />
					<PublicSharp fontSize="small" />
				</div>
			</div>
		</div>
	)
});

export default Post;
