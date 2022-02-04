# Disco

-> **[Live here!](disc-o.herokuapp.com/#/)** <-

Disco is a full stack clone of the popular chat application Discord. In Disco, users can create accounts and servers to interact with communities. Most importantly, users can talk to each other in real-time with live chat!

## Technologies used
* Ruby on Rails for backend
* React/Redux for frontend
* HTML (with heavy ERB and JSX) to structure the website
* SCSS to style all elements on the website
* AWS to host users' avatars and non-static images
* Heroku to host the website
* ActionCable to allow live-chatting
* Redis to distribute real-time data (for live-chat)
* Jbuilder to format data to send to frontend
* Postgresql as database
* Postman to test backend methods

## Features

```js

```

### Channel navigation
In order to give the user the feeling of dynamically navigating through channels, as well as to add to the clarity of the website, I created some methods that would dynamically style the channel navigation bar by checking params and injecting additional styling. `handleChannelNav` runs in `componentDidMount` and `componentDidUpdate` so that the nav bar will always be styled correctly.

```js
handleChannelNav() {
        let channels = document.getElementsByClassName('channel-list-item');
        channels = Array.prototype.slice.call(channels);

        let preselected = document.getElementsByClassName('selected-channel');
        preselected = Array.prototype.slice.call(preselected);

        if (preselected.length === 0) {
            channels.forEach(channel => {
                if (channel.id === this.props.match.params.channelId) channel.classList.add('selected-channel');
        })};
    }

    handleChange(e, channel) {
        this.props.fetchChannel(channel.id);
        let channels = document.getElementsByClassName('channel-list-item');
        channels = Array.prototype.slice.call(channels);
        channels.map(channel => {
            if (channel.classList.contains('selected-channel')) channel.classList.remove('selected-channel')
        });
        e.currentTarget.classList.add('selected-channel');
    }
```

## Future plans
* Editing and deleting users' own messages
* Channel auth (alloing certain settings for specified users)
