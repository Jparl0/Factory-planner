# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Ore.destroy_all
 
Machine.destroy_all
User.destroy_all

puts "deleted previous seeds"

billy = User.create(name: "Bill", username: "BillyTheAdult")
frank = User.create(name: "Frank", username: "FrankyFrank")
john = User.create(name: "John", username: "JohnnyDumb")


miner1 = Machine.create(name: "Miner1", voltage: 20, input: 30, output: 15)
assembler = Machine.create(name: "Assembler", voltage: 30, input: 15, output: 5)
miner2 = Machine.create(name: "Miner2", voltage: 20, input: 0, output: 10)



Ore.create(ore_type: "iron", purity: "normal", user_id: billy.id, machine_id: miner1.id)
Ore.create(ore_type: "copper", purity: "normal", user_id: frank.id, machine_id: miner2.id)
Ore.create(ore_type: "iron", purity: "pure", user_id: john.id, machine_id: assembler.id)