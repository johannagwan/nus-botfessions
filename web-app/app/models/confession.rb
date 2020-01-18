class Confession < ApplicationRecord
  validates :confession_body, presence: true
  validates :category, presence: true
end
