import React from 'react'; // Must be imported for webpack to work
import './App.css';
import Button1 from './components/Button1';

function App() {
  return (
    <div className="HeaderApp">
      <Button1 />
    </div>
  );
}

export default App;