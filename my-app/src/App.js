import React, { useState, useEffect } from 'react';
import Particles from "react-tsparticles";
import logo from './logo.svg';
import img from "./images/mooCowLogo.png"
import './App.css';
import particlesOptions from "./particles.json";

function App() {

    
    const API_URL = "http://localhost:3001";
    const [latestWeight, setLatestWeights] = useState("hey");
    
      async function getLatestWeights() {
        const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im1nOW9DeWVUUldGV1V3SjZWX2JpRCJ9.eyJpc3MiOiJodHRwczovL3JlZHUuZXUuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTA1NjQ4Mzg1MTY0NTM0NDY0NjE0IiwiYXVkIjpbImh0dHA6Ly9tb29ib3JuLyIsImh0dHBzOi8vcmVkdS5ldS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjQ3NTg0MTM4LCJleHAiOjE2NDc2NzA1MzgsImF6cCI6InMzc3hFZGhLU3lzWUdWdW53VHRKaXJLcWI3UGtaaUxMIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCJ9.hyOpVETZw3TMzCYu_pqb5oPQpjsh3Ba8Vb0xgLtdofCzt-pEXr21Dp9PmRE4gVYF7LBbwmU2MYeucYGscczM0Cd5oVBAC03g5In2vZyxO2SaEzdAi_rfvLT4F9BkSxpPURB1li0JmjVESUJVPM1ghs-3nAvv3VMV-maaR-C4dCOClvwnSAo3tCnP3o1pjLbELe_Y87ikiOmDEeSrj8yh_0TJ5pnXmpusFxjSieOnHk_jRBUrSMvG7m7OJjHDwVSQeqh0FX0rTVAsCqyXByFpEIeHhxTlWAFSnqD0Rx-m4NOpdsTFUeN9IwNPvTOQX_Z3UNCNS9BW6HTGwy_kdtdWRA"
        const res = await fetch(`${API_URL}/weights`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    
        const data = await res.json();
        setLatestWeights(data.payload);
        console.log(latestWeight)
      }

    return (
        <div className="App">
            <Particles options={particlesOptions}/>
            <header className="App-header">
                <img src={img} className="App-logo" alt="logo"/>
                <p>
                    WELCOME TO THE FAMILY APP
                    {console.log(latestWeight)}
                    <button onClick={getLatestWeights}>click</button>
                </p>
            
            </header>
        </div>
    );
}

export default App;
