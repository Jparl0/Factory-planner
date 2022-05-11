class User < ApplicationRecord

    has_many :ores
    has_many :machines, through: :ores

end
