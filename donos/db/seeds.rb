# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Item.destroy_all
Transfer.destroy_all
Cart.destroy_all
Wishlist.destroy_all

u1 = User.create(name: "Test", password: "test", account_balance: 100000000.25)
u2 = User.create(name: "God", password: "trinity", account_balance: 0)
u3 = User.create(name: "delete", password: "nike", account_balance: 0)
users = User.all

200.times do 
    name = Faker::Appliance.equipment
    description = Faker::Coffee.notes
    user_id = users[rand(1-3)].id
    category = Faker::Job.field
    asking_price = rand(1..50)
    Item.create(name:name, description:description, user_id:user_id, category:category, asking_price:asking_price, image: "https://robohash.org/#{rand(20)}")
end

i1=Item.create(name: "book", description: "pages", user_id: u1.id, category: "education", asking_price: 20.75, image: "https://images-na.ssl-images-amazon.com/images/I/81bdgx5qi1L.jpg")
i2=Item.create(name: "game", description: "RPG", user_id: u1.id, category: "entertainment", asking_price: 21.75, image: "https://cdn.cloudflare.steamstatic.com/steam/apps/22380/header.jpg?t=1586905021")
i3=Item.create(name: "tv", description: "HDTV", user_id: u1.id, category: "entertainment", asking_price: 22.75, image: "https://us.dynabook.com/images/showcase/tv/research-center/shopping-guides/buyguide-main-img.png")
i4=Item.create(name: "wrench", description: "indoctrination", user_id: u2.id, category: "miscellaneous", asking_price: 5.75, image: "https://c8.alamy.com/comp/F38NYT/funny-craftsman-chipmunk-with-wrench-F38NYT.jpg")

items=Item.all

50.times do
    buyer_id = users[rand(1-3)].id
    seller_id = users[rand(1-3)].id
    item_id = items[rand(1..199)].id
    amount = rand(1..250)
    Transfer.create(buyer_id:buyer_id, seller_id:seller_id, item_id:item_id, amount:amount)
end

t1=Transfer.create(buyer_id: u1.id, seller_id: u2.id, item_id: i4.id, amount: 23.00)
t2=Transfer.create(buyer_id: u1.id, seller_id: u2.id, item_id: i3.id, amount: 22.00)
t3=Transfer.create(buyer_id: u2.id, seller_id: u1.id, item_id: i2.id, amount: 21.00)
t4=Transfer.create(buyer_id: u2.id, seller_id: u1.id, item_id: i1.id, amount: 20.00)

c1 = Cart.create(user_id: u1.id, item_id: i1.id)
c2 = Cart.create(user_id: u1.id, item_id: i1.id)
c3 = Cart.create(user_id: u1.id, item_id: i1.id)
c4 = Cart.create(user_id: u1.id, item_id: i1.id)
c5 = Cart.create(user_id: u2.id, item_id: i2.id)
c6 = Cart.create(user_id: u2.id, item_id: i2.id)
c7 = Cart.create(user_id: u2.id, item_id: i2.id)
c8 = Cart.create(user_id: u2.id, item_id: i2.id)
c9 = Cart.create(user_id: u3.id, item_id: i3.id)
c10 = Cart.create(user_id: u3.id, item_id: i3.id)
c11 = Cart.create(user_id: u3.id, item_id: i3.id)
c12 = Cart.create(user_id: u3.id, item_id: i3.id)

w1 = Wishlist.create(user_id: u1.id, item_id: i1.id)
w2 = Wishlist.create(user_id: u1.id, item_id: i1.id)
w3 = Wishlist.create(user_id: u1.id, item_id: i1.id)
w4 = Wishlist.create(user_id: u1.id, item_id: i1.id)
w5 = Wishlist.create(user_id: u2.id, item_id: i2.id)
w6 = Wishlist.create(user_id: u2.id, item_id: i2.id)
w7 = Wishlist.create(user_id: u2.id, item_id: i2.id)
w8 = Wishlist.create(user_id: u2.id, item_id: i2.id)
w9 = Wishlist.create(user_id: u3.id, item_id: i3.id)
w10 = Wishlist.create(user_id: u3.id, item_id: i3.id)
w11 = Wishlist.create(user_id: u3.id, item_id: i3.id)
w12 = Wishlist.create(user_id: u3.id, item_id: i3.id)

