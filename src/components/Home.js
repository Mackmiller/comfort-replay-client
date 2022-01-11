import React, {useState, useEffect} from "react"
import axios from "axios"
import { Button, FormGroup, Form } from "react-bootstrap"
import apiUrl from '../apiConfig'
import Visual1 from './Visual1'
import Visual2 from './Visual2'

const Home = (props) => {

	let [fileUpload, setFileUpload] = useState({})
	let [showData, setShowData] = useState([])
	let [dailyData, setDailyData] = useState([])
	let [oneShow, setOneShow] = useState([])
	const [charts, setCharts] = useState(false);

	const handleFile = (event) => {
		event.preventDefault();
		// const fileToUpload = event.target.files[0];
		setFileUpload(event.target.files[0]);
	};

	const handleSubmitData = (event) => {
		event.preventDefault();
		if (props.user) {
			let formData = new FormData();
			formData.append("file", fileUpload);
			axios.post(apiUrl+"/data/", formData, {
				headers: {
					Authorization: 'Token '+ props.user.token
				}
			})
				.then((response) => {

					// handle data for tv shows
					const showData = response.data[0]
					// console.log(showData)
					const obj = JSON.parse(showData)
					// console.log("this is obj data: ", obj)

					// handle data for daily watching
					const dailyData = response.data[1]
					// console.log(dailyData)
					const obj2 = JSON.parse(dailyData)
					// console.log("this is obj2 data: ", obj2)
					
					// handle data for top show
					const oneShow = response.data[2]
					const obj3 = JSON.parse(oneShow)
					// console.log("TOP SHOW", obj3)

					// set states
					setShowData(obj)
					console.log("SHOW DATA SET", showData)

					setDailyData(obj2)
					console.log("DAILYDATA SET", dailyData)

					setOneShow(obj3)
					console.log("TOPSHOW SET", oneShow)

					setCharts(true)

		
				})
				.catch((error) => {
					console.log(error.response)
				});
		}
	};

	return (
		<main className="content">
			<h1 className="text-center my-4">
			What does your Netflix user data say about your viewing habits during the COVID-19 Pandemic?
			</h1>
			<h3>Step 1: Request your data.</h3>
			<p>
				Request your individual user data from Netflix <a href="https://www.netflix.com/account/getmyinfo">here</a>. Keep in mind that this process could take up to 30 days to receive a response.
			</p>
			<h3>Step 2: Download your data locally.</h3>
			<p>Now that you have received your data from Netflix, download the zip folder to an accessible area of your computer. Unzip the folder and take a look at the contents.</p>
			<h3>Step 3: Navigate to the correct subfolder.</h3>
			<p>From within your netflix-report folder, select the CONTENT_INTERACTION folder. This will bring you to a list of CSVs. We will be working exclusively with the ViewingActivity.csv file.</p>
			<h3>Step 4: Upload the correct csv file.</h3>
			<form onSubmit={handleSubmitData}>
				<FormGroup>
				<Form.Label>Upload your ViewingActivity.csv file here:</Form.Label>
				<Form.Control type="file" onChange={handleFile}></Form.Control>
				</FormGroup>

				<Button block bssize="large" type="submit">
				Submit
				</Button>
			</form>
			{/* <div>
				{showData? createText() : null}
			</div> */}
			{charts? (
				<>
					<Visual1 showData={showData} oneShow={oneShow} user={props.user}/>
					<Visual2 dailyData={dailyData}/>
				</>
			) : (
				<div>
					<p>upload your file to begin.</p>
				</div>
			)}
		</main>
	);
}

export default Home
