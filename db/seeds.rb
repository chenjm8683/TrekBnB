# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# users
User.create([
  {username: "colin", password: "colincolin"},
  {username: "jeff", password: "jeffjeff"},
  {username: "jon", password: "jonjon"},
  {username: "max", password: "maxmax"}
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
    lng: "-122.428713"
  },
  # airbnb:3667334
  {
    host_id: "1",
    title: "Cherry Nob Hill Studio",
    type_id: "1",
    price: "150",
    city: "San Francisco",
    lat: "37.793859",
    lng: "-122.417614"
  },
  # airbnb:8390615
  {
    host_id: "2",
    title: "Central Dorm Queen Bedroom",
    type_id: "2",
    price: "85",
    city: "San Francisco",
    lat: "37.787199",
    lng: "-122.418843"
  }
  ])
