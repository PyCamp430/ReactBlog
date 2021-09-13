import React from "react";
import notebook from "../images/notebook.jpg";
import positano from "../images/positano.jpg";
import tea from "../images/tea.jpg";
import vegetables from "../images/vegetables.webp";
import beach from "../images/beach.jpg";
import iceland from "../images/iceland.webp";

const Posts = () => {
    
    const handleclick = (e) => {
        e.preventDefault();
    }
    
    return(
        <div>
            <br></br>
            <br></br>
            <h2 id="postsheading">Posts</h2>
            <br></br>
            <div className="container" data-aos="zoom-in">
                <div className="row align-items-start">
                    <div className="col">
                        <div className="card postcards">
                            <img src={positano} className="card-img-top" alt="positano" />
                            <div className="card-body">
                                <h5 className="card-title">Visiting Positano</h5>
                                <p className="card-text">Last summer we visited Positano, Italy. It is a very beautiful place and has most amazing views of the sea. Positano is a dreamplace.</p>
                            </div>
                        </div>
                        <div className="card postcards">
                            <img src={vegetables} className="card-img-top" alt="vegetables" />
                            <div className="card-body">
                                <h5 className="card-title">Healthy Eating</h5>
                                <p className="card-text">Started this year with healthy eating, which emphasizes fruits, vegetables, whole grain, cereals, beans and fat free or low fat dairy products</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card postcards">
                            <img src={notebook} className="card-img-top" alt="notebook" />
                            <div className="card-body">
                                <h5 className="card-title">Diary writing</h5>
                                <p className="card-text">Writing down your thoughts and emotions on paper really helps. Its kind of therapeutic.</p>
                            </div>
                        </div>
                        <div className="card postcards">
                            <img src={beach} className="card-img-top" alt="beach" />
                            <div className="card-body">
                                <h5 className="card-title">By the Beach</h5>
                                <p className="card-text">Taking a walk on the beach at dusk is really relaxing. Helps to release all the stress and tension.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card postcards">
                            <img src={tea} className="card-img-top" alt="tea" />
                            <div className="card-body">
                                <h5 className="card-title">New Year Resolutions</h5>
                                <p className="card-text">Made some new year resolutions and a resolution to stick to them.</p>
                            </div>
                        </div>
                        <div className="card postcards">
                            <img src={iceland} className="card-img-top" alt="iceland" />
                            <div className="card-body">
                                <h5 className="card-title">Travel</h5>
                                <p className="card-text">Travelling helps you get more original and creative. Travelling to various parts of the world improves our knowledge and teaches real life lessons.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button id="allposts" onClick={handleclick} className="btn">All Posts</button>
            </div>
        </div>
    );
}

export default Posts;
