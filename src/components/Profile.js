import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import apiUrl from '../apiConfig'
// import React from "react"

const Profile = (props) => {

    // run again once charts boolean state is true
    useEffect(() => {
        props.getUserShows()
    }, [])

    let tenShows = Object.values( props.userShows).map((show,i) =>{
        return <li key={i}>{show.key}</li>

    })
   
  

	return (
        <div className="content">
            {/* {getUserShows()} */}
            <h1 className="text-center my-4">{props.user.email}'s Profile:</h1>
            <h3 style={{textAlign: "center"}}><Link to='/change-password/' style={{color: "#A9261E"}}>Change password</Link></h3>
            <ul>
                {tenShows}
            </ul>
        </div>
	);
}

export default Profile
