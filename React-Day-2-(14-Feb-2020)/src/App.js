import React, { Component } from 'react';
import { Like } from './container/Like';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component{
  render(){
    return(
      <> 
        <h1>Hello React</h1>
        <Like/>
      </>
    );
  }
}

// function App(){
//   return (
//     //JSX Fragment
//     <> 
//       <h1>Hello React</h1>
//       <Like/>
//     </>
//   );
// }

export default App;
