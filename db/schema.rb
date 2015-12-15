# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151215173404) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "rooms", force: :cascade do |t|
    t.integer  "host_id",    null: false
    t.string   "title",      null: false
    t.integer  "type_id",    null: false
    t.integer  "price",      null: false
    t.string   "city",       null: false
    t.float    "lat",        null: false
    t.float    "lng",        null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "rooms", ["host_id"], name: "index_rooms_on_host_id", using: :btree

  create_table "user_profiles", force: :cascade do |t|
    t.integer  "user_id",      null: false
    t.string   "fname"
    t.string   "lname"
    t.string   "current_city"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "user_profiles", ["user_id"], name: "index_user_profiles_on_user_id", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
