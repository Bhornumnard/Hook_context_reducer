import React, {useState} from 'react';
import './App.css';
import Home from './component/home'
import Context, {Context2} from './Context'
import {Route, Switch} from 'react-router-dom'
import Counter from './component/Counter'
import Example from './component/Example'

function App() {
	const [state, setState] = useState({content: "Hello World"})
	return (
		<Context2.Provider value={{state, setState }}>
			<Switch>
				<Route  exact path="/"><Home /></Route>
				<Route path="/counter"><Counter /></Route>
				<Route path="/ex"><Example /></Route>
			</Switch>
			
				
		
			
		</Context2.Provider>
	);
}

export default App;
