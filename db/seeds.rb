# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Club.destroy_all
Match.destroy_all

puts "seeding clubs 🎾..."

club1 = {club_name: 'Manhattan Tennis Club', street: '42nd St.', description: 'behind Grand Central Station', club_img: 'https://i0.wp.com/thecitylife.org/wp-content/uploads/2023/06/52991725163_90da35260a_b.jpg?fit=1024%2C767&ssl=1'}
club2 = {club_name: 'Brooklyn Tennis Club', street: 'Flatbush Ave.', description: 'near Prospect Park', club_img: 'https://nypost.com/wp-content/uploads/sites/2/2021/10/brooklyn-tennis-court.jpg?quality=75&strip=all'}
club3 = {club_name: 'Queens Tennis Club', street: '12th Ave.', description: 'by the grocery store', club_img: 'https://images.squarespace-cdn.com/content/v1/5b9ffe0f1137a680c2c08250/1629407688846-TD5ROZ5ULC4GGNVUCXD8/kith.jpeg?format=1000w'}
club4 = {club_name: 'Bronx Tennis Club', street: '161st St.', description: 'next to Yankee Stadium', club_img: 'https://nypost.com/wp-content/uploads/sites/2/2016/08/tennis_hudson1a.jpg?quality=80&strip=all'}
club5 = {club_name: 'Staten Island Tennis Club', street: 'Marine Ave.', description: 'near the fire station', club_img: 'https://assets.website-files.com/6238f3c220d25d1180edadee/623e4007ffc9ced479f6b31c_AdobeStock_23409792.jpeg'}

avatar1 = 'https://cdn0.scrvt.com/c2465e9022ba946df66d1244a69b1c75/90cf1c7c5746317d/311a7d67b222/v/0ab0eb8f2720/boris-becker.jpg'
avatar2 = 'https://media.npr.org/assets/img/2022/06/14/gettyimages-1231196817-9f4221e92b6331e592eeb14218f66d87e3648e3d-s1100-c50.jpg'
avatar3 = 'https://cdn0.scrvt.com/c2465e9022ba946df66d1244a69b1c75/9faaf8cc82fe6a1e/97a72de7832c/v/a1355696f1a7/p_0300_15_A8_009_o2.jpg'
avatar4 = 'https://www.womenshistory.org/sites/default/files/styles/main_image/public/images/2021-06/Billie%20Jean%20King%20Square.png'
avatar5 = 'https://cdn0.scrvt.com/c2465e9022ba946df66d1244a69b1c75/a86fddef3d67e7f7/2c595f2bee0f/v/dbc12aaf1cf8/p_0300_14_E5_005_o2.jpg'

users = ["Steffi", "Serena", "Boris", "Pete", "Billie"]
clubs = [club1, club2, club3, club4, club5]
avatar_imgs = [avatar1, avatar2, avatar3, avatar4, avatar5]

(1..5).each do |i|
    password = Faker::Internet.password(min_length: 8, max_length: 20)

    User.create(
        name: users[i-1],
        avatar_url: avatar_imgs[i-1],
        username: Faker::Internet.username,
        email: Faker::Internet.email,
        password: password,
        password_confirmation: password
    )

    Club.create(
        clubs[i-1],
    )

end
puts "clubs seeded!"

status = ["pending", "accepted", "completed"]

(7..36).each do |i|

 def random_num_clubs
        number = rand(1..5)
        return number 
 end

 def random_num_users(current)
    for _ in 1..6
        number = rand(1..6)
        return number unless number == current
      end
 end

 user = User.find(rand(1..6))

    current_match = Match.create!(
        user_id: user.id,
        club_id: random_num_clubs,
        sender_id: user.id,
        receiver_id: random_num_users(user.id),
        status: status[rand(0..2)],
        datetime: Time.at(rand * Time.now.to_i).to_s,
        phone: Faker::PhoneNumber.cell_phone,
        skill_level: true

    )

    puts current_match

end



puts "done seeding 🎾!"


# avatar_url: Faker::Avatar.image,