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
        name: "Media",
        path: "/media"

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
        name: "Back to Home",
        path: "/"
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
        path: "*"
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
        quote: "NIGHTMARE NIGHTMARE NIGHTMARE",
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
            quote: "Everything works in the CAD.",
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
const cover2 = require('./images/blog/hatboro.png')
const cover3 = require('./images/blog/prototype.png')
const avatar = require('./images/logo.png')

export const blogList = [
    {
      id: 1,
      title: 'Week 3 - Build Season',
      category: '2023',
      subCategory: ['frontend', 'ui/ux', 'design'],
      description:
        "nightmare nightmare nightmare nightmare nightmare nightmare nightmare ",
      authorName: 'Business Team',
      authorAvatar: avatar,
      createdAt: 'January 28, 2023',
      cover: cover2,
    },
    {
      id: 2,
      title: 'Week 1 - Build Season',
      category: '2023',
      subCategory: ['vacation', 'holidays', 'sight seeing'],
      description:
        "We have put in a lot of effort since the start of the new season. This week is devoted to prototype design because the game this year poses numerous challenges.",
      authorName: 'Liam Granaghan',
      authorAvatar: avatar,
      createdAt: 'January 14, 2023',
      cover: cover3,
    },
    {
      id: 3,
      title: 'Preseason - 2022/2023 Season',
      category: '2023',
      subCategory: ['skill', 'design', 'passion'],
      description:
        "This preseason, we will be doing what we have never done before, attempting to compete with two robots this year.",
      authorName: 'Business Team',
      authorAvatar: avatar,
      createdAt: 'October 22, 2022',
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
        docs: ['https://github.com/AllentownRobotics']
    },
    {
        id: 2,
        image: Robot2012,
        game: 'Rebound Rumble',
        year: '2011-12',
        docs: ['https://github.com/AllentownRobotics']
    },
    {
        id: 3,
        image: Robot2013,
        game: 'Ultimate Ascent',
        year: '2012-13',
        docs: ['https://github.com/AllentownRobotics']
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
        docs: ['https://github.com/AllentownRobotics']
    },
    {
        id: 6,
        image: Robot2020,
        game: 'Infinite Recharge',
        year: '2020-21',
        docs: ['https://github.com/AllentownRobotics']
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
        name: 'Ash Wadud',
        year: '2026',
        job: 'Programming/Web Design',
        desc: ''
    },
    {
        id: 2,
        image: MemberImage,
        name: 'Aaryan Desai',
        year: 2026,
        job: 'Programming/Build',
        desc: ''
    },
    {
        id: 3,
        image: MemberImage,
        name: 'Brian Deniz',
        year: 2026,
        job: 'Machining',
        desc: ''
    },
    {
        id: 4,
        image: MemberImage,
        name: 'Landon Schaffer',
        year: 2026,
        job: 'Build',
        desc: ''
    },
    {
        id: 5,
        image: MemberImage,
        name: 'Jeremy George',
        year: 2025,
        job: 'Build',
        desc: 'Jeremy George has been on the robotics team for two years, and is a part of the build sub-team. His favorite part about robotics is the build season. Jeremy joined the team for fun and exciting times with everyone. Aside from robotics, his hobbies include soccer. After graduating from AHS, Jeremy plans on attending college.'
    },
    {
        id: 6,
        image: MemberImage,
        name: 'Jacob Roohr',
        year: 2025,
        job: 'Build/Design/Electrical',
        desc: ''
    },
    {
        id: 7,
        image: MemberImage,
        name: 'Justin Scheuerman',
        year: 2025,
        job: 'Build',
        desc: ''
    },
    {
        id: 8,
        image: MemberImage,
        name: 'Jack Haddock',
        year: 2025,
        job: 'Build',
        desc: 'This is Jack’s first year on the robotics team! Jack joined the build sub-team. He is looking forward to building and learning how to use many cool machines. Jack joined robotics because he was looking to learn new things about machines. Aside from robotics, he is a part of soccer, track, and the student council. His hobbies include watching football and hanging out with friends. After graduating from AHS, Jack plans on attending college.'
    },
    {
        id: 9,
        image: MemberImage,
        name: 'Remy Fortsch',
        year: 2025,
        job: 'Programming',
        desc: ''
        
    },
    {
        id: 10,
        image: MemberImage,
        name: 'Evangeline Huey',
        year: 2025,
        job: 'Programming',
        desc: 'This is Evangeline’s first year on the robotics team! Evangeline joined the programming sub-team. She is looking forward to improving her programming skills! Java is the first language she learned and she can’t wait to build upon her current understanding. Evangeline joined the robotics team to learn something new. Aside from robotics, she is a part of the marching band, and student council. Her hobbies include crocheting, and playing card games. After graduating from AHS, Evangeline plans on attending medical school.'
    },
    {
        id: 11,
        image: MemberImage,
        name: 'Tucker Thomas',
        year: 2025,
        job: 'Electrical',
        desc: ''
    },
    {
        id: 12,
        image: MemberImage,
        name: 'Luke Greenbaum',
        year: 2025,
        job: 'Machining',
        desc: ''
    },
    {
        id: 13,
        image: MemberImage,
        name: 'Vishek Desai',
        year: 2025,
        job: 'Machining',
        desc: ''
    },
    {
        id: 14,
        image: MemberImage,
        name: 'Thomas Maltese',
        year: 2025,
        job: 'Build/Electrical/Machining',
        desc: ''
    },
    {
        id: 15,
        image: MemberImage,
        name: 'Gabby Menar-Nohilly',
        year: 2025,
        job: 'Business',
        desc: 'This is Gabriella’s first year on the robotics team! Gabriella joined the business sub-team. She is looking forward to watching it all come together and seeing how hard everyone works to achieve this goal. Gabriella joined the robotics team because she was interested in it since last year, but she was committed to the play and she wanted more experience with business and marketing! Aside from robotics, she is a part of the musical, the Nutshell, and the Leo Club. Gabriella’s hobbies include being an artist, dancing, and singing! After graduating from AHS, she plans on attending college and finding a job to make money.'
    },
    {
        id: 16,
        image: MemberImage,
        name: 'Aydan Landau',
        year: 2025,
        job: 'Strategy',
        desc: ''
    },
    {
        id: 17,
        image: MemberImage,
        name: 'Abhinav Murthy',
        year: 2024,
        job: 'Build',
        desc: ''
    },
    {
        id: 18,
        image: MemberImage,
        name: 'Radhika Manvar',
        year: 2024,
        job: 'Strategy/Design',
        desc: ''
    },
    {
        id: 19,
        image: MemberImage,
        name: 'Tia Bajaj',
        year: 2024,
        job: 'Design',
        desc: ''
    },
    {
        id: 20,
        image: MemberImage,
        name: 'Ryan Horn',
        year: 2024,
        job: 'Build/Design',
        desc: 'Ryan Horn has been on the robotics team for two years, and is a part of the design and build sub-teams. His favorite part about robotics is being able to create a robot from scratch to accomplish a goal. Ryan joined the team because he wanted to meet new friends and gain experience in engineering. Aside from robotics, he is a part of the Spanish Honor Society. Ryan’s hobbies include reading, playing video games, riding his bike, 3D printing, and listening to music. After graduating from AHS, he plans on attending college and pursuing a degree in Mechanical Engineering.'
    },
    {
        id: 21,
        image: MemberImage,
        name: 'Tyler Diaz',
        year: 2024,
        job: 'Build',
        desc: ''
    },
    {
        id: 22,
        image: MemberImage,
        name: 'Louis Lichter',
        year: 2024,
        job: 'Build',
        desc: ''
    },
    {
        id: 23,
        image: MemberImage,
        name: 'Arya Chaudry',
        year: 2024,
        job: 'Programming',
        desc: ''
    },
    {
        id: 24,
        image: MemberImage,
        name: 'Chris Egan',
        year: 2024,
        job: 'Programming',
        desc: ''
    },
    {
        id: 25,
        image: MemberImage,
        name: 'Gavin Normand',
        year: 2024,
        job: 'Programming',
        desc: ''
    },
    {
        id: 26,
        image: MemberImage,
        name: 'Michael Sacca',
        year: 2024,
        job: 'Electrical',
        desc: ''
    },
    {
        id: 27,
        image: MemberImage,
        name: 'Reilly Lichtman',
        year: 2024,
        job: 'Electrical',
        desc: ''
    },
    {
        id: 28,
        image: MemberImage,
        name: 'Liam Granaghan',
        year: 2024,
        job: 'Business',
        desc: 'This is Liam’s first year on the robotics team! Liam joined the business sub-team. He is looking forward to making new friends. Liam joined the robotics team because he thought it would be a great experience. He is also a part of the Leo Club, Italian Honor Society, and National Honor Society. Liam’s hobbies include music, art, and gardening. After graduating from AHS, he plans on attending college.'
    },
    // {
    //     id: 29,
    //     image: MemberImage,
    //     name: 'Nicholas Marques',
    //     year: 2023,
    //     job: 'Build',
    //     desc: ''
    // },
    // {
    //     id: 30,
    //     image: MemberImage,
    //     name: 'Evan Kaba',
    //     year: 2023,
    //     job: 'Build/Design',
    //     desc: ''
    // },
    // {
    //     id: 31,
    //     image: MemberImage,
    //     name: 'Andrew Sain',
    //     year: 2023,
    //     job: 'Design',
    //     desc: ''
    // },
    // {
    //     id: 32,
    //     image: MemberImage,
    //     name: 'Sydney Miller',
    //     year: 2023,
    //     job: 'Build',
    //     desc: 'Sydney Miller has been on the robotics team for four years, and is a part of the build, mechanical, and leadership sub-teams. Sydney’s favorite part about robotics is the problem solving and adrenaline rush of getting everything done in time. Robotics is a great place to meet many different people and work together for the same goal. Sydney loves the late nights of working hard and spending extra time with her closest friends. She first learned of robotics at the 8th grade Step-Up Day. She saw a massive, complex robot from across the room and was immediately interested. Sydney enjoys all things STEM and had always wanted to focus on it further. She took a chance, applied for the team, and now four years later it was the best decision she ever made. Aside from robotics, Sydney is a part of the Gender Sexuality Alliance, History Honor Society, Science Honor Society, Math Honor Society, National Honor Society, Volleyball Club, Choir, and Philosophy Club. Her hobbies include music, art, reading, and spending time with friends and family. After graduating from AHS, Sydney plans on attending colleger aerospace and mechanical engineering.'
    // },
    // {
    //     id: 33,
    //     image: MemberImage,
    //     name: 'Julia Valentino',
    //     year: 2023,
    //     job: 'Build',
    //     desc: ''
    // },
    // {
    //     id: 34,
    //     image: MemberImage,
    //     name: 'Olivia Pusczko',
    //     year: 2023,
    //     job: 'Build',
    //     desc: 'Olivia Pusczko has been on the robotics team for three years, and is a part of the build, mechanical, and leadership sub-teams. Olivia’s favorite part about robotics is getting to work with everyone towards a similar goal. She also enjoys making friends, having fun building together, and seeing the robot come together. Olivia joined the robotics team because she was in Mr. Tackett’s class, and he asked her to come to the meetings. After learning about everything the team does, she stayed for the rest of the season and officially tried out the following year. Olivia was interested in finding new after school activities that would challenge her different ways. Aside from robotics, she is a part of the GSA, Volleyball Club, and Class Activities. Olivia’s hobbies include music, sleeping, hanging out with friends, and going to new places. After graduating from AHS, she plans on attending college for a major in accounting and finance with a minor in business management or marketing.'
    // },
    // {
    //     id: 35,
    //     image: MemberImage,
    //     name: 'Gavin Elwell',
    //     year: 2023,
    //     job: 'Design',
    //     desc: ''
    // },
    // {
    //     id: 36,
    //     image: MemberImage,
    //     name: 'Drew Springer Heller',
    //     year: 2023,
    //     job: 'Programming',
    //     desc: ''
    // },
    // {
    //     id: 37,
    //     image: MemberImage,
    //     name: 'Joseph Forte',
    //     year: 2023,
    //     job: 'Programming',
    //     desc: ''
    // },
    // {
    //     id: 38,
    //     image: MemberImage,
    //     name: 'Vanisha Nagali',
    //     year: 2023,
    //     job: 'Machining',
    //     desc: ''
    // },
    // {
    //     id: 39,
    //     image: MemberImage,
    //     name: 'Jack Conroy',
    //     year: 2023,
    //     job: 'Machining',
    //     desc: ''
    // },
    // {
    //     id: 40,
    //     image: MemberImage,
    //     name: 'Arjun Singh',
    //     year: 2023,
    //     job: 'Machining/Strategy',
    //     desc: ''
    // },
    // {
    //     id: 41,
    //     image: MemberImage,
    //     name: 'Cal Christie',
    //     year: 2023,
    //     job: 'Machining',
    //     desc: ''
    // },
    // {
    //     id: 42,
    //     image: MemberImage,
    //     name: 'Gabriella Biello',
    //     year: 2023,
    //     job: 'Business',
    //     desc: ''
    // },
    // {
    //     id: 43,
    //     image: MemberImage,
    //     name: 'Amelia Tricker',
    //     year: 2023,
    //     job: 'Business',
    //     desc: 'Amelia Tricker has been on the robotics team for four years, and is a part of the business sub-team. Her favorite part about robotics is getting to work in a collaborative environment and make great memories with her peers. Amelia joined the team because because she is interested in pursuing an avenue of business as a career, and the team was a great opportunity to learn unique skills in a realistic setting. Aside from robotics, she is a part of Senior Class Activities, Spanish Honor Society, FFA, and is a FIRST LEGO League Mentor. Amelia’s hobbies include painting her nails, fish keeping, reading, singing, and playing the piano. After graduating from AHS, she plans on attending college.'
    // },
    // {
    //     id: 44,
    //     image: MemberImage,
    //     name: 'Marissa May',
    //     year: 2023,
    //     job: 'Business',
    //     desc: ''
    // },
    // {
    //     id: 45,
    //     image: MemberImage,
    //     name: 'Anthony Lotruglio',
    //     year: 2023,
    //     job: 'Business',
    //     desc: ''
    // },
    // {
    //     id: 46,
    //     image: MemberImage,
    //     name: 'Nick Schaffer',
    //     year: 2023,
    //     job: 'Programming',
    //     desc: ''
    // }
]