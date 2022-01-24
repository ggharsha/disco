import React from 'react';
import { Link } from 'react-router-dom';

export default class Splash extends React.Component {
    render() {
        return (
            <div>
                <div className='top-nav'>
                    <element>Disco</element>
                    <ul id='socials'>
                        <li>LinkedIn</li>
                        <li>AngelList</li>
                        <li>GitHub</li>
                        <li>Portfolio</li>
                    </ul>
                    <Link to='/login'>Login</Link>
                </div>

                <div className='splash-head'>
                    <h3>IMAGINE A PLACE</h3>
                    <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                </div>

                <div className='second-head'>
                    <h3>Create an invite-only place where you belong</h3>
                    <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
                </div>

                <div className='third-head'>
                    <h3>Where hanging out is easy</h3>
                    <p>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
                </div>

                <div className='fourth-head'>
                    <h3>From few to a fandom</h3>
                    <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
                </div>

                <div className='fifth-head'>
                    <h3>RELIABLE TECH FOR STAYING CLOSE</h3>
                    <p>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
                </div>

                <div className='last-head'>
                    <h3>Ready to start your jorney?</h3>
                </div>

                <div className='splash-foot'>
                    <Link to='/register'>Sign up</Link>
                </div>
            </div>
        )
    }
}