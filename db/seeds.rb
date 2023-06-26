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

Club.create(club_name: 'Manhattan Tennis Club', street: '42nd St.', description: 'basement of Grand Central Station')
Club.create(club_name: 'Brooklyn Tennis Club', street: 'Flatbush Ave.', description: 'near Prospect Park')
Club.create(club_name: 'Queens Tennis Club', street: '12th Ave.', description: 'by the grocery store')
Club.create(club_name: 'Bronx Tennis Club', street: '161st St.', description: 'next to Yankee Stadium')
Club.create(club_name: 'Staten Island Tennis Club', street: 'Marine Ave.', description: 'near the fire station')


# User.all.each do |user| 
#     (1..3).each do |i| 
#         court = Court.order('RANDOM()').first
#         user.games.create!({
#            time: Time.at(rand * Time.now.to_i).to_s,
#            bring_ball: rand(2).zero?,
#            skill_level: rand(1..10),
#            contact_info: Faker::PhoneNumber.cell_phone,
#            user_id: user.id,
#            court_id: court.id
#         })
#     end
# end


puts "done seeding 🎾!"