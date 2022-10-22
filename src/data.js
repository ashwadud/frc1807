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
        name: "Calendar",
        path: "/calendar"
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

export const pagesdirect = [
    {
        id: 1,
        icon: <FaRobot/>,
        title: "Our History",
        info: "Learn about the creation of Redbird Robotics in 2006.",
        path: "/about"
    },
    {
        id: 2,
        icon: <FaRobot/>,
        title: "Sponsors",
        info: "Learn more about our sponsors and how you can be involved.",
        path: "/sponsors"
    },
    {
        id: 3,
        icon: <FaRobot/>,
        title: "Upcoming Events",
        info: "Check our calendar to keep up to date with meetings, competitions, and other events.",
        path: "/calendar"
    },
]

export const faqs = [
    {
        id: 1,
        question: "How long is the season?",
        answer: "The season is broken up into different pieces for us. But, generally the season lasts the entire school year."
    },
    {
        id: 2,
        question: "What grades is the team open to?",
        answer: "FRC#1807 is open to anybody that currently attends Allentown High School. Grades 9-12 can come to the information meeting to learn about the team. Dates and information is announced in the beginning of each school year"
    },
    {
        id: 3,
        question: "How many competitions are there throughout the entire season?",
        answer: "FRC#1807 normally attends 3 competitions and if they score highly, they are able to advance to a 4th competition and if they advance from there, they are able to participate in a 5th for worlds. "
    },
    {
        id: 4,
        question: "How long is the prep time between each competition",
        answer: "Between 1-2 weeks"
    },
]

export const captains = [
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
        name: "Micheal Sacca",
        quote: "Postponed",
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
        name: "AJ Josielewski",
        quote: "",
        job: "Statistics Captain",
        avatar: require("./images/logo.png")
       },

]

export const leads = [
    {
        id: 1,
        name: "Nicholas Marques",
        quote: "Its a great learning enviroment to work in, you learn new stuff everyday and everyone is so supportive to each other.",
        job: "Build Lead",
        avatar: require("./images/logo.png")
    },
    {
        id: 2,
        name: "Julia Valentino",
        quote: "Learning and growing with people that have essentially become my second family and exploring the world of mechanical engineering with 1807 has been amazing",
        job: "Build Lead",
        avatar: require("./images/logo.png")
    },
    {
        id: 3,
        name: "Olivia Pusczko",
        quote: "I rarely build, I'm always taking care of children.",
        job: "Build Lead",
        avatar: require("./images/logo.png")
    },
    {
        id: 4,
        name: "Abhinav Murthy",
        quote: ".",
        job: "Build Lead",
        avatar: require("./images/logo.png")
    },
    {
        id: 5,
        name: "Andrew Sain",
        quote: "It's a lot of work but its a lot of fun.",
        job: "Design Lead A",
        avatar: require("./images/logo.png")
    },
    {
        id: 6,
        name: "Gavin Elwell",
        quote: "Postponed.",
        job: "Design Lead A",
        avatar: require("./images/logo.png")
    },
    {
        id: 7,
        name: "Radhika Manvar",
        quote: "Idk",
        job: "Design Lead A",
        avatar: require("./images/logo.png")
    },
    {
        id: 8,
        name: "Tia Bajaj",
        quote: "Idk",
        job: "Design Lead B",
        avatar: require("./images/logo.png")
    },
    {
        id: 9,
        name: "Ryan Horn",
        quote: "Idk",
        job: "Design Lead B",
        avatar: require("./images/logo.png")
    },
    {
        id: 10,
        name: "Jacob Roohr",
        quote: "Everything works in the CAD.",
        job: "Design Lead B",
        avatar: require("./images/logo.png")
    },
    {
        id: 11,
        name: "Drew Springer Heller",
        quote: "Postponed",
        job: "Programming Lead",
        avatar: require("./images/logo.png")
    }
]

export const plans = [
    {
        id: 1,
        name: 'Aluminum Sponsor',
        desc: 'This package is perfect for beginners who need constant help',
        price: 100-499,
        features: [
            {feature: 'Invitation to our Sponsor Night', available: true},
            {feature: 'Thank-you letter and team picture', available: true}
        ]
    },
    {
        id: 2,
        name: 'Bronze Sponsor',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 500-999,
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
        price: 1000-1999,
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
        price: 2000-4999,
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
        price: 5000-9999,
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

const MemberImage = require('./images/logo.png')

export const bios = [
    {
        id: 1,
        image: MemberImage,
        name: 'Ash Wadud',
        year: '2026',
        job: 'Programming/Web Design',
        socials: ['https://www.instagram.com/ash.wadud/']
    },
    {
        id: 2,
        image: MemberImage,
        name: 'Aaryan Desai',
        year: 2026,
        job: 'Programming/Web Design',
        socials: ['https://www.instagram.com/aaryan_.desai/']
    },
    {
        id: 3,
        image: MemberImage,
        name: 'Brian Deniz',
        year: 2026,
        job: 'Machining',
        socials: ['https://www.instagram.com/briandenizz/']
    },
    {
        id: 4,
        image: MemberImage,
        name: 'Landon Schaffer',
        year: 2026,
        job: 'Build/Design',
        socials: ['https://instagram.com/']
    },
    {
        id: 5,
        image: MemberImage,
        name: 'Rashad Bonsu',
        year: 2025,
        job: 'Build/Design',
        socials: ['https://instagram.com/']
    },
    {
        id: 6,
        image: MemberImage,
        name: 'Jeremy George',
        year: 2025,
        job: 'Build/Design',
        socials: ['https://instagram.com/jeremyg2007/']
    },
    {
        id: 7,
        image: MemberImage,
        name: 'Jacob Roohr',
        year: 2025,
        job: 'Build/Design',
        socials: ['https://instagram.com/']
    },
    {
        id: 8,
        image: MemberImage,
        name: 'Justin Scheuerman',
        year: 2025,
        job: 'Build/Design',
        socials: ['https://instagram.com/justin.m.scheuerman/']
    },
    {
        id: 9,
        image: MemberImage,
        name: 'Jack Haddock',
        year: 2025,
        job: 'Build/Design',
        socials: ['https://instagram.com/jackh0116/']
    },
    {
        id: 10,
        image: MemberImage,
        name: 'Remy Fortsch',
        year: 2025,
        job: 'Programming',
        socials: ['https://www.youtube.com/c/SirLampsALot']
    },
    {
        id: 11,
        image: MemberImage,
        name: 'Evangeline Huey',
        year: 2025,
        job: 'Programming',
        socials: ['https://instagram.com/']
    },
    {
        id: 12,
        image: MemberImage,
        name: 'Tucker Thomas',
        year: 2025,
        job: 'Electrical',
        socials: ['https://instagram.com/']
    },
    {
        id: 13,
        image: MemberImage,
        name: 'Luke Greenbaum',
        year: 2025,
        job: 'Machining',
        socials: ['https://instagram.com//luke_greenbaum/']
    },
    {
        id: 14,
        image: MemberImage,
        name: 'Vishek Desai',
        year: 2025,
        job: 'Machining',
        socials: ['https://instagram.com/vishekdesai/']
    },
    {
        id: 15,
        image: MemberImage,
        name: 'Thomas Maltese',
        year: 2025,
        job: 'Machining',
        socials: ['https://instagram.com/']
    },
    {
        id: 16,
        image: MemberImage,
        name: 'Gabby Menar-Nohilly',
        year: 2025,
        job: 'Business',
        socials: ['https://instagram.com/']
    },
    {
        id: 17,
        image: MemberImage,
        name: 'Aydan Landau',
        year: 2025,
        job: 'Statistics',
        socials: ['https://instagram.com/']
    },
    {
        id: 18,
        image: MemberImage,
        name: 'Abhinav Murthy',
        year: 2024,
        job: 'Build/Design',
        socials: ['https://instagram.com/abhinav__murthy/']
    },
    {
        id: 19,
        image: MemberImage,
        name: 'Radhika Manvar',
        year: 2024,
        job: 'Build/Design',
        socials: ['https://instagram.com/radhikamanvar/']
    },
    {
        id: 20,
        image: MemberImage,
        name: 'Tia Bajaj',
        year: 2024,
        job: 'Build/Design',
        socials: ['https://instagram.com/tiaabajaj/']
    },
    {
        id: 21,
        image: MemberImage,
        name: 'Ryan Horn',
        year: 2024,
        job: 'Build/Design',
        socials: ['https://instagram.com/']
    },
    {
        id: 22,
        image: MemberImage,
        name: 'Tyler Diaz',
        year: 2024,
        job: 'Build/Design',
        socials: ['https://instagram.com/tyler_diaz27/']
    },
    {
        id: 23,
        image: MemberImage,
        name: 'Louis Lichter',
        year: 2024,
        job: 'Build/Design',
        socials: ['https://instagram.com/louislichter_/']
    },
    {
        id: 24,
        image: MemberImage,
        name: 'Arya Chaudry',
        year: 2024,
        job: 'Programming',
        socials: ['https://instagram.com/aryachaudry/']
    },
    {
        id: 25,
        image: MemberImage,
        name: 'Chris Egan',
        year: 2024,
        job: 'Programming',
        socials: ['https://instagram.com/chris_egan_1/']
    },
    {
        id: 26,
        image: MemberImage,
        name: 'Gavin Normand',
        year: 2024,
        job: 'Programming',
        socials: ['https://instagram.com/gavin_normand/']
    },
    {
        id: 27,
        image: MemberImage,
        name: 'Michael Sacca',
        year: 2024,
        job: 'Electrical',
        socials: ['https://instagram.com/mike._.sacca/']
    },
    {
        id: 28,
        image: MemberImage,
        name: 'Reilly Lichtman',
        year: 2024,
        job: 'Electrical',
        socials: ['https://instagram.com/reilly_lichtman/']
    },
    {
        id: 29,
        image: MemberImage,
        name: 'Liam Granaghan',
        year: 2024,
        job: 'Liam Granaghan',
        socials: ['https://instagram.com/granaghanliam/']
    },
    {
        id: 30,
        image: MemberImage,
        name: 'AJ Josielewski',
        year: 2024,
        job: 'Statistics',
        socials: ['https://instagram.com/']
    },
    {
        id: 31,
        image: MemberImage,
        name: 'Nicholas Marques',
        year: 2023,
        job: 'Build/Design',
        socials: ['https://instagram.com/']
    },
    {
        id: 30,
        image: MemberImage,
        name: 'Evan Kaba',
        year: 2023,
        job: 'Build/Design',
        socials: ['https://instagram.com/evan_kaba/']
    },
    {
        id: 32,
        image: MemberImage,
        name: 'Andrew Sain',
        year: 2023,
        job: 'Statistics',
        socials: ['https://instagram.com/']
    },
    {
        id: 33,
        image: MemberImage,
        name: 'Sydney Miller',
        year: 2023,
        job: 'Build/Design',
        socials: ['https://instagram.com/']
    },
    {
        id: 34,
        image: MemberImage,
        name: 'Julia Valentino',
        year: 2023,
        job: 'Build/Design',
        socials: ['https://instagram.com/julia.valentino_/']
    },
    {
        id: 35,
        image: MemberImage,
        name: 'Olivia Pusczko',
        year: 2023,
        job: 'Build/Design',
        socials: ['https://instagram.com/']
    },
    {
        id: 36,
        image: MemberImage,
        name: 'Gavin Elwell',
        year: 2023,
        job: 'Build/Design',
        socials: ['https://instagram.com/elwell.gavin/']
    },
    {
        id: 37,
        image: MemberImage,
        name: 'Drew Springer Heller',
        year: 2023,
        job: 'Programming',
        socials: ['https://instagram.com/']
    },
    {
        id: 38,
        image: MemberImage,
        name: 'Joseph Forte',
        year: 2023,
        job: 'Programming',
        socials: ['https://instagram.com/']
    },
    {
        id: 39,
        image: MemberImage,
        name: 'Vanisha Nagali',
        year: 2023,
        job: 'Machining',
        socials: ['https://instagram.com/vanishanagali/']
    },
    {
        id: 40,
        image: MemberImage,
        name: 'Jack Conroy',
        year: 2023,
        job: 'Machining',
        socials: ['https://instagram.com/jconroy32/']
    },
    {
        id: 41,
        image: MemberImage,
        name: 'Arjun Singh',
        year: 2023,
        job: 'Machining',
        socials: ['https://instagram.com/singh_arjun1226/']
    },
    {
        id: 42,
        image: MemberImage,
        name: 'Cal Christie',
        year: 2023,
        job: 'Machining',
        socials: ['https://instagram.com/']
    },
    {
        id: 43,
        image: MemberImage,
        name: 'Gabriella Biello',
        year: 2023,
        job: 'Business',
        socials: ['https://instagram.com/gabriella_biello_/']
    },
    {
        id: 44,
        image: MemberImage,
        name: 'Amelia Tricker',
        year: 2023,
        job: 'Business',
        socials: ['https://instagram.com/ameliarosetricker/']
    },
    {
        id: 45,
        image: MemberImage,
        name: 'Marissa May',
        year: 2023,
        job: 'Business',
        socials: ['https://instagram.com/']
    },
    {
        id: 46,
        image: MemberImage,
        name: 'Anthony Lotruglio',
        year: 2023,
        job: 'Business',
        socials: ['https://instagram.com/anthony.lotruglio/']
    },
    {
        id: 47,
        image: MemberImage,
        name: 'Julia Husak',
        year: 2023,
        job: 'Business',
        socials: ['https://instagram.com/husak.julia0163/']
    }
]