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

### Creating DM conversations
Creating a conversation is slightly trickier than creating a server, as adding users can add a variable number of people to a group message. In order to account for this, I send back the list of user handles as an array and split it in order to generate a conversation. The create method utilizes an ActiveRecord transaction which allows it to create a failure and rollback the entire method if any member is typed incorrectly, rendering an error for the frontend to display to the user. Handles are used rather than usernames because Disco does not have unique username constraints, so the user must be parsed more thoroughly.

```ruby
def create
  handle_check_username = current_user.username
  handle_check_tag = current_user.tag
  if params[:conversation][:handles].include?("#{handle_check_username}##{handle_check_tag}")
    render json: ["You can't add yourself!"], status: 422
  else
    @conversation = Conversation.new
    @conversation.owner_id = current_user.id
    begin
      @conversation.transaction do
        @conversation.save
        ConversationMembership.create(member_id: current_user.id, conversation_id: @conversation.id)
        params[:conversation][:handles].each do |handle|
          username = handle.split("#").first
          tag = handle.split("#").last
          user_id = User.find_by(username: username, tag: tag).id
          ConversationMembership.create(member_id: user_id, conversation_id: @conversation.id)
        end
      end
      render 'api/conversations/show'
    rescue
      render json: ['Could not find a user, please try again'], status: 422
    end
  end
end
```

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
In order to give the user the feeling of dynamically navigating through channels, as well as to add to the clarity of the website, I created some methods that would dynamically style the channel navigation bar upon every render using React hooks. The server navigation bar and DM navigation bar also have similar methods using hooks, though they function slightly differently in terms of injected styling. Using the `useState` hook, I can shift styling in my `onClick` and re-render by changing the component's local state.

```js
// channel_list.jsx

const [currentChannel, setCurrentChannel] = useState(paramsChannel);

const handleClick = channel => {
    setCurrentChannel(channel.id);
    fetchChannel(channel.id);
};

const channelText = channel => {
// this is just one condition
    return (<li
        onClick={() => handleClick(channel)}
        className='channel-list-item selected-channel'
    >
        <span className="chan-hashtag">#</span>&nbsp;&nbsp;{channel.channelName}
        <span className="chan-cog"><i
            className="fas fa-cog"
            onClick={() => openModal('updateChannel')}
        /></span>
    </li>)
// ...
}

return (
// ...
    {channels.map(channel => (
        <Link
            key={channel.id}
            to={`/channels/${server.id}/${channel.id}`}
        >
            {channelText(channel)}
        </Link> 
    ))}
// ...
)
```

## Future plans
* Editing and deleting users' own messages
* Channel auth (allowing certain settings for specified users)
* Tooltips when hovering over the server nav bar
* Custom avatars and server pictures in settings
* Building out a friendship frontend
