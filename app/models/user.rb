class User < ApplicationRecord
    
    has_secure_password

    has_many :ores
    has_many :machines, through: :ores

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    # validates_length_of :password

end
