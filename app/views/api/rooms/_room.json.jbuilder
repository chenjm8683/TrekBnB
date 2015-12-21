json.id                       room.id
json.host_fname               room.host_profile.fname
json.type_id                  room.type_id
json.type_string              Room::ROOM_TYPE[room.type_id]
json.price                    room.price
json.max_guest_num            room.max_guest_num
json.bed_num                  room.bed_num
json.lat                      room.lat
json.lng                      room.lng
json.primary_pic_id           room.primary_pic_id
json.primary_pic_url          room.primary_pic.pic_url

json.room_pics do
  json.array! room.room_pics, partial: 'api/rooms/pic', as: :pic
end
