import React from 'react';

const User = (props) => {
    // console.warn(data.data.designation);
    const {data} = props;
    return(
        <>
            <h1>User Component</h1>
            {/* <h3>{props.data.name}</h3> */}
            <h3>{data.name}</h3>
            <h3>{data.designation}</h3>
        </>
    );
}
export default User;



//code of app.js
// <h1>App Component</h1>
//      <User data={{name : "Sirshendu", designation:"MERN Developer"}}/>