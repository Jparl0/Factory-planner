class MachineSerializer < ActiveModel::Serializer
  attributes :id, :voltage, :output, :input
end
