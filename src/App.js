import React from 'react';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import { BodyParts } from './components/BodyParts';



const App = () => {

    return (
        <div>
        <a href="index.js"><h1 class="header-title">Weight Tracker</h1></a>
        <div className="container">
            <BodyParts/>
        </div>
        
        </div>
    );



}

export default App;