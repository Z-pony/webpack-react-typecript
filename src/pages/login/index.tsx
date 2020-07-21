import * as React from 'react';

export interface IppProps {
  name?: string
}

const Login: React.FC<IppProps> = ({ name }) => (
  <div>
    {' '}
    <h1>
      Hello
      {' '}
      {name || '崩崩呢'}
    </h1>

  </div>
);


export default Login;