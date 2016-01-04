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
     lname: "Chen",
     phone: "830-444-0724",
     profile_pic_url: "/v1451666932/colin_metz32.jpg"
     }},
  {username: "axe@dota.com",
   password: "axe123",
   user_profile_attributes: {
     fname: "Mogul",
     lname: "Khan",
     phone: "202-555-0136",
     profile_pic_url: "/v1451931390/axe_sq_gg7f2e.png"
     }},
  {username: "storm@dota.com",
   password: "storm123",
   user_profile_attributes: {
     fname: "Raijin",
     lname: "Thunderkeg",
     phone: "717-555-0165",
     profile_pic_url: "/v1451931390/storm_spirit_sq_elprve.png"
     }},
  {username: "sniper@dota.com",
   password: "sniper123",
   user_profile_attributes: {
     fname: "Kardel",
     lname: "Sharpeye",
     phone: "467-555-8925",
     profile_pic_url: "/v1451931390/sniper_sq_dfmah2.png"
     }},
  {username: "pudge@dota.com",
   password: "pudge123",
   user_profile_attributes: {
     fname: "Pudge",
     lname: "Butcher",
     phone: "410-555-0195",
     profile_pic_url: "/v1451931389/pudge_sq_pfozal.png"
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
    bed_num: "1",
    description: "A centrally-located classic San Francisco Victorian apartment. All major transit lines cross within 2 blocks of the apartment. Great neighborhood for shopping, small cafes and restaurants. Perfect for corporate or longer term stays. Welcome. Colin"
  },
  # airbnb:3667334
  {
    host_id: "3",
    title: "Cherry Nob Hill Studio",
    type_id: "1",
    price: "150",
    city: "San Francisco",
    lat: "37.793859",
    lng: "-122.417614",
    primary_pic_id: "2",
    max_guest_num: "2",
    bed_num: "1",
    description: "Atop the centrally located and beautiful Nob Hill, this studio is a welcoming spot for your San Francisco experience. You may stay steps away from Grace Cathedral, Union Square, Chinatown, Polk Gulch and even Fisherman's Wharf."
  },
  # airbnb:8390615
  {
    host_id: "3",
    title: "Central Dorm Queen Bedroom",
    type_id: "2",
    price: "85",
    city: "San Francisco",
    lat: "37.787199",
    lng: "-122.418843",
    primary_pic_id: "3",
    max_guest_num: "2",
    bed_num: "1",
    description: "Hi! This is a very cozy and in the perfect central location to access just about everything you can imagine within walking distance. The location offers boutiques, bomb breakfast spots, sweet cafes and wicked views."
  },
  # airbnb:6993593
  {
    host_id: "4",
    title: "Beautiful San Francisco Ca.",
    type_id: "2",
    price: "142",
    city: "San Francisco",
    lat: "37.803448",
    lng: "-122.410559",
    primary_pic_id: "4",
    max_guest_num: "2",
    bed_num: "1",
    description: "Beautiful 3br flat built in 1904. Come & stay experience the craftsmanship detail that isn't seen in today's home. Plus you go up to a fully furnished rooftop Get the best view of the Golden Gate Bridge coffee then wine in the evening You will love it"
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
    },
    {
      room_id: "4",
      pic_url: "/v1451892754/6993593_2_hh9ydm.png"
    },
    {
      room_id: "4",
      pic_url: "/v1451892754/6993593_3_bbcu5n.png"
    },
    {
      room_id: "4",
      pic_url: "/v1451892754/6993593_4_ee1xfp.png"
    },
    {
      room_id: "4",
      pic_url: "/v1451892754/6993593_5_piwzhf.png"
    }
    ])


Reservation.create([
  {
    room_id: "4",
    requester_id: "1",
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
    room_id: "3",
    requester_id: "2",
    guest_num: "1",
    start_date: "2016-02-01",
    end_date: "2016-02-03",
    status: "0"
  }
  ])
