import React from 'react'
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';


function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post
            profilePic="https://upload.wikimedia.org/wikipedia/commons/9/9c/Handheldglobe.png"
            message="wow this works"
            timestamp="this is a timestamp"
            username="BOI" 
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Playa_Noordhoek%2C_Sud%C3%A1frica%2C_2018-07-23%2C_DD_126.jpg/900px-Playa_Noordhoek%2C_Sud%C3%A1frica%2C_2018-07-23%2C_DD_126.jpg"
            />
            <Post
            profilePic="https://upload.wikimedia.org/wikipedia/commons/9/9c/Handheldglobe.png"
            message="wow this works"
            timestamp="this is a timestamp"
            username="BOI" 
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mount_Rushmore_detail_view_%28100MP%29.jpg/1280px-Mount_Rushmore_detail_view_%28100MP%29.jpg"
            />
            <Post
            profilePic="https://upload.wikimedia.org/wikipedia/commons/9/9c/Handheldglobe.png"
            message="wow this works"
            timestamp="this is a timestamp"
            username="BOI" 
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/SGI-2016-South_Georgia%E2%80%93Shag_Rocks_01.jpg/1920px-SGI-2016-South_Georgia%E2%80%93Shag_Rocks_01.jpg"
            />
        </div>
    )
}

export default Feed
