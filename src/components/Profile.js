import React from "react"
import { Link } from "react-router-dom"
// import React from "react"

const Profile = (props) => {

	return (
		<div className="content">
            <h1 className="text-center my-4">{props.user.email}'s Profile:</h1>
            <h3 style={{textAlign: "center"}}><Link to='/change-password/' style={{color: "#A9261E"}}>Change password</Link></h3>

        </div>
	);
}

export default Profile
