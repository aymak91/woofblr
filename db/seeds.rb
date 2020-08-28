require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Follow.destroy_all
Like.destroy_all

demo = User.create(username: 'demoDoge', email: 'demo@woof.com', password: "password")
user1 = User.create(username: 'lotushowls', email: 'lotus@woof.com', password: "password")
user2 = User.create(username: 'snoopie', email: 'snoppie@woof.com', password: "password")
user3 = User.create(username: 'NoodlePoodle', email: 'noodle@woof.com', password: "password")
user4 = User.create(username: 'SheepHerder', email: 'sheperd@woof.com', password: "password")
user5 = User.create(username: 'GoldieLox', email: 'goldie@woof.com', password: "password")

demo_avatar = open('https://woofblr-dev.s3-us-west-1.amazonaws.com/doge.png')
demo.avatar.attach(io: demo_avatar, filename: 'doge.png')
avatar1 = open('https://woofblr-dev.s3-us-west-1.amazonaws.com/avatar1.jpg')
user1.avatar.attach(io: avatar1, filename: 'avatar1.png')
avatar2 = open('https://woofblr-dev.s3-us-west-1.amazonaws.com/avatar2.jpg')
user2.avatar.attach(io: avatar2, filename: 'avatar2.png')
avatar3 = open('https://woofblr-dev.s3-us-west-1.amazonaws.com/avatar3.jpg')
user3.avatar.attach(io: avatar3, filename: 'avatar3.png')
avatar4 = open('https://woofblr-dev.s3-us-west-1.amazonaws.com/avatar4.jpg')
user4.avatar.attach(io: avatar4, filename: 'avatar4.png')
avatar5 = open('https://woofblr-dev.s3-us-west-1.amazonaws.com/avatar5.jpg')
user5.avatar.attach(io: avatar5, filename: 'avatar5.png')

post1 = Post.create(title: 'Woof World!', content: 'This is my first woof.', post_type: 'text', author_id: demo.id)
post2 = Post.create(title: '', content: 'Check out my new gaming setup!', post_type: 'photo', author_id: user1.id )
post3 = Post.create(title: 'Met the Loch Ness Monster today', content: 'I was terrier-fied!', post_type: 'text', author_id: user2.id)
post4 = Post.create(title: '', content: 'Doge coin mining!', post_type: 'photo', author_id: user3.id )
post5 = Post.create(title: 'It was raining cats and dogs', content: 'I stepped in a poodle.', post_type: 'text', author_id: user4.id)
post6 = Post.create(title: 'Dalmatians hide so you don’t spot them.', content: 'me', post_type: 'quote', author_id: user5.id)
# post7 =

like1 = Like.create(user: demo, post: post4)
like2 = Like.create(user: user1, post: post2)

gamer_girl = open('https://woofblr-dev.s3-us-west-1.amazonaws.com/gamer_girl.jpg')
post2.photo.attach(io: gamer_girl, filename: 'gamer-girl.jpg')
doge_mining = open('https://woofblr-dev.s3-us-west-1.amazonaws.com/doge-mining.gif')
post4.photo.attach(io: doge_mining, filename: 'doge-mining.gif')

follow1 = Follow.create(following_id: demo.id, follower_id: user1.id) #user1 follows demo
follow2 = Follow.create(following_id: user2.id, follower_id: demo.id) 