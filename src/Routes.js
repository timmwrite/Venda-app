import react, {Components} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './src/pages/Login';
import Signup from './src/pages/Signup';

export default class Routes extends Component {
  render (){
    return (
      <Router>
          <Stack Key="root">
              <Scene Key="login" component={Login} title="Login"/>
              <Scene Key="regester" component={Signup} title="Regester"/>
          </Stack>
      </Router>
    )
  }
};
