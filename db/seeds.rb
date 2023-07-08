# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Club.destroy_all
Match.destroy_all

puts "seeding clubs 🎾..."

# Club.create(club_name: 'Manhattan Tennis Club', street: '42nd St.', description: 'behind Grand Central Station', club_img: 'https://i0.wp.com/thecitylife.org/wp-content/uploads/2023/06/52991725163_90da35260a_b.jpg?fit=1024%2C767&ssl=1')
# Club.create(club_name: 'Brooklyn Tennis Club', street: 'Flatbush Ave.', description: 'near Prospect Park', club_img: 'https://nypost.com/wp-content/uploads/sites/2/2021/10/brooklyn-tennis-court.jpg?quality=75&strip=all')
# Club.create(club_name: 'Queens Tennis Club', street: '12th Ave.', description: 'by the grocery store', club_img: 'https://images.squarespace-cdn.com/content/v1/5b9ffe0f1137a680c2c08250/1629407688846-TD5ROZ5ULC4GGNVUCXD8/kith.jpeg?format=1000w')
# Club.create(club_name: 'Bronx Tennis Club', street: '161st St.', description: 'next to Yankee Stadium', club_img: 'https://nypost.com/wp-content/uploads/sites/2/2016/08/tennis_hudson1a.jpg?quality=80&strip=all')
# Club.create(club_name: 'Staten Island Tennis Club', street: 'Marine Ave.', description: 'near the fire station', club_img: 'https://assets.website-files.com/6238f3c220d25d1180edadee/623e4007ffc9ced479f6b31c_AdobeStock_23409792.jpeg')


club1 = {club_name: 'Manhattan Tennis Club', street: '42nd St.', description: 'behind Grand Central Station', club_img: 'https://i0.wp.com/thecitylife.org/wp-content/uploads/2023/06/52991725163_90da35260a_b.jpg?fit=1024%2C767&ssl=1'}
club2 = {club_name: 'Brooklyn Tennis Club', street: 'Flatbush Ave.', description: 'near Prospect Park', club_img: 'https://nypost.com/wp-content/uploads/sites/2/2021/10/brooklyn-tennis-court.jpg?quality=75&strip=all'}
club3 = {club_name: 'Queens Tennis Club', street: '12th Ave.', description: 'by the grocery store', club_img: 'https://images.squarespace-cdn.com/content/v1/5b9ffe0f1137a680c2c08250/1629407688846-TD5ROZ5ULC4GGNVUCXD8/kith.jpeg?format=1000w'}
club4 = {club_name: 'Bronx Tennis Club', street: '161st St.', description: 'next to Yankee Stadium', club_img: 'https://nypost.com/wp-content/uploads/sites/2/2016/08/tennis_hudson1a.jpg?quality=80&strip=all'}
club5 = {club_name: 'Staten Island Tennis Club', street: 'Marine Ave.', description: 'near the fire station', club_img: 'https://assets.website-files.com/6238f3c220d25d1180edadee/623e4007ffc9ced479f6b31c_AdobeStock_23409792.jpeg'}


#put an exception handler
users = ["Steffi", "Serena", "Boris", "Pete", "Billie"]
clubs = [club1, club2, club3, club4, club5]

(1..5).each do |i|
    password = Faker::Internet.password(min_length: 8, max_length: 20)

    User.create(
        name: users[i-1],
        avatar_url: Faker::Avatar.image,
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

(1..5).each do |i|
 def random_num(current)
    for _ in 1..5
        number = rand(1..5)
        return number unless number == current
      end
 end

    Match.create(
        user_id: i,
        club_id: i,
        sender_id: i,
        receiver_id: random_num(i),
        status: status[rand(0..2)],
        datetime: Time.at(rand * Time.now.to_i).to_s,
        phone: Faker::PhoneNumber.cell_phone,
        skill_level: rand(2).zero?,
    )
end


puts "done seeding 🎾!"
