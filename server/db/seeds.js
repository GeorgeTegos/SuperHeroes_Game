use trump_cards
db.dropDatabase();

db.cards.insertMany([
    {
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
      },
      universe: "Marvel"
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
      },
      universe: "DC"
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
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
      },
      universe: "DC"
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
      },
      universe: "Marvel"
    },
    {
      name: "Hawkeye",
      powerstats: {
        intelligence: "56",
        strength: "12",
        speed: "21",
        durability: "10",
        power: "29",
        combat: "80"
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/73.jpg"
      },
      universe: "Marvel"
    },
    {
      name: "Black Widow",
      powerstats: {
        intelligence: "75",
        strength: "13",
        speed: "33",
        durability: "30",
        power: "36",
        combat: "100"
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/248.jpg"
      },
      universe: "Marvel"
    },
    {
      name: "Captain America",
      powerstats: {
        intelligence: "69",
        strength: "19",
        speed: "38",
        durability: "55",
        power: "60",
        combat: "100"
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/274.jpg"
      },
      universe: "Marvel"
    },
    {
      name: "Hulk",
      powerstats: {
        intelligence: "88",
        strength: "100",
        speed: "63",
        durability: "100",
        power: "98",
        combat: "85"
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg"
      },
      universe: "Marvel"
    },
    {
      name: "She-Hulk",
      powerstats: {
        intelligence: "81",
        strength: "100",
        speed: "42",
        durability: "100",
        power: "40",
        combat: "70"
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/125.jpg"
      },
      universe: "Marvel"
    },
    {
      name: "Thor",
      powerstats: {
        intelligence: "69",
        strength: "100",
        speed: "83",
        durability: "100",
        power: "100",
        combat: "100"
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/140.jpg"
      },
      universe: "Marvel"
    },
    {
      name: "Thanos",
      powerstats: {
        intelligence: "100",
        strength: "100",
        speed: "33",
        durability: "100",
        power: "100",
        combat: "80"
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg"
      },
      universe: "Marvel"
    },
    {
      name: "Black Panther",
      powerstats: {
        intelligence: "88",
        strength: "16",
        speed: "30",
        durability: "60",
        power: "41",
        combat: "100"
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/247.jpg"
      },
      universe: "Marvel"
    },
    {
      name: "Wonder Woman",
      powerstats: {
        intelligence: "88",
        strength: "100",
        speed: "79",
        durability: "100",
        power: "100",
        combat: "100"
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/807.jpg"
      },
      universe: "DC"
    },
    {
      name: "Flash",
      powerstats: {
        intelligence: "63",
        strength: "10",
        speed: "100",
        durability: "32",
        power: "100",
        combat: "48"
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/893.jpg"
      },
      universe: "DC"
    },
    {
      name: "Green Arrow",
      powerstats: {
        intelligence: "81",
        strength: "12",
        speed: "35",
        durability: "28",
        power: "39",
        combat: "90"
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/696.jpg"
      },
      universe: "DC"
    },
    {
      name: "Supergirl",
      powerstats: {
        intelligence: "94",
        strength: "100",
        speed: "100",
        durability: "100",
        power: "100",
        combat: "75"
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/790.jpg"
      },
      universe: "DC"
    },
    {
      name: "Cyborg",
      powerstats: {
        intelligence: "75",
        strength: "53",
        speed: "42",
        durability: "85",
        power: "71",
        combat: "64"
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/1204.jpg"
      },
      universe: "DC"
    },
    {
      name: "Aquaman",
      powerstats: {
        intelligence: "81",
        strength: "85",
        speed: "79",
        durability: "80",
        power: "100",
        combat: "80"
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/634.jpg"
      },
      universe: "DC"
    },
    {
      name: "Joker",
      powerstats: {
        intelligence: "100",
        strength: "10",
        speed: "12",
        durability: "60",
        power: "43",
        combat: "70"
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/719.jpg"
      },
      universe: "DC"
    },
    {
      name: "Punisher",
      powerstats: {
        intelligence: "69",
        strength: "16",
        speed: "21",
        durability: "45",
        power: "42",
        combat: "100"
      },
      image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/112.jpg"
      },
      universe: "DC"
    }
  ]
  )
  