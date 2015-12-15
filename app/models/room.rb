# == Schema Information
#
# Table name: rooms
#
#  id         :integer          not null, primary key
#  host_id    :integer          not null
#  title      :string           not null
#  type_id    :integer          not null
#  price      :integer          not null
#  city       :string           not null
#  lat        :float            not null
#  lng        :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Room < ActiveRecord::Base

  belongs_to :host,
    primary_key: "id",
    foreign_key: "host_id",
    class_name: "User"

  validates :host_id, :title, :type_id, :price, :city, :lat, :lng, presence: true



end
