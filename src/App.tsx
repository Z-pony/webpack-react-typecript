// import React from 'react';

// const App: React.FC = () => (<div>hello, world</div>);

// export default App;
// export interface Props {
//   name: string;
//   enthusiasmLevel?: number;
// }
import * as React from 'react';
// import * as pic from '../src/assets/img/2.jpeg'
// import * as pic from 'src/assets/img/2.jpeg'
const pic = require('../src/assets/img/2.jpeg')
import 'src/assets/css/app.less'
import Button from './Button'

interface IProps {
  color: string,
  size?: string,
}
interface IState {
  count: number,
}

export default class App extends React.Component<IProps, IState>  {
  state = {
    count: 1,
  }

  render() {
   const style = {
     color: 'red'
   }
    return (
      <div className="app">
        <div style={style} className="test">hello world</div>
        <img src={pic}></img>
        <Button/>
      </div>
    );
  }
}
