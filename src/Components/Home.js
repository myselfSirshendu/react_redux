import React from "react";

function Home(){
    var style = {
        marginLeft:"90px",
        marginTop:5,
        borderRadius:15,
        height:200,
        width:120};
    var card_style ={
        width: '18rem',
        borderRadius:15,
        display : "flex",
        alignItem:"center",
        justifyContent :"center"
    }
    return (
        <>
        <h1>Home Components</h1>
        <div className="card" style={card_style}>
            <img src="assets/mobile_two_copy.jpg" className="card-img-top" alt="..." style={style}/>
            <div className="card-body">
                <h5 className="card-title">I-Phone</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-outline-success">Add to Cart</a>
            </div>
        </div>
        </>
    );
}

export default Home;