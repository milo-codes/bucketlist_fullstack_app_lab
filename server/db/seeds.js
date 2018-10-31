use buckets;
db.dropDatabase();

db.wishes.insertMany([
  {
    title: "Burning Man",
    blurb: "Experience Burning Man in style!",
    deadline: "2028-10-31",
    status: false
  },
  {
    title: "San Francisco",
    blurb: "Be in San Fran for longer holiday (if USA still a mess) or live there for half a year (if less of a mess)!",
    deadline: "2028-10-31",
    status: false
  },
  {
    title: "Asia",
    blurb: "Eat My Way Through Asia",
    deadline: "2021-10-31",
    status: false
  },
  {
    title: "Velcro Room",
    blurb: "Have a room in my house with trampoline floors and velcro walls to play in!",
    deadline: "2034-10-31",
    status: false
  },
  {
    title: "Country Life",
    blurb: "Live in a house in the country with pigs and chickens",
    deadline: "2034-10-31",
    status: false
  }
]);
