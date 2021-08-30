import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


function App(){
	const [robots, setRobots] = useState([]);
	const [searchField, setSearchField] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {
				setRobots(users);
			});
	}, [])

	const onSearchChange = (event) => {
		setSearchField(event.target.value);
	}

	const filteredRobots = robots.filter( robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	});

	if(robots.length === 0)
	{
		return ( <h1 className="tc">Loading</h1> );
	}
	else
	{
		return(
			<div className='tc'>
				<h1>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
}

export default App;