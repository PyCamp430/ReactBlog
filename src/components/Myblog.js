import React from "react";
import snowman from "../images/snowman.webp";
import tea from "../images/tea.jpg";
import vegetables from "../images/vegetables.webp";
import beach from "../images/beach.jpg";
import eclair from "../images/eclair.webp";
import chocolate from "../images/chocolate.webp"

const MyBlog = () => {
    return(
        <div className="container">
            <p className="hr"></p>
            <br></br>
            {/* first card */}
            <div className="card mb-3 my-5 postcards" data-aos="fade-right">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={chocolate} className="img-fluid rounded-start img1" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Coffee for reading</h5>
                        <p className="card-text">How about a cup of coffee. Isn't it great!</p>
                        <p className="card-text"><small class="text-muted">Last updated 1 min ago</small></p>
                    </div>
                </div>
            </div>
            </div>
            {/* second card*/}
            <div className="card mb-3 my-5 postcards" data-aos="fade-left">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={vegetables} className="img-fluid rounded-start img1" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Healthy Eating</h5>
                        <p className="card-text">Started this year with healthy eating, which emphasizes fruits, vegetables, whole grain, cereals, beans and fat free or low fat dairy products.</p>
                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            </div>
            {/* third card */}
            <div class="card mb-3 my-5 postcards" data-aos="fade-left">
            <div class="row g-0">
                <div className="col-md-4">
                    <img src={beach} className="img-fluid rounded-start img1" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">By the Beach</h5>
                        <p className="card-text">Taking a walk on the beach at dusk is really relaxing. Helps to release all the stress and tension.</p>
                        <p className="card-text"><small class="text-muted">Last updated 5 mins ago</small></p>
                    </div>
                </div>
            </div>
            </div>
            {/* fourth card */}
            <div className="card mb-3 my-5 postcards" data-aos="fade-right">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={tea} className="img-fluid rounded-start img1" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">New Year Resolutions</h5>
                        <p className="card-text">Made some new year resolutions and a resolution to stick to them.</p>
                        <p className="card-text"><small class="text-muted">Last updated 10 mins ago</small></p>
                    </div>
                </div>
            </div>
            </div>
            {/* fifth card */}
            <div className="card mb-3 my-5 postcards" data-aos="fade-left">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={eclair} className="img-fluid rounded-start img1" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Yummy!</h5>
                        <p className="card-text">Sometimes you can cheat on your diet and eat your favourite deserts.</p>
                        <p className="card-text"><small class="text-muted">Last updated 10 mins ago</small></p>
                    </div>
                </div>
            </div>
            </div>
            {/* sixth card */}
            <div className="card mb-3 my-5 postcards" data-aos="fade-right">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={snowman} className="img-fluid rounded-start img1" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Winter Wonderland</h5>
                        <p className="card-text">Love the winters! Winter is my favourite season, feels like celebrating.</p>
                        <p className="card-text"><small class="text-muted">Last updated 15 mins ago</small></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default MyBlog;
