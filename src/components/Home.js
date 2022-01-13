import React from "react"
import { Button, FormGroup, Form } from "react-bootstrap"
import Visual1 from './Visual1'
import Visual2 from './Visual2'

const Home = (props) => {


	return (
		<main className="content">
			<h1 className="text-center my-4">
			What does your Netflix user data say about your viewing habits during the COVID-19 Pandemic?
			</h1>
			{props.user? (
				<>
					<h3>Step 1: Request your data.</h3>
					<p>
						Request your individual user data from Netflix <a href="https://www.netflix.com/account/getmyinfo" target="_blank" rel="noreferrer">here</a>. Keep in mind that this process could take up to 30 days to receive a response.
					</p>
					<h3>Step 2: Download your data locally.</h3>
					<p>Now that you have received your data from Netflix, download the zip folder to an accessible area of your computer. Unzip the folder and take a look at the contents.</p>
					<h3>Step 3: Navigate to the correct subfolder.</h3>
					<p>From within your netflix-report folder, select the CONTENT_INTERACTION folder. This will bring you to a list of CSVs. We will be working exclusively with the ViewingActivity.csv file.</p>
					<h3>Step 4: Upload the correct .csv file.</h3>
					<form onSubmit={props.handleSubmitData}>
						<FormGroup>
						<Form.Label>Upload your ViewingActivity.csv file here:</Form.Label>
						<Form.Control type="file" onChange={props.handleFile}></Form.Control>
						</FormGroup>

						<Button block bssize="large" type="submit" >
						SUBMIT
						</Button>
					</form>
				</>
				) : (
				<div>
					<h3>Step 1: Request your data.</h3>
					<p>
						Request your individual user data from Netflix <a href="https://www.netflix.com/account/getmyinfo" target="_blank" rel="noreferrer">here</a>. Keep in mind that this process could take up to 30 days to receive a response.
					</p>
					<h3>Sign in or Sign up to get your personalized analysis.</h3>
				</div>
			)}
		
			{props.charts? (
				<>
					<Visual1 showData={props.showData} oneShow={props.oneShow} user={props.user}/>
					<Visual2 dailyData={props.dailyData}/>
				</>
			) : (
				<div>
					<p style={{color: "whitesmoke"}}>submit your file to begin.</p>
				</div>
			)}
		</main>
	);
}

export default Home
