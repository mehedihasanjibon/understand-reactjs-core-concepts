import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        // console.log(steps);
        const nextSteps = steps + 1;
        setSteps(nextSteps);
    }

    useEffect(()=>{
        console.log(steps);
    },[steps])

    return (
        <div style={{border: "2px solid red" , margin: "20px"}}>
            <h2> This is my smart Watch!! </h2>
            <p> steps: {steps}</p>
            <button onClick={increaseSteps}> De Dour... </button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;