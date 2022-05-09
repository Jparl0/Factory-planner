class OreSerializer < ActiveModel::Serializer
  attributes :id, :type, :purity
  has_one :user
  has_one :machine
end
