# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# users
User.create([
  {username: "colin@colinology.com",
   password: "colin123",
   user_profile_attributes: {
     fname: "Colin",
     lname: "Chen"
     }},
  {username: "axe@dota.com",
   password: "axe123",
   user_profile_attributes: {
     fname: "Mogul",
     lname: "Khan"
     }},
  {username: "storm@dota.com",
   password: "storm123",
   user_profile_attributes: {
     fname: "Raijin",
     lname: "Thunderkeg"
     }},
  {username: "sniper@dota.com",
   password: "sniper123",
   user_profile_attributes: {
     fname: "Kardel",
     lname: "Sharpeye"
     }},
  {username: "pudge@dota.com",
   password: "pudge123",
   user_profile_attributes: {
     fname: "Pudge",
     lname: "Butcher"
     }}

  ])

Room.create([
  # airbnb:51557
  {
    host_id: "1",
    title: "Centrally Located Victorian Studio",
    type_id: "1",
    price: "200",
    city: "San Francisco",
    lat: "37.769532",
    lng: "-122.428713",
    primary_pic_id: "1",
    max_guest_num: "2",
    bed_num: "1"
  },
  # airbnb:3667334
  {
    host_id: "1",
    title: "Cherry Nob Hill Studio",
    type_id: "1",
    price: "150",
    city: "San Francisco",
    lat: "37.793859",
    lng: "-122.417614",
    primary_pic_id: "2",
    max_guest_num: "2",
    bed_num: "1"
  },
  # airbnb:8390615
  {
    host_id: "2",
    title: "Central Dorm Queen Bedroom",
    type_id: "2",
    price: "85",
    city: "San Francisco",
    lat: "37.787199",
    lng: "-122.418843",
    primary_pic_id: "3",
    max_guest_num: "2",
    bed_num: "1"
  },
  # airbnb:6993593
  {
    host_id: "3",
    title: "Beautiful San Francisco Ca.",
    type_id: "2",
    price: "142",
    city: "San Francisco",
    lat: "37.803448",
    lng: "-122.410559",
    primary_pic_id: "4",
    max_guest_num: "2",
    bed_num: "1"
  }
  ])

  RoomPic.create([
    {
      room_id: "1",
      pic_url: "/v1450394298/51557_1_qa2o5a.webp"
    },
    {
      room_id: "2",
      pic_url: "/v1450394875/3667334_1_rw56ym.webp"
    },
    {
      room_id: "3",
      pic_url: "/v1450819532/8390615_1_a2mraa.webp"
    },
    {
      room_id: "4",
      pic_url: "/v1450912662/6993593_1_s9xabc.webp"
    }
    ])


Reservation.create([
  {
    room_id: "1",
    requester_id: "2",
    guest_num: "2",
    start_date: "2016-01-01",
    end_date: "2016-01-05",
    status: "1"
  },
  {
    room_id: "1",
    requester_id: "3",
    guest_num: "1",
    start_date: "2016-01-10",
    end_date: "2016-01-15",
    status: "1"
  },
  {
    room_id: "1",
    requester_id: "2",
    guest_num: "1",
    start_date: "2016-02-01",
    end_date: "2016-02-03",
    status: "0"
  }
  ])
