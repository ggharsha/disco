# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Server.destroy_all
Membership.destroy_all
Channel.destroy_all
Message.destroy_all
Conversation.destroy_all
ConversationMembership.destroy_all
DirectMessage.destroy_all

users = User.create!([
    { username: "DemoUser", email: "Demo@User.com", password: "password" }, #1
    { username: "harsha", email: "harsha@gmail.com", password: "password1" }, #2
    { username: "michelle", email: "michelle@gmail.com", password: "password2" }, #3
    { username: "jj", email: "jj@gmail.com", password: "password3" }, #4
    { username: "daniel", email: "daniel@gmail.com", password: "danieldanieldaniel" }, #5
    { username: "presley", email: "presley@gmail.com", password: "password" }, #6
    { username: "perry", email: "perry_platypus@gmail.com", password: "demoUser" }, #7
    { username: "jack", email: "jack@gmail.com", password: "123456789" }, #8
    { username: "darren", email: "DARRENNNN@gmail.com", password: "123456789" }, #9
    { username: "spencer", email: "thespence@gmail.com", password: "spencerrrr" }, #10
    { username: "diego", email: "taytaynumber1fan@gmail.com", password: "ilovetaylor" }, #11
    { username: "yuhuan", email: "yuuuuhuan@gmail.com", password: "passworddd" }, #12
    { username: "ayce", email: "ayceofspaydes@gmail.com", password: "PASSWORD123" }, #13
    { username: "alex", email: "AIBUG@gmail.com", password: "i_am_albug" }, #14
    { username: "laney", email: "laney@gmail.com", password: "password123" }, #15
    { username: "brian", email: "brian@gmail.com", password: "password123" }, #16
    { username: "chris", email: "chris@gmail.com", password: "password123" }, #17
    { username: "jerry", email: "jerry@gmail.com", password: "password123" }, #18
    { username: "amanda", email: "amanda@gmail.com", password: "password123" }, #19
    { username: "ann", email: "ann@gmail.com", password: "password123" }, #20
    { username: "kirti", email: "kirti@gmail.com", password: "password123" }, #21
    { username: "helen", email: "helen@gmail.com", password: "password123" }, #22
    { username: "efrem", email: "efrem@gmail.com", password: "password123" }, #23
    { username: "zack", email: "zack@gmail.com", password: "password123" }, #24
    { username: "charlie", email: "charlie@gmail.com", password: "password123" }, #25
    { username: "arleen", email: "arleen@gmail.com", password: "password123" }, #26
    { username: "thiago", email: "teeahhhgoo@gmail.com", password: "password123" }, #27
    { username: "folgorio", email: "miggymiggy@bloomberg.com", password: "dodriobrate" } #28
])

servers = Server.create!([
    { owner_id: User.where(username: "harsha").first.id, server_name: "aa friends", public: true }, #1
    { owner_id: User.where(username: "jj").first.id, server_name: "anime", public: true }, #2
    { owner_id: User.where(username: "harsha").first.id, server_name: "league of legends", public: true }, #3
    { owner_id: User.where(username: "presley").first.id, server_name: "overwatch", public: true }, #4
    { owner_id: User.where(username: "perry").first.id, server_name: "gaming", public: true }, #5
    { owner_id: User.where(username: "jack").first.id, server_name: "emote server", public: true }, #6
    { owner_id: User.where(username: "harsha").first.id, server_name: "keyboard lovers", public: true }, #7
    { owner_id: User.where(username: "daniel").first.id, server_name: "memes", public: true }, #8
    { owner_id: User.where(username: "jj").first.id, server_name: "funfunfun", public: true }, #9
    { owner_id: User.where(username: "jj").first.id, server_name: "dodriobrate", public: true }, #10
    { owner_id: User.where(username: "DemoUser").first.id, server_name: "pokemon", public: true }, #11
    { owner_id: User.where(username: "perry").first.id, server_name: "cohort channel", public: true }, #12
    { owner_id: User.where(username: "presley").first.id, server_name: "ta server", public: true }, #13
    { owner_id: User.where(username: "daniel").first.id, server_name: "don't click", public: true }, #14
    { owner_id: User.where(username: "jj").first.id, server_name: "this is a public server", public: true }, #15
])

memberships = Membership.create!([
    { user_id: 1, server_id: 1 },
    { user_id: 2, server_id: 1 },
    { user_id: 3, server_id: 1 },
    { user_id: 4, server_id: 1 },
    { user_id: 5, server_id: 1 },
    { user_id: 6, server_id: 1 },
    { user_id: 7, server_id: 1 },
    { user_id: 8, server_id: 1 }
])

channels = Channel.create!([
    { server_id: 1, channel_name: "general" },
    { server_id: 1, channel_name: "off-topic" },
    { server_id: 1, channel_name: "memes" },
    { server_id: 1, channel_name: "study-guides" },
    { server_id: 1, channel_name: "homework-help" },
    { server_id: 2, channel_name: "general" },
    { server_id: 2, channel_name: "off-topic" },
    { server_id: 2, channel_name: "memes" },
    { server_id: 2, channel_name: "naruto" },
    { server_id: 2, channel_name: "bebopbeboop" },
    { server_id: 3, channel_name: "general" },
    { server_id: 3, channel_name: "off-topic" },
    { server_id: 3, channel_name: "memes" },
    { server_id: 3, channel_name: "five-mans" },
    { server_id: 4, channel_name: "general" },
    { server_id: 4, channel_name: "off-topic" },
    { server_id: 4, channel_name: "memes" },
    { server_id: 5, channel_name: "general" },
    { server_id: 5, channel_name: "off-topic" },
    { server_id: 5, channel_name: "memes" },
    { server_id: 6, channel_name: "general" },
    { server_id: 6, channel_name: "off-topic" },
    { server_id: 6, channel_name: "memes" },
    { server_id: 7, channel_name: "general" },
    { server_id: 7, channel_name: "off-topic" },
    { server_id: 7, channel_name: "memes" },
    { server_id: 8, channel_name: "general" },
    { server_id: 8, channel_name: "off-topic" },
    { server_id: 8, channel_name: "memes" },
    { server_id: 9, channel_name: "general" },
    { server_id: 9, channel_name: "off-topic" },
    { server_id: 9, channel_name: "memes" },
    { server_id: 10, channel_name: "general" },
    { server_id: 10, channel_name: "off-topic" },
    { server_id: 10, channel_name: "memes" },
    { server_id: 11, channel_name: "general" },
    { server_id: 11, channel_name: "off-topic" },
    { server_id: 11, channel_name: "memes" },
    { server_id: 12, channel_name: "general" },
    { server_id: 12, channel_name: "off-topic" },
    { server_id: 12, channel_name: "memes" },
    { server_id: 13, channel_name: "general" },
    { server_id: 13, channel_name: "off-topic" },
    { server_id: 13, channel_name: "memes" },
    { server_id: 14, channel_name: "general" },
    { server_id: 14, channel_name: "off-topic" },
    { server_id: 14, channel_name: "memes" },
    { server_id: 15, channel_name: "general" },
    { server_id: 15, channel_name: "off-topic" },
    { server_id: 15, channel_name: "memes" }
])

conversations = Conversation.create!([
    { owner_id: User.first.id },
    { owner_id: User.second.id },
    { owner_id: User.third.id },
    { owner_id: User.fourth.id },
    { owner_id: User.fifth.id }
])

conversation_memberships = ConversationMembership.create!([
    { member_id: User.first.id, conversation_id: Conversation.first.id },
    { member_id: User.second.id, conversation_id: Conversation.first.id },
    { member_id: User.third.id, conversation_id: Conversation.second.id },
    { member_id: User.second.id, conversation_id: Conversation.second.id },
    { member_id: User.first.id, conversation_id: Conversation.second.id },
    { member_id: User.second.id, conversation_id: Conversation.third.id },
    { member_id: User.third.id, conversation_id: Conversation.third.id },
    { member_id: User.fourth.id, conversation_id: Conversation.third.id },
    { member_id: User.fifth.id, conversation_id: Conversation.third.id },
    { member_id: User.first.id, conversation_id: Conversation.fourth.id },
    { member_id: User.fourth.id, conversation_id: Conversation.fourth.id },
    { member_id: User.fifth.id, conversation_id: Conversation.fifth.id },
    { member_id: User.first.id, conversation_id: Conversation.fifth.id }
])