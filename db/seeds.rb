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
    { username: "arleen", email: "arleen@gmail.com", password: "password123" } #26
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
    { user_id: 15, server_id: 3 },
    { user_id: 15, server_id: 4 },
    { user_id: 16, server_id: 5 },
    { user_id: 16, server_id: 3 },
    { user_id: 17, server_id: 2 },
    { user_id: 18, server_id: 2 },
    { user_id: 18, server_id: 4 },
    { user_id: 19, server_id: 6 },
    { user_id: 20, server_id: 4 },
    { user_id: 21, server_id: 4 },
    { user_id: 22, server_id: 4 },
    { user_id: 22, server_id: 3 },
    { user_id: 22, server_id: 2 },
    { user_id: 23, server_id: 6 },
    { user_id: 23, server_id: 7 },
    { user_id: 24, server_id: 2 },
    { user_id: 24, server_id: 3 },
    { user_id: 24, server_id: 9 },
    { user_id: 25, server_id: 2 },
    { user_id: 25, server_id: 4 },
    { user_id: 26, server_id: 3 },
    { user_id: 26, server_id: 2 },
    { user_id: 26, server_id: 5 },
    { user_id: 14, server_id: 3 },
    { user_id: 13, server_id: 3 },
    { user_id: 9, server_id: 2 },
    { user_id: 10, server_id: 2 },
    { user_id: 11, server_id: 3 },
    { user_id: 13, server_id: 3 },
    { user_id: 9, server_id: 3 },
    { user_id: 10, server_id: 3 },
    { user_id: 16, server_id: 7 },
    { user_id: 12, server_id: 7 }
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

# z = User.first 
# z.avatar.attach(io: File.open("app/assets/images/Pastel-Gray.png"), filename: "default-gray.png")
# a = User.second
# a.avatar.attach(io: File.open("app/assets/images/Pastel-Black.png"), filename: "default-black.png")
# b = User.third
# b.avatar.attach(io: File.open("app/assets/images/Pastel-Red.png"), filename: "default-red.png")
# c = User.fourth
# c.avatar.attach(io: File.open("app/assets/images/Pastel-Blue.png"), filename: "default-blue.png")
# d = User.fifth
# d.avatar.attach(io: File.open("app/assets/images/Pastel-Green.png"), filename: "default-green.png")
# e = User.where(id: 6)[0]
# e.avatar.attach(io: File.open("app/assets/images/Pastel-Gray.png"), filename: "default-gray.png")
# f = User.where(id: 7)[0]
# f.avatar.attach(io: File.open("app/assets/images/Pastel-Orange.png"), filename: "default-orange.png")
# g = User.where(id: 8)[0]
# g.avatar.attach(io: File.open("app/assets/images/Pastel-Violet.png"), filename: "default-violet.png")
# h = User.where(id: 9)[0]
# h.avatar.attach(io: File.open("app/assets/images/Pastel-Yellow.png"), filename: "default-yellow.png")
# i = User.where(id: 10)[0]
# i.avatar.attach(io: File.open("app/assets/images/Pastel-Yellow.png"), filename: "default-yellow.png")
# j = User.where(id: 11)[0]
# j.avatar.attach(io: File.open("app/assets/images/Pastel-Pink.png"), filename: "default-pink.png")
# k = User.where(id: 12)[0]
# k.avatar.attach(io: File.open("app/assets/images/Pastel-Blue.png"), filename: "default-blue.png")
# l = User.where(id: 13)[0]
# l.avatar.attach(io: File.open("app/assets/images/Pastel-Indigo.png"), filename: "default-indigo.png")
# m = User.where(id: 14)[0]
# m.avatar.attach(io: File.open("app/assets/images/Pastel-Yellow.png"), filename: "default-yellow.png")
# n = User.where(id: 15)[0]
# n.avatar.attach(io: File.open("app/assets/images/Pastel-Pink.png"), filename: "default-pink.png")
# o = User.where(id: 16)[0]
# o.avatar.attach(io: File.open("app/assets/images/Pastel-Orange.png"), filename: "default-orange.png")
# p = User.where(id: 17)[0]
# p.avatar.attach(io: File.open("app/assets/images/Pastel-Red.png"), filename: "default-red.png")
# q = User.where(id: 18)[0]
# q.avatar.attach(io: File.open("app/assets/images/Pastel-Gray.png"), filename: "default-gray.png")
# r = User.where(id: 19)[0]
# r.avatar.attach(io: File.open("app/assets/images/Pastel-Blue.png"), filename: "default-blue.png")
# s = User.where(id: 20)[0]
# s.avatar.attach(io: File.open("app/assets/images/Pastel-Green.png"), filename: "default-green.png")
# t = User.where(id: 21)[0]
# t.avatar.attach(io: File.open("app/assets/images/Pastel-Indigo.png"), filename: "default-indigo.png")
# u = User.where(id: 22)[0]
# u.avatar.attach(io: File.open("app/assets/images/Pastel-Black.png"), filename: "default-black.png")
# v = User.where(id: 23)[0]
# v.avatar.attach(io: File.open("app/assets/images/Pastel-Blue.png"), filename: "default-blue.png")
# w = User.where(id: 24)[0]
# w.avatar.attach(io: File.open("app/assets/images/Pastel-Violet.png"), filename: "default-violet.png")
# x = User.where(id: 25)[0]
# x.avatar.attach(io: File.open("app/assets/images/Pastel-Violet.png"), filename: "default-violet.png")
# y = User.where(id: 26)[0]
# y.avatar.attach(io: File.open("app/assets/images/Pastel-Orange.png"), filename: "default-orange.png")