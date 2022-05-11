class OreSerializer < ActiveModel::Serializer
  attributes :id, :ore_type, :purity
  has_one :user
  has_one :machine
end
