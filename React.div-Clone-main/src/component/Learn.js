import React from 'react';
import { Link, useRouteMatch, Switch, Route, useParams } from 'react-router-dom';
import Ler1 from '../images/Ler1.png';
import Ler2 from '../images/Ler2.png';

const Learn = () => {
    let { path, url } = useRouteMatch();
    return (
        <>
            <div className='container'>
                <div className='main' >
                    <ul>
                        <a>GET STARTED</a>
                        <li><Link to={path} ><a>Quick Start</a>
                            <li><Link to={`${path}/1`}><a>Tutorial: Tic-Tac-Toe</a></Link></li>
                            <li><Link to={`${path}/2`}><a>Thinking in React</a></Link></li>
                        </Link></li>
                        <li><Link to={`${path}/3`}><a>Installation</a></Link>
                            <li><Link to={`${path}/4`}><a>Start a New React Project</a></Link></li>
                            {/* <li><Link to={`${path}/002`}><a>Add React to an Existing Project</a></Link></li> */}
                            <li><Link to={`${path}/5`}><a>Editor Setup</a></Link></li>
                            <li><Link to={`${path}/6`}><a>Using TypeScript</a></Link></li>
                            <li><Link to={`${path}/7`}><a>React Developer Tools</a></Link></li>
                        </li>
                        <hr className='sidhr' />
                        <a>LEARN REACT</a>
                        <li><Link to={`${path}/8`}><a>Describing the UI</a></Link></li>
                        <li><Link to={`${path}/9`}><a>Adding Interactivity</a></Link></li>
                        <li><Link to={`${path}/10`}><a>Managing State</a></Link></li>
                        <li><Link to={`${path}/11`}><a>Escape Hatches</a></Link></li>
                    </ul>

                </div>

                <div className='learn-contante'>
                    <Switch>
                        <Route exact path={path}>
                            <>
                                <div className='text'>
                                    <span>LEARN REACT  <i class="fa-solid fa-chevron-right"></i></span>
                                    <h1>Quick Start</h1>
                                    <p>Welcome to the React documentation! This page will give you an introduction to the  80% of React concepts that you will use on a daily basis.</p>

                                    <div className='lrn-bg'>
                                        <h1>You will learn</h1>
                                        <ul>
                                            <li>How to create and nest components</li>
                                            <li>How to add markup and styles</li>
                                            <li>How to display data</li>
                                            <li>How to render conditions and lists</li>
                                            <li>How to respond to events and update the screen</li>
                                            <li>How to share data between components</li>
                                        </ul>
                                    </div>
                                    <h1>Creating and nesting components</h1>
                                    <p>React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.</p>
                                    <p>React components are JavaScript functions that return markup:</p>
                                    <div className='lerss'>
                                        <img src={Ler1} alt='ss1'/>
                                    </div>

                                    <p>Now that you’ve declared MyButton, you can nest it into another component:</p>
                                    <div className='lerss1'>
                                        <img src={Ler2} alt='ss1'/>
                                    </div>
                                    
                                </div>
                            </>
                        </Route>
                        <Route path={`${path}/:id`}>
                            <Topic></Topic>
                        </Route>
                    </Switch>
                </div>
            </div>
        </>
    );
}

function Topic() {
    let { id } = useParams();

    if (id == 1)
        return <>
            <span >LEARN REACT  <i class="fa-solid fa-chevron-right"></i> </span>
            <span >   QUICK START   <i class="fa-solid fa-chevron-right"></i></span>
            <h1>Tutorial: Tic-Tac-Toe</h1>
            <p>You will build a small tic-tac-toe game during this tutorial. This tutorial does not assume any existing React knowledge. The techniques you’ll learn in the tutorial are fundamental to building any React app, and fully understanding it will give you a deep understanding of React.</p>
        </>
    else if (id == 2)
        return <>
            <span >LEARN REACT  <i class="fa-solid fa-chevron-right"></i> </span>
            <span>   QUICK START   <i class="fa-solid fa-chevron-right"></i> </span>
            <h1>Thinking in React</h1>
            <p>React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called components. Then, you will describe the different visual states for each of your components. Finally, you will connect your components together so that the data flows through them. In this tutorial, we’ll guide you through the thought process of building a searchable product data table with React.</p>
        </>

    else if (id == 3)
        return <>
            <span >LEARN REACT  <i class="fa-solid fa-chevron-right"></i> </span>
            <h1>Installation</h1>
            <p>React has been designed from the start for gradual adoption. You can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to an HTML page, or start a complex React-powered app, this section will help you get started.</p>
        </>
    else if (id == 4)
        return <>
            <span >LEARN REACT   <i class="fa-solid fa-chevron-right"></i>  </span>
            <span>  INSTALLATION    <i class="fa-solid fa-chevron-right"></i> </span>
            <h1>Start a New React Project</h1>
            <p>If you want to build a new app or a new website fully with React, we recommend picking one of the React-powered frameworks popular in the community. Frameworks provide features that most apps and sites eventually need, including routing, data fetching, and generating HTML.</p>
        </>
    else if (id == 5)
        return <>
            <span >LEARN REACT   <i class="fa-solid fa-chevron-right"></i>  </span>
            <span>  INSTALLATION    <i class="fa-solid fa-chevron-right"></i> </span>
            <h1>Editor Setup</h1>
            <p>A properly configured editor can make code clearer to read and faster to write. It can even help you catch bugs as you write them! If this is your first time setting up an editor or you’re looking to tune up your current editor, we have a few recommendations.</p>
        </>
    else if (id == 6)
        return <>
            <span >LEARN REACT   <i class="fa-solid fa-chevron-right"></i>  </span>
            <span>  INSTALLATION    <i class="fa-solid fa-chevron-right"></i> </span>
            <h1>Using TypeScript </h1>
            <p>TypeScript is a popular way to add type definitions to JavaScript codebases. Out of the box, TypeScript<span> supports JSX </span> and you can get full React Web support by adding <span> @types/react</span> and <span>@types/react-dom</span> to your project.</p>
        </>
    else if (id == 7)
        return <>
            <span >LEARN REACT   <i class="fa-solid fa-chevron-right"></i>  </span>
            <span>  INSTALLATION    <i class="fa-solid fa-chevron-right"></i> </span>
            <h1>React Developer Tools</h1>
            <p>Use React Developer Tools to inspect React <span> components</span>, edit <span>props</span> and <span>state</span>, and identify performance problems.</p>
        </>
    else if (id == 8)
        return <>
            <span >LEARN REACT   <i class="fa-solid fa-chevron-right"></i>  </span>
            <h1>Describing the UI</h1>
            <p>React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components. From web sites to phone apps, everything on the screen can be broken down into components. In this chapter, you’ll learn to create, customize, and conditionally display React components.</p>
        </>
    else if (id == 9)
        return <>
            <span >LEARN REACT   <i class="fa-solid fa-chevron-right"></i>  </span>
            <h1>Adding Interactivity</h1>
            <p>
                Some things on the screen update in response to user input. For example, clicking an image gallery switches the active image. In React, data that changes over time is called state. You can add state to any component, and update it as needed. In this chapter, you’ll learn how to write components that handle interactions, update their state, and display different output over time.
            </p>
        </>
    else if (id == 10)
        return <>
            <span >LEARN REACT   <i class="fa-solid fa-chevron-right"></i>  </span>
            <h1>Managing State</h1>
            <p>As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components. Redundant or duplicate state is a common source of bugs. In this chapter, you’ll learn how to structure your state well, how to keep your state update logic maintainable, and how to share state between distant components.</p>
        </>
    else if (id == 11)
        return <>
            <span >LEARN REACT   <i class="fa-solid fa-chevron-right"></i>  </span>
            <h1>Escape Hatches</h1>
            <p>Some of your components may need to control and synchronize with systems outside of React. For example, you might need to focus an input using the browser API, play and pause a video player implemented without React, or connect and listen to messages from a remote server. In this chapter, you’ll learn the escape hatches that let you “step outside” React and connect to external systems. Most of your application logic and data flow should not rely on these features.</p>
        </>
}

export default Learn;
