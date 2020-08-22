# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
# Follow.delete_all
# Like.delete_all
# Comment.delete_all

demo = User.create(username: 'demoDoge', email: 'demo@woof.com', password: "password");
user1 = User.create(username: 'lotushowls', email: 'lotus@woof.com', password: "password");
user2 = User.create(username: 'snoopie', email: 'snoppie@woof.com', password: "password");
user3 = User.create(username: 'NoodlePoodle', email: 'noodle@woof.com', password: "password");
user4 = User.create(username: 'SheepHerder', email: 'sheperd@woof.com', password: "password");
user5 = User.create(username: 'GoldieLox', email: 'goldie@woof.com', password: "password");

post1 = Post.create(title: 'Woof World!', content: 'This is my first woof.', post_type: 'text', author_id: demo.id)
post2 = Post.create(title: 'It was raining cats and dogs', content: 'I stepped in a poodle.', post_type: 'text', author_id: user1.id)
post3 = Post.create(title: 'Met the Loch Ness Monster today', content: 'I was terrier-fied!', post_type: 'text', author_id: user2.id)
# post4 =
# post5 =
# post6 =
# post7 =
