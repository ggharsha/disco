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

users = User.create!([
    { username: "DemoUser", email: "Demo@User.com", password: "password" }, 
    { username: "harsha", email: "harsha@gmail.com", password: "password1" },
    { username: "michelle", email: "michelle@gmail.com", password: "password2" },
    { username: "jj", email: "jj@gmail.com", password: "password3" },
    { username: "daniel", email: "daniel@gmail.com", password: "danieldanieldaniel" },
    { username: "presley", email: "presley@gmail.com", password: "password" },
    { username: "perry", email: "perry_platypus@gmail.com", password: "demoUser" },
    { username: "jack", email: "jack@gmail.com", password: "123456789" },
    { username: "darren", email: "DARRENNNN@gmail.com", password: "123456789" },
    { username: "spencer", email: "thespence@gmail.com", password: "spencerrrr" },
    { username: "diego", email: "taytaynumber1fan@gmail.com", password: "ilovetaylor" },
    { username: "yuhuan", email: "yuuuuhuan@gmail.com", password: "passworddd" },
    { username: "ayce", email: "ayceofspaydes@gmail.com", password: "PASSWORD123" },
    { username: "alex", email: "AIBUG@gmail.com", password: "i_am_albug" },
    { username: "laney", email: "laney@gmail.com", password: "password123" },
    { username: "brian", email: "brian@gmail.com", password: "password123" },
    { username: "chris", email: "chris@gmail.com", password: "password123" },
    { username: "jerry", email: "jerry@gmail.com", password: "password123" },
    { username: "amanda", email: "amanda@gmail.com", password: "password123" },
    { username: "ann", email: "ann@gmail.com", password: "password123" },
    { username: "kirti", email: "kirti@gmail.com", password: "password123" },
    { username: "helen", email: "helen@gmail.com", password: "password123" },
    { username: "efrem", email: "efrem@gmail.com", password: "password123" },
    { username: "zack", email: "zack@gmail.com", password: "password123" },
    { username: "charlie", email: "charlie@gmail.com", password: "password123" },
    { username: "arleen", email: "arleen@gmail.com", password: "password123" }
])

servers = Server.create!([
    { owner_id: 2, server_name: "aa friends", public: true },
    { owner_id: 4, server_name: "anime", public: true },
    { owner_id: 2, server_name: "league of legends", public: true },
    { owner_id: 6, server_name: "overwatch", public: true },
    { owner_id: 7, server_name: "gaming", public: true },
    { owner_id: 8, server_name: "emote server", public: true },
    { owner_id: 1, server_name: "keyboard lovers", public: true },
    { owner_id: 5, server_name: "memes", public: true },
    { owner_id: 4, server_name: "funfunfun", public: true },
    { owner_id: 4, server_name: "dodriobrate", public: true },
    { owner_id: 1, server_name: "pokemon", public: true },
    { owner_id: 7, server_name: "cohort channel", public: true },
    { owner_id: 6, server_name: "ta server", public: true },
    { owner_id: 5, server_name: "don't click", public: true },
    { owner_id: 4, server_name: "this is a public server", public: true },
])

memberships = Membership.create!([
    { user_id: 2, server_id: 1 },
    { user_id: 3, server_id: 1 },
    { user_id: 4, server_id: 1 },
    { user_id: 5, server_id: 1 },
    { user_id: 6, server_id: 1 },
    { user_id: 7, server_id: 1 },
    { user_id: 8, server_id: 1 },
    { user_id: 1, server_id: 2 },
    { user_id: 1, server_id: 3 },
    { user_id: 1, server_id: 4 },
    { user_id: 1, server_id: 5 },
    { user_id: 1, server_id: 9 },
    { user_id: 2, server_id: 1 },
    { user_id: 2, server_id: 2 },
    { user_id: 2, server_id: 3 },
    { user_id: 2, server_id: 4 },
    { user_id: 2, server_id: 5 },
    { user_id: 2, server_id: 7 },
    { user_id: 6, server_id: 4 },
    { user_id: 2, server_id: 1 },
    { user_id: 4, server_id: 2 },
    { user_id: 6, server_id: 4 },
    { user_id: 7, server_id: 5 },
    { user_id: 8, server_id: 6 },
    { user_id: 1, server_id: 9 },
    { user_id: 12, server_id: 10 },
    { user_id: 5, server_id: 11 },
    { user_id: 4, server_id: 12 },
    { user_id: 4, server_id: 13 },
])