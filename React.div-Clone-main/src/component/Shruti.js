import React from 'react';
import logo from '../logo.svg';
import { BrowserRouter, Link } from 'react-router-dom';
import Home from './Home';
import Learn from './Learn';
import Blog from './Blog';
import Reference from './Reference';
import Community from './Community';

import { Switch, Route } from "react-router-dom";

const Navbar = () => {
    return (
        <>

            <BrowserRouter>
                <div className='nav-bar'>
                    <div className='logo'>
                        <img src={logo} alt='logo' />
                    </div>

                    <div className='search-bar'>
                        <form>
                            <i class="fa-solid fa-magnifying-glass ser"></i>
                            <input type='search' placeholder='Search' className='search' />
                        </form>
                    </div>

                    <div className='nav'>


                        <ul>
                            <li>
                                <Link to="/"><a>Home</a></Link>
                            </li>
                            <li>
                                <Link to="/learn"><a>Learn</a></Link>
                            </li>
                            <li>
                                <Link to="/reference"><a>Reference</a></Link>
                            </li>
                            <li>
                                <Link to="/community"><a>Community</a></Link>
                            </li>
                            <li>
                                <Link to="/blog"><a>Blog</a></Link>
                            </li>
                            <i class=" fa-solid fa-circle-half-stroke" style={{ fontSize: "1.2rem" }}></i>
                            <i class="fa-brands fa-github" style={{ paddingLeft: "20px", fontSize: "1.2rem", alignItems: "center" }}></i>
                        </ul>

                    </div>
                </div>

                <Switch>
                    <Route exact path="/Navbar" component={Navbar} />
                    <Route exact path="/" component={Home} />
                    <Route path="/learn" component={Learn} />
                    <Route path="/reference" component={Reference} />
                    <Route path="/community" component={Community} />
                    <Route path="/blog" component={Blog} />
                </Switch>
                
            </BrowserRouter>
           

        </>
    )
}

export default Navbar;
