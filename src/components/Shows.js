import React, {useState, useEffect} from "react"
import axios from "axios"
import apiUrl from '../apiConfig'

const Shows = (props) => {

    // let [shows, setShows] = useState([])

    // // get top show data from database
    useEffect(() => {
        props.getShows()
    }, [])

    // const getShows = () => {
	// 	axios.get(apiUrl+"/shows/", {
    //     })
    //         .then((response) => {
    //             // console.log(response.data)
    //             setShows(response.data)
    //             console.log(shows)
    //         })
    //         .catch((error) => { console.log(error.response) });
	// }


	return (
		<div>
            <h1>hello</h1>
        </div>
	);
}

export default Shows
