# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
# Club.destroy_all
Match.destroy_all

puts "seeding users 🎾..."

club1 = {club_name: 'Manhattan Tennis Club', street: '42nd St.', description: 'behind Grand Central Station', club_img: 'https://i0.wp.com/thecitylife.org/wp-content/uploads/2023/06/52991725163_90da35260a_b.jpg?fit=1024%2C767&ssl=1'}
club2 = {club_name: 'Brooklyn Tennis Club', street: 'Flatbush Ave.', description: 'near Prospect Park', club_img: 'https://nypost.com/wp-content/uploads/sites/2/2021/10/brooklyn-tennis-court.jpg?quality=75&strip=all'}
club3 = {club_name: 'Queens Tennis Club', street: '12th Ave.', description: 'by the grocery store', club_img: 'https://images.squarespace-cdn.com/content/v1/5b9ffe0f1137a680c2c08250/1629407688846-TD5ROZ5ULC4GGNVUCXD8/kith.jpeg?format=1000w'}
club4 = {club_name: 'Bronx Tennis Club', street: '161st St.', description: 'next to Yankee Stadium', club_img: 'https://nypost.com/wp-content/uploads/sites/2/2016/08/tennis_hudson1a.jpg?quality=80&strip=all'}
club5 = {club_name: 'Staten Island Tennis Club', street: 'Marine Ave.', description: 'near the fire station', club_img: 'https://assets.website-files.com/6238f3c220d25d1180edadee/623e4007ffc9ced479f6b31c_AdobeStock_23409792.jpeg'}

avatar1 = 'https://tinyurl.com/2p8ebv2y'
avatar2 = 'https://tinyurl.com/25ayv67w'
avatar3 = 'https://tinyurl.com/4b8cvfhu'
avatar4 = 'https://tinyurl.com/yvew8zt5'
avatar5 = 'https://tinyurl.com/ynycecnk'

users = ["Steffi", "Serena", "Boris", "Pete", "Billie"]
clubs = [club1, club2, club3, club4, club5]
avatar_imgs = [avatar1, avatar2, avatar3, avatar4, avatar5]
status_options = ["pending", "accepted", "rejected", "completed"]

(1..5).each do |i|
    # password = Faker::Internet.password(min_length: 8, max_length: 20)

    user = User.create(
        name: users[i-1],
        avatar_url: avatar_imgs[i-1],
        username: Faker::Internet.username,
        email: "caraerskine@gmail.com",
        password: "12345678",
        password_confirmation: "12345678"
    )

    # club = Club.create(
    #     clubs[i-1],
    # )

    puts "User #{user.id} created!"

    # def random_num_clubs
    #     number = rand(1..5)
    #     return number 
    # end

    # def random_num_users(current)
    #     for _ in 1..5
    #         number = rand(1..5)
    #         return number unless number == current
    #     end
    # end

end

    User.all.each do |user|
        club = Club.all.sample
        receiver = User.where.not(id: user.id).sample

        #  byebug
        (1..5).each do |_|
            if receiver
                current_match = Match.create!(
                    user_id: user.id,
                    club_id: club.id,
                    sender_id: user.id,
                    receiver_id: receiver.id,
                    status: status_options.sample,
                    datetime: Time.at(rand * Time.now.to_i).to_s,
                    phone: Faker::PhoneNumber.cell_phone,
                    skill_level: true
                )

                puts "Match #{current_match.id} created!"
            end
        end
    end

puts "done seeding 🎾!"
