import React from 'react';
import { Link, useRouteMatch, Switch, Route, useParams } from 'react-router-dom';

const Community = () => {
    let { path, url } = useRouteMatch();
    return (
        <>
            <div className='container'>
                <div className='main' >
                    <ul>
                        <a>GET INVOLVED</a>
                        <li><Link to={path} ><a>Community</a>
                            <li><Link to={`${path}/1`}><a>React Conferences</a></Link></li>
                            <li><Link to={`${path}/2`}><a>React Meetups</a></Link></li>

                            <li><Link to={`${path}/3`}><a>React Videos</a></Link> </li>
                            <li><Link to={`${path}/4`}><a>Meet the Team</a></Link></li>
                            {/* <li><Link to={`${path}/002`}><a>Add React to an Existing Project</a></Link></li> */}
                            <li><Link to={`${path}/5`}><a>Docs Contributors</a></Link></li>
                            <li><Link to={`${path}/6`}><a>Acknowledgements </a></Link></li>
                            <li><Link to={`${path}/7`}><a>Versioning Policy</a></Link></li>
                        </Link></li>

                    </ul>

                </div>

                <div className='learn-contante'>
                    <Switch>
                        <Route exact path={path}>
                            <>
                                <div className='text'>
                                    <span>COMMUNITY <i class="fa-solid fa-chevron-right"></i></span>
                                    <h1>React Community</h1>
                                    <p>React has a community of millions of developers. On this  <br /> page we’ve listed some React-related communities that you can  <br />be a part of; see the other pages in this section for additional online and <br /> in-person learning materials.</p>

                                    <h1>Code of Conduct</h1>
                                    <p>Before participating in React’s communities, please read our Code of Conduct. We have adopted the Contributor Covenant and we expect that all community members adhere to the guidelines within.</p>

                                    <h1>Stack Overflow</h1>
                                    <p>Stack Overflow is a popular forum to ask code-level questions or if you’re stuck with a specific error. Read through the existing questions tagged with reactjs or ask your own!</p>


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
            <span >Community <i class="fa-solid fa-chevron-right"></i> </span>
            <h1>React Conferences</h1>
            <p>You will build a small tic-tac-toe game during this tutorial. This tutorial does not assume any existing React knowledge. The techniques you’ll learn in the tutorial are fundamental to building any React app, and fully understanding it will give you a deep understanding of React.</p>
        </>
    else if (id == 2)
        return <>
            <span >Community <i class="fa-solid fa-chevron-right"></i> </span>
            <h1>React Meetups</h1>
            <p>React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called components. Then, you will describe the different visual states for each of your components. Finally, you will connect your components together so that the data flows through them. In this tutorial, we’ll guide you through the thought process of building a searchable product data table with React.</p>
        </>

    else if (id == 3)
        return <>
            <span >Community <i class="fa-solid fa-chevron-right"></i> </span>
            <h1>React Videos</h1>
            <p>React has been designed from the start for gradual adoption. You can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to an HTML page, or start a complex React-powered app, this section will help you get started.</p>
        </>
    else if (id == 4)
        return <>
            <span >Community  <i class="fa-solid fa-chevron-right"></i>  </span>
            <h1>Meet the Team</h1>
            <p>If you want to build a new app or a new website fully with React, we recommend picking one of the React-powered frameworks popular in the community. Frameworks provide features that most apps and sites eventually need, including routing, data fetching, and generating HTML.</p>
        </>
    else if (id == 5)
        return <>
            <span >Community  <i class="fa-solid fa-chevron-right"></i>  </span>
            <h1>Docs Contributors</h1>
            <p>A properly configured editor can make code clearer to read and faster to write. It can even help you catch bugs as you write them! If this is your first time setting up an editor or you’re looking to tune up your current editor, we have a few recommendations.</p>
        </>
    else if (id == 6)
        return <>
            <span >Community  <i class="fa-solid fa-chevron-right"></i>  </span>
            <h1>Acknowledgements </h1>
            <p>TypeScript is a popular way to add type definitions to JavaScript codebases. Out of the box, TypeScript<span> supports JSX </span> and you can get full React Web support by adding <span> @types/react</span> and <span>@types/react-dom</span> to your project.</p>
        </>
    else if (id == 7)
        return <>
            <span >Community  <i class="fa-solid fa-chevron-right"></i>  </span>
            <h1>Versioning Policy</h1>
            <p>Use React Developer Tools to inspect React <span> components</span>, edit <span>props</span> and <span>state</span>, and identify performance problems.</p>
        </>

}

export default Community;
