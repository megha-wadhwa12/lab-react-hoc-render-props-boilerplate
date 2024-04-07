import React, { useState } from 'react'
import HOC from './Hoc'

function LikeImage({handleLike,likeCounter}) {

  return (
    <div>
      <button onClick={handleLike}>Like Image {likeCounter}</button>
    </div>
  )
}

export default HOC(LikeImage)