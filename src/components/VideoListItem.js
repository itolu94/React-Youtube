import React from 'react';


// same as var = video ({vide})
const VideoListItem = ({video, onVideoSelected}) => {
	const imageURL = video.snippet.thumbnails.default.url;
	return (
	 <li onClick={() => onVideoSelected(video)} className='list-group-item'>
	 	<div className='video-list media'>
	 		<div className='media-left'>
	 			<img className='media-object' src={imageURL}/>
	 		</div>
	 		
	 		<div className='media-body'>
	 			<div className='media-heading'>
	 				{video.snippet.title}
	 			</div>
	 		</div>
	 	</div>
 
	 </li>
	 )
}

export default VideoListItem;