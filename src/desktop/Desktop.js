import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";

function App() {
  const [showTextField, setShowTextField] = useState(true);

  return (
    <div className="App">
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          setShowTextField(!showTextField);
        }}
      >
        Toggle Input
      </Button>
      <br />
      {showTextField && (
        <TextField variant="outlined" label="Can you see me?" />
      )}
    </div>
  );
}

export default App;
