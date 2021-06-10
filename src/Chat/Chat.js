import React, { useState, useEffect } from 'react';
import './Chat.css';
import Message from './Message.js';
import ChatInput from './ChatInput.js';
import { useParams } from 'react-router-dom';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from "../firebase";

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot((snapshot) => (
                setRoomDetails(snapshot.data())
            ))
        }

        db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) =>
            setRoomMessages(
                snapshot.docs.map(doc => doc.data())
            )
        )
    }, [roomId]);


    console.log(roomDetails);
    return (
        <div className = "chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># {roomDetails?.name}</strong>
                        <StarOutlineIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat_messages">
                {roomMessages.map(({message, timestamp, userImage, user}) =>
                    <Message
                        message = {message}
                        timestamp = {timestamp}
                        userImage = {userImage}
                        user = {user}
                    />
                )}
            </div>
            <div className="chatInput">
                <ChatInput channelName = {roomDetails?.name} channelId = {roomId} />
            </div>            
        </div>
    )
}

export default Chat
