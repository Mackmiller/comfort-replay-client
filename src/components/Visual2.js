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

const Visual2 = (props) => {
    // console.log(props.showData)
    const finalData = Object.entries(props.dailyData).map(([key, value]) => ({key,value}))

    // const finalData = props.showData.map((c, i)=>{
    //     // establishing each key/value pair:
    //     const name = c[0]
    //     const value = c[1]
        
    //     return (
    //         name, value
    //     ) 
    // })
    // console.log(finalData)

	return (
		
        <div>
            <h4 style={{textAlign: "center", marginTop:"40px"}}>Viewing Session Distribution (24hr Clock in Eastern Standard Time)</h4>
            <ResponsiveContainer width="95%" height={400}>
                <BarChart
                    width={1500}
                    height={350}
                    data={finalData}
                    
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="key" style={{fontSize: 9}}/>
                    <YAxis/>
                    <Tooltip />
                    <Legend />
                    <Bar name="Number of views" dataKey="value" fill="#A9261E" />
                </BarChart>
            </ResponsiveContainer>
        </div>
	);
}

export default Visual2
