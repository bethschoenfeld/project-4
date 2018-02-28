# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Innovator.destroy_all
Event.destroy_all
User.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
end



beth = User.create(
  username: 'Beth',
  email: 'beth@beth.com',
  picture: 'https://i.imgur.com/prnhAfX.jpg'
)
josh = User.create(
  username: 'Josh',
  email: 'josh@josh.com',
  picture: 'https://i.imgur.com/RqrgF2i.jpg'
)
jeremy = User.create(
  username: 'Jeremy',
  email: 'jeremy@jeremy.com',
  picture: 'https://i.imgur.com/IE6zwP4.jpg'
)



dan = Innovator.create(
  job: 'Developer',
  description: "Working on @reactjs. Co-author of Redux and Create React App. Building tools for humans.",
  picture: 'https://i.imgur.com/jYtJxYd.jpg'
)
emma = Innovator.create(
  job: 'Actor and Activist',
  description: "In addition to her extensive acting career, 
  she was appointed as a UN Women Goodwill ambassador 
  and helped launch the UN Women campaign HeForShe, 
  which calls for men to advocate gender equality.",
  picture: 'https://i.imgur.com/jgGIqrV.jpg'
)

bill = Innovator.create(
  job: 'A business magnate, investor, author, philanthropist, and humanitarian.',
  description: "A principal founder of the Microsoft Corporation and the Bill & Melinda
  Gates Foundation, and The Giving People.",
  picture: 'https://i.imgur.com/MQGrzRu.jpg'
)



state_reveal = Event.create(
  user: josh,
  innovator: dan,
  workshop: "State Reveal",
  description: "I've been teasing for the last week about something I've been working on. 
  This is the place to see the lastest tools for React."
)
polio_eradication = Event.create(
  user: beth,
  innovator: bill,
  workshop: "Worldwide Polio Eradication",
  description: "Polio is down to fewer than 3,000 cases a year—a 99 percent reduction in 20 years—but getting rid of the last 1 percent
  is the hardest part of eradicating a disease. We will dive into how we can get that 1 percent."
)
jeremy_and_bill = Event.create(
  user: jeremy,
  innovator: bill,
  oneonone: "Mentorship at it's finest",
  description: "Come ask me those burning 
  questions you have about philanthropy and the history of software"
)
heforshe = Event.create(
  user: beth,
  innovator: emma,
  workshop: "HeforShe",
  description: "The world is at a turning point. People everywhere understand and support the idea 
  of gender equality. They know it’s not just a women’s issue, it’s a human rights issue. And when 
  these powerful voices are heard, they will change the world. The time for that change is now."
)