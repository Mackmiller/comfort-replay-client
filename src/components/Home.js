import React, {useState} from "react"
import axios from "axios"
import { Button, FormGroup, Form } from "react-bootstrap"
import apiUrl from '../apiConfig'

const Home = (props) => {

	let [fileUpload, setFileUpload] = useState({})

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
					console.log(response);
				})
				.catch((error) => {
					console.log(error.response);
				});
		}
	};

	
	return (
		<main className="content">
		<h1 className="text-uppercase text-center my-4">
			Price comparison
		</h1>
		<form onSubmit={handleSubmitData}>
			<FormGroup>
			<Form.Label>Upload file</Form.Label>
			<Form.Control type="file" onChange={handleFile}></Form.Control>
			</FormGroup>

			<Button block bssize="large" type="submit">
			Submit
			</Button>
		</form>
		</main>
	);
}

export default Home
