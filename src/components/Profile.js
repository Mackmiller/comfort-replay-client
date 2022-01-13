import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"

const Profile = (props) => {

    // run upon page render
    useEffect(() => {
        props.getUserShows()
    }, [])

    let tenShows = Object.values( props.userShows).map((show,i) =>{
        return <li key={i}>{show.key}</li>
    })

	return (
        <div className="content" >
            <h1 className="text-center my-4">Profile:</h1>
            <h5 style={{textAlign: "center", color: "#A9261E", marginBottom: "20px"}}>Welcome, {props.user.email}</h5>
            <h4 style={{textAlign: "center", marginBottom: "20px"}}><Link to='/change-password/' style={{color: "black"}}>Change password</Link></h4>
            <h4 style={{textAlign: "center"}}>Top shows (based on your previous data uploads)</h4>
            <ul style={{textAlign: "center", listStyle: "none", padding: "0"}}>
                {tenShows}
            </ul>
        </div>
	);
}

export default Profile
