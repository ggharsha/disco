# Disco

-> **[Live here!](https://disc-o.herokuapp.com/#/)** <-

![splash](https://raw.githubusercontent.com/ggharsha/disco/main/README-images/disco-splash.png)

Disco is a full stack clone of the popular chat application Discord. In Disco, users can create accounts and servers to interact with communities. Most importantly, users can talk to each other in real-time with live chat!

![live-chat](https://raw.githubusercontent.com/ggharsha/disco/main/README-images/disco-demo.gif)

## Technologies used
* Ruby on Rails for backend
* React/Redux for frontend
* HTML (with heavy ERB and JSX) to structure the website
* SCSS to style all elements on the website
* AWS to host users' avatars and non-static images
* Heroku for web hosting
* ActionCable for live-chatting
* Redis to distribute real-time data (for live-chat)
* Jbuilder to format data to send to frontend
* Postgresql as database
* Postman to test backend methods

## Features

![public channels](https://raw.githubusercontent.com/ggharsha/disco/main/README-images/disco-public.png)

### Server nav bar selection
The state can hold a large number of servers in order to account for my public server modal that allows for joining, so in order to select which servers to display in the left nav bar, I added a selector that would keep track of which servers the user is actually a member of. The `serversJoined` array holds the ids of all servers a user is a member of, and the server nav bar dynamically changes whenever the user joins a server, leaves a server, or creates/destroys a server.

```js
const selectServers = state => {
    if (Object.keys(state.entities.servers).length === 0) return [];
    return state.entities.users[state.session.id].serversJoined.map(serverId => (
        state.entities.servers[serverId]
    ))
};
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
* Channel auth (allowing certain settings for specified users)
* Tooltips when hovering over the server nav bar
* Custom avatars and server pictures in settings
* Building out a friendship frontend
