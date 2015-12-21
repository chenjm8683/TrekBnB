class Reservation < ActiveRecord::Base

  STATUS = {
    0 => "PENDING",
    1 => "CONFIRMED",
    2 => "DENIED",
    3 => "CANCELED BY HOST",
    4 => "CANCELED BY GUEST",
    5 => "NOT AVAILABLE"
  }

  belongs_to :room
  belongs_to :requester,
    foreign_key: :requester_id,
    primary_key: :id,
    class_name: 'User'

  validates :room_id, :requester_id, :guest_num, presence: true
  validate :start_date_before_end_date
  validate :requested_period_available

  after_initialize :assign_pending_status

  def self.unavailable_room_ids(start_date, end_date)
    result = Reservation.where('(start_date < ? AND end_date > ?)',
                              end_date, start_date)
                        .where(status: [1, 5])
    result.map(&:room_id).uniq
  end

  # def self.isAvailable(query_params)
  #
  # end

  def overlapping_requests
    # debugger
    Reservation
    .where("(:id IS NULL) OR (id != :id)", id: self.id)
    .where(room_id: self.room_id)
    .where('(start_date < ? AND end_date > ?)', end_date, start_date)
  end

  def overlapping_unavailable_requests
    overlapping_requests.where(status: 5)
  end

  def overlapping_confirmed_reservations
    overlapping_requests.where(status: 1)
  end

  def overlapping_pending_reservations
    overlapping_requests.where(status: 0)
  end

  def overlapping_unbookable_period
    overlapping_requests.where(status: [1, 5])
  end


  private

  def assign_pending_status
    self.status ||= 0
  end


  def start_date_before_end_date
    return unless start_date && end_date
    errors[:start_date] << "must come before end date" if start_date > end_date
  end

  def requested_period_available
    unless overlapping_unbookable_period.empty?
      errors[:base] << "Requested date is not available"
    end
  end






end
