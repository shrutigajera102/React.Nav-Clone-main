import React from 'react';
import { Link, useRouteMatch, Switch, Route, useParams } from 'react-router-dom';
import Ref1 from '../images/Ref1.png';
import Ref2 from '../images/Ref1.png';

const Reference = () => {
    let { path, url } = useRouteMatch();
    return (
        <>
            <div className='container'>
                <div className='main' >
                    <ul>
                        <a>react@18.2.0</a>
                        <li><Link to={path} ><a>Hooks</a>
                            <li><Link to={`${path}/1`}><a>use</a></Link></li>
                            <li><Link to={`${path}/2`}><a>useCallback</a></Link></li>
                            <li><Link to={`${path}/4`}><a>useContext</a></Link></li>
                            <li><Link to={`${path}/5`}><a>useDebugValue</a></Link></li>
                        </Link></li>
                        <li><Link to={`${path}/3`}><a>Components</a></Link></li>
                        <li><Link to={`${path}/8`}><a> APIs</a></Link></li>
                        <li><Link to={`${path}/9`}><a>Directives</a></Link></li>
                         <hr className='sidhr' />
                        <a>react-dom@18.2.0</a>
                        <li><Link to={`${path}/10`}><a> Components</a></Link></li>
                        <li><Link to={`${path}/11`}><a>Client APIs</a></Link></li>
                        <li><Link to={`${path}/12`}><a>Server APIs</a></Link></li>
                    </ul>

                </div>

                <div className='learn-contante'>
                    <Switch>
                        <Route exact path={path}>
                            <>
                                <div className='text'>
                                    <span>API REFERENCE  <i class="fa-solid fa-chevron-right"></i></span>
                                    <h1>Built-in React Hooks</h1>
                                    <p>Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. This page lists all built-in Hooks in React.</p>

                                    <hr />
                                    <h1>State Hooks </h1>
                                    <p>State lets a component <span>“remember” information like user input.</span> For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.</p>
                                    <h4>To add state to a component, use one of these Hooks:</h4>
                                    <ul className='refli'>
                                        <li><spa>useState</spa> declares a state variable that you can update directly.</li>
                                        <li><span>useReducer</span> declares a state variable with the update logic inside a <span>reducer function.</span></li>
                                    </ul>

                                    <div className='refss'>
                                        <img src={Ref1} alt='ss1'/>
                                    </div>
                                    <hr />

                                    <h1>Context Hooks </h1>
                                    <p>Context lets a component <span>receive information from distant parents without passing it as props.</span> For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.</p>
                                    <ul  className='refli'>
                                        <li>useContext reads and subscribes to a context.</li>
                                    </ul>
                                    <div className='refss'>
                                        <img src={Ref2} alt='ss1'/>
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
    )
}

function Topic() {
   
    let { id } = useParams();

    if (id == 1)
        return <>
            <span >API REFERENCE <i class="fa-solid fa-chevron-right"></i> </span>
            <span >   HOOKS  <i class="fa-solid fa-chevron-right"></i></span>
            <h1>use</h1>
            <p>You will build a small tic-tac-toe game during this tutorial. This tutorial does not assume any existing React knowledge. The techniques you’ll learn in the tutorial are fundamental to building any React app, and fully understanding it will give you a deep understanding of React.</p>
        </>
    else if (id == 2)
        return <>
            <span >API REFERENCE <i class="fa-solid fa-chevron-right"></i> </span>
            <span> HOOKS <i class="fa-solid fa-chevron-right"></i> </span>
            <h1>useCallback</h1>
            <p>React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called components. Then, you will describe the different visual states for each of your components. Finally, you will connect your components together so that the data flows through them. In this tutorial, we’ll guide you through the thought process of building a searchable product data table with React.</p>
        </>

    else if (id == 3)
        return <>
            <span >API REFERENCE <i class="fa-solid fa-chevron-right"></i> </span>
            <h1>React DOM Components</h1>
            <p>React has been designed from the start for gradual adoption. You can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to an HTML page, or start a complex React-powered app, this section will help you get started.</p>
        </>
    else if (id == 4)
        return <>
            <span >API REFERENCE  <i class="fa-solid fa-chevron-right"></i>  </span>
            <span> HOOKS <i class="fa-solid fa-chevron-right"></i> </span>
            <h1>useContext</h1>
            <p>If you want to build a new app or a new website fully with React, we recommend picking one of the React-powered frameworks popular in the community. Frameworks provide features that most apps and sites eventually need, including routing, data fetching, and generating HTML.</p>
        </>
    else if (id == 5)
        return <>
            <span >API REFERENCE  <i class="fa-solid fa-chevron-right"></i>  </span>
            <span> HOOKS <i class="fa-solid fa-chevron-right"></i> </span>
            <h1>Editor Setup</h1>
            <p>A properly configured editor can make code clearer to read and faster to write. It can even help you catch bugs as you write them! If this is your first time setting up an editor or you’re looking to tune up your current editor, we have a few recommendations.</p>
        </>

    else if (id == 8)
        return <>
            <span >API REFERENCE  <i class="fa-solid fa-chevron-right"></i>  </span>
            <h1>Built-in React APIs</h1>
            <p>React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components. From web sites to phone apps, everything on the screen can be broken down into components. In this chapter, you’ll learn to create, customize, and conditionally display React components.</p>
        </>
    else if (id == 9)
        return <>
            <span >API REFERENCE  <i class="fa-solid fa-chevron-right"></i>  </span>
            <h1>Directives</h1>
            <p>
                Some things on the screen update in response to user input. For example, clicking an image gallery switches the active image. In React, data that changes over time is called state. You can add state to any component, and update it as needed. In this chapter, you’ll learn how to write components that handle interactions, update their state, and display different output over time.
            </p>
        </>
    else if (id == 10)
        return <>
            <span >API REFERENCE  <i class="fa-solid fa-chevron-right"></i>  </span>
            <h1>React DOM Components</h1>
            <p>As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components. Redundant or duplicate state is a common source of bugs. In this chapter, you’ll learn how to structure your state well, how to keep your state update logic maintainable, and how to share state between distant components.</p>
        </>
    else if (id == 11)
        return <>
            <span >API REFERENCE  <i class="fa-solid fa-chevron-right"></i>  </span>
            <h1>Client React DOM APIs</h1>
            <p>Some of your components may need to control and synchronize with systems outside of React. For example, you might need to focus an input using the browser API, play and pause a video player implemented without React, or connect and listen to messages from a remote server. In this chapter, you’ll learn the escape hatches that let you “step outside” React and connect to external systems. Most of your application logic and data flow should not rely on these features.</p>
        </>
         else if (id == 12)
         return <>
             <span >API REFERENCE  <i class="fa-solid fa-chevron-right"></i>  </span>
             <h1>Server React DOM APIs</h1>
             <p>Some of your components may need to control and synchronize with systems outside of React. For example, you might need to focus an input using the browser API, play and pause a video player implemented without React, or connect and listen to messages from a remote server. In this chapter, you’ll learn the escape hatches that let you “step outside” React and connect to external systems. Most of your application logic and data flow should not rely on these features.</p>
         </>
}

export default Reference
