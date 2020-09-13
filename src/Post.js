import React, { useState ,forwardRef} from 'react'
import './Post.css';
import {Avatar} from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat } from '@material-ui/icons';

const Post=forwardRef(({displayName, username, verified, timestamp, text, image, avatar}, ref) =>{


    return (

        <div className="post" ref={ref} >

            <div className="post__avatar">
                <Avatar src={image} />
            </div>

            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName} {" "}
                            <span className="post__headerSpecial">
                                {verified && <VerifiedUserIcon className="post__badge" /> }@{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={avatar} alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutline fontSize="small"/>
                    <Repeat fontSize="small"/>
                    <FavoriteBorder fontSize="small"/>
                    <Publish fontSize="small"/>
                </div>
            </div>

        </div>
    )
});

export default Post
