import React, { useState, useEffect, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import axios from "axios"
import apiUrl from './apiConfig'

// styling
import "../src/index.css"

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import Profile from './components/Profile'
import Shows from './components/Shows'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'


const App = () => {

	const [user, setUser] = useState(null)
	const [msgAlerts, setMsgAlerts] = useState([])
	let [shows, setShows] = useState([])
	// this state helps determine if chart divs are visible or not
	const [charts, setCharts] = useState(false);
	
	console.log('user in app', user)
	console.log('message alerts', msgAlerts)
	const clearUser = () => {
		console.log('clear user ran')
		setUser(null)
		setCharts(false)
	}
	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}
	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
			)
		})
	}
	
	// states for holding data
	let [fileUpload, setFileUpload] = useState({})
	let [showData, setShowData] = useState([])
	let [dailyData, setDailyData] = useState([])
	let [oneShow, setOneShow] = useState([])
	
	// on input change, handle file upload
	const handleFile = (event) => {
		event.preventDefault();
		// const fileToUpload = event.target.files[0];
		setFileUpload(event.target.files[0]);
	};
	
	// on form submission, handle file data
	const handleSubmitData = (event) => {
		event.preventDefault();
		if (user) {
			let formData = new FormData();
			formData.append("file", fileUpload);
			axios.post(apiUrl+"/data/", formData, {
				headers: {
					Authorization: 'Token '+ user.token
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
				//console.log("SHOW DATA SET", showData)
				setDailyData(obj2)
				//console.log("DAILYDATA SET", dailyData)
				setOneShow(obj3)
				//console.log("TOPSHOW SET", oneShow)
				setCharts(true)
			})
			.catch((error) => {
				console.log(error.response)
			});
		}
	};
	
	// run function with msg Alerts
	useEffect(() => {
		getShows()
	}, [msgAlerts])

	// run again once charts boolean state is true
	useEffect(() => {
		getShows()
	}, [charts])

    const getShows = () => {
		axios.get(apiUrl+"/shows/", {
			// header proved to be problematic when making Top Shows page visible to users and non users
			// headers: {
			// 	'Authorization': 'Token '+ user.token
			// }
        })
            .then((response) => {
                // console.log(response.data)
                setShows(response.data)
                console.log("this is shows state", shows)
            })
            .catch((error) => { console.log(error.response) });
	}

	return (
		<Fragment>
			<Header user={user} />
			<Routes>
				<Route path='/' element={<Home msgAlert={msgAlert} user={user} charts={charts} handleFile={handleFile} handleSubmitData={handleSubmitData} showData={showData} oneShow={oneShow} dailyData={dailyData}/>} />
				<Route
					path='/sign-up/'
					element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-in/'
					element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route path='/shows/' element={<Shows msgAlert={msgAlert} user={user} getShows={getShows} shows={shows}/>} />
				<Route path='/profile/' element={<Profile msgAlert={msgAlert} user={user}/>} />
				<Route
				path='/sign-out/'
				element={
					<RequireAuth user={user}>
					<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
					</RequireAuth>
				}
				/>
				<Route
				path='/change-password/'
				element={
					<RequireAuth user={user}>
					<ChangePassword msgAlert={msgAlert} user={user} />
					</RequireAuth>}
				/>
			</Routes>
			{msgAlerts.map((msgAlert) => (
				<AutoDismissAlert
					key={msgAlert.id}
					heading={msgAlert.heading}
					variant={msgAlert.variant}
					message={msgAlert.message}
					id={msgAlert.id}
					deleteAlert={deleteAlert}
				/>
			))}
		</Fragment>
	)
}

export default App
