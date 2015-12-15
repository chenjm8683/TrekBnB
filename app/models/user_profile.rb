# == Schema Information
#
# Table name: user_profiles
#
#  id           :integer          not null, primary key
#  user_id      :integer          not null
#  fname        :string
#  lname        :string
#  current_city :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class UserProfile < ActiveRecord::Base
  belongs_to :user
end
