import React, { useState } from 'react'
import { Avatar } from '@mui/material'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@mui/icons-material';
import "./MessageSender.css"

function MessageSender() {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = e => {
        e.preventDefault();

        setInput('');
        setImageUrl('');
    }
  return (
    <div className='messageSender'>
        <div className="messageSender-top">
            <Avatar />
            <form>
                <input value= {input} onChange={(e) => setInput(e.target.value)} className='messageSender-input' placeholder={`What's on your mind?`}/>
                <input value = {imageUrl} onChange={(e) => setImageUrl(e.target.value)}placeholder='image URL (optional)' />
                <button onClick={handleSubmit} type='submit'>Hidden submit</button>
            </form>
        </div>

        <div className="messageSender-bottom">
            <div className="messageSender-option">
                <Videocam style={{ color: "red"}} />
                <h3>Live Video</h3>
            </div>
            <div className="messageSender-option">
                <PhotoLibrary style={{ color: "green"}} />
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender-option">
                <InsertEmoticon style={{ color: "orange"}} />
                <h3>Feeling/Emotion</h3>
            </div>
        </div>

    </div>
  )
}

export default MessageSender