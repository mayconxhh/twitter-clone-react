import { Search } from '@material-ui/icons';
import { TwitterTweetEmbed, TwitterShareButton, TwitterTimelineEmbed } from 'react-twitter-embed';
import React from 'react';
import './style.css';

function Widget() {

	return (
		<div className="Widgets">
			<div className="Widgets__input">
				<Search className="Widgets__searchIcon" />
				<input placeholder="Search Twitter" type="text"  />
			</div>
			<div className="Widgets__widgetContainer">
				<h2>What's happening?</h2>
				<TwitterTweetEmbed tweetId="1403869627034345476" />
				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="mayconxhh"
					options={{ height: 350}}
				/>
				<TwitterShareButton
					url="https://facebook.com/mayconxhh"
					options={{ text: "#Valorant is amazing", via: "mayconxhh" }}
				/>
			</div>
		</div>
	)
}

export default Widget
