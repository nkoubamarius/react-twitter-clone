import React,{useState} from 'react'
import './TweetBox.css'
import {Avatar, Button} from '@material-ui/core';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage]=useState('');
    const [tweetImage, setTweetImage]=useState("");

    const sendTweet=(e)=>{
        e.preventDefault();
        db.collection('posts').add({
            displayName: "mariusnkouba",
            username: "marius",
            verified:true,
            text:tweetMessage,
            image:tweetImage,
            avatar:tweetImage
        });
        
        setTweetMessage("");
        setTweetImage("");
    }
 

    return (
        <div className="tweetBox">
            <form>
                <div  className="tweetBox__input">
                    <Avatar />
                    <input value={tweetMessage} onChange={e=>setTweetMessage(e.target.value)} placeholder="What's happening?" type="text"/>
                </div>
                <input className="tweetBox__imageInput" value={tweetImage} onChange={e=>setTweetImage(e.target.value)} placeholder="Optional: Enter image URL" type="text"/>
                <Button type="submit" onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
