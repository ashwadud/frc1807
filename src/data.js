import {FaRobot} from 'react-icons/fa'

export const links = [
    {
        name: "Home",
        path: "/"
    },

    {
        name: "About",
        path: "/about"
    },

    {
        name: "Robots",
        path: "/robots"
    },

    {
        name: "Resources",
        path: "/resources"
    },

    {
        name: "Sponsors",
        path: "/sponsors"
    },

    {
        name: "Bios",
        path: "/bios"

    },

]

export const bblinks = [
    {
        name: "Home",
        path: "/"
    },

    {
        name: "About",
        path: "/blackbird/about"
    },

    {
        name: "Cad",
        path: "/blackbird/cad"
    },

]

export const pagesdirect = [
    {
        id: 1,
        icon: <FaRobot/>,
        title:  "Robots",
        info: "Check out the different robots we've made",
        path: "/robots"
    },
    {
        id: 2,
        icon: <FaRobot/>,
        title: "Blogs",
        info: "Keep up with our team news throughout the season",
        path: "/blogs"
    },
    {
        id: 3,
        icon: <FaRobot/>,
        title: "Members",
        info: "Check out our team and mentors of 1807 and 1812.",
        path: "/bios"
    },
]

export const faqs = [
    {
        id: 1,
        question: "How long is the season?",
        answer: "Our season is broken up into different parts. But, the team is a year-long commitment."
    },
    {
        id: 2,
        question: "What grades are the team open to?",
        answer: "FRC#1807 is open to anybody that currently attends Allentown High School. Grades 9-12 can come to the information meeting to learn about the team. Dates and information is announced in the beginning of each school year"
    },
    {
        id: 3,
        question: "How many competitions are in a year?",
        answer: "FRC#1807 normally attends 3 competitions and if they score highly, they are able to advance to a 4th competition and if they advance from there, they are able to participate in a 5th for worlds. "
    },
    {
        id: 4,
        question: "How long is the prep time between each competition",
        answer: "Between 1-2 weeks"
    },
]

export const quotes = [
    {
        id: 1,
        name: "Robert Tackett",
        quote: "Robotics is the best activity for kids that want to go pro because every kid has a chance to do it.",
        job: "Teacher Advisor",
        avatar: require("./images/logo.png")
    },
    {
        id: 2,
        name: "Matthew Jasaitis",
        quote: "Work smarter, work harder.",
        job: "Teacher Advisor",
        avatar: require("./images/logo.png")
    },
    {
        id: 3,
        name: "Gabriella Biello",
        quote: "1807 is an environment that fosters education and inspiration. We work hard to create incredible robots but also an incredible family that I am so proud to be a part of.",
        job: "Business Captain",
        avatar: require("./images/logo.png")
    },
    {
        id: 4,
        name: "Sydney Miller",
        quote: "Although robotics is a lot of work and many hours, it's worth every second.",
        job: "Build Captain",
        avatar: require("./images/logo.png")
    },
    {
        id: 5,
        name: "Arya Chaudry",
        quote: "Can you come up with something inspirational and say it's me?",
        job: "Programming Captain",
        avatar: require("./images/logo.png")
    },
    {
        id: 6,
        name: "Evan Kaba",
        quote: "",
        job: "Design Captain",
        avatar: require("./images/logo.png")
    },
    {
        id: 7,
        name: "Michael Sacca",
        quote: "Keep moving forward!",
        job: "Electrical Captain",
        avatar: require("./images/logo.png"),
    },
    {
        id: 8,
        name: "Vanisha Nagali",
        quote: "Machine does the work, I just stand there.",
        job: "Machining Captain",
        avatar: require("./images/logo.png")
    },
    {
        id: 9,
        name: "Nicholas Marques",
        quote: "Its a great learning enviroment to work in, you learn new stuff everyday and everyone is so supportive to each other.",
        job: "Build Lead",
        avatar: require("./images/logo.png")
        },
    {
        id: 10,
        name: "Julia Valentino",
        quote: "Learning and growing with people that have essentially become my second family and exploring the world of mechanical engineering with 1807 has been amazing",
        job: "Build Lead",
        avatar: require("./images/logo.png")
    },
        {
            id: 11,
            name: "Olivia Pusczko",
            quote: "I rarely build, I'm always taking care of children.",
            job: "Build Lead",
            avatar: require("./images/logo.png")
        },
        {
            id: 12,
            name: "Abhinav Murthy",
            quote: ".",
            job: "Build Lead",
            avatar: require("./images/logo.png")
        },
        {
            id: 13,
            name: "Andrew Sain",
            quote: "It's a lot of work but its a lot of fun.",
            job: "Design Lead A",
            avatar: require("./images/logo.png")
        },
        {
            id: 14,
            name: "Gavin Elwell",
            quote: "Postponed.",
            job: "Design Lead A",
            avatar: require("./images/logo.png")
        },
        {
            id: 15,
            name: "Radhika Manvar",
            quote: "Idk",
            job: "Design Lead A",
            avatar: require("./images/logo.png")
        },
        {
            id: 16,
            name: "Tia Bajaj",
            quote: "Idk",
            job: "Design Lead B",
            avatar: require("./images/logo.png")
        },
        {
            id: 17,
            name: "Ryan Horn",
            quote: "Idk",
            job: "Design Lead B",
            avatar: require("./images/logo.png")
        },
        {
            id: 18,
            name: "Jacob Roohr",
            quote: "It worked in the CAD.",
            job: "Design Lead B",
            avatar: require("./images/logo.png")
        },
        {
            id: 19,
            name: "Drew Springer Heller",
            quote: "I'll get back to you with that",
            job: "Programming Lead",
            avatar: require("./images/logo.png")
        }
]

const cover1 = require('./images/main__header.jpeg')
const avatar = require('./images/logo.png')

export const blogList = [
    {
      id: 1,
      title: 'I want to off myself',
      category: 'development',
      subCategory: ['frontend', 'ui/ux', 'design'],
      description:
        "nightmare nightmare nightmare nightmare nightmare nightmare nightmare ",
      authorName: 'John Doe',
      authorAvatar: avatar,
      createdAt: 'June 03, 2021',
      cover: cover1,
    },
    {
      id: 2,
      title: 'I still want to off myself',
      category: 'travel',
      subCategory: ['vacation', 'holidays', 'sight seeing'],
      description:
        "nightmare nightmare nightmare nightmare nightmare nightmare nightmare nightmare nightmare ",
      authorName: 'John Doe',
      authorAvatar: avatar,
      createdAt: 'June 03, 2021',
      cover: cover1,
    },
    {
      id: 3,
      title: 'Online Shopping – An Alternative to Shopping in the Mall',
      category: 'shopping',
      subCategory: ['e-commerce store', 'clothing', 'shopping store'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: avatar,
      createdAt: 'June 03, 2021',
      cover: cover1,
    },
    {
      id: 4,
      title: 'ADVENTURE IN YOU',
      category: 'adventure',
      subCategory: ['adrenaline', 'stay-fit', 'lifestyle'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: avatar,
      createdAt: 'June 03, 2021',
      cover: cover1,
    },
    {
      id: 5,
      title: 'Loaded BBQ Baked Potatoes',
      category: 'cooking',
      subCategory: ['bbq', 'food', 'lifestyle'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: avatar,
      createdAt: 'June 03, 2021',
      cover: cover1,
    },
    {
      id: 6,
      title: 'Beyond the Beach',
      category: 'travel',
      subCategory: ['beaches', 'sea', 'holidays'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: avatar,
      createdAt: 'June 03, 2021',
      cover: cover1,
    },
    {
      id: 7,
      title: 'Art & Perception',
      category: 'art',
      subCategory: ['skill', 'design', 'passion'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: avatar,
      createdAt: 'June 03, 2021',
      cover: cover1,
    },
  ];
  

export const sponsors = [
    {
        id: 1,
        name: 'Aluminum Sponsor',
        desc: 'This package is perfect for beginners who need constant help',
        price: 100,
        features: [
            {feature: 'Invitation to our Sponsor Night', available: true},
            {feature: 'Thank-you letter and team picture', available: true}
        ]
    },
    {
        id: 2,
        name: 'Bronze Sponsor',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 500,
        features: [
            {feature: 'Your logo displayed on the homepage of the website (with link) and our Sponsors page', available: true},
            {feature: 'Invitation to our Sponsor Night', available: true},
            {feature: 'Thank-you letter and team picture', available: true},
            {feature: '2023 Sponsor Plaque', available: true}
        ]
    },
    {
        id: 3,
        name: 'Silver Sponsor',
        desc: 'This package is perfect for busy people who need home service',
        price: 1000,
        features: [
            {feature: 'Your name displayed on the sponsor page of the website (with link) and our Sponsors page', available: true},
            {feature: 'Invitation to our Sponsor Night', available: true},
            {feature: 'Thank-you letter and team picture', available: true},
            {feature: '2023 Sponsor Plaque', available: true}
        ]
    },
    {
        id: 4,
        name: 'Gold Sponsor',
        desc: 'This package is perfect for busy people who need home service',
        price: 2000,
        features: [
            {feature: 'Your logo displayed on the sponsor page of the website (with link) and our Sponsors page', available: true},
            {feature: 'Your logo on team shirts worn at competitions', available: true},
            {feature: 'Your logo on the team banner displayed at competitions', available: true},
            {feature: 'Invitation to our Sponsor Night', available: true},
            {feature: 'Thank-you letter and team picture', available: true},
            {feature: '2023 Sponsor Plaque', available: true}
        ]
    },
    {
        id: 5,
        name: 'Diamond Sponsor',
        desc: 'This package is perfect for busy people who need home service',
        price: 5000,
        features: [
            {feature: 'Your logo displayed on the homepage of the website (with link) and our Sponsors page', available: true},
            {feature: 'A medium-sized print of your logo on team shirts worn at competitions', available: true},
            {feature: 'Your logo on the banner and displayed in our pits (stations at competitions)', available: true},
            {feature: 'VIP invitation to our Sponsor Night', available: true},
            {feature: 'Thank-you letter and team picture', available: true},
            {feature: '2023 Sponsor Plaque', available: true}
        ]
    },
    {
        id: 6,
        name: 'Platinum Sponsor',
        desc: 'This package is perfect for busy people who need home service',
        price: 10000,
        features: [
            {feature: 'Your logo displayed on the homepage of the website (with link) and our Sponsors page', available: true},
            {feature: 'A large print of your logo on team shirts worn at competitions', available: true},
            {feature: 'Your logo on the banner, robot and displayed in our pits (stations at competitions)', available: true},
            {feature: 'Presentation and demonstration of robot at your company or at choice event', available: true},
            {feature: 'VIP invitation to our Sponsor Night', available: true},
            {feature: 'Your information on all of our social media outlets and presentations', available: true},
            {feature: 'Thank-you letter and team picture', available: true},
            {feature: '2023 Sponsor Plaque', available: true}
        ]
    }
]

const Robot2011 = require('./images/robots/robot11.JPG')
const Robot2012 = require('./images/robots/robot12.JPG')
const Robot2013 = require('./images/robots/robot13.JPG')
const Robot2018 = require('./images/robots/robot18.JPG')
const Robot2019 = require('./images/robots/robot19.JPG')
const Robot2020 = require('./images/robots/robot20.JPG')
const Robot2021 = require('./images/robots/robot21.jpg')

export const robots = [
    {
        id: 1,
        image: Robot2011,
        game: 'Logomotion',
        year: '2010-11',
        docs: ['https://www.instagram.com/ash.wadud/']
    },
    {
        id: 2,
        image: Robot2012,
        game: 'Rebound Rumble',
        year: '2011-12',
        docs: ['https://www.instagram.com/ash.wadud/']
    },
    {
        id: 3,
        image: Robot2013,
        game: 'Ultimate Ascent',
        year: '2012-13',
        docs: ['https://www.instagram.com/ash.wadud/']
    },
    {
        id: 4,
        image: Robot2018,
        game: 'FIRST Power Up',
        year: '2017-18',
        docs: ['https://github.com/AllentownRobotics/2018-1807-RobotCode']
    },
    {
        id: 5,
        image: Robot2019,
        game: 'Destination: Deep Space',
        year: '2018-19',
        docs: ['https://www.instagram.com/ash.wadud/']
    },
    {
        id: 6,
        image: Robot2020,
        game: 'Infinite Recharge',
        year: '2020-21',
        docs: ['https://www.instagram.com/ash.wadud/']
    },
    {
        id: 7,
        image: Robot2021,
        game: 'Rapid React',
        year: '2021-22',
        docs: ['https://github.com/AllentownRobotics/2022-1807-RobotCode']
    },
]

const MemberImage = require('./images/logo.png')

export const bios = [
    {
        id: 1,
        image: MemberImage,
        name: 'Nick Schaffer',
        year: 2023,
        job: 'Programming',
        docs: ['/schaffern']
    },
    {
        id: 2,
        image: MemberImage,
        name: 'Anthony Lotruglio',
        year: 2023,
        job: 'Business',
        docs: ['/lotruglioa']
    },
    {
        id: 3,
        image: MemberImage,
        name: 'Marissa May',
        year: 2023,
        job: 'Business',
        docs: ['/maym']
    },
    {
        id: 4,
        image: MemberImage,
        name: 'Amelia Tricker',
        year: 2023,
        job: 'Business',
        docs: ['/trickera']
    },
    {
        id: 6,
        image: MemberImage,
        name: 'Gabriella Biello',
        year: 2023,
        job: 'Business',
        docs: ['/biellog']
    },
    {
        id: 7,
        image: MemberImage,
        name: 'Cal Christine',
        year: 2023,
        job: 'Machining',
        docs: ['/christinec']
    },
    {
        id: 8,
        image: MemberImage,
        name: 'Arjun Singh',
        year: 2023,
        job: 'Machining/Strategy/1807 Driver',
        docs: ['/singha']
    },
    {
        id: 9,
        image: MemberImage,
        name: 'Jack Conroy',
        year: 2023,
        job: 'Machining',
        docs: ['/conroyj']
    },
    {
        id: 10,
        image: MemberImage,
        name: 'Vanisha Nagali',
        year: 2023,
        job: 'Machining',
        docs: ['/nagaliv']
        
    },
    {
        id: 11,
        image: MemberImage,
        name: 'Joseph Forte',
        year: 2023,
        job: 'Programming/1807 Operator',
        docs: ['/fortej']
    },
    {
        id: 12,
        image: MemberImage,
        name: 'Drew Springer Heller',
        year: 2023,
        job: 'Programming',
        docs: ['/hellerd']
    },
    {
        id: 13,
        image: MemberImage,
        name: 'Gavin Elwell',
        year: 2023,
        job: 'Design',
        docs: ['/elwellg']
    },
    {
        id: 14,
        image: MemberImage,
        name: 'Olivia Pusczko',
        year: 2023,
        job: 'Build',
        docs: ['/pusczkoo']
    },
    {
        id: 15,
        image: MemberImage,
        name: 'Julia Valentino',
        year: 2023,
        job: 'Build/Machining',
        docs: ['/valentinoj']
    },
    {
        id: 16,
        image: MemberImage,
        name: 'Sydney Miller',
        year: 2023,
        job: 'Build',
        docs: ['/millers']
    },
    {
        id: 17,
        image: MemberImage,
        name: 'Andrew Sain',
        year: 2023,
        job: 'Design/Strategy',
        docs: ['/saina']
    },
    {
        id: 18,
        image: MemberImage,
        name: 'Evan Kaba',
        year: 2023,
        job: 'Build/Design',
        docs: ['/kabae']
    },
    {
        id: 19,
        image: MemberImage,
        name: 'Nicholas Marques',
        year: 2023,
        job: 'Build',
        docs: ['/marquesn']
    },
    {
        id: 20,
        image: MemberImage,
        name: 'Tia Bajaj',
        year: 2024,
        job: 'Design',
        docs: ['/bajajt']
    },
    {
        id: 21,
        image: MemberImage,
        name: 'Ryan Horn',
        year: 2024,
        job: 'Build/Design',
        docs: ['/hornr']
    },
    {
        id: 22,
        image: MemberImage,
        name: 'Tyler Diaz',
        year: 2024,
        job: 'Build',
        docs: ['/diazt']
    },
    {
        id: 23,
        image: MemberImage,
        name: 'Louis Lichter',
        year: 2024,
        job: 'Build',
        docs: ['/lichterl']
    },
    {
        id: 24,
        image: MemberImage,
        name: 'Arya Chaudry',
        year: 2024,
        job: 'Programming/1812 Operator',
        docs: ['/chaudrya']
    },
    {
        id: 25,
        image: MemberImage,
        name: 'Chris Egan',
        year: 2024,
        job: 'Programming',
        docs: ['/eganc']
    },
    {
        id: 26,
        image: MemberImage,
        name: 'Gavin Normand',
        year: 2024,
        job: 'Programming',
        docs: ['/normandg']
    },
    {
        id: 27,
        image: MemberImage,
        name: 'Michael Sacca',
        year: 2024,
        job: 'Electrical',
        docs: ['/saccam']
    },
    {
        id: 28,
        image: MemberImage,
        name: 'Reilly Lichtman',
        year: 2024,
        job: 'Electrical',
        docs: ['/lichtmanr']
    },
    {
        id: 29,
        image: MemberImage,
        name: 'Liam Granaghan',
        year: 2024,
        job: 'Business',
        docs: ['/granaghanl']
    },
    {
        id: 31,
        image: MemberImage,
        name: 'Radhika Manvar',
        year: 2024,
        job: 'Design/Strategy',
        docs: ['/manvarr']
    },
    {
        id: 30,
        image: MemberImage,
        name: 'Abhinav Murthy',
        year: 2024,
        job: 'Build',
        docs: ['/murthya']
    },
    {
        id: 32,
        image: MemberImage,
        name: 'Aydan Landau',
        year: 2025,
        job: 'Strategy',
        docs: ['/landaua']
    },
    {
        id: 33,
        image: MemberImage,
        name: 'Gabby Menar-Nohilly',
        year: 2025,
        job: 'Business',
        docs: ['/nohillyg']
    },
    {
        id: 34,
        image: MemberImage,
        name: 'Thomas Maltese',
        year: 2025,
        job: 'Build/Electrical/Machining',
        docs: ['/malteset']
    },
    {
        id: 35,
        image: MemberImage,
        name: 'Vishek Desai',
        year: 2025,
        job: 'Machining',
        docs: ['/desaiv']
    },
    {
        id: 36,
        image: MemberImage,
        name: 'Luke Greenbaum',
        year: 2025,
        job: 'Machining',
        docs: ['/greenbauml']
    },
    {
        id: 37,
        image: MemberImage,
        name: 'Tucker Thomas',
        year: 2025,
        job: 'Electrical/Design',
        docs: ['/thomast']
    },
    {
        id: 38,
        image: MemberImage,
        name: 'Evangeline Huey',
        year: 2025,
        job: 'Programming',
        docs: ['/hueye']
    },
    {
        id: 39,
        image: MemberImage,
        name: 'Remy Fortsch',
        year: 2025,
        job: 'Programming',
        docs: ['/fortschr']
    },
    {
        id: 40,
        image: MemberImage,
        name: 'Jack Haddock',
        year: 2025,
        job: 'Build',
        docs: ['/haddockj']
    },
    {
        id: 41,
        image: MemberImage,
        name: 'Justin Scheuerman',
        year: 2025,
        job: 'Build',
        docs: ['/scheuermanj']
    },
    {
        id: 42,
        image: MemberImage,
        name: 'Jacob Roohr',
        year: 2025,
        job: 'Build/Design/Electrical',
        docs: ['/roohrj']
    },
    {
        id: 43,
        image: MemberImage,
        name: 'Jeremy George',
        year: 2025,
        job: 'Build',
        docs: ['/georgej']
    },
    {
        id: 44,
        image: MemberImage,
        name: 'Landon Schaffer',
        year: 2026,
        job: 'Build',
        docs: ['/schafferl']
    },
    {
        id: 45,
        image: MemberImage,
        name: 'Brian Deniz',
        year: 2026,
        job: 'Machining/Build/1812 Driver',
        docs: ['/denizb']
    },
    {
        id: 46,
        image: MemberImage,
        name: 'Aaryan Desai',
        year: 2026,
        job: 'Programming/Build',
        docs: ['/desaia']
    },
    {
        id: 47,
        image: MemberImage,
        name: 'Ash Wadud',
        year: 2026,
        job: 'Programming/Web Design',
        docs: ['/waduda']
    }
]