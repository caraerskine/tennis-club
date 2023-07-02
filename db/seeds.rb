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

Club.create!(club_name: 'Manhattan Tennis Club', street: '42nd St.', description: 'behind Grand Central Station', club_img: 'https://i0.wp.com/thecitylife.org/wp-content/uploads/2023/06/52991725163_90da35260a_b.jpg?fit=1024%2C767&ssl=1')
Club.create!(club_name: 'Brooklyn Tennis Club', street: 'Flatbush Ave.', description: 'near Prospect Park', club_img: 'https://nypost.com/wp-content/uploads/sites/2/2021/10/brooklyn-tennis-court.jpg?quality=75&strip=all')
Club.create!(club_name: 'Queens Tennis Club', street: '12th Ave.', description: 'by the grocery store', club_img: 'https://images.squarespace-cdn.com/content/v1/5b9ffe0f1137a680c2c08250/1629407688846-TD5ROZ5ULC4GGNVUCXD8/kith.jpeg?format=1000w')
Club.create!(club_name: 'Bronx Tennis Club', street: '161st St.', description: 'next to Yankee Stadium', club_img: 'https://nypost.com/wp-content/uploads/sites/2/2016/08/tennis_hudson1a.jpg?quality=80&strip=all')
Club.create!(club_name: 'Staten Island Tennis Club', street: 'Marine Ave.', description: 'near the fire station', club_img: 'https://assets.website-files.com/6238f3c220d25d1180edadee/623e4007ffc9ced479f6b31c_AdobeStock_23409792.jpeg')


# User.all.each do |user| 
#     (1..3).each do |i| 
#         club = Club.order('RANDOM()').first
#         user.matches.create!({
#            sender_id:
#            receiver_id:
#            date: Date.at(rand * Date.now.to_i).to_s,
#            time: Time.at(rand * Time.now.to_i).to_s,
#            skill_level: rand(1..10),
#            contact_info: Faker::PhoneNumber.cell_phone,
#            status: (pending, accepted, rejected)
#            user_id: user.id,
#            club_id: club.id
#         })
#     end
# end


puts "done seeding 🎾!"
