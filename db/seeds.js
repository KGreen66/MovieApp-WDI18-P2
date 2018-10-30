const mongoose = require('./connection')
const Actor = require('../models/Actor')
const Director = require('../models/Director')
const Movie = require('../models/Movie')

const robertDowney = new Actor({
    name: "Robert Downey Jr.",
    bio: "Robert Downey Jr. has evolved into one of the most respected actors in Hollywood. With an amazing list of credits to his name, he has managed to stay new and fresh even after over four decades in the business. Downey was born April 4, 1965 in Manhattan, New York",
    img: "https://i.imgur.com/0gQdQMb.jpg",
    movies: []
})

// const ryanReynolds = new Actor({
//     name: "Ryan Reynolds",
//     bio: "bio goes here",
//     img: "https://i.imgur.com/hHOLnLi.jpg",
//     movies: []
// })

const markRuffalo = new Actor({
    name: "Mark Ruffalo",
    bio: "Mark Ruffalo was born November 22, 1967 in Kenosha, Wisconsin. He took classes at the Stella Adler Conservatory and subsequently co-founded the Orpheus Theatre Company, an Equity-Waiver establishment, where he worked in nearly every capacity. From acting, writing, directing and producing to running the lights and building sets while building his resume. He had his first successes in theatre, before transitioning into film.",
    img: "https://i.imgur.com/cz6iomL.jpg",
    movies: []
})

const chrisEvans = new Actor({
    name: "Chris Evans",
    bio: "Chris Evans was born June 13, 1981 in Boston, Massachusetts. He has an older sister, Carly Evans, and two younger siblings, a brother named Scott Evans, who is also an actor, and a sister named Shana Evans.",
    img: "https://i.imgur.com/JnrITob.jpg",
    movies: []
})

const benedictCumberbatch = new Actor({
    name: "Benedict Cumberbatch",
    bio: "Benedict Timothy Carlton Cumberbatch was born July 19, 1976 and raised in London, England",
    img: "https://i.imgur.com/98c2B6C.jpg",
    movies: []
})

const chrisHemsworth = new Actor({
    name: "Chris Hemsworth",
    bio: "Chris Hemsworth was born August 11, 1983 in Melbourne, Australia. Chris's American representative, management company ROAR, also manages actress Elsa Pataky, and it was through them that the two met, marrying in 2010. The couple have a daughter and twin sons.",
    img: "https://i.imgur.com/zxUiht9.jpg",
    movies: []
})

const scarlettJohannson = new Actor({
    name: "Scarlett Johannson",
    bio: "Scarlett Johansson was born November 22, 1984 in New York City. She has a sister, Vanessa Johansson, who is also an actress, a brother, Adrian, a twin brother, Hunter Johansson, born three minutes after her, and a paternal half-brother, Christian. Her grandfather was writer Ejner Johansson.",
    img: "https://i.imgur.com/ylnGoLb.jpg",
    movies: []
})

const donCheadle = new Actor({
    name: "Don Cheadle",
    bio: "Donald Frank Cheadle was born in Kansas City, Missouri on November 29, 1964. As a child, he moved around a lot with his family.",
    img: "https://i.imgur.com/6bvGXFn.jpg",
    movies: []
})

const tomHiddleston = new Actor({
    name: "Tom Hiddleston",
    bio: "Thomas William Hiddleston was born February 9, 1981 in Westminster, London. He attended the University of Cambridge, where he earned a double first in Classics. He continued to study acting at the Royal Academy of Dramatic Art, from which he graduated in 2005.",
    img: "https://i.imgur.com/CHh9Vc8.jpg",
    movies: []
})

const elizabethOlsen = new Actor({
    name: "Elizabeth Olsen",
    bio: "Elizabeth Chase 'Lizzie' Olsen (born February 16, 1989) is an American actress. She is known for her roles in the films, Silent House (2011), Liberal Arts (2012), Godzilla (2014), Avengers: Age of Ultron (2015) and Captain America: Civil War (2016).",
    img: "https://i.imgur.com/Jhqpf15.jpg",
    movies: []
})

const zoeSaldana = new Actor({
    name: "Zoe Saldana",
    bio: "Zoe Saldana was born on June 19, 1978 in Passaic, New Jersey, to Asalia Nazario and Aridio Saldaña. Her father was Dominican and her mother is Puerto Rican. She was raised in Queens, New York.",
    img: "https://i.imgur.com/DjlVXJA.jpg",
    movies: []
})

const jonFavreau = new Director({
    name: "Jon Favreau",
    bio: "Initially an indie film favorite, actor Jon Favreau has progressed to strong mainstream visibility into the millennium and, after nearly two decades in the business, is still enjoying character stardom as well as earning notice as a writer/producer/director.",
    img: "https://i.imgur.com/77nhUZw.jpg",
    movies: []
})

const jossWhedon = new Director({
    name: "Joss Whedon",
    bio: "Joss Whedon is the middle of five brothers - his younger brothers are Jed Whedon and Zack Whedon. Both his father, Tom Whedon and his grandfather, John Whedon were successful television writers.",
    img: "https://i.imgur.com/CpeXzIy.jpg",
    movies: []
})

const anthonyRusso = new Director({
    name: "Anthony Russo",
    bio: "Anthony Russo was born on February 3, 1970 in Cleveland, Ohio, USA as Anthony J. Russo. He is a producer and director.",
    img: "https://i.imgur.com/ErK4U8R.jpg",
    movies: []
})

const joeRusso = new Director({
    name: "Joe Russo",
    bio: "Joe Russo was born on July 8, 1971 in Cleveland, Ohio, USA as Joseph Vincent Russo. He is a producer and director.",
    img: "https://i.imgur.com/2figsO5.jpg",
    movies: []
})

const jamesGunn = new Director({
    name: "James Gunn",
    bio: "James Gunn was born and raised in St. Louis, Missouri, to Leota and James Francis Gunn. He is from a large Catholic family, with Irish and Czech ancestry. His father and his uncles were all lawyers. He has been writing and performing as long as he can remember. He began making 8mm films at the age of twelve.",
    img: "https://i.imgur.com/HLWtQwX.jpg",
    movies: []
})

// const  = new Director({
//     name: ,
//     bio: "bio goes here",
//     img: ,
//     movies: []
// })

var ironMan = new Movie({
    name: "Iron Man",
    description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    release: "2008",
    img: "https://i.imgur.com/Iow9q1y.jpg",
    rating: 8,
    director: [jonFavreau],
    actors: [robertDowney]
})

var ironManTwo = new Movie({
    name: "Iron Man 2",
    description: "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
    release: "2010",
    img: "https://i.imgur.com/v2Zkf6y.jpg",
    rating: 7.5,
    director: [jonFavreau],
    actors: [robertDowney, donCheadle, scarlettJohannson]
})

var avengers = new Movie({
    name: "The Avengers",
    description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    release: "2012",
    img: "https://i.imgur.com/zqcNmkq.jpg",
    rating: 8.7,
    director: [jossWhedon],
    actors: [chrisEvans, chrisHemsworth, robertDowney, scarlettJohannson, markRuffalo, tomHiddleston]
})

var avengersAoA = new Movie({
    name: "Avengers: Age of Ultron",
    description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    release: "2015",
    img: "https://i.imgur.com/xHc0EH7.jpg",
    rating: 8.3,
    director: [jossWhedon],
    actors: [chrisEvans, robertDowney, markRuffalo, scarlettJohannson, chrisHemsworth, donCheadle, elizabethOlsen]
})

var captainWinterSoldier = new Movie({
    name: "Captain America: The Winter Soldier",
    description: "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
    release: "2014",
    img: "https://i.imgur.com/xVfI1e5.jpg",
    rating: 8.1,
    director: [anthonyRusso, joeRusso],
    actors: [chrisEvans, scarlettJohannson]
})

var captainCivilWar = new Movie({
    name: "Captain America: Civil War",
    description: "Political involvement in the Avengers' activities causes a rift between Captain America and Iron Man.",
    release: "2016",
    img: "https://i.imgur.com/IxT9uch.jpg",
    rating: 8.5,
    director: [anthonyRusso, joeRusso],
    actors: [chrisEvans, robertDowney, donCheadle, elizabethOlsen, scarlettJohannson]
})

var avengersInfinityWar = new Movie({
    name: "Avengers: Infinty War",
    description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    release: "2018",
    img: "https://i.imgur.com/7X08j3f.jpg",
    rating: 9.0,
    director: [anthonyRusso, joeRusso],
    actors: [chrisEvans, chrisHemsworth, zoeSaldana, robertDowney, tomHiddleston, donCheadle, elizabethOlsen, markRuffalo, scarlettJohannson, benedictCumberbatch]
})

var guardians = new Movie({
    name: "Guardians of the Galaxy",
    description: "A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.",
    release: "2014",
    img: "https://i.imgur.com/Tw0VcO6.jpg",
    rating: 8.4,
    director: [jamesGunn],
    actors: [zoeSaldana]
})

var guardiansTwo = new Movie({
    name: "Guardians of the Galaxy Vol. 2",
    description: "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.",
    release: "2017",
    img: "https://i.imgur.com/7iiqLOz.jpg",
    rating: 8.1,
    director: [jamesGunn],
    actors: [zoeSaldana]
})

Director.remove()

Actor.remove()

Movie.remove({})
    .then(() => Director.insertMany([joeRusso, jonFavreau, anthonyRusso, jamesGunn, jossWhedon]))
    .then(() => Actor.insertMany([tomHiddleston, robertDowney, chrisEvans, chrisHemsworth, scarlettJohannson, zoeSaldana, markRuffalo, donCheadle, elizabethOlsen, benedictCumberbatch]))
    .then(() => guardians.save())
    .then(() => guardiansTwo.save())
    .then(() => avengersInfinityWar.save())
    .then(() => avengers.save())
    .then(() => avengersAoA.save())
    .then(() => captainWinterSoldier.save())
    .then(() => captainCivilWar.save())
    .then(() => ironMan.save())
    .then(() => ironManTwo.save())
    .then(() => console.log("Database seeded successfully"))
    .then(() => mongoose.connection.close())