import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const linkStyle = {
    color: 'white',
    textDecoration: 'none',
	backgroundColor: "#A9261E"
}
const authenticatedOptions = (
	<>
		<Nav.Link style={{backgroundColor: "#A9261E"}}>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Link>
		<Nav.Link style={{backgroundColor: "#A9261E"}}>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Link>
		<Nav.Link style={{backgroundColor: "#A9261E"}}>
		    <Link to='shows' style={linkStyle}>Shows</Link>
        </Nav.Link>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Link style={{backgroundColor: "#A9261E"}}>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Link>
        <Nav.Link style={{backgroundColor: "#A9261E"}}>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Link>
		<Nav.Link style={{backgroundColor: "#A9261E"}}>
		    <Link to='shows' style={linkStyle}>Shows</Link>
        </Nav.Link>
	</>
)

// const alwaysOptions = (
// 	<>
// 		<Nav.Link>
// 			<Link to='/' style={linkStyle}>
// 				Home
// 			</Link>
// 		</Nav.Link>
// 	</>
// )

const Header = ({ user }) => (
	<Navbar expand='md' style={{backgroundColor: "#A9261E"}}>
		{/* <Navbar.Brand>
            <Link to='/' style={linkStyle}>
                react-auth-template
            </Link>
        </Navbar.Brand> */}
		<Navbar.Toggle aria-controls='basic-navbar-nav'  />
		<Navbar.Collapse id='basic-navbar-nav' style={{backgroundColor: "#A9261E"}}>
			<Nav className='ml-auto' style={{backgroundColor: "#A9261E"}}>
				{user && (
					<span className='navbar-text mr-2' style={{backgroundColor: "#A9261E", color: "whitesmoke", fontWeight: "700"}}>Welcome, {user.email}</span>
				)}
				{/* {alwaysOptions} */}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
