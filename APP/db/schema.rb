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

ActiveRecord::Schema.define(version: 20170215192533) do

  create_table "trivia_answers", force: :cascade do |t|
    t.string   "answer"
    t.integer  "trivia_question_id"
    t.integer  "trivia_game_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  create_table "trivia_games", force: :cascade do |t|
    t.integer  "trivia_question_id"
    t.integer  "trivia_answer_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  create_table "trivia_questions", force: :cascade do |t|
    t.string   "category"
    t.string   "question"
    t.integer  "correct_answer"
    t.integer  "trivia_game_id"
    t.integer  "trivia_answer_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

end
