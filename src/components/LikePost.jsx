import React, { useState } from 'react'
import HOC from './Hoc';

function LikePost({handleLike,likeCounter}) {

  return (
    <div>
      <button onClick={handleLike}>Like Post {likeCounter}</button>
    </div>
  )
}

export default HOC(LikePost)
