import React from 'react';
import { MobileView, BrowserView } from 'react-device-detect';
import Mobile from './mobile/Mobile';
import Desktop from './desktop/Desktop';

function App() {
  return (
    <div className="App">
      <MobileView>
        <Mobile />
      </MobileView>
      <BrowserView>
        <Desktop />
      </BrowserView>
    </div>
  );
}

export default App;
