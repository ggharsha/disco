import React from 'react';
import { Link } from 'react-router-dom';

export default class Splash extends React.Component {
    render() {
        return (
            <div className='splash'>
                <div className='top-nav'>
                    <h6>Disco</h6>
                    <ul id='socials'>
                        <li>LinkedIn</li>
                        <li>AngelList</li>
                        <li>GitHub</li>
                        <li>Portfolio</li>
                    </ul>
                    <Link to='/login' className='login'>Login</Link>
                </div>

                <div id='splash-components'>
                    <div id='header-images'>
                        <img id='splash-head-clouds' src={window.splashClouds} />
                        <img id='splash-head-left' src={window.splashHeadLeft} />
                        <img id='splash-head-right' src={window.splashHeadRight} />
                    </div>
                    <div className='splash-head'>
                        <div className='head-container'>
                            <h3>IMAGINE A PLACE...</h3>
                            <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                        </div>
                    </div>

                    <div className='second-head'>
                        <div className='second-container'>
                            <img id='splash-img-1' src={window.splashImg1} />
                            <h3>Create an invite-only place where you belong</h3>
                            <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
                        </div>
                    </div>

                    <div className='third-head'>
                        <div className='third-container'>
                            <img id='splash-img-2' src={window.splashImg2} />
                            <h3>Where hanging out is easy</h3>
                            <p>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
                        </div>
                    </div>

                    <div className='fourth-head'>
                        <div className='fourth-container'>
                            <img id='splash-img-3' src={window.splashImg3} />
                            <h3>From few to a fandom</h3>
                            <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
                        </div>
                    </div>

                    <div className='fifth-head'>
                        <div className='fifth-container'>
                            <h3>RELIABLE TECH FOR STAYING CLOSE</h3>
                            <p>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
                            <img id='splash-img-4' src={window.splashImg4} />
                        </div>
                    </div>

                    <div className='last-head'>
                        <h3>Ready to start your journey?</h3>
                    </div>
                </div>

                <div className='splash-foot'>
                    <Link to='/register'>Sign up</Link>
                </div>
            </div>
        )
    }
}