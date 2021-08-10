import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import './App.css';


class App extends React.Component {
	constructor(){
		super();
		this.state = {
			searchField: '',
			robots: []
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {
				this.setState({ robots: users });
			});
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value});
	}

	render(){
		const filteredRobots = this.state.robots.filter( robot => {
				return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
			});

		if(this.state.robots.length == 0)
		{
			return ( <h1 className="tc">Loading</h1> );
		}
		else
		{
			return(
				<div className='tc'>
					<h1 className="f1">RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<CardList robots={filteredRobots}/>
				</div>
			);
		}
	}
}

export default App;