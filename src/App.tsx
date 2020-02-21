// import React from 'react';

// const App: React.FC = () => (<div>hello, world</div>);

// export default App;
// export interface Props {
//   name: string;
//   enthusiasmLevel?: number;
// }
import * as React from 'react';
// import * as pic from '../src/assets/img/2.jpeg'
import * as pic from 'src/assets/img/2.jpeg'
// const pic = require('../src/assets/img/2.jpeg')
import 'src/assets/css/app.less'

export default class App extends React.Component {
  render() {
   const style = {
     color: 'red'
   }
    return (
      <div className="app">
        <div style={style} className="test">hello world</div>
        <img src={pic}></img>
      </div>
    );
  }
}
