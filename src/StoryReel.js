import React from 'react'
import "./StoryReel.css"
import Story from './Story'

function StoryReel() {

  return (
    <div className='storyReel'>
      <Story 
      image="https://townsquare.media/site/812/files/2024/06/attachment-drake-photo-1.jpg?w=1080&q=75" 
      profileSrc="https://cdn.britannica.com/34/258834-050-9E9EF435/rapper-drake-performs-on-stage-during-lil-baby-and-friends-birthday-celebration-2022.jpg" 
       title="Draddy" />
      <Story 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxw3n5Zh5mgmKFsICK2fEp3QBMBm5dKfN5bg&s" 
      profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREulEscIeGSDGQutvx94zkyDKWLosgikQ7LQ&s" 
      title="Cole Palmer" />
      <Story 
      image="https://i.pinimg.com/236x/e5/51/eb/e551ebcacd36c874560f6b2c36baa917.jpg" 
      profileSrc="https://upload.wikimedia.org/wikipedia/commons/6/6c/Tzuyu_at_Gucci_Ancora_on_05032024_%283%29.png" 
      title="Chou Tzuyu" />
      <Story 
      image="https://i.scdn.co/image/ab67616d0000b2738e746ebd6f3f5a39467db8eb" 
      profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2E3waacKF8NnF-ak5Q7Q5vdVjwYspTyW9Fw&s" 
      title="Plaza" />
      <Story 
      image="https://i.pinimg.com/736x/d9/7c/2d/d97c2da39af4103f664b8411634d6659.jpg" 
      profileSrc="https://i.scdn.co/image/ab6761610000e5ebe187dca750abfd3688836309" 
      title="Brent Faiyaz" />
    </div>
  )
}

export default StoryReel