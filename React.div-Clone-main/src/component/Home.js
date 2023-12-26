import React from 'react';
import logo from '../logo.svg';

const Home = () => {
    return (
        <>
            <div className='home'>
                <div className='home-logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='home-text'>
                    <h1>React</h1>
                    <p>The library for web and native user interfaces</p>
                    <button className='btn'>Learn React</button>
                    <button className='btn1'>API Reference</button>
                </div>
            </div>

        </>
    )
}

export default Home;
