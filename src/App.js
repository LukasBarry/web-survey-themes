import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ColorPicker from './ColorPicker';
import Survey from './Survey'

const COLORS = {
  primary: '#cc0000',
  secondary: '#000000',
  tertiary: '#a2aaaa',
}

function App() {
  const [state, setState] = useState(COLORS)
  const [colors, setColors] = useState(COLORS)

  function handleSubmit(e) {
    setColors(state);
  }

  function handleChange({ name, color }) {
    setState({
      ...state,
      [name]: color,
    });
  }

  return (
    <>
      <div className="App">
        <div className="popup">
          <label className="label">Primary:</label>
          <ColorPicker
            name="primary"
            value={state.primary}
            onChange={handleChange} />
        </div>
        <div className="popup">
          <label className="label">Secondary:</label>
          <ColorPicker
            name="secondary"
            value={state.secondary}
            onChange={handleChange} />
        </div>
        <div className="popup">
          <label className="label">Tertiary:</label>
          <ColorPicker
            name="tertiary"
            value={state.tertiary}
            onChange={handleChange} />
        </div>
        <div className="popup">
          <input type="button" value="Submit" className="submit btn btn-secondary" onClick={handleSubmit} />
        </div>
      </div>
      <p className="colors">
        {`{ 'primary' => '${colors.primary}', 'secondary' => '${colors.secondary}', 'tertiary' => '${colors.tertiary}' }`}
      </p>
      <Survey themes={colors} />
    </>
  );
}

export default App;
