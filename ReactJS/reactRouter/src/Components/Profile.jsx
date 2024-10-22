import React from 'react'
import { useParams } from 'react-router-dom'


const Profile = () => {
    const params = useParams();
  return (
    <>
        <div>Profile :</div>
        <div>Name: {params.name}</div>
        <div>Age: {params.age}</div>
    </>
  )
}

export default Profile;