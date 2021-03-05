import React from 'react';

import {Router, Scene} from 'react-native-router-flux';
import Welcome from './src/scripts/components/Welcome';
import SecondFile from './src/scripts/components/SecondFile';
import Add from './src/scripts/components/Add';
import Edit from './src/scripts/components/Edit';

export default function Routers() {
  return (
    <>
      <Router>
        <Scene key="root">
          <Scene key="Welcome" component={Welcome} hideNavBar />
          <Scene key="Home" component={SecondFile} hideNavBar />
          <Scene key="Add" component={Add} hideNavBar />
          <Scene key="Edit" component={Edit} hideNavBar />
        </Scene>
      </Router>
    </>
  );
}
