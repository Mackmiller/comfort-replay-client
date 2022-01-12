import React, {useEffect } from "react"
import axios from "axios"
import apiUrl from '../apiConfig'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts"

const Visual1 = (props) => {
    // console.log(props.showData)

    // set up key/value pairs for top ten show data
    const finalData = Object.entries(props.showData).map(([key, value]) => ({key,value}))
    // set up ley/value pair for number one top show
    const topShow = Object.entries(props.oneShow).map(([key, value]) => ({key,value}))

    // add topShow to database of top showers for all users once visuals load
    const addShow = () => {
		axios.post(apiUrl+"/shows/", topShow, {
            // this was giving me auth problems on sign out, so commented it out (similar to getShows in app.js)
			// headers: {
			// 	'Authorization': 'Token '+ props.user.token
			// }
		})
			.then((response) => {
				console.log("this is the response", response)
			})
			.catch((error) => {
				console.log(error.response)
			});
	}
    useEffect(() => {
        addShow()
    }, [])
    const textShow = topShow.map((s, i)=>{
        // map number one top show object
        return (
            <h3>TL;DR: Your top show was {s.key}, which was watched a total of {s.value} times since March 11, 2020.</h3>
        ) 
    })
    // console.log(finalData)

	return (
        <div>
            {/* {addShow()} */}
            {textShow}
            <h4 style={{textAlign: "center", marginTop:"40px"}}>Top Ten Shows (Number of Viewing Sessions)</h4>
            <ResponsiveContainer width="95%" height={400}>
                <BarChart
                    width={1500}
                    height={350}
                    data={finalData}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="key" style={{fontSize: 10}} interval={0} />
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Bar name="Number of views" dataKey="value" fill="#A9261E" />
                </BarChart>
            </ResponsiveContainer>
        </div>
	);
}

export default Visual1
