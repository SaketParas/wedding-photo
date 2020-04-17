import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
                <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                   <h6> <Link to="/" class="nav-link  btn-outline-secondary rounded my-2 my-sm-0">Home</Link></h6>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                            <h6><Link to="/" class="nav-link  btn-outline-secondary rounded my-3 my-sm-0">Content</Link></h6>
                                {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
        )
    }
}
export default Navbar