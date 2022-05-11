class Machine < ApplicationRecord
    has_many :ores
    has_many :users, through: :ores
end
