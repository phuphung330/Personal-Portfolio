import {
    grunt,
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    gbox,
    threejs,
    wooder,
    portfolio,
    job,
    education,
    furnitown,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: mobile,
    },
    {
        title: "React Developer",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },

    {
        name: "React JS",
        icon: reactjs,
    },

    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },

    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    { name: "grunt", icon: grunt },
];

const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Freelancer Team",
        icon: job,
        iconBg: "#383E56",
        date: "August 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with other developers in team to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Frontend Developer Course",
        company_name: "CFD Circle",
        icon: education,
        iconBg: "#E6DEDD",
        date: "Dec 2021 - June 2022",
        points: [
            "Gaining a solid understanding of HTML, SCSS,and JavaScript and Reactjs",
            "learning how to create a landing page based on a design template and how to optimize it for different devices",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Personal Portfolio",
        description:
            "A 3D portfolio website that shows my professional skills and my experience . It includes my personal contact,and make it easy for potential clients to get in touch with me.Additionally, the website features sections works which dedicated my past works and projects, allowing visitors to see examples of my works and gain a better understanding of my capabilities",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "threeJS",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://phuphung-portfolio.vercel.app/",
    },
    {
        name: "Furnitown Landing Page",
        description:
            " Furnitown is a full landing website that contains various single pages. that website helps customer have a good insight about products and service that company provided",

        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "js",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: furnitown,
        source_code_link: "https://phuphung330.github.io/Furnitown/",
    },
    {
        name: "Gbox Studios",
        description:
            "GBOX Studios’ website is a full landing website that contains various single pages. The website allows customers to view the studio’s products and services, and also provides a contact form for customers to get in touch with the studio",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "js",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: gbox,
        source_code_link: "https://phuphung330.github.io/Gbox/",
    },
    {
        name: "Wooder Landing Page",
        description:
            "A website that showcases the services of Wooder Company is Wooder Landing. This company specializes in designing and building household goods made of wood. On the website, you can find information about their products and services.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "js",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: wooder,
        source_code_link: "https://phuphung330.github.io/Wooder/",
    },
];

export { services, technologies, experiences, testimonials, projects };
