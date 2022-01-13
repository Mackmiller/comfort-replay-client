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
		<div className="content">
            <h1 className='text-center my-4'>Top shows submitted by Comfort Replay users:</h1>
            <ul style={{textAlign: "center"}}>
                {showNames}
            </ul>
        </div>
	);
}

export default Shows
