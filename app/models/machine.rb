class Machine < ApplicationRecord
    has_many :ores, dependent: :destroy
    has_many :users, through: :ores

    validates :name, presence: true
end
