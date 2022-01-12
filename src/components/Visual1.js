import React, {useState, useEffect} from "react"
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
    const finalData = Object.entries(props.showData).map(([key, value]) => ({key,value}))
    const topShow = Object.entries(props.oneShow).map(([key, value]) => ({key,value}))
    const addShow = () => {
		axios.post(apiUrl+"/shows/", topShow, {
			headers: {
				'Authorization': 'Token '+ props.user.token

			}
		})
			.then((response) => {
				console.log("this is the response", response)
			})
			.catch((error) => {
				console.log(error.response)
			});
	}

    const textShow = topShow.map((s, i)=>{
        // establishing each key/value pair:
        return (
            <h3>TL;DR: Your top show was {s.key}, which was watched a total of {s.value} times since March 11, 2020.</h3>
        ) 
    })
    console.log(finalData)

	return (
        <div>
            {addShow()}
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
