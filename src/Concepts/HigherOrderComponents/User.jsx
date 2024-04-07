import React from 'react'

const User = () => {

    const data = {

        name: "kalvium",
        location: "LPU",
    }

  return (
    <div>
        <h2>Name: {data.name}</h2>
        <h2>Location: {data.location}</h2>
    </div>
  )
}

export default User