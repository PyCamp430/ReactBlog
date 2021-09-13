import React from "react";
import autumn from "../images/autumn.jpg";
import pancakes from "../images/pancakes.jpg";
import working from "../images/working.jpg";

const Home = () => {
    return(
        <div className="container-fluid">
            <div id="headblock">Eat,Work, Travel</div>
            <div className="row row-cols-1 row-cols-md-3 g-4" data-aos="fade-up">
                <div className="col">
                    <div>
                        <img id="clipimg1" src={pancakes} class="card-img-top" alt="pancakes" />
                    </div>
                </div>
                <div className="col">
                    <div>
                        <img id="clipimg2" src={working} className="card-img-top" alt="working" />
                    </div>
                </div>
                <div className="col">
                    <div>
                        <img id="clipimg3" src={autumn} className="card-img-top" alt="autumn" />
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default Home;
