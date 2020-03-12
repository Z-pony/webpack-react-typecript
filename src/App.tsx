// import React from 'react';

// const App: React.FC = () => (<div>hello, world</div>);

// export default App;
// export interface Props {
//   name: string;
//   enthusiasmLevel?: number;
// }
import * as React from 'react';

// import { Button, Switch } from 'antd';
import { SmileTwoTone } from '@ant-design/icons'
import {Button} from 'antd'; 
// import 'antd/dist/antd';
// import 'antd/es/button/style';   
// import * as pic from '../src/assets/img/2.jpeg'
import * as pic from 'src/assets/img/2.jpeg'
// const pic = require('../src/assets/img/2.jpeg')
// import 'src/assets/css/app.less'


export default class App extends React.Component {
  onChange=()=>{
     
  }
  
  render() {
   const style = {
     color: 'red'
   }
    return (
      <div className="app">
        <SmileTwoTone></SmileTwoTone>
        <Button type="primary">111</Button>
        {/* <DatePicker/> */}
        {/* <Switch defaultChecked onChange={this.onChange} />, */}
        <div style={style}  className="test">hello world</div>
        <img src={pic}></img>
      </div>
    );
  }
}
