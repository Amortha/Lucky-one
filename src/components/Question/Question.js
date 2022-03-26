import React from 'react';

const Question = () => {
    return (
        <div>
            <h1>1.How React Work ?</h1>
            <h3>React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it.then the virtual DOM will try to find the most efficient way to update the browsr's DOM. React DOM takes care of Updating the DOM to match the React elements. </h3><br /><br />
            <h1>2. Props vs State</h1>
            <h2>Props</h2>
            <h3>1. Props are read-only. <br />
                2. Props are immutable. <br />
                3. props allow you to pass data from one commponent to other components as an argument.<br />
                4. Props can be accessed by the child component.<br />
                5. Props are used to communicate between components.<br />
                6. Props are external and controlled by whatever renders the component <br />
            </h3>
            <h2>State</h2>
            <h3>
                1. State change can be asynchronous.<br />
                2. State is mutable.<br />
                3. State holds information about the components.<br />
                4. State cannot be accessed by rendering dynamic changes with the component.<br />
                5. Stateless components cannt have State.<br />

            </h3>
        </div>

    );
};

export default Question;