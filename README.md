# star-field


## Installation
`npm i @dvlpralamin/star-field`

## Basic Usage
```javascript


import React from 'react';
import ReactDOM from 'react-dom';
import StarField from "@dvlpralamin/star-field";

const App = () => {
  return (
    <StarField/>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## With Props
```javascript


import React from 'react';
import ReactDOM from 'react-dom';
import StarField from "@dvlpralamin/star-field";

const App = () => {
  return (
    <StarField duration={4000} fixed colors={["#ff0000", "#ff00ff", "#00ff00", "#0000ff"]} />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

### Props
  
  * `fixed`: `Boolean`. This Props make animation fixed on screen default `false`
  * `duration`: `Number`. Animation duration. default `3000`ms. 
  *  `colors`: `Array`. 