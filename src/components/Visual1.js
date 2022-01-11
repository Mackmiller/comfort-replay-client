import React, {useState, useEffect} from "react"
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

    const textShow = topShow.map((s, i)=>{
        // establishing each key/value pair:
        return (
            <h1>Your top show was {s.key}, which was watched a total of {s.value} times since March 11, 2020.</h1>
        ) 
    })
    console.log(finalData)

	return (
		
        <div>
            {textShow}
            <ResponsiveContainer width="95%" height={400}>
                <BarChart
                    width={1500}
                    height={350}
                    data={finalData}
                    
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="key" style={{fontSize: 10}} interval={0} />
                    <YAxis/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#B48DD8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
	);
}

export default Visual1
