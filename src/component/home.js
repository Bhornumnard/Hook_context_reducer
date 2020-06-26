import React , {useContext}from 'react'
import Context, {Context2} from '../Context'
import logo from '../logo.svg';
const Home = ()=>{
    const {state, setState} = useContext(Context2)
console.log({state})
    return (
             <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
            <span> {state.content}</span>
      </p>
      <button onClick={()=> setState({content: "Hi people"})}> change word </button>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    {/* <div> this is a value from context : {value}</div> */}
  </div>   
     
    
  )
}

export default Home