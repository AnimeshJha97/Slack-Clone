import React, { useState } from 'react';
import './ChatInput.css';
import { useStateValue } from '../StateProvider/StateProvider';
import db from '../firebase';
import firebase from "firebase";
function ChatInput({channelName, channelId}) {
    // to keep track of what user put inside the input field
    // we create a react variable, default empty
    const [input, setInput] = useState("");
    const [{user}] = useStateValue();

    const sendMessage = e => { // e is the event
        e.preventDefault() // so it doesn't refresh the page
        
        if (channelId){
            // we need database of user
            db.collection('rooms')
            .doc(channelId)
            .collection('messages')
            .add({
                message : input,
                timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                user : user.displayName,
                userImage : user.photoURL,
            })
        }
    }
    // every time person type, we set it in value using onChange
    return (
        <div className = 'chatInput'>
            <form action="">
                <input 
                    value = {input}
                    onChange = {e => setInput(e.target.value)}
                    placeholder = {`Message #${channelName?.toLowerCase()}`} />
                <button type='submit' onClick = {sendMessage}>
                    SEND
                </button>
            </form>
        </div>
    )
}

export default ChatInput
