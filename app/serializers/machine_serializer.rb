class MachineSerializer < ActiveModel::Serializer
  attributes :id, :name, :voltage, :output, :input
end
