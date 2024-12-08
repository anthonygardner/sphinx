import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { Cartesian3 } from "cesium";
import { Entity, Viewer } from "resium";

//============================================================

function App() {
    const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
    const pointGraphics = { pixelSize: 10 };

    return <Viewer full>
        <Entity position={position} point={pointGraphics} />
    </Viewer>;
};

//============================================================

export default App;
