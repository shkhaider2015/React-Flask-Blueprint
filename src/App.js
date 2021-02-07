import React from 'react'
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [currentTime, setCurrentTime] = React.useState(0);
  const [myData, setMyData] = React.useState(null)




  React.useEffect(
    () => {
      fetch('/time')
      .then(res => res.json())
      .then( data => {
        setCurrentTime(data.time)
      })

      fetch('/hello')
      .then(res => res.json())
      .then(data => {
        setMyData(data.hello)
      })
    },
    []
  )



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           {Date(currentTime)}
           <br />
           { myData }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )

}

export default App
