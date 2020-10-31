import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

const particlesOptions = {
            		particles: {
            			number: {
            				value: 80,
            				density: {
            					enable: true,
            					value_area: 800
            				}
            			}
            		}
            	}



const initialState = {
			input: '',
			imageUrl: '',
			box: [],
			route: 'signin',
			isSignedIn: false,
			user: {
				id: '',
				name: '',
				email: '',
				password: '',
				entries: 0,
				joined: ''
			}
		};

class App extends Component {

	constructor() {
		super();
		this.state = initialState;
	}

	loadUser = (user) => {
		this.setState({user: {
				id: user.id,
				name: user.name,
				email: user.email,
				password: user.password,
				entries: user.entries,
				joined: user.joined
			}});
	}

	onInputChange = (event) => {
		this.setState({input: event.target.value});
	}

	calculateFaceLocation = (data) => {
		// const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
		const clarifaiFace = data.outputs[0].data.regions;
		const image = document.getElementById('inputImage');
		const width = Number(image.width);
		const height = Number(image.height);
		let boxDimensions = [];
		clarifaiFace.forEach(data => boxDimensions.push({
				leftCol: data.region_info.bounding_box.left_col * width,
				topRow: data.region_info.bounding_box.top_row * height,
				rightCol: width - (data.region_info.bounding_box.right_col * width),
				bottomRow: height - (data.region_info.bounding_box.bottom_row * height)
			})
		);
		return boxDimensions;
	}

	displayFaceBox = (box) => {
		this.setState({box: box});
	}

	onPictureSubmit = () => {
		this.setState({imageUrl: this.state.input});
		fetch('https://shrouded-forest-77796.herokuapp.com/imageUrl', {
			method: 'post', 
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				input: this.state.input
				})
		}).then(res => res.json())
	 	.then(response => {
	 		fetch('https://shrouded-forest-77796.herokuapp.com/image', {
			method: 'put', 
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				id: this.state.user.id
				})
			}).then(res => res.json())
			.then(count => {
				this.setState(Object.assign(this.state.user, {entries: count}))
			}).catch(console.log);
	 		this.displayFaceBox(this.calculateFaceLocation(response));
	 	})
	 	.catch(err =>console.log(err));
	}

	onRouteChange = (route) => {
		if(route === 'signout') {
			this.setState(initialState);
		} else if(route === 'home') {
			this.setState({isSignedIn: true, route: route});
		} else {
			this.setState({route: route});
		}
	}

	render() {
		const {isSignedIn, route, box, imageUrl} = this.state;
		return (
		    <div className="App">
		    	<Particles className='particles' params={particlesOptions} />
		    	<Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
		    	{ route === 'home' ? 
		    	<div>
			      	<Logo />
			      	<Rank name={this.state.user.name} entries={this.state.user.entries} />
			      	<ImageLinkForm 
			      	onInputChange= {this.onInputChange} 
			      	onButtonSubmit={this.onPictureSubmit} />
			       <FaceRecognition box={box} imageUrl={imageUrl} />
		       </div> : 
		       (route === 'signin' ? 
		       	<Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> : 
		       	<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />)
		       }
		    </div>
  		);
	}
}

export default App;
