import React from "react"
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

    // set up key/value pairs for daily data
    // this allows the data to be more easily read by rechart library for visualization
    const finalData = Object.entries(props.dailyData).map(([key, value]) => ({key,value}))

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
