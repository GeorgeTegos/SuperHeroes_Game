use trump_cards
db.dropDatabase();

db.cards.insertMany([{
    name: "Ironman",
    powerstats: {
    intelligence: "100",
    strength: "85",
    speed: "58",
    durability: "85",
    power: "100",
    combat: "64"
    },
    image: {
    url: "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg"
    }
    },
{
    name: "Batman",
    powerstats: {
    intelligence: "100",
    strength: "26",
    speed: "27",
    durability: "50",
    power: "47",
    combat: "100"
    },
    image: {
    url: "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
    }
    },
{
    name: "Superman",
    powerstats: {
    intelligence: "94",
    strength: "100",
    speed: "100",
    durability: "100",
    power: "100",
    combat: "85"
    },image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
        }
    },
{

    name: "Spider-Man",
    powerstats: {
    intelligence: "90",
    strength: "58",
    speed: "55",
    durability: "60",
    power: "40",
    combat: "90"
    },
    image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/10647.jpg"
        }
    }
]
)