import React from 'react';

class ErrorBoundry extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			harError: false
		};
	}

	componentDidCatch(error, info){
		this.setState({harError: true});
	}

	render(){
		if(this.state.harError){
			return <h1>Ooops sth went wrong!</h1>;
		}
		else{
			return this.props.children;
		}
	}
}

export default ErrorBoundry;