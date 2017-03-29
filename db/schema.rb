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

ActiveRecord::Schema.define(version: 20170313220344) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "dares", force: :cascade do |t|
    t.string   "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "never_have_i_evers", force: :cascade do |t|
    t.string   "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "trivia_answers", force: :cascade do |t|
    t.string   "answer"
    t.integer  "trivia_question_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  create_table "trivia_questions", force: :cascade do |t|
    t.string   "category"
    t.string   "question"
    t.integer  "trivia_answer_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  create_table "truths", force: :cascade do |t|
    t.string   "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "would_u_rathers", force: :cascade do |t|
    t.string   "choice1"
    t.string   "choice2"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
