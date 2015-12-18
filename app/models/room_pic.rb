class RoomPic < ActiveRecord::Base
  validates :room_id, :pic_url, presence: true

  belongs_to :room
end
