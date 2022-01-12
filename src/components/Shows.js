import React, {useEffect} from "react"
// import React from "react"

const Shows = (props) => {

    // run getShows function on page render is redundant
    useEffect(() => {
        props.getShows()
    }, [])

    // map show state (passed prop from app.js) to get list of top shows
    const showNames = props.shows.shows.map((show, i)=> {
        return <li key={i} style={{listStyle: "none"}} >
                  <h4>{show.key}: {show.value} views</h4>
                </li>
      })

	return (
		<div>
            <h1>Top shows</h1>
            <ul>
                {showNames}
            </ul>
        </div>
	);
}

export default Shows
