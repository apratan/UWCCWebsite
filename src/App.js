import React from 'react';
import {MobileView, BrowserView} from "react-device-detect";
import Mobile from './mobile/Mobile'
import Browser from './browser/Browser'

function App() {

  return (
    <div className="App">
      <MobileView>
        <Mobile/>
      </MobileView>
      <BrowserView>
        <Browser/>
      </BrowserView>
    </div>
  );
}

export default App;
