import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Workout from './components/Workout';

function App() {
    const [showComponent, setShowComponent] = useState(false);
    const onClick = () => setShowComponent(true);

    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            
            {!showComponent && (
                <>
                <p>Herakles - fitness and beyond.</p>
                <button onClick={onClick}>Start a workout</button>
                </>
            )}

            {showComponent && (
                <Workout></Workout>
            )}
            
        </header>
        </div>
    );
}

export default App;



