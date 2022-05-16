# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# dependent model
Ore.destroy_all

# independents
Machine.destroy_all
User.destroy_all

puts "deleted previous seeds"

billy = User.create(name: "Bill", username: "BillyTheAdult", email: "willythekid@yahoo.com", password: "Basketball")
frank = User.create(name: "Frank", username: "FrankyFrank", email: "frankyfrank@yahoo.com", password: "12abc")
john = User.create(name: "John", username: "JohnnyDumb", email: "Jahn@yahoo.com", password: "Password")


miner = Machine.create(name: "Miner", voltage: 20, input: 30, output: 15)
assembler = Machine.create(name: "Assembler", voltage: 30, input: 15, output: 5)
constructor = Machine.create(name: "Constructor", voltage: 20, input: 0, output: 10)



Ore.create(ore_type: "iron", purity: "normal", user_id: billy.id, machine_id: miner.id)
Ore.create(ore_type: "copper", purity: "normal", user_id: frank.id, machine_id: constructor.id)
Ore.create(ore_type: "iron", purity: "pure", user_id: john.id, machine_id: assembler.id)