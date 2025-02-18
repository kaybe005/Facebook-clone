import React from 'react'
import "./Feed.css"
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />
        <Post
          profilePic='https://cdn.britannica.com/34/258834-050-9E9EF435/rapper-drake-performs-on-stage-during-lil-baby-and-friends-birthday-celebration-2022.jpg'
          message='My reaction when meeting Kalash:'
          timestamp='This is a timestamp'
          username='champagepapi'
          image='https://www.hollywoodreporter.com/wp-content/uploads/2025/02/GettyImages-1350350379-H-2025.jpg?w=1296&h=730&crop=1'
        />
        <Post
        profilePic='data:image/jpeg;base64,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'
        message='CEO Jensen Huang appoints Kalash as the future leader of Nvidia.'
        timestamp='This is a timestamp.'
        username='j.huang'
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzaITazoOdDDeQ-VR5LZoKIkIOQ2OOTjleGw&s'
         />
        <Post
        profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZURY573HtvWYcxr7duqhqMq1hy-u6a1gG5A&s'
        message='Taco Tuesday'
        timestamp='This is a timestamp'
        username='leGoat'
        image='https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-05/lebron-james-taco-bell-mc-230523-02-d038ab.jpg'
         />

    </div>
  )
}

export default Feed