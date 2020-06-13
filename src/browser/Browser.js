import React from 'react';
import Button from '@material-ui/core/Button';

function App() {
    
  return (
    <div className="App">
        <Button variant="contained" color="primary" onClick={() => alert("Stop touching me!")}>
            Hello, Browser!
        </Button>
    </div>
  );
}

export default App;
