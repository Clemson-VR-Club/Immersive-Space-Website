var currentSort = 'temp';

//sort "data" alphabetically
function alhpabetSort(data) {
  data.sort(function (a, b) {
      return a.name.localeCompare(b.name);
  });
}

//reset the page
function deleteElements() {
  var e = document.getElementById('libArray'); 
  var first = e.firstElementChild; 
  while (first) { 
      first.remove(); 
      first = e.firstElementChild; 
  } 
} 

//Make HTML
function genreSort(sortType) {
  data = [
    {
        name: "Beat Saber",
        img: "../assets/images/games/beatsaber.jpg",
        genre: "Rhythm",
        tempdes: "short tempdes",
        description: "Beat Saber is an immersive rhythm experience you have never seen before! Enjoy tons of handcrafted levels and swing your way through the pulsing music beats, surrounded by a futuristic world.",
        rating: 5,
        popularity: 10,
        releaseDate: "05/01/18",
        internPick: true,
        alphabet: "B"

    },
    {
        name: "Budget Cuts",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/400940/header.jpg?t=1576488675",
        genre: "Action/Adventure",
        tempdes: "temp",
        description: "You are an employee at mega conglomerate TransCorp to stamp papers and file files! Unfortunately TransCorp is an expert in the business of manufacturing cost-cutting robots, and soon your job will be in danger.",
        rating: 3.5,
        popularity: 10,
        releaseDate: "06/14/18",
        internPick: false,
        alphabet: "B"
    },
    {
        name: "Cartoon Network Journeys VR",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/1063530/header.jpg?t=1570146996",
        genre: "Action/Adventure",
        tempdes: "temp",
        description: "Cartoon Network Journeys VR is a collection of three original VR experiences that give short glimpses into other worlds. Save your colony from collapse as a one-winged bee. Entertain the King and his subjects as jesters of the court. Complete metaphysical lessons to become Supreme Deity of the Cosmos.",
        rating: 4,
        popularity: 10,
        releaseDate: "10/01/19",
        internPick: false,
        alphabet: "C"
    },
    {
        name: "Dreames of Dali",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/591360/header.jpg?t=1519064857",
        genre: "Action/Adventure",
        tempdes: "temp",
        description: "Immerse yourself in the world of the Surrealist master like never before in this encounter, venturing into the towers, peering from them to distant lands and discovering surprises around every corner.",
        rating: 4.5,
        popularity: 0,
        releaseDate: "02/09/18",
        internPick: false,
        alphabet: "D"

    },
    {
        name: "Home - A VR Spacewalk",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/512270/header.jpg?t=1536743556",
        genre: "Action/Adventure",
        tempdes: "temp",
        description: "Home puts you at the center of the story, taking you on an emotional and personal journey while delivering beautiful, heart-stopping, and memorable moments.",
        rating: 3.5,
        popularity: 0,
        releaseDate: "11/30/17",
        internPick: false,
        alphabet: "H"

    },
    {
        name: "Job Simulator",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/448280/header.jpg?t=1568763127",
        genre: "Action/Adventure",
        tempdes: "temp",
        description: "In a world where robots have replaced all human jobs, step into the 'Job Simulator' to learn what it was like 'to job",
        rating: 0,
        popularity: 0,
        releaseDate: "04/05/16",
        internPick: false,
        alphabet: "J"

    },
    {
        name: "Lume",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/105100/header.jpg?t=1447354205",
        genre: "Action/Adventure",
        tempdes: "temp",
        description: "With a set built entirely out of paper and cardboard, and sumptuously filmed, Lume is a game with a style unlike any other.",
        rating: 0,
        popularity: 0,
        releaseDate: "05/09/11",
        internPick: false,
        alphabet: "L"

    },
    {
        name: "Rick and Morty: Virtual Rick-ality",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/469610/header.jpg?t=1580412692",
        genre: "Action/Adventure",
        tempdes: "temp",
        description: "Rick and Morty: Virtual Rick-ality smashes together the absolute VR chaos of the award-winning Job Simulator with the ridiculous, all-out, take-no-prisoners comedy of Rick and Morty.",
        rating: 0,
        popularity: 0,
        releaseDate: "04/20/17",
        internPick: false,
        alphabet: "R"

    },
    {
        name: "RoboRecall",
        img: "data:image/jpeg;base64,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",
        genre: "Action/Adventure",
        tempdes: "temp",
        description: "Robo Recall is a virtual reality first-person shooter game developed and published by Epic Games for Oculus Rift and Oculus Quest platforms. The game was released for the Oculus Rift on March 1, 2017, and an Oculus Quest version titled Robo Recall",
        rating: 4.7,
        popularity: 0,
        releaseDate: "03/1/17",
        internPick: false,
        alphabet: "R"

    },
    {
        name: "Sprint Vector",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/590690/header.jpg?t=1565043590",
        genre: "Action/Adventure",
        tempdes: "temp",
        description: "Welcome to Sprint Vector Championship Intergalactica, where the physical thrill of extreme sports meets the unhinged energy of a zany game show! Run, jump, climb, drift, and fly at extreme velocity as you race up to 8 players and battle obstacles in this frenetic VR adrenaline platformer!",
        rating: 0,
        popularity: 0,
        releaseDate: "02/08/18",
        internPick: false,
        alphabet: "S"

    },
    {
        name: "SUPERHOT VR",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/617830/header.jpg?t=1575461705",
        genre: "Action/Adventure",
        tempdes: "temp",
        description: "Lose track of what’s real. Commit yourself, body and mind. Confront the evocative, elegantly brutal world of SUPERHOT VR.",
        rating: 0,
        popularity: 0,
        releaseDate: "05/25/17",
        internPick: false,
        alphabet: "S"

    },
    {
        name: "The Lab",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/450390/header.jpg?t=1567099772",
        genre: "Action/Adventure",
        tempdes: "temp",
        description: "Welcome to The Lab, a compilation of Valve’s room-scale VR experiments set in a pocket universe within Aperture Science. Fix a robot, defend a castle, adopt a mechanical dog, and more. Still not sold? It’s free!",
        rating: 0,
        popularity: 0,
        releaseDate: "04/05/16",
        internPick: false,
        alphabet: "T"

    },
    {
        name: "To The Top",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/509250/header.jpg?t=1569022917",
        genre: "Action/Adventure",
        tempdes: "temp",
        description: "VR Platforming Game, that gives you the freedom to move across the environment with superhuman abilities. Conquer over 35 levels with new obstacles and challenges. Compete for the fastest times or explore the environment. Experience the freedom of movement.",
        rating: 0,
        popularity: 0,
        releaseDate: "05/18/17",
        internPick: false,
        alphabet: "T"

    },
    {
        name: "Virtual Virtual Reality",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/889480/header.jpg?t=1536643136",
        genre: "Action/Adventure",
        tempdes: "temp",
        description: "A game about VR, AI, and our collective sci-fi fever dreams. V-VR is a narrative-driven comedy-adventure game about VR and AI. In a future where AI has transformed society, can humans still find purpose? Find out with Activitude, a service that lets humans aid AI clients in increasingly curious ways.",
        rating: 0,
        popularity: 0,
        releaseDate: "03/09/17",
        internPick: false,
        alphabet: "V"

    },
    {
        name: "Welcome to the Light Fields",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/771310/header.jpg?t=1521239824",
        genre: "Action/Adventure",
        tempdes: "temp",
        description: "Welcome to Light Fields. Experience real-world reflections, depth, and translucence like never before in VR. Explore the Gamble House, Mosaic Tile House, and the Space Shuttle Discovery.",
        rating: 0,
        popularity: 0,
        releaseDate: "03/14/18",
        internPick: false,
        alphabet: "W"

    },
    {
        name: "Windlands 2",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/458580/header.jpg?t=1567716367",
        genre: "Action/Adventure",
        tempdes: "temp",
        description: "A first person grappling hook exploration game. Return to the world of Windlands, alone or with friends. Armed with grappling hooks and a bow, soar through the ruins of a fallen world. Embark on a journey to destroy the gigantic titans and save the world from an ancient danger.",
        rating: 0,
        popularity: 0,
        releaseDate: "11/15/18",
        internPick: false,
        alphabet: "W"

    },
    {
        name: "Blender",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/365670/header.jpg?t=1575645001",
        genre: "Art/Modeling",
        tempdes: "temp",
        description: "Is a free and open source 3D creation suite",
        rating: 0,
        popularity: 0,
        releaseDate: "01/02/94",
        internPick: false,
        alphabet: "B"

    },
    {
        name: "Blocks",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/533970/header.jpg?t=1507251190",
        genre: "Art/Modeling",
        tempdes: "temp",
        description: "Allows you to easily create 3D objects in virtual reality, no matter your modelling",
        rating: 0,
        popularity: 0,
        releaseDate: "07/06/17",
        internPick: false,
        alphabet: "B"

    },
    {
        name: "DatavizVR",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/551960/header.jpg?t=1481428026",
        genre: "Art/Modeling",
        tempdes: "temp",
        description: "Who says data visualization has to be boring? Have you ever wanted to see your data in real 3D? Imagine going inside your data and viewing it from any angle, manipulating any aspect of your data visualization with simple hand gestures. Now you can.experience",
        rating: 0,
        popularity: 0,
        releaseDate: "12/05/16",
        internPick: false,
        alphabet: "D"

    },
    {
        name: "Fuse",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/257400/header.jpg?t=1500597301",
        genre: "Art/Modeling",
        tempdes: "temp",
        description: "Fuse is a standalone 3D character creator that enables you to make unique characters to use in your game",
        rating: 0,
        popularity: 0,
        releaseDate: "11/03/13",
        internPick: false,
        alphabet: "F"

    },
    {
        name: "Kingspray Graffiti",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/471660/header.jpg?t=1518090345",
        genre: "Art/Modeling",
        tempdes: "temp",
        description: "Hanging out with friends, bombing walls, and smashing bottles would be much more fun without the jail time.",
        rating: 0,
        popularity: 0,
        releaseDate: "12/06/16",
        internPick: false,
        alphabet: "K"

    },
    {
        name: "LIV",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/755540/header.jpg?t=1579619805",
        genre: "Art/Modeling",
        tempdes: "temp",
        description: "LIV is the leading mixed reality software to capture yourself, or your favorite avatar, in VR.",
        rating: 0,
        popularity: 0,
        releaseDate: "08/12/19",
        internPick: false,
        alphabet: "L"

    },
    {
        name: "MakeVR Pro",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/569180/header.jpg?t=1504049735",
        genre: "Art/Modeling",
        tempdes: "temp",
        description: "MakeVR Pro is a virtual reality based 3D modeling application, for free-form and precision modeling, built on a professional CAD engine with a natural and intuitive 3D Multi-Touch user interface. Every model created in MakeVR can be easily 3D printed or imported into a game engine.",
        rating: 0,
        popularity: 0,
        releaseDate: "08/29/17",
        internPick: false,
        alphabet: "M"

    },
    {
        name: "STYLY",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/693990/header.jpg?t=1564647150",
        genre: "Art/Modeling",
        tempdes: "temp",
        description: "Free your inner world- The world of expression will transform from the conventional two-dimensional space to an even richer three-dimensional space which connects us to the real world. STYLY is the VR creative platform for “Ultra Experience” created by artists all over the world.",
        rating: 0,
        popularity: 0,
        releaseDate: "08/15/17",
        internPick: false,
        alphabet: "S"

    },
    {
        name: "SYMMETRY alpha",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/585340/header.jpg?t=1569906225",
        genre: "Art/Modeling",
        tempdes: "temp",
        description: "SYMMETRY is a VR software tool for professionals in architecture, engineering, and construction.",
        rating: 0,
        popularity: 0,
        releaseDate: "02/12/17",
        internPick: false,
        alphabet: "S"

    },
    {
        name: "The Night Cafe",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/482390/header.jpg?t=1471283190",
        genre: "Art/Modeling",
        tempdes: "temp",
        description: "The Night Cafe is an environment that allows you to explore the world of Vincent van Gogh first hand. Take a moment to enjoy his iconic sunflowers in 3 dimensions or walk around the chair he painted in his bedroom to see it from another angle. Step into the vivid colors straight from his palette",
        rating: 0,
        popularity: 0,
        releaseDate: "06/03/16",
        internPick: false,
        alphabet: "T"

    },
    {
        name: "Tilt Brush",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/327140/header.jpg?t=1560985959",
        genre: "Art/Modeling",
        tempdes: "temp",
        description: "Tilt Brush lets you paint in 3D space with virtual reality. Unleash your creativity with three-dimensional brush strokes, stars, light, and even fire. Your room is your canvas. Your palette is your imagination. The possibilities are endless.",
        rating: 0,
        popularity: 0,
        releaseDate: "04/05/16",
        internPick: false,
        alphabet: "T"

    },
    {
        name: "VRChat",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/438100/header.jpg?t=1572297103",
        genre: "Art/Modeling",
        tempdes: "temp",
        description: "VRChat offers an endless collection of social VR experiences by giving the power of creation to its community. Whether you're looking for new VR experiences or have an idea of your own, VRChat is the place to be.",
        rating: 0,
        popularity: 0,
        releaseDate: "02/01/17",
        internPick: false,
        alphabet: "V"

    },
    {
        name: "ENGAGE",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/449130/header.jpg?t=1574848333",
        genre: "Education",
        tempdes: "temp",
        description: "ENGAGE is a education and training platform that seeks to transform how people share ideas and teach lessons to each other globally by harnessing the power of virtual reality technologies",
        rating: 0,
        popularity: 0,
        releaseDate: "03/15/16",
        internPick: false,
        alphabet: "E"

    },
    {
        name: "Google Earth VR",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/348250/header.jpg?t=1508799201",
        genre: "Education",
        tempdes: "temp",
        description: "Google Earth VR lets you explore the world from totally new perspectives in virtual reality.",
        rating: 0,
        popularity: 0,
        releaseDate: "11/16/16",
        internPick: false,
        alphabet: "G"

    },
    {
        name: "InCell VR",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/396030/header.jpg?t=1570707249",
        genre: "Education",
        tempdes: "temp",
        description: "InCell is an action/racing VR game with a bit of strategy and science thrown into the mix. You'll take an exciting journey inside the highly unusual micro world of human cell and stop the virus advance",
        rating: 0,
        popularity: 0,
        releaseDate: "09/03/15",
        internPick: false,
        alphabet: "I"

    },
    {
        name: "Medicalholodeck Free: The Real Human Anatomy",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/754010/header.jpg?t=1563352669",
        genre: "Education",
        tempdes: "temp",
        description: "Work and collaborate on 3D medical Data in real 3D Virtual Space. Medicalholodeck is the medical Platform for Virtual Reality (VR). Surgeons use it to prepare their upcoming surgeries, professors to teach human anatomy and radiology and students to study",
        rating: 0,
        popularity: 0,
        releaseDate: "10/31/17",
        internPick: false,
        alphabet: "M"

    },
    {
        name: "Nanome",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/493430/header.jpg?t=1583360702",
        genre: "Education",
        tempdes: "temp",
        description: " Manipulate chemicals and proteins with your hands, explore chemistry and nanotechnology from a whole new perspective, collaborate with others, learn and create like never before",
        rating: 0,
        popularity: 0,
        releaseDate: "09/29/18",
        internPick: false,
        alphabet: "N"

    },
    {
        name: "Organon VR Anatomy",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/583620/header.jpg?t=1562202688",
        genre: "Education",
        tempdes: "temp",
        description: "3D Organon VR Anatomy is the world’s first fully-featured virtual reality anatomy atlas. Learn human anatomy with over 4,000 realistic anatomical models/structures sided with quality text tempdess per body structure.",
        rating: 0,
        popularity: 0,
        releaseDate: "06/21/17",
        internPick: false,
        alphabet: "O"

    },
    {
        name: "Sharecare VR",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/730360/header.jpg?t=1556895670",
        genre: "Education",
        tempdes: "temp",
        description: "Sharecare VR is a real-time simulation of the human body. Sharecare VR allows anyone to freely navigate and explore an anatomically accurate 3D model of the human body, its organs, and their natural function.",
        rating: 0,
        popularity: 0,
        releaseDate: "10/1/17",
        internPick: false,
        alphabet: "S"

    },
    {
        name: "Speech Trainer",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/552770/header.jpg?t=1478864303",
        genre: "Education",
        tempdes: "temp",
        description: "Speech Trainer is a virtual auditorium where you can learn to overcome your fear of public speaking by addressing a virtual audience.",
        rating: 0,
        popularity: 0,
        releaseDate: "11/11/16",
        internPick: false,
        alphabet: "S"

    },
    {
        name: "Surgeon Simulator VR: Meet The Medic",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/457420/header.jpg?t=1568755866",
        genre: "Education",
        tempdes: "temp",
        description: "Surgeon Simulator VR: Meet the Medic – be the Medic and operate on the Heavy in this free and exclusive teaser for the HTC Vive!",
        rating: 0,
        popularity: 0,
        releaseDate: "04/05/16",
        internPick: false,
        alphabet: "S"

    },
    {
        name: "The Body VR: Journey Inside a Cell",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/451980/header.jpg?t=1484037241",
        genre: "Education",
        tempdes: "temp",
        description: "The Body VR: Journey Inside a Cell is an educational virtual reality experience that takes the user inside the human body.",
        rating: 0,
        popularity: 0,
        releaseDate: "10/03/16",
        internPick: false,
        alphabet: "T"

    },
    {
        name: "Wraith VR Total Knee Replacement Surgery Simulation",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/1136210/header.jpg?t=1569944691",
        genre: "Education",
        tempdes: "temp",
        description: "Practice a total knee replacement surgery in Wraith VR, a revolutionary new virtual reality simulation platform.",
        rating: 0,
        popularity: 0,
        releaseDate: "10/01/19",
        internPick: false,
        alphabet: "W"

    },

    {
        name: "A Chair in a Room: Greenwater",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/427760/header.jpg?t=1569944887",
        genre: "Horror",
        tempdes: "temp",
        description: "It’s a multi-hour trek through some truly terrifying settings and spine-tingling moments – but a deep sense of sadness and fear as well.",
        rating: 0,
        popularity: 0,
        releaseDate: "04/05/16",
        internPick: false,
        alphabet: "A"

    },
    {
        name: "Alpha Lotus VR",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/746280/header.jpg?t=1512138537",
        genre: "Horror",
        tempdes: "temp",
        description: "This is a horror wave based shooter where you can fight through various waves using both melee weapons and guns.",
        rating: 0,
        popularity: 0,
        releaseDate: "11/27/17",
        internPick: false,
        alphabet: "A"

    },
    {
        name: "Emily Wants To Play",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/416590/header.jpg?t=1521916639",
        genre: "Horror",
        tempdes: "temp",
        description: "It’s 11pm and the last house on your route. The windows are boarded up, the yard is overgrown, but the lights are on and the front door is open… strange place to deliver a pizza. You’re getting soaked from the rain, so you hesitantly step inside the house. You shouldn’t have done that",
        rating: 0,
        popularity: 0,
        releaseDate: "12/10/15",
        internPick: false,
        alphabet: "E"

    },
    {
        name: "FIVE NIGHTS AT FREDDY'S: HELP WANTED ",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/732690/header.jpg?t=1578722005",
        genre: "Horror",
        tempdes: "temp",
        description: "Five Nights at Freddy’s: Help Wanted is a collection of classic and original mini-games set in the Five Nights universe.",
        rating: 0,
        popularity: 0,
        releaseDate: "05/28/19",
        internPick: false,
        alphabet: "F"

    },
    {
        name: "Acron: Attack of the Squirrels",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/1094870/header.jpg?t=1576070146",
        genre: "Mulitplayer",
        tempdes: "temp",
        description: "A game that’s at its best when played as a couch party game with a group of friends, Acron: Attack of the Squirrels! is both competitive and cooperative in nature and brings together players across VR and mobile devices.",
        rating: 0,
        popularity: 0,
        releaseDate: "08/29/19",
        internPick: false,
        alphabet: "A"

    },
    {
        name: "Late For Work",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/623540/header.jpg?t=1573949850",
        genre: "Mulitplayer",
        tempdes: "temp",
        description: "Number Hunt is a fast-paced VR math shooter perfect for all ages. Have loads of fun, and battle it out with 4 other players to prove that your brain reigns supreme! Improve your math skills while you play!",
        rating: 0,
        popularity: 0,
        releaseDate: "07/12/17",
        internPick: false,
        alphabet: "L"

    },{
        name: "Number Hunt",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/851770/header.jpg?t=1551149215",
        genre: "Mulitplayer",
        tempdes: "temp",
        description: "Number Hunt is a fast-paced VR math shooter perfect for all ages. Have loads of fun, and battle it out with 4 other players to prove that your brain reigns supreme! Improve your math skills while you play!",
        rating: 0,
        popularity: 0,
        releaseDate: "12/21/18",
        internPick: false,
        alphabet: "N"

    },{
        name: "Rec Room",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/471710/header.jpg?t=1570581759",
        genre: "Mulitplayer",
        tempdes: "temp",
        description: "Rec Room is the best place to hang out with friends from all around the world! Play multiplayer games like Paintball, or just chill in the park. Discover thousands of player-created rooms, with new ones added daily. Or build your own rooms with friends. It's cross platform and free, so come and join the fun!",
        rating: 0,
        popularity: 0,
        releaseDate: "06/01/16",
        internPick: false,
        alphabet: "R"

    },{
        name: "Star Trek: Bridge Crew",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/527100/header.jpg?t=1524671484",
        genre: "Mulitplayer",
        tempdes: "temp",
        description: "Star Trek™: Bridge Crew, playable in both VR and non-VR, will immerse you in the Star Trek universe. In co-op, form a crew of four players to serve in the roles of Captain, Helm, Tactical or Engineer. Make strategic decisions and coordinate actions with your crew.",
        rating: 0,
        popularity: 0,
        releaseDate: "05/30/17",
        internPick: false,
        alphabet: "S"

    },{
        name: "Unturned",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/304930/header.jpg?t=1574111069",
        genre: "Mulitplayer",
        tempdes: "temp",
        description: "You're a survivor in the zombie infested ruins of society, and must work with your friends and forge alliances to remain among the living.",
        rating: 0,
        popularity: 0,
        releaseDate: "07/07/17",
        internPick: false,
        alphabet: "U"

    },
    {
        name: "Wacktory",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/1082750/header.jpg?t=1568930513",
        genre: "Mulitplayer",
        tempdes: "temp",
        description: "Best In Show - VR + Couch Co-op title. Over 6 months in our senior year, a team of 12 undergraduates took Wacktory from initial concepts to a full playable demo",
        rating: 0,
        popularity: 0,
        releaseDate: "09/13/19",
        internPick: false,
        alphabet: "W"

    },{
        name: "Wands",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/741400/header.jpg?t=1581525756",
        genre: "Mulitplayer",
        tempdes: "temp",
        description: "WANDS is a first-person VR experience that offers fast-paced magic duels against other players online.",
        rating: 0,
        popularity: 0,
        releaseDate: "09/18/16",
        internPick: false,
        alphabet: "W"

    },
    {
        name: "Carly and the Reaperman",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/547480/header.jpg?t=1579769907",
        genre: "Puzzle",
        tempdes: "temp",
        description: "Master platforming, solve puzzles and build your way to victory. This asymmetrical game let's the giant Reaperman pick up platforms, and the little girl Carly jumps on top of the platforms that the Reaperman places.",
        rating: 0,
        popularity: 0,
        releaseDate: "06/19/18",
        internPick: false,
        alphabet: "C"

    },
    {
        name: "Accounting",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/518580/header.jpg?t=1540209057",
        genre: "Role Playing",
        tempdes: "temp",
        description: "The modern field of Accountancy is a serious and honorable profession. Many human beings have spent their lives toiling over the hard science of numbers. Inception virtual reality dives",
        rating: 0,
        popularity: 0,
        releaseDate: "10/18/16",
        internPick: false,
        alphabet: "A"

    },
    {
        name: "I Expect You To Die",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/587430/header.jpg?t=1585195414",
        genre: "Role Playing",
        tempdes: "temp",
        description: "Play as a secret agent armed with telekinetic abilities on a mission to stop Zoraxis, a nefarious global weapons and pharmaceutical corporation.",
        rating: 0,
        popularity: 0,
        releaseDate: "04/25/17",
        internPick: false,
        alphabet: "I"

    }, 
    {
        name: "Marshmallow Melee",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/705100/header.jpg?t=1507273786",
        genre: "Role Playing",
        tempdes: "temp",
        description: "Marshmallow Melee is a VR rogue-lite dungeon crawler with toy-sized warriors. Rally your troops and fight your way to the top of an ever-shuffling tower to defeat Steve, The Evil Wizard.",
        rating: 0,
        popularity: 0,
        releaseDate: "10/06/17",
        internPick: false,
        alphabet: "M"

    },
    {
        name: "Poly Quest",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/1143610/header.jpg?t=1569389728",
        genre: "Role Playing",
        tempdes: "A Virtual Reality dungeon adventure",
        description: "temp",
        rating: 0,
        popularity: 0,
        releaseDate: "09/12/19",
        internPick: false,
        alphabet: "P"

    }, 
    {
        name: "Sam & Dan: Floaty Flatmates",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/978270/capsule_184x69.jpg?t=1572624746",
        genre: "Role Playing",
        tempdes: "temp",
        description: "Oh nooo, the world is flooded! Oh no, there is also a really big shark! You are a survivor of the apocalypse, stuck in your apartment, all by yourself, so sad... Across the street there is another survivor. Let's wave to each other, work together and both reach the boat to get to safety!",
        rating: 0,
        popularity: 0,
        releaseDate: "12/04/18",
        internPick: false,
        alphabet: "S"

    }, 
    {
        name: "The Red Stare",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/625470/header.jpg?t=1572544837",
        genre: "Role Playing",
        tempdes: "temp",
        description: "Become a secret agent in the 1950s and observe your neighbours to find the communist spy!",
        rating: 0,
        popularity: 0,
        releaseDate: "07/31/17",
        internPick: false,
        alphabet: "T"

    }, 
    {
        name: "Townsmen VR",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/749960/header.jpg?t=1579867682",
        genre: "Role Playing",
        tempdes: "temp",
        description: "Townsmen VR uses the exciting possibilities of virtual reality to further enhance the classic city building game with entirely new gameplay experiences and interactive mechanics.",
        rating: 0,
        popularity: 0,
        releaseDate: "02/08/18",
        internPick: false,
        alphabet: "T"

    }, 
    {
        name: "Vader Immortal",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSk7Cdxb7H7NTvRDOpAJ8Mh3uChJfor2bjOdjA9x9pehwM8A4Af&usqp=CAU",
        genre: "Role Playing",
        tempdes: "temp",
        description: "A three-part series that combines immersive cinematic storytelling with dramatic interactive play. Explore the world of Darth Vader.",
        rating: 4.7,
        popularity: 0,
        releaseDate: "05/21/19",
        internPick: false,
        alphabet: "B"

    }, 
    {
        name: "VR Flush",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/866540/header.jpg?t=1537628755",
        genre: "Role Playing",
        tempdes: "temp",
        description: "You are sitting on a toilet when you are abducted and beamed up to an alien spaceship, where you have to convince an A.I. that you really are an intelligent lifeform.",
        rating: 0,
        popularity: 0,
        releaseDate: "06/20/18",
        internPick: false,
        alphabet: "V"

    }, 
    {
        name: "Audioshield",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/412740/header.jpg?t=1568409238",
        genre: "Rhythm",
        tempdes: "temp",
        description: "Audioshield puts you at the point of impact for every hit in your music. Beats glide in slowly for mellow parts of songs, then ramp up for intense parts of songs with cross-body, double-shield, and high-altitude hits.",
        rating: 0,
        popularity: 0,
        releaseDate: "04/05/16",
        internPick: false,
        alphabet: "A"

    },
    {
        name: "Electronauts",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/691160/header.jpg?t=1565928046",
        genre: "Rhythm",
        tempdes: "temp",
        description: "Immerse yourself in an interactive sonic environment where you build, drop, and jam with your friends and top artists. Remix over 80 tracks and express yourself like never before. Electronauts sets the stage for you to DJ, perform, and make music magic in virtual reality.",
        rating: 0,
        popularity: 0,
        releaseDate: "08/07/18",
        internPick: false,
        alphabet: "E"

    },
    {
        name: "Hot Dogs, Horseshoes, Hand Grenades",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/450540/header.jpg?t=1576960750",
        genre: "Sandbox",
        tempdes: "temp",
        description: "Do you like hot dogs? How about horseshoes? Hand grenades? (everyone likes hand grenades) Anyway, we've got all that, and guns. SO MANY GUNS. So if you like ordnance, meat, and far too many groan-worthy puns, this is the VR sandbox game for you.",
        rating: 0,
        popularity: 0,
        releaseDate: "04/05/16",
        internPick: false,
        alphabet: "H"

    },
    {
        name: "Universe Sandbox",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/230290/header.jpg?t=1584227464",
        genre: "Sandbox",
        tempdes: "temp",
        description: "Create and destroy on an unimaginable scale... with a space simulator that merges real-time gravity, climate, collision, and material interactions to reveal the beauty of our universe and the fragility of our planet. Includes VR support for HTC Vive, Oculus Rift+Touch, and Windows Mixed Reality.",
        rating: 0,
        popularity: 0,
        releaseDate: "08/24/15",
        internPick: false,
        alphabet: "U"

    },
    {
        name: "Aircar",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/1073390/header.jpg?t=1574392904",
        genre: "Simulation",
        tempdes: "temp",
        description: "A simple immersive flying game where you pilot an aircar through a futuristic cityscape",
        rating: 0,
        popularity: 0,
        releaseDate: "08/17/17",
        internPick: false,
        alphabet: "A"

    },
    {
        name: "Aperature Hand Lab",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/868020/header.jpg?t=1561482160",
        genre: "Simulation",
        tempdes: "temp",
        description: "If you've always longed to try these exciting edge-of-your-wrist hand maneuvers, but wanted the chance to practice first in the safety of a non-judgmental virtual",
        rating: 0,
        popularity: 0,
        releaseDate: "06/25/19",
        internPick: false,
        alphabet: "A"

    },
    {
        name: "Bait",
        img: "data:image/jpeg;base64,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",
        genre: "Simulation",
        tempdes: "temp",
        description: "Bait is a relaxing fishing game where you can catch and sell your fish world, Aperture Hand Lab is easily in the top three options currently available to you in VR",
        rating: 4.1,
        popularity: 0,
        releaseDate: "05/21/19",
        internPick: false,
        alphabet: "B"

    },
    {
        name: "Buzz Aldrin: Cycling Pathways to Mars",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/608000/header.jpg?t=1490031114",
        genre: "Simulation",
        tempdes: "temp",
        description: "In the world’s first holographic legacy VR project,  viewers will have a unique opportunity to ‘meet’ the astronaut through his hologram today, and future generations will be able to experience Aldrin's legacy, long after mankind has made the journey to Mars.",
        rating: 0,
        popularity: 0,
        releaseDate: "03/17/17",
        internPick: false,
        alphabet: "B"

    },
    {
        name: "Catify VR",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/815320/header.jpg?t=1530181468",
        genre: "Simulation",
        tempdes: "temp",
        description: "This VR experience allows you to embody a cat and live the everyday life of a feline: walking, jumping, night-watching and clawing!",
        rating: 0,
        popularity: 0,
        releaseDate: "06/28/18",
        internPick: false,
        alphabet: "C"

    },
    {
        name: "DCS World Steam Edition",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/223750/header.jpg?t=1577101031",
        genre: "Simulation",
        tempdes: "temp",
        description: "Feel the excitement of flying the Su-25T Frogfoot attack jet and the TF-51D Mustang in the free-to-play Digital Combat Simulator World",
        rating: 0,
        popularity: 0,
        releaseDate: "03/18/18",
        internPick: false,
        alphabet: "D"

    },
    {
        name: "DiRT Rally",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/310560/header.jpg?t=1573486834",
        genre: "Simulation",
        tempdes: "temp",
        description: "DiRT Rally is the most authentic and thrilling rally game ever made, road-tested over 80 million miles by the DiRT community. It perfectly captures that white knuckle feeling of racing on the edge as you hurtle along dangerous roads, knowing that one crash could irreparably harm your stage time.",
        rating: 0,
        popularity: 0,
        releaseDate: "12/07/15",
        internPick: false,
        alphabet: "D"

    },
    {
        name: "Disassembly VR",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/973700/header.jpg?t=1575809943",
        genre: "Simulation",
        tempdes: "temp",
        description: "Love taking things apart? Seeing how things work? Destroying stuff? Shooting stuff with a shotgun or rocket launcher? This game lets you do so in the ultimate destruction experience!",
        rating: 0,
        popularity: 0,
        releaseDate: "01/31/19",
        internPick: false,
        alphabet: "D"

    },
    {
        name: "Dissection Simulator: Frog Edition",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/1046910/header.jpg?t=1576010437",
        genre: "Simulation",
        tempdes: "temp",
        description: "Join Wendy Martin, a national award-winning science teacher, to make Ribbit-ing Discoveries in this virtual reality Frog Dissection. Learn the fundamentals of the female frog anatomy in a fully immersive virtual reality experience.",
        rating: 0,
        popularity: 0,
        releaseDate: "03/13/19",
        internPick: false,
        alphabet: "D"

    },
    {
        name: "Epic Fun",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/909100/header.jpg?t=1576373039",
        genre: "Simulation",
        tempdes: "temp",
        description: "Epic Fun is a collection of theme park-inspired attractions. You'll find a roller coasters with an exclusive rail shooting game, a free fall tower and a Hammer It game entirely for free.",
        rating: 0,
        popularity: 0,
        releaseDate: "11/06/19",
        internPick: false,
        alphabet: "E"

    },
    {
        name: "Epic Roller Coaster",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/787790/header.jpg?t=1578693570",
        genre: "Simulation",
        tempdes: "temp",
        description: "In Epic Roller Coasters you'll get the same feeling of a real roller coaster with a high level graphics, physics-based simulation. You'll go up and down seeing everything around you with our long range vision capabilities!",
        rating: 0,
        popularity: 0,
        releaseDate: "03/07/18",
        internPick: false,
        alphabet: "E"

    },
    {
        name: "Fishing Planet",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/380600/header.jpg?t=1586428794",
        genre: "Simulation",
        tempdes: "temp",
        description: "Fishing Planet is a FREE to play unique and highly realistic online first-person multiplayer fishing simulator developed for anglers to bring you the full thrill of actual fishing! Choose your lures, make your trophy catches",
        rating: 0,
        popularity: 0,
        releaseDate: "08/11/15",
        internPick: false,
        alphabet: "F"

    },
    {
        name: "First Contact",
        img: "data:image/jpeg;base64,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",
        genre: "Simulation",
        tempdes: "temp",
        description: "First Contact is an official Oculus experience designed to be your entryway to Oculus Quest. Experience the magic of 'presence' in VR, exploring moments that feel as real as they are fantastically impossible",
        rating: 4.7,
        popularity: 0,
        releaseDate: "12/05/16",
        internPick: false,
        alphabet: "F"

    },
    {
        name: "First Steps",
        img: "data:image/jpeg;base64,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",
        genre: "Simulation",
        tempdes: "temp",
        description: "Take your first steps in VR and get to know your controllers in this short experience that showcases the power of Oculus Quest",
        rating: 4.8,
        popularity: 0,
        releaseDate: "05/21/19",
        internPick: false,
        alphabet: "F"

    },
    {
        name: "RaceRoom Racing Experience",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/211500/header.jpg?t=1581670310",
        genre: "Simulation",
        tempdes: "temp",
        description: "RaceRoom is the premier free-to-play racing simulation on PC and home to official race series like DTM, WTCR, the WTCC and ADAC GT Masters. Enter RaceRoom and enter the world of a professional race car driver.",
        rating: 0,
        popularity: 0,
        releaseDate: "02/12/13",
        internPick: false,
        alphabet: "R"

    },
    {
        name: "Short Circuit VR",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/970800/header.jpg?t=1584006769",
        genre: "Simulation",
        tempdes: "temp",
        description: "Short Circuit VR is an electronics lab simulator in Virtual Reality. You can build your own electronic circuits with the components provided, learn basic electronics by completing challenges and just have fun while experimenting and making awesome projects!",
        rating: 0,
        popularity: 0,
        releaseDate: "11/19/18",
        internPick: false,
        alphabet: "S"

    },
    {
        name: "Sketchfab VR",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/464940/header.jpg?t=1463590639",
        genre: "Simulation",
        tempdes: "temp",
        description: "Teleport yourself to Rome, hold a beating heart, or walk among dinosaurs. Open Sketchfab VR to discover a showcase of explorations through remote places, fantastic creatures, game worlds, cultural heritage, science and other wonders.",
        rating: 0,
        popularity: 0,
        releaseDate: "05/13/16",
        internPick: false,
        alphabet: "S"

    },
    {
        name: "Sopwith VR",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/998660/header.jpg?t=1548705048",
        genre: "Simulation",
        tempdes: "temp",
        description: "Shoot down triplanes and attack tanks with your Sopwith biplane. Simple World War One flight combat simulator with touch controls, airfoil physics, computer-controlled opponents, and destructible environments, inspired by David L. Clark's classic DOS game from 1984.",
        rating: 0,
        popularity: 0,
        releaseDate: "12/26/18",
        internPick: false,
        alphabet: "S"

    },
    {
        name: "SpaceEngine",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/314650/header.jpg?t=1583347063",
        genre: "Simulation",
        tempdes: "temp",
        description: "The world's first science-based photorealistic interactive 3D planetarium that models the entire Universe, using procedural generation for uncharted areas",
        rating: 0,
        popularity: 0,
        releaseDate: "06/11/19",
        internPick: false,
        alphabet: "S"

    },
    {
        name: "VersaillesVR | The Palace is yours",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/1098190/header.jpg?t=1569394743",
        genre: "Simulation",
        tempdes: "temp",
        description: "'Versailles: The Palace is yours' offers you a unique visit to the palace built by Louis XIV. Paintings, sculptures, furniture, the Hall of Mirrors",
        rating: 0,
        popularity: 0,
        releaseDate: "09/11/19",
        internPick: false,
        alphabet: "V"

    },
    {
        name: "Kittypocalypse",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/451010/header.jpg?t=1510741001",
        genre: "Strategy",
        tempdes: "temp",
        description: "Kittypocalypse is an in-depth, strategic tower defense game built exclusively for VR. Across a diverse range of environments, defeat the hordes of evil alien kitties and salvage what's left of your home",
        rating: 0,
        popularity: 0,
        releaseDate: "08/15/16",
        internPick: false,
        alphabet: "K"

    },
    {
        name: "AltspaceVR",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/407060/header.jpg?t=1580949781",
        genre: "Software(Misc)",
        tempdes: "temp",
        description: "This software provides meeting spaces in virtual reality, where users can have conversations, watch videos, play games, and browse the Internet",
        rating: 0,
        popularity: 0,
        releaseDate: "04/01/16",
        internPick: false,
        alphabet: "A"

    },
    {
        name: "Audio Factory",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/722590/header.jpg?t=1509941476",
        genre: "Software(Misc)",
        tempdes: "temp",
        description: "Audio Factory is a VR experience showcasing spatial audio capabilities of the Resonance Audio SDK by Google.",
        rating: 0,
        popularity: 0,
        releaseDate: "11/05/17",
        internPick: false,
        alphabet: "A"

    },
    {
        name: "Bigscreen Beta",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/457550/header.jpg?t=1576725689",
        genre: "Software(Misc)",
        tempdes: "temp",
        description: "Bigscreen combines the power and utility of your desktop computer, with the limitless and immersive presence of VR, to create a one-of-a-kind social experience",
        rating: 0,
        popularity: 0,
        releaseDate: "04/28/16",
        internPick: false,
        alphabet: "B"

    },
    {
        name: "VR Photo Viewer",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/531980/header.jpg?t=1498125223",
        genre: "Software(Misc)",
        tempdes: "temp",
        description: "View your Photosphere, Cardboard Camera, 360 degree panorama, and 3D stereoscopic photos in room scale virtual reality. Photos are loaded from your Google Photo collection or your local file system and displayed in full detail.",
        rating: 0,
        popularity: 0,
        releaseDate: "06/22/17",
        internPick: false,
        alphabet: "V"

    },
    {
        name: "YouTube VR",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/755770/header.jpg?t=1529019482",
        genre: "Software(Misc)",
        tempdes: "temp",
        description: "YouTube VR reimagines YouTube as a 3D world you can explore. Experience every channel, video and creator in virtual reality. Swim alongside great white sharks, explore all seven continents with your own personal tour guide, get front row seats at your favorite concerts and more.",
        rating: 0,
        popularity: 0,
        releaseDate: "12/14/17",
        internPick: false,
        alphabet: "Y"

    },
    {
        name: "Cloudlands: VR Minigolf",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/425720/header.jpg?t=1518498420",
        genre: "Sports",
        tempdes: "temp",
        description: "Cloudlands VR Minigolf combines the familiar fun and straightforward mechanics of a traditional round of golf with the barrier-breaking power of virtual reality",
        rating: 0,
        popularity: 0,
        releaseDate: "04/05/16",
        internPick: false,
        alphabet: "C"

    },
    {
        name: "Cloudlands 2",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/1206960/header.jpg?t=1584393856",
        genre: "Sports",
        tempdes: "temp",
        description: "Cloudlands 2 builds off of the fun of playing and building minigolf courses and adds the ability to play full sized golf courses. Arm yourself with a putter, wedge, and driver and hit the links in the clouds",
        rating: 0,
        popularity: 0,
        releaseDate: "01/17/2020",
        internPick: false,
        alphabet: "C"

    },
    {  
        name: "SNOW",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/244930/header.jpg?t=1550229093",
        genre: "Sports",
        tempdes: "temp",
        description: "SNOW is the only free-to-play, open world, winter sports game. Explore a massive mountain, customize your character with clothing and equipment and compete in events to be the best.",
        rating: 0,
        popularity: 0,
        releaseDate: "02/14/19",
        internPick: false,
        alphabet: "B"

    },
    {
        name: "Pokerstars VR",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/886250/header.jpg?t=1583205910",
        genre: "Tabletop",
        tempdes: "temp",
        description: "Step into the future with this game-changing release from the biggest name in the business. Visually stunning environments; realistic chip and card movements; an endless supply of interactive toys, props and accessories",
        rating: 0,
        popularity: 0,
        releaseDate: "11/08/18",
        internPick: false,
        alphabet: "P"

    },
    {
        name: "Tabletop Simulator",
        img: "https://steamcdn-a.akamaihd.net/steam/apps/286160/header.jpg?t=1582487907",
        genre: "Tabletop",
        tempdes: "temp",
        description: "Tabletop Simulator is the only simulator where you can let your aggression out by flipping the table! There are no rules to follow: just you, a physics sandbox, and your friends. Make your own games and play how YOU want! Unlimited gaming possibilities!",
        rating: 0,
        popularity: 0,
        releaseDate: "06/05/15",
        internPick: false,
        alphabet: "T"

    }

]; 

  //make sure cat isn't already used
  if (currentSort == sortType) {
    return;
  }

  //delete what's currently displayed
  deleteElements();
  
  let duplicate = false;
  let sort = sortType;
  currentSort = sortType;

  if (currentSort == 'alphabet') {
    alhpabetSort(data);
  }

  for (var i = 0; i < data.length; i++) {
   //make category a button
    var buttonCat = data[i][sort];
    let newCategory = document.createElement('button');
    newCategory.type = 'button';
    newCategory.innerHTML = buttonCat;

    //make Intern Choice button
    if (sortType == 'internPick') { 
      newCategory.innerHTML = 'Intern\'s Choice';
    }
    console.log(data[i][sort]);
    newCategory.className = "collapsible";

    //make sure there aren't any other genres
    for (var j = 0; j < i; j++) {
      if (buttonCat == data[j][sort]) {
        duplicate = true;
      }
    }

    if ((data[i][sort] == false) && (sort == 'internPick')) {
      continue;
    }

    if (duplicate == false) {
      document.getElementById('libArray').appendChild(newCategory);
      var categoryContent = document.createElement('div');
      categoryContent.className = "content";
      categoryContent.id = buttonCat;
      document.getElementById('libArray').appendChild(categoryContent);
    }

    //reset duplicate
    duplicate = false;
  }

  //make Sub Buttons
  for (var i = 0; i < data.length; i++) {
    // buttons in category
    var buttonSoul = data[i]['name'];
    var buttonCat = data[i][sort];
    let newGame = document.createElement('button');
    newGame.type = 'button';
    newGame.id = buttonSoul;
    newGame.innerHTML = buttonSoul;
    newGame.className = "collapsible";
    if ((data[i][sort] == false) && (sort == 'internPick')) {
      continue;
    }
    document.getElementById(buttonCat).appendChild(newGame);

    //info in button
    var gameInfo = data[i]['description'];
    let newInfo = document.createElement('div');
    newInfo.id = data[i]['description'];
    newInfo.class = 'content';
    newInfo.innerHTML = gameInfo;
    newInfo.className = "content";
    document.getElementById(buttonCat).appendChild(newInfo);  
    
    //button image 
    var buttonImage = data[i]['img'];
    let picture = document.createElement('img');
    picture.type = 'button';
    picture.src = buttonImage;
    document.getElementById(data[i]['description']).appendChild(picture);
  }

  //Enable Collapse
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
  }
}

//John is a coding genius, and his name deserves to be sung from rooftops

// function readTextFile(file)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 alert(allText);
//             }
//         }
//     }
//     rawFile.send(null);
// }

// readTextFile("assets/js/gameList.json");

// const data = [{
//   name: "Virtual-Rickality",
//   genre: "Misc",
//   description: "900 IQ",
//   img: "../assets/images/games/rickandmorty.jfif",
//   alphabet:"V",
//   internPick: true
// },
// {
//   name: "Beatsaber",
//   genre: "Rhythm",
//   description: "cut blocks, hurt wrists",
//   img: "../assets/images/games/beatsaber.jpg",
//   alphabet:"B",
//   internPick: true
// },
// {
//   name: "audica",
//   genre: "Rhythm",
//   description: "shoot gun",
//   img: "../assets/images/games/audica.jfif",
//   alphabet:"A",
//   internPick: false
// },
// {
//   name: "TiltBrush",
//   genre: "Painting",
//   description: "explore",
//   img: "../assets/images/games/tiltbrush.jpg",
//   alphabet:"N",
//   internPick: true
// },
// {
//   name: "apple shield",
//   genre: "Rhythm",
//   description: "most boring audio game",
//   img: "../assets/images/games/audioshield.jpg",
//   alphabet: "A",
//   internPick: false
// }
// ];