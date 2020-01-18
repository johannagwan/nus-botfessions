class Confession < ApplicationRecord
  validates :body, presence: true
  validates :category, presence: true
end
