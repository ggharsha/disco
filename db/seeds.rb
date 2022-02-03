User.destroy_all
Server.destroy_all
Membership.destroy_all
Channel.destroy_all
Message.destroy_all
Conversation.destroy_all
ConversationMembership.destroy_all
DirectMessage.destroy_all

user1 = User.create({ username: "DemoUser", email: "Demo@User.com", password: "password" }) #1
user2 = User.create({ username: "harsha", email: "harsha@gmail.com", password: "password1" }) #2
user3 = User.create({ username: "michelle", email: "michelle@gmail.com", password: "password2" }) #3
user4 = User.create({ username: "jj", email: "jj@gmail.com", password: "password3" }) #4
user5 = User.create({ username: "daniel", email: "daniel@gmail.com", password: "danieldanieldaniel" }) #5
user6 = User.create({ username: "presley", email: "presley@gmail.com", password: "password" }) #6
user7 = User.create({ username: "perry", email: "perry_platypus@gmail.com", password: "demoUser" }) #7
user8 = User.create({ username: "jack", email: "jack@gmail.com", password: "123456789" }) #8
user9 = User.create({ username: "darren", email: "DARRENNNN@gmail.com", password: "123456789" }) #9
user10 = User.create({ username: "spencer", email: "thespence@gmail.com", password: "spencerrrr" }) #10
user11 = User.create({ username: "diego", email: "taytaynumber1fan@gmail.com", password: "ilovetaylor" }) #11
user12 = User.create({ username: "yuhuan", email: "yuuuuhuan@gmail.com", password: "passworddd" }) #12
user13 = User.create({ username: "ayce", email: "ayceofspaydes@gmail.com", password: "PASSWORD123" }) #13
user14 = User.create({ username: "alex", email: "AIBUG@gmail.com", password: "i_am_albug" }) #14
user15 = User.create({ username: "laney", email: "laney@gmail.com", password: "password123" }) #15
user16 = User.create({ username: "brian", email: "brian@gmail.com", password: "password123" }) #16
user17 = User.create({ username: "chris", email: "chris@gmail.com", password: "password123" }) #17
user18 = User.create({ username: "jerry", email: "jerry@gmail.com", password: "password123" }) #18
user19 = User.create({ username: "amanda", email: "amanda@gmail.com", password: "password123" }) #19
user20 = User.create({ username: "ann", email: "ann@gmail.com", password: "password123" }) #20
user21 = User.create({ username: "kirti", email: "kirti@gmail.com", password: "password123" }) #21
user22 = User.create({ username: "helen", email: "helen@gmail.com", password: "password123" }) #22
user23 = User.create({ username: "efrem", email: "efrem@gmail.com", password: "password123" }) #23
user24 = User.create({ username: "zack", email: "zack@gmail.com", password: "password123" }) #24
user25 = User.create({ username: "charlie", email: "charlie@gmail.com", password: "password123" }) #25
user26 = User.create({ username: "arleen", email: "arleen@gmail.com", password: "password123" }) #26
user27 = User.create({ username: "thiago", email: "teeahhhgoo@gmail.com", password: "password123" }) #27
user28 = User.create({ username: "folgorio", email: "miggymiggy@bloomberg.com", password: "dodriobrate" }) #28

server1 = Server.create({ owner_id: user2.id, server_name: "aa friends", public: true }) #1
server2 = Server.create({ owner_id: user1.id, server_name: "anime", public: true }) #2
server3 = Server.create({ owner_id: user5.id, server_name: "league of legends", public: true }) #3
server4 = Server.create({ owner_id: user10.id, server_name: "overwatch", public: true }) #4
server5 = Server.create({ owner_id: user6.id, server_name: "gaming", public: true }) #5
server6 = Server.create({ owner_id: user3.id, server_name: "emote server", public: true }) #6
server7 = Server.create({ owner_id: user2.id, server_name: "keyboard lovers", public: true }) #7
server8 = Server.create({ owner_id: user6.id, server_name: "memes", public: true }) #8
server9 = Server.create({ owner_id: user7.id, server_name: "funfunfun", public: true }) #9
server10 = Server.create({ owner_id: user28.id, server_name: "dodriobrate", public: true }) #10
server11 = Server.create({ owner_id: user2.id, server_name: "pokemon", public: true }) #11
server12 = Server.create({ owner_id: user27.id, server_name: "cohort channel", public: true }) #12
server13 = Server.create({ owner_id: user9.id, server_name: "ta server", public: true }) #13
server14 = Server.create({ owner_id: user24.id, server_name: "don't click", public: true }) #14
server15 = Server.create({ owner_id: user16.id, server_name: "this is a public server", public: true }) #15

memberships = Membership.create([
    { user_id: user1.id, server_id: server1.id },
    { user_id: user2.id, server_id: server1.id },
    { user_id: user3.id, server_id: server1.id },
    { user_id: user4.id, server_id: server1.id },
    { user_id: user5.id, server_id: server1.id },
    { user_id: user6.id, server_id: server1.id },
    { user_id: user7.id, server_id: server1.id },
    { user_id: user8.id, server_id: server1.id },
    { user_id: user1.id, server_id: server2.id },
    { user_id: user5.id, server_id: server3.id },
    { user_id: user10.id, server_id: server4.id },
    { user_id: user6.id, server_id: server5.id },
    { user_id: user3.id, server_id: server6.id },
    { user_id: user2.id, server_id: server7.id },
    { user_id: user6.id, server_id: server8.id },
    { user_id: user7.id, server_id: server9.id },
    { user_id: user28.id, server_id: server10.id },
    { user_id: user2.id, server_id: server11.id },
    { user_id: user27.id, server_id: server12.id },
    { user_id: user9.id, server_id: server13.id },
    { user_id: user24.id, server_id: server14.id },
    { user_id: user16.id, server_id: server15.id },
    { user_id: user12.id, server_id: server2.id },
    { user_id: user22.id, server_id: server2.id },
    { user_id: user15.id, server_id: server2.id },
    { user_id: user1.id, server_id: server3.id },
    { user_id: user19.id, server_id: server3.id },
    { user_id: user1.id, server_id: server4.id },
    { user_id: user24.id, server_id: server4.id }
])

channels = Channel.create([
    { server_id: server1.id, channel_name: "general" },
    { server_id: server1.id, channel_name: "off-topic" },
    { server_id: server1.id, channel_name: "memes" },
    { server_id: server1.id, channel_name: "study-guides" },
    { server_id: server1.id, channel_name: "homework-help" },
    { server_id: server2.id, channel_name: "general" },
    { server_id: server2.id, channel_name: "off-topic" },
    { server_id: server2.id, channel_name: "memes" },
    { server_id: server2.id, channel_name: "naruto" },
    { server_id: server2.id, channel_name: "bebopbeboop" },
    { server_id: server3.id, channel_name: "general" },
    { server_id: server3.id, channel_name: "off-topic" },
    { server_id: server3.id, channel_name: "memes" },
    { server_id: server3.id, channel_name: "five-mans" },
    { server_id: server4.id, channel_name: "general" },
    { server_id: server4.id, channel_name: "off-topic" },
    { server_id: server4.id, channel_name: "memes" },
    { server_id: server5.id, channel_name: "general" },
    { server_id: server5.id, channel_name: "off-topic" },
    { server_id: server5.id, channel_name: "memes" },
    { server_id: server6.id, channel_name: "general" },
    { server_id: server6.id, channel_name: "off-topic" },
    { server_id: server6.id, channel_name: "memes" },
    { server_id: server7.id, channel_name: "general" },
    { server_id: server7.id, channel_name: "off-topic" },
    { server_id: server7.id, channel_name: "memes" },
    { server_id: server8.id, channel_name: "general" },
    { server_id: server8.id, channel_name: "off-topic" },
    { server_id: server8.id, channel_name: "memes" },
    { server_id: server9.id, channel_name: "general" },
    { server_id: server9.id, channel_name: "off-topic" },
    { server_id: server9.id, channel_name: "memes" },
    { server_id: server10.id, channel_name: "general" },
    { server_id: server10.id, channel_name: "off-topic" },
    { server_id: server10.id, channel_name: "memes" },
    { server_id: server11.id, channel_name: "general" },
    { server_id: server11.id, channel_name: "off-topic" },
    { server_id: server11.id, channel_name: "memes" },
    { server_id: server12.id, channel_name: "general" },
    { server_id: server12.id, channel_name: "off-topic" },
    { server_id: server12.id, channel_name: "memes" },
    { server_id: server13.id, channel_name: "general" },
    { server_id: server13.id, channel_name: "off-topic" },
    { server_id: server13.id, channel_name: "memes" },
    { server_id: server14.id, channel_name: "general" },
    { server_id: server14.id, channel_name: "off-topic" },
    { server_id: server14.id, channel_name: "memes" },
    { server_id: server15.id, channel_name: "general" },
    { server_id: server15.id, channel_name: "off-topic" },
    { server_id: server15.id, channel_name: "memes" }
])

conversation1 = Conversation.create({ owner_id: user1.id })
conversation2 = Conversation.create({ owner_id: user2.id })
conversation3 = Conversation.create({ owner_id: user3.id })
conversation4 = Conversation.create({ owner_id: user4.id })
conversation5 = Conversation.create({ owner_id: user5.id })

conversation_memberships = ConversationMembership.create([
    { member_id: user1.id, conversation_id: conversation1.id },
    { member_id: user2.id, conversation_id: conversation1.id },
    { member_id: user3.id, conversation_id: conversation2.id },
    { member_id: user2.id, conversation_id: conversation2.id },
    { member_id: user1.id, conversation_id: conversation2.id },
    { member_id: user2.id, conversation_id: conversation3.id },
    { member_id: user3.id, conversation_id: conversation3.id },
    { member_id: user4.id, conversation_id: conversation3.id },
    { member_id: user5.id, conversation_id: conversation3.id },
    { member_id: user1.id, conversation_id: conversation4.id },
    { member_id: user4.id, conversation_id: conversation4.id },
    { member_id: user5.id, conversation_id: conversation5.id },
    { member_id: user1.id, conversation_id: conversation5.id }
])