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

require 'test_helper'

class RoomTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
