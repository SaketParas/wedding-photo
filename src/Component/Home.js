import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                <Navbar />
                </div>
                <div id="carouselExampleIndicators" class="carousel slide mt-5" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://www.sereniityresort.com/images/wedding-top-bg.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://philipgabriel.com/wp-content/uploads/2016/09/LongImage.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://img.cocomelody.com/media/images/category/438-dress-1300.jpg" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                {/* card....... */}

                 <div className="container mt-5">
                    <div className="row">
                        <div className="column-6">
                            <div class="card-deck mt-5">
                                <div class="card">
                                    <img src="https://occasionvenue.com/files/dealer_gallery/895cf_Sree-Mehendi-Artist-1.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Mehendi</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional.</p>
                                    </div>
                                    <div class="card-footer">
                                    <Link to="/Mehndi" class="btn btn-outline-success mt-3 ml-5">More Mehendi Images</Link>
                                    </div>
                                </div>
                                <div class="card">
                                    <img src="https://static.wixstatic.com/media/300f36_74db55917a7a4675914a035c2ca51feb~mv2.jpg/v1/fill/w_298,h_298,al_c,q_80,usm_0.66_1.00_0.01/38438004_875308349346443_756681052095145.webp" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Engagement</h5>
                                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    <div class="card-footer">
                                    <Link to="/Engagement" class="btn btn-outline-success mt-3 ml-5">More Engagement Images</Link>
                                    </div>
                                </div>
                                <div class="card">
                                    <img src="https://manpasandrishte.com/visa/photo_thumb/5.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Marriage</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional.</p>
                                    </div>
                                    <div class="card-footer">
                                    <Link to="/Family" class="btn btn-outline-success mt-3 ml-5">More Marriage Images</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
