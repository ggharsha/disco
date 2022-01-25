# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

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
    { username: "ayce", email: "ayceofspaydes@gmail.com", password: "PASSWORD123" }
])