import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header'
import Counter from './components/counter'
import "./css/index.css";

class App extends React.Component {
  render() {
    return(
      <div>
        <Header brand="My Umpteenth App" links={["Facebook", "Google+"]}/>
        <div>Hello OpenWest</div>
        <Counter />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
